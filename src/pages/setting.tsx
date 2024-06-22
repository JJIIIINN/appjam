import { SettingList } from '@/constants';
import { styled } from 'styled-components';
import { Marker, MyImg } from '@/assets/images';
import { Stack } from '@/components';

export const SettingPage = () => {
    return (
        <Container>
            <Wrapper>
                <Stack align="center" justify="space-between" margin="0 0 24px 0">
                    <Stack align="center" gap={16}>
                        <img src={MyImg} alt="" />
                        <Name>김김김</Name>
                    </Stack>
                    <img src={Marker} alt="" />
                </Stack>
                {SettingList.map((item, idx) => (
                    <div key={idx}>
                        <Divider $idx={idx} />
                        <SettingText>{item.name}</SettingText>
                    </div>
                ))}
                <Divider $idx={1} />
                <SettingText style={{color: "#EC2020"}}>회원탈퇴</SettingText> 
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 312px;
    margin: 37px 0;
`;

const Name = styled.span`
    font-size: 16px;
    font-weight: 500;
`;

const Divider = styled.div<{ $idx: number }>`
    width: 100%;
    height: ${({ $idx }) => ($idx % 3 === 0 ? 2 : 0.3)}px;
    background-color: ${({ $idx }) => ($idx % 3 === 0 ? '#00000064' : '#00000034')};
`;

const SettingText = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    font-size: 14px;
    font-weight: 400;
`;
