import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppMenu } from './AppMenu';

export default {
    title: 'shared/AppMenu',
    component: AppMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppMenu>;

const Template: ComponentStory<typeof AppMenu> = (args) => <AppMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    trigger: 'Открыть меню',
    items: [
        { onClick: () => {}, content: 'item1' },
        { onClick: () => {}, content: 'item1' },
        { onClick: () => {}, content: 'item1', disabled: true },
    ],
};
