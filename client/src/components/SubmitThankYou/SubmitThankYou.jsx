import React from 'react';
import {
    Card,
    ThemeProvider,
  } from '@social-solutions/component-library';
  
import styles from './SubmitThankYou.style';

const SubmitThankYou = () => (
    <ThemeProvider>
        <styles.CardContainer>
            <Card titleHidden>
                <styles.LetterHeading>
                    <styles.NameDiv>
                        Thank you!
                    </styles.NameDiv> 
                </styles.LetterHeading>
                <styles.InfoDiv>
                    <styles.ParaDiv>
                        A Frontdoor representative will email you with further instructions after review and approval!
                    </styles.ParaDiv>
                </styles.InfoDiv>
            </Card>
        </styles.CardContainer>
    </ThemeProvider>
);

export default SubmitThankYou;