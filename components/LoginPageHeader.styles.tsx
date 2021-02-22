import styled from 'styled-components';

export const Container = styled.div`
  min-height: 135px;
`;

export const Title = styled.h1`
  font-size: 40px;
  color: #383e71;
  font-weight: 400;
  margin-top: 13px;
  margin-right: 59px;

  @media (max-width: 767px) {
    text-align: center;
    font-size: 28px;
    margin-right: 0;
  }
`;

export const SubTitle = styled.p`
  font-size: 16px;
  margin: 15px 68px 30px 0;
  color: #989fdb;
  font-weight: 600;

  @media (max-width: 767px) {
    font-size: 12px;
    text-align: center;
    margin: 10px 0 10px 0;
  }
`;
