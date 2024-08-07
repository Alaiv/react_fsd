import { IUser } from '@/entities/User';
import { ArticleTypes, BlockType } from '../const/constants';

export interface GenericBlock {
    id: string,
    type: BlockType,
}

export interface TextBlock extends GenericBlock {
    type: BlockType.TEXT;
    title?: string;
    paragraphs: string[]
}

export interface ImageBlock extends GenericBlock {
    type: BlockType.IMAGE;
    title?: string
    src: string
}

export interface CodeBlock extends GenericBlock {
    type: BlockType.CODE;
    code: string
}

export type ArticleBlock = TextBlock | ImageBlock | CodeBlock;

export interface Article {
    id: string,
    user: IUser,
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    type: ArticleTypes[]
    blocks: ArticleBlock[]
}
