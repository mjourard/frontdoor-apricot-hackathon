import React from 'react';
import {
    Card,
    ThemeProvider,
    Button,
    Spacer,
    Text
} from '@social-solutions/component-library';
import viewstyles from '../../OrgView.style';
import detailstyles from './OrgDetails.style';
import TextDisplay from '../../../../../Generics/TextDisplay';

const OrgDetails = ({
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
        <detailstyles.OrgDetailsContent>
            <viewstyles.ContentBlock>
                <TextDisplay label="Legal Name" content={legalName} />
                {alias ? <TextDisplay label="Alias" content={alias} /> : <span />}
                <TextDisplay label="Contact Email" content={contactEmail} />
                <TextDisplay label="Active Status" content={active} />
            </viewstyles.ContentBlock>
            <viewstyles.ContentBlock>
                <TextDisplay label="Tax Source" content={taxSource} />
                <TextDisplay label="Tax ID" content={taxId} />
            </viewstyles.ContentBlock>
            {isSchool ? <viewstyles.ContentBlock>
                <TextDisplay label="NCES District ID" content={ncesDistrictId} />
                <TextDisplay label="NCES School ID" content={ncesSchoolId} />
            </viewstyles.ContentBlock> : <span />}
        </detailstyles.OrgDetailsContent>
    );
};

export default OrgDetails;