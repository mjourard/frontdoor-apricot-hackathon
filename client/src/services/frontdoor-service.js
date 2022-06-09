import { frontdoorToken, frontdoorApiUrl } from "../helpers/integration/integrationProps";

export const FrontdoorRoute = {
    ORGANIZATIONS: "/v1/frontdoor/organizations"
};

export class FrontdoorService {
    getRequestOptions = (method, apiKey) => {
        return {
            method: method,
            headers: {
                accept: 'application/json',
                "x-api-key": apiKey
            }
        };
    };
    getOrganizationInfo() {
        const url = new URL(frontdoorApiUrl + FrontdoorRoute.ORGANIZATIONS);
        url.searchParams.set('keyword', 'AFRICAN ELEPHANT CONSERVATION TRUST');
        const options = {
            ...this.getRequestOptions('GET', frontdoorToken)
        };
        return fetch(url.href, options);
    }
}