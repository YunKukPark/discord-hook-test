import Button from 'components/Button';
import styled from 'styled-components';
import { flexBox } from 'styles/utils/flexbox';

const Test = () => {
  return (
    <Styled.Container>
      <Styled.Card>
        <Styled.Title>TEST PAGE</Styled.Title>
        <Button type="primary" size="lg" onClick={() => console.log('반갑다')}>
          children
        </Button>
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
    ${flexBox()}
    width: 100%;
    height: 100vh;
    background-color: #5d5d5d;
  `,

  Card: styled.div<CardType>`
    ${flexBox()}
    flex-direction: column;
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
    margin-bottom: 30px;
  `,
};

export default Test;
