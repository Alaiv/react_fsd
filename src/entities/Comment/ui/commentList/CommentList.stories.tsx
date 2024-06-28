import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from 'shared/assets/imgs/AvatarLogo.png';
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

};
