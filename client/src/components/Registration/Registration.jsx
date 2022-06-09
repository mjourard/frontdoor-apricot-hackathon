import React from 'react';
import LoadingSpinner from '../Generics/LoadingSpinner';

const Registration = ({isLoading}) => {
    return (
        <div>
        {isLoading ? <LoadingSpinner /> : <div>Registration!</div>}
        </div>
    )
};

export default Registration;