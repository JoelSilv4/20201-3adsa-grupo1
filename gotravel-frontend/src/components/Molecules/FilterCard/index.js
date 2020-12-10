import React, { useEffect } from 'react';
import { Card, NoImage } from './style';

function FilterCard(props) {
  const data = props.data;

  console.log('DADOS RECEBIDOS PELO FilterCard', data);

  return (
    <Card>
      {data.imageURL ? <img src={data.imageURL} className="preview" alt="" /> : <NoImage />}
      <div className="content">
        <h1 className="name">{data.name}</h1>
        <p className="endereco">{data.vicinity}</p>

        <div className="buttons">
          <button className="remover">Remover Local</button>
        </div>
      </div>
    </Card>
  );
}

export default FilterCard;
