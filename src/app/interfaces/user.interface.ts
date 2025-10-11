export interface IUser{
  uid: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  country: string;
  gender: string;
  birthDate: string;
  hobbits: string[];
  images: string[];
}

export interface IUserAuth extends Pick<IUser, 'email' | 'password'>{}
export interface IUserShow extends Pick<IUser, 'name' | 'lastName' |'gender'>{
  img: string;
}
export interface IUserCreate extends Omit<IUser, 'uid'>{}
