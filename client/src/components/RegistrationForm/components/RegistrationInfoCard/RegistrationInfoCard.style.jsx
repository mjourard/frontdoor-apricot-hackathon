import styled from 'styled-components';

const HeaderDiv = styled.div`
    padding: 10px 0 20px;
`;

const HeadingDiv = styled.div`
    padding: 10px 20px;
`;

const TextFieldsDiv = styled.div`
    padding: 0 20px 20px;
    max-width: 80%;
    margin-left: auto; 
    margin-right: 0;
`;

const InputDiv = styled.div`
    display: flex;
    width: auto;
    margin-left: auto; 
    margin-right: 0;
`;

const LabelAsterisk = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.red};
  margin-left: 2px;
  font-weight: bold;
`;

const InputLabel = styled.label`
    width: 20%;
    text-align: center;
    padding-top: 7px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    HeaderDiv,
    HeadingDiv,
    TextFieldsDiv,
    LabelAsterisk,
    InputDiv,
    InputLabel,
}