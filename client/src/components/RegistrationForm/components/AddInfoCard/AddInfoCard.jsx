import React from 'react';
import {
    Card,
    ThemeProvider,
    TextInput,
    Headline,
    SubHeading,
  } from '@social-solutions/component-library';
  import styles from './AddInfoCard.style';

const AddInfoCard = () => (
    <styles.Container>
        <ThemeProvider>
            <Card titleHidden>
                <styles.HeaderDiv>
                    <styles.HeadingDiv>
                        <Headline fontSize={22} weight={'bold'}>
                            <styles.Coloring>
                                Preferred Organization Information
                            </styles.Coloring>
                        </Headline>
                    </styles.HeadingDiv>
                    <styles.HeadingDiv>
                        <SubHeading fontSize={18} weight={'normal'}>
                            Tell us how you would prefer your organization to be listed in our system. We will use information from the Internal Revenue Service by default. If your organization’s name and/or address is different from what is listed with the IRS, please also provide a brief explanation as to why in the note field below.
                        </SubHeading>
                    </styles.HeadingDiv>
                </styles.HeaderDiv>
                <styles.TextFieldsDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            Your Current Title/Role at this Organization
                        </styles.InputLabel>
                        <TextInput value={'Admin'} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            CyberGrants Access Code
                        </styles.InputLabel>
                        <TextInput value={''} />
                    </styles.InputDiv>
                    <styles.InputDiv>
                        <styles.InputLabel>
                            Additional Comments
                        </styles.InputLabel>
                        <TextInput value={''} />
                    </styles.InputDiv>
                </styles.TextFieldsDiv>
            </Card>
        </ThemeProvider>
    </styles.Container>
);

export default AddInfoCard;