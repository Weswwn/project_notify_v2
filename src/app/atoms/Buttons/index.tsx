import React from 'react';

import './Button.scss';

type buttonType = 'primary' | 'submit';

const colorMap: { [T in buttonType]: string } = {
    primary: "tw-text-white tw-font-bold tw-border-white hover:tw-bg-white hover:tw-text-black",
    submit: "tw-text-red-400 tw-font-bold tw-border-red-400 hover:tw-bg-red-400 hover:tw-text-white"
}

interface Props {
    label: string;
    type: buttonType;
    className?: string;
    onClick: () => void;
}

export const Button = ({ label, onClick, className, type }: Props) => {
    return (
        <div className={`${className}`}>
            <button className={`tw-cursor-pointer tw-p-4 tw-rounded tw-border-soild tw-border-2 tw-min-h-[75px] tw-min-w-[150px] ${colorMap[type]}`} onClick={onClick}>{label}</button>
        </div>
    )
}