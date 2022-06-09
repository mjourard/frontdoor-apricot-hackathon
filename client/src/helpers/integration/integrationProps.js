export const frontdoorToken = process.env.REACT_APP_FRONTDOOR_TOKEN;
export const frontdoorApiUrl = process.env.REACT_APP_FRONTDOOR_API_URL;
const root = document.getElementById('root');
export const orgId =
  process.env.REACT_APP_ETO_ENTERPRISE_GUID ||
  (root && root.getAttribute('data-enterprise-guid'));
