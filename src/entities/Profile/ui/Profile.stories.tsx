import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import avatar from 'shared/assets/imgs/AvatarLogo.png';
import { Profile } from './Profile';

export default {
    title: 'entities/Profile',
    component: Profile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

const data = {
    username: 'Aleks',
    age: 24,
    city: 'spb',
    first: 'aleksandr',
    lastname: 'kudr',
    country: Country.England,
    currency: Currency.RUB,
    avatar,
};

export const ProfileLight = Template.bind({});
ProfileLight.args = {
    isReadonly: true,
    formData: data,
};

export const ProfileDark = Template.bind({});
ProfileDark.args = {
    isReadonly: true,
    formData: data,
};

ProfileDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ProfileEditable = Template.bind({});
ProfileEditable.args = {
    isReadonly: false,
    formData: data,

};
