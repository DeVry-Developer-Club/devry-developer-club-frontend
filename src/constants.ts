const { DEVELOPER_API } = process.env;

/**
 * BASE URL for any API endpoint
 */
export const BASE_API_URL: string = `${DEVELOPER_API}/api`;

/**
 * Controller utilized for standard login
 */
export const LOGIN_API_URL: string = `${DEVELOPER_API}/api/auth`;

/**
 * Controller utilized for OAuth authentication
 */
export const OAUTH_API_URL: string = `${DEVELOPER_API}/api/oauth`;

/**
 * Generate dynamic endpoint based on name
 * @param name
 */
export const endpoint = (name: string): string => `${BASE_API_URL}/${name}`;
