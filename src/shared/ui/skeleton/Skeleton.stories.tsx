import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const SkeletonBasic = Template.bind({});
SkeletonBasic.args = {
    height: 350,
    width: 150,
};

export const SkeletonCircle = Template.bind({});
SkeletonCircle.args = {
    borderRadius: '50%',
    height: 100,
    width: 100,
};

export const SkeletonDark = Template.bind({});
SkeletonDark.args = {
    borderRadius: '50%',
    height: 100,
    width: 100,
};
SkeletonDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SkeletonPurple = Template.bind({});
SkeletonPurple.args = {
    height: 100,
    width: '100%',
};
SkeletonPurple.decorators = [ThemeDecorator(Theme.PURPLE)];
