import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 7rem;
  margin-left: 10rem;
  margin-right: 12rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: flex-start;

  @media(max-width: 1000px) {
    margin-left: 3rem;
  }

  h2 {
    margin-bottom: 1rem;

    font-size: 24px;
    font-weight: 500;

    color: var(--color-secondary);
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  
  .content {
    height: 266px;
    width: 493px;

    padding: 10px;

    border: 1px solid var(--color-gray);

    margin-top: 2rem;

    background: var(--color-white);

    @media(max-width: 1280px) {
      width: 400px;
      height: 326px;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: #292929;
    }
  }

  .image {
    height: 516px;
    width: 550px;

    margin-top: 2rem;
    margin-left: 1.4rem;

    @media(max-width: 1280px) {
      height: 430px;
      width: 400px;
    }

    @media(max-width: 900px) {
      height: 320px;
      width: 290px;
    }

    > div {
      width: 550px;
      height: 56px;

      padding: 10px;

      background: var(--color-secondary);

      @media(max-width: 1280px) {
        width: 400px;
        height: 56px;
      }

      @media(max-width: 900px) {
        width: 290px;
        height: 72px;
      }

      > span {
        font-size: 20px;
        font-weight: 400;

        color: var(--color-white);

        > strong {
          cursor: pointer;
        }
      }
    }

    > img {
      width: 550px;
      height: 482px;

      @media(max-width: 1280px) {
        height: 430px;
        width: 400px;
      }

      @media(max-width: 900px) {
        height: 320px;
        width: 290px;
      }
    }
  }
`;

export const ContainerText = styled.div`
  
  margin-top: -260px;
  
  > div {
    height: 266px;
    width: 493px;

    padding: 10px;

    border: 1px solid var(--color-gray);

    margin-top: 2rem;

    background: var(--color-white);

    @media(max-width: 1280px) {
      height: 300px;
      width: 400px;

      margin-top: 180px;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: #292929;
    }
  }
`;

export const ContainerFooter = styled.div`
  margin-top: 30px;

  > div {
    height: 250px;
    width: 1068px;

    padding: 10px;

    border: 1px solid var(--color-gray);

    margin-top: 2rem;

    background: var(--color-white);

    @media(max-width: 1280px) {
      height: 260px;
      width: 900px;
    }

    @media(max-width: 900px) {
      height: 290px;
      width: 800px;
    }

    > p {
      font-size: 16px;
      font-weight: 400;
      color: #292929;
    }
  }

  .link {
    height: 56px;

    margin-bottom: 20px;

    color: var(--color-white);
    text-align: center;

    background: var(--color-secondary);

    > a {
      color: var(--color-white);
      font-weight: 600;
    }
  }

`;
