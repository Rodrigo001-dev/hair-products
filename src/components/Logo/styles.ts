import styled from 'styled-components';

export const ContainerLogo = styled.div`
  width: 100%;
  height: 30rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--color-primary);
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
`;

export const LogoContainer = styled.div`
  width: 50%;
  height: 100%;

  margin-top: 200px;
  margin-left: 50px;

  > h2 {
    color: var(--color-white);
    font-size: 52px;
    font-weight: 400;
  }

  > span {
    color: var(--color-white);
    font-size: 26px;
    font-weight: 500;
  }
`;

export const ContainerButton = styled.div`
  margin: 0.1rem 16rem;

  display: flex;
  justify-content: flex-end;

  > button {
    margin: 10px;
    padding: 8px 56px;

    border: 1px solid var(--color-background);

    background: var(--color-white);
  }
`;