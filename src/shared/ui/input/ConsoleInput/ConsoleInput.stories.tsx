import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConsoleInput } from './ConsoleInput';

export default {
    title: 'shared/ConsoleInput',
    component: ConsoleInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ConsoleInput>;

const Template: ComponentStory<typeof ConsoleInput> = (args) => <ConsoleInput {...args} />;

export const ConsoleInputBase = Template.bind({});
ConsoleInputBase.args = {
    value: 'text',
    placeholder: 'Введите имя',
};
