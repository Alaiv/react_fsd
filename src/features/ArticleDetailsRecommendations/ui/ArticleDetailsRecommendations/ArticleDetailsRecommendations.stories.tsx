import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleDetailsRecommendations } from './ArticleDetailsRecommendations';

export default {
    title: 'features/ArticleDetailsRecommendations',
    component: ArticleDetailsRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsRecommendations>;

const Template: ComponentStory<typeof ArticleDetailsRecommendations> = (args) => <ArticleDetailsRecommendations {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({})];
