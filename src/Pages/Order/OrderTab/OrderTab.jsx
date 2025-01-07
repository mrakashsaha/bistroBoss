import React from 'react';
import FoodCard from '../../../components/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {items.map(item => <FoodCard key={item.id} item={item}></FoodCard>)}
            </div>
        </div>
    );
};

export default OrderTab;