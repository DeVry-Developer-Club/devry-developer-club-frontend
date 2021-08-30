export interface LoginModel
{
    username: string;
    password: string;
}

export interface LoginOAuth
{
    provider: string;
}

export interface OAuthResponse
{
    token: string;
}