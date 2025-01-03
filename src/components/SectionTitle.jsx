import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center my-8 md:w-4/12 mx-auto'>
            <p className=' text-[#D99904] text-lg p-4 '>--- {subHeading} ---</p>
            <h3 className='text-4xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;