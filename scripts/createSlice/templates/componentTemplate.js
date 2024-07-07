const interfaceConst = 'interface';

module.exports = (componentName) => `import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './${componentName}.module.scss';
import { memo } from 'react';

${interfaceConst} ${componentName}Props {
    extraClassName?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { extraClassName } = props;
    const { t } = useTranslation();
    
    return (
        <div className={classNames(cls.${componentName}, {}, [extraClassName])}>
           
        </div>
    );
});`;
