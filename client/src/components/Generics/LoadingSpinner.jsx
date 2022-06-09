import React from 'react';

import {
  LoadingSpinnerContainer,
  LoadingSpinnerRing,
  SpinnerImage,
} from './LoadingSpinner.style';

const LoadingSpinner = () => (
  <LoadingSpinnerContainer>
    <SpinnerImage>
      <LoadingSpinnerRing />
    </SpinnerImage>
  </LoadingSpinnerContainer>
);

export default LoadingSpinner;
