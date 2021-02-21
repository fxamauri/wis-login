import React from 'react';
import { NextPage } from 'next';

import { END } from 'redux-saga';
import { wrapper } from '../store';
import LoginPage from '../components/LoginPage';
const Index: NextPage = () => {
  return <LoginPage />;
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(END);
  await store.sagaTask?.toPromise();
});

export default Index;
