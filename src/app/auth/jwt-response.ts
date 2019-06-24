export interface JwtResponse {
    user: {
        userName: string,
        passWord: string,
        email: string,
        access_token: string,
        expires_in: number
    }
}