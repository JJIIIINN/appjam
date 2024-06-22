import axios, { AxiosError, type AxiosResponse } from 'axios';
import type { SignInData } from './types.ts';
import { useMutation } from '@tanstack/react-query';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

const router = '/auth';

export const useLogin = (signInData: SignInData) => {
    const [, setCookies] = useCookies();
    const globalThis = window as any;

    return useMutation({
        mutationFn: () => axios.post(`${import.meta.env.VITE_BASE_URL}${router}/signin`, signInData),
        onSuccess: (res: AxiosResponse) => {
            const accessExpired = new Date(res.data.access_expires_at);
            const refreshExpired = new Date(res.data.refresh_expires_at);
            setCookies('refresh_token', res.data.refresh_token, {
                expires: refreshExpired,
            });
            setCookies('access_token', res.data.access_token, {
                expires: accessExpired,
            });
            globalThis.android?.getToken(JSON.stringify(res));
            toast.success('로그인에 성공하였습니다.');
        },
        onError: (err: AxiosError<AxiosError>) => {
            console.log(err);
            if (err.response) {
                switch (err.response.status) {
                    case 400:
                        toast.error('아이디와 비밀번호를 다시 확인해주세요.');
                        break;

                    case 401:
                        toast.error('비밀번호를 다시 확인해주세요.');
                        break;

                    case 404:
                        toast.error('아이디와 비밀번호를 다시 확인해주세요.');
                        break;

                    case 500:
                        toast.error('개발자에게 문의해주세요.');
                        break;
                }
            } else {
                toast.error('네트워크 연결을 확인해주세요.');
            }
        },
    });
};