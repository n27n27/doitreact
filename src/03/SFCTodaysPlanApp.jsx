import React, { Component } from 'react';
import TodaysPlan from './TodaysPlan';

function SFCTodaysPlanApp(props) {
    const { onButtonClick, hasPlan } = props;

    return (
        <div className='body'>
            {hasPlan ? <TodaysPlan /> : null}
            <button onClick={onButtonClick}>
                ęłíěě
            </button>
        </div>
    );
}

export default SFCTodaysPlanApp;