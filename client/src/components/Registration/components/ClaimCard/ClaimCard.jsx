import React from 'react';

import {
  Card,
  Container,
  Copy,
  Label,
  Spacer,
  SubHeading,
  TextInput,
  ThemeProvider,
} from '@social-solutions/component-library';

import styles from './ClaimCard.styles';

const ClaimCard = ({
    name,
    address,
    taxId,
    type
}) => (
    <ThemeProvider>
        <Card titleHidden>
            <Container padding={5}>
                <SubHeading fontSize={18} weight={500}>
                    {name}
                </SubHeading> 
            </Container>
            <Container padding={5}>
                <SubHeading fontSize={18} weight={500}>
                    {address}
                </SubHeading> 
            </Container>
            <Container padding={5}>
                <SubHeading fontSize={18} weight={500}>
                    <Label>Tax ID/Charity ID: 
                    {taxId}
                    </Label>
                </SubHeading>
            </Container>
            <Container padding={5}>
                <SubHeading fontSize={18} weight={500}>
                <Label>Type: </Label>
                    {type}
                </SubHeading> 
            </Container>
        </Card>
    </ThemeProvider>
);

export default ClaimCard;