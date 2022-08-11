import styled from 'styled-components';

const Test = () => {
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Title>TEST PAGE</Styled.Title>
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
  // style 관리
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
    background-color: ${({ theme }) => theme.black};
  `,

  Title: styled.h1<TitleType>`
    color: #fff;
    font-size: ${({ theme }) => `${theme.md}px`};
    font-weight: 700;
  `,
};

export default Test;
