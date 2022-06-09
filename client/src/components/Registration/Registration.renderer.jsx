import React, {useEffect, useState} from 'react';
import { registeredOrg } from '../../MockData/OrganizationInfo';
import Registration from './Registration';

const RegistrationRenderer = ({orgId = 0}) => {
    const [renderLoading, setRenderLoading] = useState(true);
    const [orgInfo, setOrgInfo] = useState(null);
    const getOrg = () => new Promise((resolve, reject) => {
      if (!registeredOrg) {
        return setTimeout(
          () => reject(new Error('registeredOrg not found')),
          250
        );
      }
  
      setTimeout(() => resolve(registeredOrg), 2500);
    });
    
    const doGetORG = async () => {
        try {
          await getOrg().then((result) => {
            setOrgInfo(result);
            setRenderLoading(false);
          });
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        doGetORG();
      }, [])

    return (
        <Registration orgInfo={orgInfo} isLoading={renderLoading}/>
    )
}

export default RegistrationRenderer;