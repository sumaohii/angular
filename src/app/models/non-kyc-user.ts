export interface NonKycUser {
    profile: {
      fullname: string;
      phone: string;
      birthday: string;
    }
    isKYCVerified: boolean;
    _id: string;
   
  }
