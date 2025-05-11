import DisplayCandles from '@/components/candles/DisplayCandles';
import FilterCandles from '@/components/candles/FilterCandles';
import React from 'react';

function Candles() {
    return (
        <div className='min-h-screen py-10 w-full sm:w-11/12 mx-auto' >
            <FilterCandles/>
            <DisplayCandles/>
        </div>
    );
}

export default Candles;