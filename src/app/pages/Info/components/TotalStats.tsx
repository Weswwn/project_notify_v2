import React, { useState, useEffect } from 'react';

// services
import { courseService } from '../../../virtual-services/Courses/courses.service';

export function TotalStats() {
    const [activeAmount, setActiveAmount] = useState('N/A')
    const [totalNotificationsSent, setTotalNotificationsSent] = useState('N/A');

    useEffect(() => {
        courseService.getTrackingStats()
            .then(res => {
                setActiveAmount(res?.activeCount);
                setTotalNotificationsSent(res?.totalCount);
            })


    }, [])

    return (
        <div className='tw-flex tw-flex-col tw-items-center tw-min-h-[300px] tw-w-full sm:tw-w-[400px]'>
            <div className='tw-flex tw-w-full tw-h-full tw-flex-col tw-rounded tw-bg-gray-700 tw-bg-opacity-40'>
                <h1 className='tw-text-white tw-text-2xl tw-h-16 tw-pl-4 tw-pt-4 tw-bg-red-300 tw-rounded-tl tw-rounded-tr'>STATS TO DATE</h1>
                <div className='tw-p-8'>
                    <div className='tw-text-left tw-mb-8'>
                        <label className='tw-text-left tw-text-2xl tw-text-white tw-font-thin'>Actively Tracking: </label>
                        <label className='tw-text-green-500 tw-text-2xl tw-font-semibold'>{activeAmount}</label>
                    </div>
                    <div>
                        <label className='tw-text-left tw-text-2xl tw-text-white tw-font-thin'>Total Notifications Sent: </label>
                        <label className='tw-text-green-500 tw-text-2xl tw-font-semibold'>{`${totalNotificationsSent}`}</label>
                    </div>
                </div>
            </div>
        </div>
    )

}