import React from 'react';
import LoadingSpinner from '../Generics/LoadingSpinner';
import RegistrationView from './components/RegistrationView/RegistrationView';
import OrgView from './components/OrgView/OrgView';

const Registration = ({orgInfo, isLoading}) => {
    const {
        name = '',
        address = '',
        taxId = -1,
        type = '',
        isRegistered = null,

    } = orgInfo || {};
    console.warn(orgInfo);
    if (isLoading || isRegistered === null) {
        return (
            <LoadingSpinner />
        )
    };
    return (
        <div>
            {isRegistered ?
                <OrgView /> :
                <RegistrationView name={name} address={address} taxId={taxId} type={type} />
            }
        </div>
    )
};

export default Registration;