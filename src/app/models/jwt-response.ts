export interface JwtResponse {
    status: number;
    message: string;
    data: {
      user: {
        profile: {
        fullname: string,
        phone: string,
        birthday: string,
        }
        role: string;
        _id: string;
        username: string;
        email: string;
       }
    token: string;
    }
    todo: {
        verifyEmail: string;
    }
    
}
