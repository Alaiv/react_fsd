import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlePageList } from './ArticlePageList';

export default {
    title: 'pages/ArticlePageList',
    component: ArticlePageList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlePageList>;

const Template: ComponentStory<typeof ArticlePageList> = (args) => <ArticlePageList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({})];
