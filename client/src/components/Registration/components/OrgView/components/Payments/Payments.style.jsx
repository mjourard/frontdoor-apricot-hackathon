import styled from 'styled-components';
const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 2rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
`;

const CardTitle = styled.div`
    background-color: #20907f;
    font-size: 22px;
    padding: 1em;
    color: #fafafa;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    background-color: #ffffff;
    padding: 2rem;
`;

const PaymentsContent = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    padding: 0.5rem;
`

const ContentBlock = styled.div`
    width: 100%;
    height: 100%;
`

export default {
    CardContainer,
    CardContent,
    CardTitle,
    ContentBlock,
    PaymentsContent,
    ViewContainer
};