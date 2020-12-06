import React from 'react';
import FilterCard from '../../Molecules/FilterCard';

import { Container } from './styles';

import tumbleweed from '../../../assets/tumbleweed.svg';
import { NothingHere } from './styles';

const FilterList = ({ placesSaved }) => {
  return (
    <Container>
      {placesSaved ? (
        <FilterCard></FilterCard>
      ) : (
        <NothingHere>
          <h1>Nada aqui.</h1>
          <h3>Você ainda não salvou nenhuma parada.</h3>
          <img src={tumbleweed} alt="" />
        </NothingHere>
      )}
    </Container>
  );
};

export default FilterList;
