import React from 'react';

interface Props {
    className?: string;
};

export function Updates({ className = '' }: Props) {
    return (
        <div className={`tw-flex tw-bg-gray-700 tw-bg-opacity-40 tw-rounded tw-flex-col tw-h-[600px] sm:tw-w-[400px] ${className}`}>
            <h1 className='tw-text-white tw-text-2xl tw-h-16 tw-pl-4 tw-pt-4 tw-bg-red-300 tw-rounded-tl tw-rounded-tr'>UPDATES</h1>
            <div className='tw-flex tw-flex-col tw-overflow-scroll'>
                <div className='tw-p-8 tw-border-b tw-border-solid tw-border-gray-50 tw-min-h-[150px]'>
                    <a target="_blank" href="https://www.instagram.com/weswwn" className='tw-text-white hover:tw-text-yellow-400'>@weswwn</a>
                    <label className="tw-flex tw-mt-2">The service is still active and tracking courses. If you have any questions, reach out to me at ubcprojectnotify@gmail.com</label>
                    <div className='tw-flex tw-justify-end tw-text-white tw-text-xs'>April 16, 2021</div>
                </div>
                <div className='tw-p-8 tw-border-b tw-border-solid tw-border-gray-50 tw-min-h-[150px]'>
                    <a target="_blank" href="https://www.instagram.com/weswwn" className='tw-text-white hover:tw-text-yellow-400'>@weswwn</a>
                    <label className="tw-flex tw-mt-2">At this time, we do only accept American and Canadian phone numbers with an area code of +1</label>
                    <div className='tw-flex tw-justify-end tw-text-white tw-text-xs'>April 1, 2021</div>
                </div>
            </div>
        </div>
    )
}