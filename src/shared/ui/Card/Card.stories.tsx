import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardNormal = Template.bind({});
CardNormal.args = {
    children: <Text text="hello there" title="idk" />,
};
