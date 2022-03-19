import styled from 'styled-components';

export const MainContainer = styled.main``;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  min-height: 250px;
  background: url('/images/pattern-bg.png') no-repeat center center;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;

    margin-top: 2rem;
  }

  form,
  input,
  button {
    width: 100%;
    margin-top: 1rem;
  }

  form {
    display: flex;
    max-width: 555px;

    input {
      max-width: calc(555px - 58px);
      border: none;

      border-top-left-radius: 12px;
      border-bottom-left-radius: 12px;
      padding: 0 1rem;
    }

    button {
      border: none;
      width: 58px;
      height: 58px;
      background: #000;

      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      cursor: pointer;
    }
  }
`;
