import { classNames } from 'shared/lib/classNames';
import React from 'react';
import cl from './Navbar.module.scss';

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({ extraClassName }: NavbarProps) => (
    <div className={classNames(cl.Navbar, {}, [extraClassName])} />
);
