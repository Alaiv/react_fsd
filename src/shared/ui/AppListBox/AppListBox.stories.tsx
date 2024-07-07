import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppListBox } from './AppListBox';

export default {
    title: 'shared/AppListBox',
    component: AppListBox,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppListBox>;

const Template: ComponentStory<typeof AppListBox> = (args) => <AppListBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: undefined,
    defaultValue: 'idl click me',
    items: [
        { value: 'asdas', content: 'asdasdsa' },
        { value: 'asdas2', content: 'asdasdsa2' },
        { value: 'asdas3', content: 'asdasdsa3', disabled: true },
    ],
};
