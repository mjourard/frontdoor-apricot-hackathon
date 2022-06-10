import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Button, ThemeProvider,
  } from '@social-solutions/component-library';

import LoadingSpinner from '../Generics/LoadingSpinner';
import AddInfoCard from './components/AddInfoCard/AddInfoCard';
import PrefOrgInfoCard from './components/PrefOrgInfoCard/PrefOrgInfoCard';
import RegistrationInfoCard from './components/RegistrationInfoCard/RegistrationInfoCard';
import styles from './RegistrationForm.style';

const RegistrationForm = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);


      const onButtonClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            history.push('/submit-thank-you')
          }, 3000);
      }

    if (isLoading) {
        return (
            <LoadingSpinner />
        )
    }
    return (
        <styles.CardContainer>
            <ThemeProvider>
                <RegistrationInfoCard />
                <PrefOrgInfoCard />
                <AddInfoCard />
                <styles.ButtonDiv>
                    <Button onClick={() => onButtonClick()}>
                        Submit
                    </Button>
                </styles.ButtonDiv>
            </ThemeProvider>
        </styles.CardContainer>
    )
};

export default RegistrationForm;