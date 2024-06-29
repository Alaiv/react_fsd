import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from 'shared/assets/imgs/AvatarLogo.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Base = Template.bind({});
Base.args = {
    comments: [
        {
            id: '1',
            articleId: '1',
            user: {
                id: 1,
                username: 'user1',
            },
            text: 'cool comment',
        },
        {
            id: '2',
            articleId: '1',
            user: {
                id: 1,
                username: 'user1',
            },
            text: 'some random text',
        },
    ],
};

Base.decorators = [StoreDecorator({})];
