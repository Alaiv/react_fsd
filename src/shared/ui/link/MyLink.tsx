import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './MyLink.module.scss';

export const enum LinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

export interface MyLinkProps extends LinkProps {
    extraClassName?: string;
    theme?: LinkTheme
}

export const MyLink: FC<MyLinkProps> = (props) => {
    const {
        to,
        children,
        extraClassName,
        theme = LinkTheme.PRIMARY,
        ...rest
    } = props;

    return (
        <Link
            {...rest}
            className={
                classNames(
                    cl.link,
                    {},
                    [extraClassName, cl[theme]],
                )
            }
            to={to}
        >
            {children}
        </Link>
    );
};
