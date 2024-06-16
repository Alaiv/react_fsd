import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';
import { FC } from 'react';
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
    } = props;

    return (
        <Link
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
