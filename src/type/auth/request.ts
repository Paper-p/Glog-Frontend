export type RequestSignInModel = {
  userId: string;
  password: string;
};

export type RequestSignUpModel = {
  nickname: string;
  userId: string;
  password: string;
};

export type RequestValidModel = {
  data: string;
};
