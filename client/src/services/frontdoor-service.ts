import { frontdoorToken, frontdoorApiUrl } from "../helpers/integration/integrationProps";

export class FrontdoorService {
    getOrganizationInfo() {
        const url = new URL(frontdoorApiUrl + '/v1/frontdoor/organizations');
        url.searchParams.set('keyword', '')
    }
}