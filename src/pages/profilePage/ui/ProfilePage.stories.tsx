import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/imgs/AvatarLogo.png';
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

MainPageLight.decorators = [StoreDecorator({
    profile: {
        formData: {
            username: 'Aleks',
            age: 22,
            city: 'spb',
            first: 'aleksandr',
            lastname: 'kudr',
            country: Country.England,
            currency: Currency.RUB,
            avatar,
        },
        readonly: true,
    },
})];

export const MainPageDark = Template.bind({});
MainPageDark.args = {};

MainPageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        formData: {
            username: 'Aleks',
            age: 22,
            city: 'spb',
            first: 'aleksandr',
            lastname: 'kudr',
            country: Country.England,
            currency: Currency.RUB,
            avatar,
        },
        readonly: true,
    },
})];

export const MainPageError = Template.bind({});
MainPageError.args = {
};

MainPageError.decorators = [StoreDecorator({
    profile: {
        error: 'Some error',
        readonly: true,
    },
})];

export const MainPageLoading = Template.bind({});
MainPageLoading.args = {
};

MainPageLoading.decorators = [StoreDecorator({
    profile: {
        isLoading: true,
        readonly: true,
    },
})];
