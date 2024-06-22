import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const LoginFormBase = Template.bind({});
LoginFormBase.args = {};
LoginFormBase.decorators = [StoreDecorator({
    auth: { username: 'asdasd', password: 'asdasd' },
})];

export const LoginFormError = Template.bind({});
LoginFormError.args = {};
LoginFormError.decorators = [StoreDecorator({
    auth: { username: 'asdasd', password: 'asdasd', error: 'Error occured' },
})];

export const LoginFormLoading = Template.bind({});
LoginFormLoading.args = {};
LoginFormLoading.decorators = [StoreDecorator({
    auth: { isLoading: true },
})];
