export interface LoginType {
  userId: string;
  password: string;
}

export interface JoinType {
  nickname: string;
  userId: string;
  password: string;
}

export interface TokenType {
  accessToken: string;
  refreshToken: string;
  expiredAt: Date;
}
