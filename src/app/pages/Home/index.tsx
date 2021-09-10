import React from 'react';

// styling
import '../../App.scss';

// components
import { Icon } from '@atoms/Icon';
import { Button } from '@atoms/Buttons';
import { useHistory } from "react-router-dom";

// image
import backgroundImage from '../../assets/ubc.jpeg';

export function Home() {

    let history = useHistory();

    const handleClick = () => {
        history.push('/form');
    }

    function handleInfoClick() {

    }

    return (
        <div className='tw-flex tw-relative sm:tw-min-w-[390px] tw-h-full tw-flex-col tw-bg-no-repeat tw-bg-cover tw-justify-center tw-items-center tw-bg-gradient-to-bl' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='tw-bg-opacity-10 tw-bg-red-400 tw-w-full tw-h-full tw-absolute tw-pointer-events-none'></div>
            <div className='tw-flex tw-flex-col tw-justify-between'>
                <div className='tw-flex tw-flex-col tw-justify-center tw-items-center'>
                    <div className='tw-p-8 tw-bg-gray-500 tw-rounded'>
                    <h1 className='tw-text-red-500 tw-text-2xl'>AT THE MOMENT, THIS SERVICE IS DISABLED FOR MAINTENANCE. PLEASE CHECK MY TWITTER FOR UPDATES.</h1>
                    </div>
                    <label className='tw-flex tw-text-center tw-mb-4 tw-text-5xl tw-font-bold tw-text-white'>UBC COURSE TRACKER. </label>
                    <label className='tw-flex tw-mb-4 tw-text-2xl tw-font-thin tw-text-white tw-flex-wrap tw-justify-center'>Track the course you need. <label className='tw-font-extrabold'>Completely Free.</label></label>
                    <Button type='primary' className='animationFadeIn fadeIn' label={'TRACK NOW'} onClick={handleClick} />
                </div>

            </div>
            <div onClick={handleInfoClick} className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-absolute tw-bottom-10 tw-cursor-pointer'>
                <a href="#info" className="tw-flex tw-justify-center tw-items-center tw-border-2 tw-border-solid tw-border-white tw-text-white hover:tw-text-black hover:tw-bg-white tw-rounded-full tw-w-8 tw-h-8">
                    <Icon size="sm" icon="caret-down" />
                </a>
            </div>
        </div>
    )
}