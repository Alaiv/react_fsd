import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const TabsBasic = Template.bind({});
TabsBasic.args = {
    tabs: [
        {
            value: 'tab1',
            content: 'idk',
        },
        {
            value: 'tab2',
            content: 'idk2',
        },
        {
            value: 'tab13',
            content: 'idk3',
        },
    ],
    value: 'tab1',
    onTabClick: action('click'),
};
