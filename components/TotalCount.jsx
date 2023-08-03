import React from 'react';

const TotalCount = () => {
    return (
        <div className='bg-yellow-300'>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 '>
                <div className='bg-red-200 w-40 h-24'><h1>1</h1></div>
                <div className='bg-slate-300 w-40 h-24'><h1>2</h1></div>
                <div className='bg-lime-500 w-40 h-24'><h1>3</h1></div>
                <div className='bg-lime-500 w-40 h-24'><h1>3</h1></div>
            </div>
           
        </div>
    );
};

export default TotalCount;