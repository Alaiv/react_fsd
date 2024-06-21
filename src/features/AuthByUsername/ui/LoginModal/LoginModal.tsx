import { classNames } from 'shared/lib/classNames';
import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export interface LoginModalProps {
    extraClassName?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        extraClassName,
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            extraClassName={
                classNames('', {}, [extraClassName])
            }
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm />
        </Modal>
    );
};
