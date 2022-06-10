import React from 'react';

import AddInfoCard from './components/AddInfoCard/AddInfoCard';
import PrefOrgInfoCard from './components/PrefOrgInfoCard/PrefOrgInfoCard';
import RegistrationInfoCard from './components/RegistrationInfoCard/RegistrationInfoCard';
import styles from './RegistrationForm.style';

const RegistrationForm = () => (
    <styles.CardContainer>
        <RegistrationInfoCard />
        <PrefOrgInfoCard />
        <AddInfoCard />
    </styles.CardContainer>
);

export default RegistrationForm;