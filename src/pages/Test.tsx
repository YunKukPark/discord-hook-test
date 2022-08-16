import styled from 'styled-components';

const Test = () => {
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Title>TEST PAGE</Styled.Title>
        <Styled.Title>base font 잘 들어왔는지 확인</Styled.Title>
      </Styled.Card>
    </Styled.Container>
  );
};

type CardType = {
  background?: string;
};

type TitleType = {
  fontsize?: number;
};

const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `,

  Card: styled.div<CardType>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.black};
  `,

  Title: styled.h1<TitleType>`
    color: #fff;
    font-family: ${({ theme }) => theme.fontFamily.main};
    font-size: ${({ theme }) => theme.fontsize.lg};
    font-weight: 700;
  `,
};

export default Test;
