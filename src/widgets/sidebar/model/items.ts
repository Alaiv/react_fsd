import { FunctionComponent, SVGAttributes } from 'react';

export interface ISideBarItem {
    path: string,
    text: string,
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    authOnly?: boolean
}
