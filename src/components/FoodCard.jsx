import React from 'react';

const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                    <p className='bg-slate-900 absolute right-0 text-white px-2 mr-4 mt-4'>${price}</p>
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className='btn btn-outline border-0 border-b-2 bg-slate-100 border-orange-400'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;