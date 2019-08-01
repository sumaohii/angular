import {UploadKycImg} from './upload-kyc-img';
export interface KycUserDetail {
    status: number;
    message: string;
    data: UploadKycImg[];   
  }