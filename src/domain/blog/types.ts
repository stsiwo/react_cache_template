import { CommentType } from '../comment/types'
import { UserType } from '../user/types'

export declare type BlogType = {
  id: string,
  title: string,
  subtitle: string,
  mainImage?: Blob,
  mainImageUrl?: string,
  content: Node[],
  createdDate: Date
  user?: UserType,
  tags?: Set<string>,
  blogImages?: File[],     
  blogImagePaths?: string[],
  comments?: CommentType[]
} 

