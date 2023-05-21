
import React from 'react';
import './index.css';
import { Card } from 'antd';
import { ICardData } from '../index.interfaces';
import { useNavigate } from 'react-router';

const { Meta } = Card;

const CardComponent = ({title, location,thumbnail,photographerName, index}: ICardData) : JSX.Element => {
  const navigate = useNavigate();

  return (<div className='card'>
  <Card
    onClick={() => navigate('/show', {state: {index: index}})}
    className='card-item'
    style={{ width: 300, height: 400, cursor: 'pointer' }}
    cover={
      <img
      style={{minHeight: '20px', maxHeight: '300px', width: '100%'}}
        alt="thumbnail"
        src={thumbnail}
      />
    }
  >
    <Meta
      title={title}
      description={`${location} ${photographerName}`}
    />
  </Card>
  </div>)
};

export default CardComponent;