import Axios from 'axios';
import React from 'react';
import Post from '../../Molecules/Post';

import { Container } from './Posts.style';

const centerA = {
  lat: -3.745,
  lng: -38.523,
};

const centerB = {
  lat: -3.745,
  lng: -38.6,
};

const centerC = {
  lat: -3.745,
  lng: -38.458,
};

const Posts = () => {
  Axios.get('/post/find')
    .then((e) => {
      console.log('POSTS', e);
    })
    .catch((e) => {
      console.error(e);
    });

  return (
    <Container>
      <Post center={centerA}></Post>
      <Post center={centerB}></Post>
      <Post center={centerC}></Post>
    </Container>
  );
};

export default Posts;
