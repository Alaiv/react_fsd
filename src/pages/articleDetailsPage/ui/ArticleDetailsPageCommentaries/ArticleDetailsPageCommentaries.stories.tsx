import React, { Suspense } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsPageCommentaries } from './ArticleDetailsPageCommentaries';

export default {
    title: 'pages/ArticleDetailsPageCommentaries',
    component: ArticleDetailsPageCommentaries,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageCommentaries>;

const Template: ComponentStory<typeof ArticleDetailsPageCommentaries> = (args) => (
    <Suspense fallback="">
        <ArticleDetailsPageCommentaries {...args} />
    </Suspense>
);

export const Normal = Template.bind({});
Normal.args = {
};

Normal.decorators = [StoreDecorator({})];
