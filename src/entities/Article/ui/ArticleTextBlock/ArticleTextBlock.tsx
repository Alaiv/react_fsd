import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/text/Text';
import cl from './ArticleTextBlock.module.scss';

export interface ArticleTextBlockProps {
    extraClassName?: string;
    title?: string,
    paragraphs: string[]
}

export const ArticleTextBlock = memo((props: ArticleTextBlockProps) => {
    const { extraClassName, title, paragraphs } = props;
    return (
        <div className={classNames(cl.ArticleTextBlock, {}, [extraClassName])}>
            {title && <Text title={title} size={TextSize.L} extraClassName={cl.blockTitle} />}
            {paragraphs.map((item) => (
                <Text text={item} key={item} extraClassName={cl.blockText} />
            ))}
        </div>
    );
});
