/**
 GET /token?ticket=ST-cas-service-ticket

 Exchange a CAS service ticket for an API access token. This token will be passed on all subsequent requests to the API
 in an Authorization: Bearer <token> header.

 The CAS service ticket must be for the same service that the API validates it for. Existing Measurement API uses the
 token endpoint as the service, other API's provide a GET /service endpoint that returns the service URL.

 The Measurement API returns the user and permissions objects with this response, although that could be a another request.

 Response:
 {
 	token: 'abc-123',
 	user: {
 		first_name: 'Jon'
 		last_name: 'Vellacott',
 		cas_username: 'jon.vellacott@ccci.org',
 		key_guid: '123e4567-e89b-12d3-a456-426655440000',
 		person_id: '123e4567-e89b-12d3-a456-426655440000'
 	},
 	// We need to know if user has access to countries, ministries and/or a list of their accounts.
 	assignments: {

 	}
 }

 */
