import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AdminPage from './AdminPage';

export default {
    title: 'pages/ForbiddenPage',
    component: AdminPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPage>;

const Template: ComponentStory<typeof AdminPage> = () => <AdminPage />;

export const Normal = Template.bind({});
Normal.args = {};

Normal.decorators = [StoreDecorator({})];
