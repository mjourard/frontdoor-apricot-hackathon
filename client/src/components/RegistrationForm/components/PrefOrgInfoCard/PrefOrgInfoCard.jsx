import React from 'react';
import {
    Card,
    ThemeProvider,
    TextInput,
    Headline,
    SubHeading,
  } from '@social-solutions/component-library';
  import styles from './PrefOrgInfoCard.style';
  
const PrefOrgInfoCard = () => (
    <styles.Container>
        <ThemeProvider>
            <Card titleHidden>
                <styles.HeaderDiv>
                    <styles.HeadingDiv>
                        <Headline fontSize={22} weight={'bold'}>
                            Additional Information
                        </Headline>
                    </styles.HeadingDiv>
                    <styles.HeadingDiv>
                        <SubHeading fontSize={18} weight={'normal'}>
                            Share some details about yourself and your organization. This will help us confirm your association with this organization and if you're the right person to claim it.
                        </SubHeading>
                    </styles.HeadingDiv>
                </styles.HeaderDiv>
                <styles.TextFieldsDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            <styles.LabelAsterisk>* </styles.LabelAsterisk>Preferred Organization Legal Name
                        </styles.InputLabel>
                        <TextInput value={'CyberFruits Global, inc.'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            Organization Alternate/AKA Name
                        </styles.InputLabel>
                        <TextInput value={'CyberFruits'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            <styles.LabelAsterisk>* </styles.LabelAsterisk>Preferred Organization Address
                        </styles.InputLabel>
                        <TextInput value={'7867 CyberFruits Way'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            <styles.LabelAsterisk>* </styles.LabelAsterisk>Preferred Organization City
                        </styles.InputLabel>
                        <TextInput value={'Austin'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            <styles.LabelAsterisk>* </styles.LabelAsterisk>Preferred Organization State
                        </styles.InputLabel>
                        <TextInput value={'Texas'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            <styles.LabelAsterisk>* </styles.LabelAsterisk>Preferred Organization ZIP/Postal Code
                        </styles.InputLabel>
                        <TextInput value={'78754'} />
                    </styles.InputDiv>
                </styles.TextFieldsDiv>
            </Card>
        </ThemeProvider>
    </styles.Container>
);

export default PrefOrgInfoCard;