import { classNames } from 'shared/lib/classNames';
import { Button, ButtonType } from 'shared/ui/button/Button';
import { Icon } from 'shared/ui/icon/Icon';
import { ArticleViewType } from 'entities/Article/model/types/types';
import CardIcon from 'shared/assets/icons/Card.svg';
import LineIcon from 'shared/assets/icons/List.svg';
import { memo, useCallback } from 'react';
import cl from './ViewSwitcher.module.scss';

export interface ViewSwitcherProps {
    extraClassName?: string;
    view?: ArticleViewType,
    onClick?: (view: ArticleViewType) => void;
}

interface ViewType{
    view: ArticleViewType;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

const views: ViewType[] = [
    {
        view: ArticleViewType.LINE,
        Icon: LineIcon,
    },
    {
        view: ArticleViewType.CARD,
        Icon: CardIcon,
    },
];

export const ViewSwitcher = memo(({ extraClassName, view, onClick }: ViewSwitcherProps) => {
    const onClickHandler = useCallback((viewType: ArticleViewType) => () => {
        onClick?.(viewType);
    }, [onClick]);

    return (
        <div className={classNames(cl.ViewSwitcher, {}, [extraClassName])}>
            {views.map((viewType) => (
                <Button
                    key={viewType.view}
                    btnType={ButtonType.CLEAR}
                    onClick={onClickHandler(viewType.view)}
                    extraClassName={classNames(cl.btn)}
                >
                    <Icon
                        Svg={viewType.Icon}
                        extraClassName={classNames(cl.icon, { [cl.current]: viewType.view === view })}
                    />
                </Button>
            ))}
        </div>
    );
});
