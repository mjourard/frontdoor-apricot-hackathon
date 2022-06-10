import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    from {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(360deg)
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const LoadingSpinnerContainer = styled.div`
  position: fixed;
  align-items: center;
  display: flex;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const LoadingSpinnerRing = styled.div`
  animation: ${spin} 1s ease-in-out infinite;
  border: 10px solid #cccccc;
  border-radius: 50%;
  border-top: 10px solid #381360;
  height: 50px;
  position: absolute;
  width: 50px;
  -webkit-animation: ${spin} 1s ease-in-out infinite; /* Safari */
`;

export const SpinnerImage = styled.div`
    align-items: center;
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 90px;
    box-shadow: 0 0 0 8px lightGrey;
    display: flex;
    height: 65px;
    justify-content: center;
    margin: auto;
    position: relative;
    width: 65px;
    z-index: 9;
  `;
