import styled, { css } from "vue-styled-components";

const Heading = styled.h1`
  font-weight: 500;
  font-size: 2.3rem;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 1.9rem;
  }
`;

const SubHead = styled.h3`
  font-size: 1.3rem;
  color: #64646b;
  font-weight: 500;

  @media (max-width: 950px) {
    font-size: 1.16rem;
  }
`;

const Wrapper = styled("div", { dark: Boolean })`
  padding: 8vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #f8f8f8;
  ${props =>
    props.dark &&
    css`
      background-color: #0e0e0e;
    `}
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 70%;
  margin: 4vh auto;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1050px) {
    width: 87%;
  }
`;

export { Heading, Wrapper, Body, SubHead };
