import React from 'react'
import Rating from './Rating';

interface CardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  }
}
const CardComponent: React.FC<CardProps> = ({ image, title, price, description, rating }) => {
  return (
    <div style={{
      backgroundColor: '#fff',
      borderRadius: '8px',
      padding: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.2s',
      height: '500px',
      position: 'relative'
    }}>
      <div className='w-64 bg-gray-200"'><img className="w-80 h-80 " src={image} alt={title} />
      </div>
      <h4 className="line-clamp-1 text-start" style={{ fontSize: '1.1rem', fontWeight: 'bold', margin: '0 0 10px' }}>{title}</h4>
      <span className="line-clamp-2"> {description}</span>
      <div className="flex justify-between items-center w-full absolute bottom-4">          <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>${price}</p>
        <div className='d-flex'>
          <Rating /><span>{rating.rate}/{rating.count}</span></div>
      </div>
    </div>
  )
}

export default CardComponent