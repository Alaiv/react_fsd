import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import AboutPage from './AboutPage';

export default {
    title: 'pages/ForbiddenPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const AboutPageLight = Template.bind({});
AboutPageLight.args = {};

AboutPageLight.decorators = [StoreDecorator({})];

export const AboutPageDark = Template.bind({});
AboutPageDark.args = {};

AboutPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
