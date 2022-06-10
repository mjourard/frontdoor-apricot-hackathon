import React from 'react';
import LoadingSpinner from '../Generics/LoadingSpinner';
import RegistrationView from './components/RegistrationView/RegistrationView';
import OrgView from './components/OrgView/OrgView';

const Registration = ({ orgInfo, isLoading }) => {
    const {
        name,
        alias,
        address,
        taxId,
        type,
        isRegistered,
        active,
        email,
        taxSourceId,
        ncesSchoolId,
        ncesDistrictId
    } = orgInfo || {};
    console.warn(orgInfo);
    if (isLoading || isRegistered === null) {
        return (
            <LoadingSpinner />
        );
    };
    let taxSource;
    switch (taxSourceId) {
        case 1: {
            taxSource = "IRS";
            break;
        }
        case 2: {
            taxSource = "NCES";
            break;
        }
        default: {
            taxSource = "N/A";
        }
    }
    return (
        <div>
            {isRegistered ?
                <OrgView
                    legalName={name}
                    alias={alias}
                    active={active}
                    contactEmail={email}
                    taxSource={taxSource}
                    taxId={taxId}
                    ncesDistrictId={ncesDistrictId}
                    ncesSchoolId={ncesSchoolId}
                /> :
                <RegistrationView name={name} address={address} taxId={taxId} type={type} />
            }
        </div>
    );
};

export default Registration;