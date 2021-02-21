import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { wrapper } from '../store';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
  
  h1, p {
    margin: 0;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-family: 'Montserrat', sans-serif !important;
    font-size: 14px !important;
  }
  *:focus {
    outline: 0 !important;
  }
  html, body, #__next {
    height: 100%;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ToastContainer autoClose={5000} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
