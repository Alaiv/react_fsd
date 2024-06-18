import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { SideBar } from './SideBar';

export default {
    title: 'widgets/Sidebar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const SideBarLight = Template.bind({});
SideBarLight.args = {};

export const SideBarDark = Template.bind({});
SideBarDark.args = {};

SideBarDark.decorators = [ThemeDecorator(Theme.DARK)];
