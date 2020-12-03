import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import Post from '../../Molecules/Post';

import { Container } from './Posts.style';
import StateContext from '../../../StateContext';
import FormPost from '../../Molecules/FormPost/FormPost';

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
  const appState = useContext(StateContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get('/post', { headers: { authorization: appState.user.jwtkey } })
      .then((e) => {
        setPosts(e.data.content);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    <Container>
      {posts.map((post) => {
        const latOBJ = parseFloat(post.trip.latDestiny);
        const lngOBJ = parseFloat(post.trip.lngDestiny);

        const centerOBJ = {
          lat: latOBJ,
          lng: lngOBJ,
        };
        return <Post userData={post} center={centerOBJ}></Post>;
      })}
    </Container>
  );
};

export default Posts;
