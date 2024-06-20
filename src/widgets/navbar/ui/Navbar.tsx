import { classNames } from 'shared/lib/classNames';
import React, { useCallback, useState } from 'react';
import { Modal } from 'shared/ui/modal/Modal';
import {
    Button, ButtonSize, ButtonText, ButtonType,
} from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';
import cl from './Navbar.module.scss';

export interface NavbarProps {
    extraClassName?: string;
}

export const Navbar = ({ extraClassName }: NavbarProps) => {
    const { t } = useTranslation();
    const [isOpen, setModalState] = useState(false);

    const setModalStateCb = useCallback(() => {
        setModalState(!isOpen);
    }, [isOpen]);

    return (
        <div className={classNames(cl.Navbar, {}, [extraClassName])}>
            <Button
                btnType={ButtonType.CLEAR}
                btnText={ButtonText.INVERTED}
                onClick={setModalStateCb}
                extraClassName={cl.loginBtn}
                buttonSize={ButtonSize.L}
            >
                {t('Войти')}
            </Button>
            <Modal isOpen={isOpen} onClose={setModalStateCb}>
                {t('Модалка')}
            </Modal>
        </div>
    );
};
