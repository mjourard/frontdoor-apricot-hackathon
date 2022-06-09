import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Generics/LoadingSpinner';

const Registration = () => {
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        setTimeout(setShowSpinner(false), 2000)
    }, [])

    return (
        <div>
        {showSpinner ? <LoadingSpinner /> : <div>Registration!</div>}
        </div>
    )
};

export default Registration;