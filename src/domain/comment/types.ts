import { BlogType } from '../blog/types'
import { UserType } from '../user/types';

export declare type CommentType = {
  id: number
  title: string
  content: string
  blog?: BlogType 
  user: UserType
}
