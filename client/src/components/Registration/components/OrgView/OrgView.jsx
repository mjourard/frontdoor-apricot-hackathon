import React from 'react';
import {
    Card,
    ThemeProvider,
    Button,
    Spacer,
    Text,
    USAddressInputs,
} from '@social-solutions/component-library';
<<<<<<< Updated upstream
import DonorCard from './components/DonorCard/DonorCard';
=======
import OrgDetails from './components/OrgDetails/OrgDetails';
>>>>>>> Stashed changes
import styles from './OrgView.style';
import Payments from './components/Payments/Payments'

const OrgView = ({
    legalName,
    alias,
    active,
    contactEmail,
    taxSource,
    taxId,
    ncesDistrictId,
    ncesSchoolId,
}) => {
    return (
        <ThemeProvider>
            <styles.ViewContainer>
                <styles.CardContainer>
                    <styles.CardTitle>
                        Organization Details
                    </styles.CardTitle>
                    <styles.CardContent>
                        <OrgDetails
                            legalName={legalName}
                            alias={alias}
                            active={active}
                            contactEmail={contactEmail}
                            taxSource={taxSource}
                            taxId={taxId}
                            ncesDistrictId={ncesDistrictId}
                            ncesSchoolId={ncesSchoolId}
                        />
                    </styles.CardContent>
                </styles.CardContainer>
                <div style={{ paddingBottom: '15px'}} />
                <Payments />
                <div style={{ paddingBottom: '15px'}} />
                <DonorCard />
                <div style={{ paddingBottom: '15px'}} />
            </styles.ViewContainer>
        </ThemeProvider>
    );
};

export default OrgView;