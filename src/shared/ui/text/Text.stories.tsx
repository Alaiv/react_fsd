import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, TextColor } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextNormal = Template.bind({});
TextNormal.args = {
    title: 'На главную',
    text: 'ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
};

export const TextTitle = Template.bind({});
TextTitle.args = {
    title: 'На главную',
};

export const TextOnlyText = Template.bind({});
TextOnlyText.args = {
    text: 'ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
};

export const TextError = Template.bind({});
TextError.args = {
    title: 'Введен некорректный логин или пароль',
    text: 'ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
    textColor: TextColor.ERROR,
};

export const TextDarkTheme = Template.bind({});
TextDarkTheme.args = {
    title: 'На главную',
    text: 'ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
};

TextDarkTheme.decorators = [ThemeDecorator(Theme.DARK)];
