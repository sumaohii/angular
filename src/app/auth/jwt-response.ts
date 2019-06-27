export interface JwtResponse {
    statusCode: number;
    message: string;
    data: {
        username: string,
        email: string,
        role: string,
        token: string,     
    }
    todo: {
        verifyEmail: string;
    }
}