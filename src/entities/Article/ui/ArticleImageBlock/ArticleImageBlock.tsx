import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/text/Text';
import cl from './ArticleImageBlock.module.scss';

export interface ArticleImageBlockProps {
    extraClassName?: string;
    title?: string;
    src: string;
}

export const ArticleImageBlock = memo((props: ArticleImageBlockProps) => {
    const { extraClassName, title, src } = props;
    return (
        <div className={classNames(cl.ArticleImageBlock, {}, [extraClassName])}>
            <img className={cl.image} src={src} alt={title} />
            {title && <Text title={title} size={TextSize.L} />}
        </div>
    );
});
