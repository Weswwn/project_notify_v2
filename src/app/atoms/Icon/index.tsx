import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import React from 'react';

interface Props extends FontAwesomeIconProps {

}

export function Icon({ ...props }: Props) {
    return <FontAwesomeIcon {...props} />
}