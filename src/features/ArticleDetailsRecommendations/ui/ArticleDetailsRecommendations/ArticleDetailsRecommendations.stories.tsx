import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import withMock from 'storybook-addon-mock';
import { Article } from 'entities/Article';
import { ArticleDetailsRecommendations } from './ArticleDetailsRecommendations';

export default {
    title: 'features/ArticleDetailsRecommendations',
    component: ArticleDetailsRecommendations,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof ArticleDetailsRecommendations>;

const Template: ComponentStory<typeof ArticleDetailsRecommendations> = (args) => <ArticleDetailsRecommendations {...args} />;

const article: Article = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: 1, username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {

};

Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [
        {
            url: `${__API_URL__}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [
                { ...article, id: '1' },
                { ...article, id: '2' },
                { ...article, id: '3' },
            ],
        },
    ],
};
