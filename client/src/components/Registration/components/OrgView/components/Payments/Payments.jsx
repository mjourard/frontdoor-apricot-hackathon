import React from 'react';
import {
    Card,
    ThemeProvider,
    Button,
    Spacer,
    Text,
    USAddressInputs,
} from '@social-solutions/component-library';
import styles from './Payments.style';

const Payments = ({
    legalName,
    alias,
    active,
    contactEmail,
    taxSource,
    taxId,
    ncesDistrictId,
    ncesSchoolId,
}) => {
    const isSchool = ncesDistrictId && ncesSchoolId;
    return (
        <ThemeProvider>
                <styles.CardContainer>
                    <styles.CardTitle>
                        Payments Summary
                    </styles.CardTitle>
                    <styles.CardContent>
                        <styles.PaymentsContent>
                            <styles.ContentBlock>
                                <Text label="Payments This Month" content="$2,400.00" />
                            </styles.ContentBlock>
                            <styles.ContentBlock>
                                <Text label="Total Donors This Month" content="4" />
                            </styles.ContentBlock>
                            <styles.ContentBlock>
                                <Text label="Payments This Year" content="$165,000.00" />
                            </styles.ContentBlock>
                            <styles.ContentBlock>
                                <Text label="Total Donors This Year" content="48" />
                            </styles.ContentBlock>
                        </styles.PaymentsContent>
                    </styles.CardContent>
                </styles.CardContainer>
        </ThemeProvider>
    );
};

export default Payments;