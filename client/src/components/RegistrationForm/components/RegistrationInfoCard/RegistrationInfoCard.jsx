import React from 'react';
import {
    Card,
    ThemeProvider,
    TextInput,
    Label,
    Headline,
    Container,
    SubHeading,
  } from '@social-solutions/component-library';
  import styles from './RegistrationInfoCard.style';

const RegistrationInfoCard = () => (
    <ThemeProvider>
        <Card titleHidden>
            <styles.HeaderDiv>
                <styles.HeadingDiv>
                    <Headline fontSize={22} weight={'bold'}>
                        Register Information
                    </Headline>
                </styles.HeadingDiv>
                <styles.HeadingDiv>
                    <SubHeading fontSize={18} weight={'normal'}>
                        Please provide all of the information below to claim this organization record in our system. We will use this information to ensure that you're the correct person to administer its profile. If you require access to this organization but should not be primarily responsible for administering it, please ask that person to complete this form first. Once approved, they will be able to add you on as an additional user.
                    </SubHeading>
                </styles.HeadingDiv>
                <styles.HeadingDiv>
                    <SubHeading fontSize={18} weight={'bold'}>
                    Please consider using a permanent/primary email when creating this account rather one that is employee-specific - e.g. "arcmatchinggifts@redcross.org" instead of "jane.smith@redcross.org". Emails related to your organization's website are preferred over your personal email - e.g. "jane.smith@redcross.org" instead of "jane.smith@gmail.com".
                    </SubHeading>
                </styles.HeadingDiv>
            </styles.HeaderDiv>
            <styles.TextFieldsDiv>
                <styles.InputDiv>
                    <styles.InputLabel>
                        <styles.LabelAsterisk>* </styles.LabelAsterisk>First Name: 
                    </styles.InputLabel>
                    <TextInput />
                </styles.InputDiv>
            </styles.TextFieldsDiv>
        </Card>
    </ThemeProvider>
);

export default RegistrationInfoCard;