import React from 'react';
import s from 'styled-components';

const TextContainer = s.div`
    padding: 4px;
    font-size: 16px;
    margin-top: 1rem;
`;
const TextDisplay = ({
    label,
    content
}) => {
    const hasLabel = label && typeof label === 'string' && label.length > 0;
    return (
        <TextContainer>
            {hasLabel ? <span>{label}:</span> : <span />}
            <span>{content}</span>
        </TextContainer>
    );
};

export default TextDisplay;