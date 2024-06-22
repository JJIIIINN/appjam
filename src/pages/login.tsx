import { useForm } from '@/hooks';
import toast from 'react-hot-toast';
import { styled } from 'styled-components';

export const LoginPage = () => {
    const { form, handleChange } = useForm({
        name: '',
        password: '',
    });

    const globalThis = window as any;

    return (
        <Container>
            <Wrapper>
                <TitleText>로그인</TitleText>
                <TextInput
                    type="text"
                    placeholder="아이디 또는 이메일"
                    value={form.name}
                    name="name"
                    onChange={handleChange}
                />
                <TextInput
                    type="password"
                    placeholder="패스워드 입력"
                    value={form.password}
                    name="password"
                    onChange={handleChange}
                />
                <Label>
                    <CheckBox type="checkbox" name="" id="" />
                    <CheckBoxLabel>로그인 상태 유지</CheckBoxLabel>
                </Label>
                <SubmitBtn
                    disabled={!form.name || !form.password}
                    onClick={() => {
                        toast.success('로그인에 성공하였습니다.');
                        globalThis.android.getToken();
                    }}
                >
                    로그인
                </SubmitBtn>
                <EtcWrapper>
                    <EtcText>회원가입</EtcText>
                    <Divider />
                    <EtcText>아이디 찾기</EtcText>
                    <Divider />
                    <EtcText>비밀번호 찾기</EtcText>
                </EtcWrapper>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 471px;
    width: 310px;
`;

const TitleText = styled.h1`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 80px;
`;

const TextInput = styled.input`
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: 1px solid #00000034;
    margin-bottom: 17px;
    padding: 0 21px;
    font-size: 14px;
    &:focus {
        border: 1px solid #00000080;
    }
`;

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 130px;
`;

const CheckBox = styled.input`
    width: 16px;
    height: 16px;
    border-radius: 2px;
    border: 1px solid #00000034;
    appearance: none;
    cursor: pointer;

    &:checked {
        border-color: transparent;
        background: url('/checkImg.svg') no-repeat;

        background-color: #ee3c3c;
        background-position: 50%;
        background-repeat: no-repeat;
    }
`;

const CheckBoxLabel = styled.span`
    font-size: 14px;
    color: #00000064;
`;

const SubmitBtn = styled.button`
    width: 100%;
    height: 60px;
    background-color: #ee3c3c;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 500;
    color: white;
    margin: 84px 0 30px 0;
    &:disabled {
        opacity: 0.5;
    }
`;

const EtcWrapper = styled.div`
    display: flex;
    gap: 14px;
    align-items: center;
    justify-content: center;
`;

const EtcText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: #00000064;
`;

const Divider = styled.div`
    height: 24px;
    width: 1px;
    background-color: #00000032;
`;
