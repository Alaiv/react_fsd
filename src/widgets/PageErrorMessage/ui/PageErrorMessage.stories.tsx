import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageErrorMessage } from './PageErrorMessage';

export default {
    title: 'widgets/PageErrorMessage',
    component: PageErrorMessage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof PageErrorMessage>;

const Template: ComponentStory<typeof PageErrorMessage> = (args) => <PageErrorMessage {...args} />;

export const PageErrorMessageLight = Template.bind({});
PageErrorMessageLight.args = {};

export const PageErrorMessageDark = Template.bind({});
PageErrorMessageDark.args = {};

PageErrorMessageDark.decorators = [ThemeDecorator(Theme.DARK)];
