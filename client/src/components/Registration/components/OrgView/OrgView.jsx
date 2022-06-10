import React from 'react';
import {
    Card,
    ThemeProvider,
    Button,
    Spacer,
    Text,
  } from '@social-solutions/component-library';
import styles from './OrgView.style';

const OrgView = ({
    legalName,
    taxSource,
}) => {

    return (
        <ThemeProvider>
            <styles.ViewContainer>
            <styles.CardContainer>
                <styles.CardTitle>
                    Organization Details
                </styles.CardTitle>
                <styles.CardContent>
                    <Text label="Legal Name" content={legalName} />
                    <Text label="Tax Source" content={taxSource} />
                </styles.CardContent>
            </styles.CardContainer>
            </styles.ViewContainer>
        </ThemeProvider>
    );
};

export default OrgView;