import React, { useContext } from 'react';
import Posts from '../../components/Organisms/Posts/index';
import Layout from '../../components/Layout';
import DispatchContext from '../../DispatchContext';
import AddPost from '../../components/Molecules/AddPost';

const Publicacoes = () => {
  const appDispatch = useContext(DispatchContext);
  appDispatch({ type: 'is-not-institutional' });

  return (
    <Layout>
      <AddPost />
      <Posts />
    </Layout>
  );
};

export default Publicacoes;
