import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LinkTheme, MyLink } from './MyLink';

export default {
    title: 'shared/MyLink',
    component: MyLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof MyLink>;

const Template: ComponentStory<typeof MyLink> = (args) => <MyLink {...args} />;

export const MyLinkPrimary = Template.bind({});
MyLinkPrimary.args = {
    theme: LinkTheme.PRIMARY,
    to: '/',
    children: 'Primary',
};

export const MyLinkSecondary = Template.bind({});
MyLinkSecondary.args = {
    theme: LinkTheme.SECONDARY,
    to: '/',
    children: 'Secondary',
};

export const MyLinkDark = Template.bind({});
MyLinkDark.args = {
    to: '/',
    children: 'Dark',
};

MyLinkDark.decorators = [ThemeDecorator(Theme.DARK)];
