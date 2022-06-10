import styled from 'styled-components';

const CardContainer = styled.div`
    width: 95%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LetterHeading = styled.div`
    width: 50%;
    padding: 15px;
`;

const NameDiv = styled.div`
    color: #381360;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    padding-bottom: 10px;
`;

const AddressDiv = styled.div`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    padding-bottom: 8px;
`;

const LetterLineSpan = styled.span`
    font-size: 18px;
    padding-bottom: 8px;
`;

const LetterLineBold = styled.span`
    font-weight: bold;
`;

const InfoDiv = styled.div`
    margin: 0 40px;
`;

const UnclaimedDiv = styled.div`
    padding: 5px 10px;
    color: #381360;
    text-align: left;
    font-weight: bold;
    font-size 18px;
`;

const ParagraphDiv = styled.div`
    padding: 5px 10px;
    text-align: left;
    font-size 18px;
`;

const ButtonDiv = styled.div`
    padding: 5px 10px;
    align-items: left;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    AddressDiv,
    CardContainer,
    LetterHeading,
    NameDiv,
    LetterLineSpan,
    LetterLineBold,
    InfoDiv,
    UnclaimedDiv,
    ParagraphDiv,
    ButtonDiv,
};