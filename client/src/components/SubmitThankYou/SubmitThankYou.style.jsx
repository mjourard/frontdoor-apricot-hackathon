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

const InfoDiv = styled.div`
    margin: 0 40px;
    padding-bottom: 10px;
`;

const ParaDiv = styled.div`
    padding: 5px 10px;
    color: #99A7FF;
    text-align: left;
    font-weight: bold;
    font-size 18px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    CardContainer,
    LetterHeading,
    NameDiv,
    InfoDiv,
    ParaDiv,
};