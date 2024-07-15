import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonText, ButtonType } from '@/shared/ui/button/Button';

export interface LangSwitcherProps {
    extraClassName?: string;
    shortLang?: boolean
}

export const LangSwitcher = memo(({ extraClassName, shortLang }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = async () => {
        await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [extraClassName])}>
            <Button
                btnType={ButtonType.CLEAR}
                btnText={ButtonText.INVERTED}
                onClick={changeLanguage}
            >
                {shortLang ? t('Мини язык') : t('Язык')}
            </Button>
        </div>
    );
});
