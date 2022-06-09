import React, {useEffect, useState} from 'react';
import { orgs } from '../../MockData/OrganizationInfo';
import Registration from './Registration';

const RegistrationRenderer = ({orgId = 448}) => {
    const [renderLoading, setRenderLoading] = useState(true);
    const [orgInfo, setOrgInfo] = useState(null);
    const getRegisteredOrg = () => new Promise((resolve, reject) => {
      if (!orgs ) {
        return setTimeout(
          () => reject(new Error('registeredOrg not found')),
          250
        );
      }
  
      setTimeout(() => resolve(orgs), 2500);
    });
    
    const doGetORG = async () => {
        try {
          await getRegisteredOrg().then((result) => {
              console.warn(orgId)
            setOrgInfo(result.find((val) => val.id === orgId));
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