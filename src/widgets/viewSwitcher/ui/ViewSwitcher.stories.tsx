import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ViewSwitcher } from './ViewSwitcher';

export default {
    title: 'widgets/ViewSwitcher',
    component: ViewSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ViewSwitcher>;

const Template: ComponentStory<typeof ViewSwitcher> = (args) => <ViewSwitcher {...args} />;

export const ViewSwitcherNormal = Template.bind({});
ViewSwitcherNormal.args = {};
