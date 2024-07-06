import { classNames } from 'shared/lib/classNames';
import CopyIcon from 'shared/assets/icons/copyIcon.svg';
import { useCallback } from 'react';
import { Button, ButtonType } from '../button/Button';
import cl from './Code.module.scss';

export interface CodeProps {
    extraClassName?: string;
    code: string;
}

export const Code = ({ extraClassName, code }: CodeProps) => {
    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(code);
    }, [code]);

    return (
        <pre className={classNames(cl.CodeBlock, {}, [extraClassName])}>
            <code>
                {code}
            </code>
            <Button onClick={onCopy} extraClassName={cl.copyBtn} btnType={ButtonType.CLEAR}>
                <CopyIcon className={cl.icon} />
            </Button>
        </pre>
    );
};
