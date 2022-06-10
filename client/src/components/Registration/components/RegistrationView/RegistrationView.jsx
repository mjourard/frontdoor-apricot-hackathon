import React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Card,
  ThemeProvider,
  Button,
  Spacer,
} from '@social-solutions/component-library';

import styles from './RegistrationView.style';

const ClaimCard = ({
    name,
    address,
    taxId,
    type
}) => {
    const history = useHistory();
    return(
        <ThemeProvider>
            <styles.CardContainer>
                <Card titleHidden>
                    <styles.LetterHeading>
                    <styles.NameDiv>
                        {name}
                    </styles.NameDiv> 
                    <styles.AddressDiv>
                        {address}
                    </styles.AddressDiv>
                    <div>
                        <styles.LetterLineSpan>
                        <styles.LetterLineBold>Tax ID/Charity ID: </styles.LetterLineBold>{taxId}
                        </styles.LetterLineSpan>
                    </div>
                    <div>
                        <styles.LetterLineSpan><styles.LetterLineBold>Type: </styles.LetterLineBold>{type}
                        </styles.LetterLineSpan>
                    </div>
                    </styles.LetterHeading>
                    <styles.InfoDiv>
                        <styles.UnclaimedDiv>
                            This organization is unclaimed
                        </styles.UnclaimedDiv>
                        <styles.ParagraphDiv>
                            This organization has yet to be claimed by an authorized administrator. If you are a representative of this organization, can prove your affiliation with them, and are the appropriate person to administer its profile, please click the link below to create your access.
                        </styles.ParagraphDiv>
                        <styles.ButtonDiv>
                            <Button onClick={() => history.push('/registration-form/')}>
                                Claim this organization
                            </Button>
                            <Spacer mx={4} />
                            <a href="https://stg-sandbox.cybergrants.com/pls/cybergrants-stgsb/ao_reg.register?x_gm_id=1&x_proposal_type_id=9019">
                                <Button variant='outlined' onClick={() => console.warn('navigating away')}>Not my organization</Button>
                            </a>
                            </styles.ButtonDiv>
                    </styles.InfoDiv>
                </Card>
            </styles.CardContainer>
        </ThemeProvider>
    )
};

export default ClaimCard;