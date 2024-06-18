import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { NotFoundPage } from './NotFoundPage';

export default {
    title: 'pages/MainPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args} />;

export const NotFoundPageLight = Template.bind({});
NotFoundPageLight.args = {};

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {};

NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
