import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const MainPageLight = Template.bind({});
MainPageLight.args = {};

MainPageLight.decorators = [StoreDecorator({})];

export const MainPageDark = Template.bind({});
MainPageDark.args = {};

MainPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
