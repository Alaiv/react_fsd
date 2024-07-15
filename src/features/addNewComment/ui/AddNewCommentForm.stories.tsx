import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AddNewCommentForm from './AddNewCommentForm';

export default {
    title: 'features/AddNewCommentForm',
    component: AddNewCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddNewCommentForm>;

const Template: ComponentStory<typeof AddNewCommentForm> = (args) => <AddNewCommentForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
