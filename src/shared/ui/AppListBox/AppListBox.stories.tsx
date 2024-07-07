import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppListBox } from './AppListBox';

export default {
    title: 'shared/AppListBox',
    component: AppListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 300 }}><Story /></div>,
    ],
} as ComponentMeta<typeof AppListBox>;

const Template: ComponentStory<typeof AppListBox> = (args) => <AppListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'sdadasdasdasdsa', text: 'sdadasdasdasdsa' },
        { value: 'sdadasdasdasdsa', text: 'sdadasdasdasdsa' },
        { value: 'sdadasdasdasdsa', text: 'sdadasdasdasdsa', disabled: true },
    ],
};

export const PrimaryTopLeft = Template.bind({});
PrimaryTopLeft.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa', disabled: true },
    ],
    direction: 'top left',
};

export const PrimaryTopRight = Template.bind({});
PrimaryTopRight.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa', disabled: true },
    ],
    direction: 'top right',
};

export const PrimaryDownLeft = Template.bind({});
PrimaryDownLeft.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa', disabled: true },
    ],
    direction: 'down left',
};

export const PrimaryDownRight = Template.bind({});
PrimaryDownRight.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa' },
        { value: 'sdadasdasdasdsasdadasdasdasdsa', text: 'sdadasdasdasdsasdadasdasdasdsa', disabled: true },
    ],
    direction: 'down right',
};
