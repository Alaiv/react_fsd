import { classNames } from 'shared/lib/classNames';
import { Button, ButtonText, ButtonType } from 'shared/ui/button/Button';
import { useTranslation } from 'react-i18next';

export interface LangSwitcherProps {
    extraClassName?: string;
}

export const LangSwitcher = ({ extraClassName }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [extraClassName])}>
            <Button
                btnType={ButtonType.CLEAR}
                btnText={ButtonText.INVERTED}
                onClick={changeLanguage}
            >
                {t('Язык')}
            </Button>
        </div>
    );
};
