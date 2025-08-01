import React, { useEffect, useState } from 'react';
import CardComponent from './CardContent';


const Content: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

   useEffect(()=>{
        getData();
    },[])
   async function getData(){
     const result = await fetch('https://fakestoreapi.com/products');
     const response = await result.json();
     setProducts(response);
   }


  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to the Themed App</h2>
      <p className="mb-4 max-w-xl">
        This is a sample paragraph that changes layout and style depending on the selected theme. Explore the look and feel of each theme using the dropdown.
      </p>
      <button className="mb-6 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
        Click Me
      </button>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {products.map((item,index) => (
            <div
              key={index}
            >
              <CardComponent 
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    rating={item.rating}
          />
            </div>
          ))}
        </div>
   
    </div>
  );
};

export default Content;
