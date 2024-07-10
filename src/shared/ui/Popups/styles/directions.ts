import { DropDownDirection } from 'app/types/types';
import cl from './Popup.module.scss';

export const directionClasses: Record<DropDownDirection, string> = {
    'top left': cl.topLeftDirection,
    'top right': cl.topRightDirection,
    'down left': cl.downLeftDirection,
    'down right': cl.downRightDirection,
};
