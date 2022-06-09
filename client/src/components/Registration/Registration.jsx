import React from 'react';
import LoadingSpinner from '../Generics/LoadingSpinner';
import ClaimCard from './components/ClaimCard/ClaimCard';

const Registration = ({orgInfo, isLoading}) => {
    const {
        name = '',
        address = '',
        taxId = -1,
        type = '',
    } = orgInfo || {};
    console.warn(orgInfo);
    return (
        <div>
            {isLoading ?
                <LoadingSpinner /> :
                <ClaimCard name={name} address={address} taxId={taxId} type={type} />
            }
        </div>
    )
};

export default Registration;