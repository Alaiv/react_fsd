import { classNames } from '@/shared/lib/classNames';
import './Loader.scss';

export interface LoaderProps {
    extraClassName?: string;
}

export const Loader = ({ extraClassName }: LoaderProps) => (
    <div className={classNames('lds-spinner', {}, [extraClassName])}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);
