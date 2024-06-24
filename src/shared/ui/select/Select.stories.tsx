import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectLight = Template.bind({});
SelectLight.args = {
    value: 'Option value',
    label: 'Option label',
    options: [
        { value: 'Option value', text: 'Option text' },
        { value: 'Option value2', text: 'Option text2' },
    ],
};

export const SelectDark = Template.bind({});
SelectDark.args = {
    value: 'Option value',
    label: 'Option label',
    options: [
        { value: 'Option value', text: 'Option text' },
        { value: 'Option value2', text: 'Option text2' },
    ],
};

SelectDark.decorators = [ThemeDecorator(Theme.DARK)];
