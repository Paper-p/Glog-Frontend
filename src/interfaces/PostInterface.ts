export interface PostInterface {
  id?: number;
  title: string;
  content: string;
  thumbnail: string;
  like: number;
  hit: number;
  isMine?: boolean;
}
