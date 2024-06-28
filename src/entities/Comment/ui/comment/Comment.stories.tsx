import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Comment } from './Comment';

export default {
    title: 'entities/Comment',
    component: Comment,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => <Comment {...args} />;

export const Base = Template.bind({});
Base.args = {
    comment: {
        id: '1',
        articleId: '1',
        user: {
            id: 1,
            username: 'user1',
        },
        text: 'Введен некорректный логин или пароль 123',
    },
};
