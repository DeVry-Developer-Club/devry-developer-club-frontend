import * as dotenv from "dotenv";
dotenv.config({path: __dirname+"/.env"});
const { DEVELOPER_API = "https:localhost:5001" } = process.env;

/**
 * BASE URL for any API endpoint
 */
export const BASE_API_URL: string = `${DEVELOPER_API}/api`;

/**
 * Controller utilized for standard login
 */
export const LOGIN_API_URL: string = `${DEVELOPER_API}/api/auth/login`;

/**
 * Controller Utilized for standard registration
 */
export const REGISTER_API_URL: string = `${DEVELOPER_API}/api/auth/register`;

/**
 * Controller utilized for OAuth authentication
 */
export const OAUTH_API_URL: string = `${DEVELOPER_API}/api/oauth/signin`;

/**
 * Generate dynamic endpoint based on name
 * @param name
 */
export const endpoint = (name: string): string => `${BASE_API_URL}/${name}`;
