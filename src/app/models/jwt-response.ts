export interface JwtResponse {
    statusCode: number;
    status: number;
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