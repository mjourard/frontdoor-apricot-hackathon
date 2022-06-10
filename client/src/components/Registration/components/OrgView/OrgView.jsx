import React from 'react';
import {
    Card,
    ThemeProvider,
    Button,
    Spacer,
    Text,
    USAddressInputs,
} from '@social-solutions/component-library';
import styles from './OrgView.style';

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
    const isSchool = ncesDistrictId && ncesSchoolId;
    return (
        <ThemeProvider>
            <styles.ViewContainer>
                <styles.CardContainer>
                    <styles.CardTitle>
                        Organization Details
                    </styles.CardTitle>
                    <styles.CardContent>
                        <styles.OrgDetailsContent>
                            <styles.ContentBlock>
                                <Text label="Legal Name" content={legalName} />
                                {alias ? <Text label="Alias" content={alias} /> : <span />}
                                <Text label="Contact Email" content={contactEmail} />
                                <Text label="Active Status" content={active} />
                            </styles.ContentBlock>
                            <styles.ContentBlock>
                                <Text label="Tax Source" content={taxSource} />
                                <Text label="Tax ID" content={taxId} />
                            </styles.ContentBlock>
                            {isSchool ? <styles.ContentBlock>
                                <Text label="NCES District ID" content={ncesDistrictId} />
                                <Text label="NCES School ID" content={ncesSchoolId} />
                            </styles.ContentBlock> : <span />}
                        </styles.OrgDetailsContent>
                    </styles.CardContent>
                </styles.CardContainer>
            </styles.ViewContainer>
        </ThemeProvider>
    );
};

export default OrgView;