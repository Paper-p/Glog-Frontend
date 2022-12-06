export interface LoginInterface {
  userId: string;
  password: string;
}

export interface JoinInterface {
  nickname: string;
  userId: string;
  password: string;
}

export interface TokenInterface {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
}
