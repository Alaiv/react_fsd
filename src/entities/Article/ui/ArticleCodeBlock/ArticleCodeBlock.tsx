import { classNames } from 'shared/lib/classNames';
import { memo } from 'react';
import { Code } from 'shared/ui/code/Code';
import cl from './ArticleCodeBlock.module.scss';

export interface ArticleCodeBlockProps {
    extraClassName?: string;
    code: string
}

export const ArticleCodeBlock = memo(({ extraClassName, code }: ArticleCodeBlockProps) => (
    <pre className={classNames(cl.ArticleCodeBlock, {}, [extraClassName])}>
        <Code code={code} />
    </pre>
));
