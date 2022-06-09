import React, {useState} from 'react';
import { registeredOrg } from '../../MockData/OrganizationInfo';
import Registration from './Registration';

const RegistrationRenderer = ({orgId = 0}) => {
    let [renderLoading, setRenderLoading]= useState(true);
    const getOrg = () => new Promise((resolve, reject) => {
      if (!registeredOrg) {
        return setTimeout(
          () => reject(new Error('registeredOrg not found')),
          250
        );
      }
  
      setTimeout(() => resolve(Object.values(registeredOrg)), 2500);
    });
    
    const doGetORG = async () => {
        try {
          await getOrg().then(() => {
            setRenderLoading(false);
          });
        } catch (error) {
          console.log(error);
        }
      };

    doGetORG();

    return (
        <Registration isLoading={renderLoading}/>
    )
}

export default RegistrationRenderer;