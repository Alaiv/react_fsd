import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cl from './StarsRating.module.scss';
import Star from '../../assets/icons/star_icon.svg';
import { Icon } from '@/shared/ui/icon/Icon';

interface StarsRatingProps {
    extraClassName?: string;
    selected?: number;
    onSelect?: (starsCount: number) => void;
    size?: number;
}

const starValues = [1, 2, 3, 4, 5];

export const StarsRating = memo((props: StarsRatingProps) => {
    const {
        extraClassName,
        selected = 0,
        onSelect,
        size = 30,
    } = props;

    const [isSelected, setIsSelected] = useState(Boolean(selected));
    const [currentStarsCount, setCurrentStarsCount] = useState(selected);

    const onHover = (count: number) => () => {
        if (!isSelected) {
            setCurrentStarsCount(count);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onStarClick = (count: number) => () => {
        if (onSelect && !isSelected) {
            onSelect(count);
            setIsSelected(true);
        }
    };

    return (
        <div className={classNames(cl.StarsRating, {}, [extraClassName])}>
            {starValues.map((count) => (
                <Icon
                    key={count}
                    onMouseEnter={onHover(count)}
                    onMouseLeave={onLeave}
                    onClick={onStarClick(count)}
                    extraClassName={classNames(cl.starIcon, { [cl.selected]: isSelected }, [
                        currentStarsCount >= count ? cl.hovered : cl.normal,
                    ])}
                    Svg={Star}
                    width={size}
                    height={size}
                />
            ))}
        </div>
    );
});
