import React, { useEffect, useState } from 'react';

// components
import { Updates } from './components/Updates';
import { TotalStats } from './components/TotalStats';
// import { TwitterWidget } from '@atoms/Twitter';

export function Info() {

    return (
        <div id="info" className='tw-flex tw-min-h-full tw-bg-red-400 tw-bg-opacity-90 tw-pt-16 tw-p-4'>
            <div className='tw-flex tw-flex-col tw-flex-1 tw-items-center'>
                <div className='tw-flex tw-justify-center tw-w-full tw-text-4xl tw-text-white tw-mb-8'>ADDITIONAL INFO</div>
                <div className='tw-flex tw-flex-wrap tw-w-full tw-gap-4 tw-justify-center'>
                    <Updates />
                    <TotalStats />
                </div>
            </div>
        </div>
    )
}