import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;

    return (
        <div className='flex space-x-2'>
            <img className='rounded-full rounded-tl-none w-[120px] h-[120px]' src={image} alt="" />
            <div>
                <h3 className='uppercase' >{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-[#BB8506]'>${price}</p>
        </div>
    );
};

export default MenuItem;