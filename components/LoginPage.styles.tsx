import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;

  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    background: #130525;
  }
`;

export const BackgroundWoman = styled.div`
  position: relative;
  display: flex;
  linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73));
  width: 54%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(180deg, rgba(105, 57, 153, 0) 0%, #130525 100%), 
   url("/images/imagewoman.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    top: calc(100% - 3px);
    width: 100%;
    height: 5px;
    background: #130525;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 70%;
    bottom: 30%;
    z-index: 1;
  }
  @media (min-device-width:768px) and (max-device-width:1024px){
    width: 45%;
  }
`;

export const ToLeftMediumScreenSizes = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 54%;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background: #faf5ff;
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    border-radius: 10px;
    z-index: 2;
    width: 340px;
    height: 328px;
    margin: 0 15px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  width: 75%;
  max-width: 400px;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 300px;

  @media (max-width: 767px) {
    max-height: 346px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonLoginSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    align-items: center;
    position: relative;
    bottom: 8px;
  }
`;
