import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'center',
    direction: 'column',
};

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'center',
    direction: 'row',
};

export const RowGap = Template.bind({});
RowGap.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'center',
    direction: 'row',
    gap: 16,
};

export const ColumnGap = Template.bind({});
ColumnGap.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'start',
    direction: 'column',
    gap: 16,
};

export const RowEnd = Template.bind({});
RowEnd.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'end',
    justify: 'end',
    direction: 'row',
    gap: 8,
};

export const ColumnBetween = Template.bind({});
ColumnBetween.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'end',
    justify: 'between',
    direction: 'row',
    gap: 8,
};

export const RowStart = Template.bind({});
RowStart.args = {
    children: (
        <>
            <div>First</div>
            <div>Second</div>
            <div>Third</div>
            <div>Fourth</div>
        </>
    ),
    align: 'start',
    justify: 'start',
    direction: 'row',
    gap: 4,
};
