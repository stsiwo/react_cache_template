import { BlogType } from '../blog/types'
import { CommentType } from '../comment/types';

export declare type UserType = {
  id: string,              
  name: string,
  email?: string,          
  password?: string,
  confirm?: string,
  avatarUrl?: string,
  avatarImage?: Blob,
  blogs?: BlogType[]
  roles?: RoleEnum[]       
  comments?: CommentType[]
}

export enum RoleEnum {
  ADMIN = 'admin',
  MEMBER = 'member',
}


