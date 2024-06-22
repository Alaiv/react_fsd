import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Button, ButtonSize, ButtonType } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    btnType: ButtonType.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    btnType: ButtonType.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    btnType: ButtonType.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BtnBackground = Template.bind({});
BtnBackground.args = {
    children: 'Text',
    btnType: ButtonType.BACKGROUND,
};

export const BtnInvertedBackground = Template.bind({});
BtnInvertedBackground.args = {
    children: 'Text',
    btnType: ButtonType.BACKGROUND_INVERTED,
};

export const BtnMSquared = Template.bind({});
BtnMSquared.args = {
    children: '>',
    square: true,
    buttonSize: ButtonSize.M,
};

export const BtnLSquared = Template.bind({});
BtnLSquared.args = {
    children: '<',
    square: true,
    buttonSize: ButtonSize.L,
};

export const BtnXLSquared = Template.bind({});
BtnXLSquared.args = {
    children: '>',
    square: true,
    buttonSize: ButtonSize.XL,
};

export const BtnM = Template.bind({});
BtnM.args = {
    children: '>',
    buttonSize: ButtonSize.M,
};

export const BtnL = Template.bind({});
BtnL.args = {
    children: '>',
    buttonSize: ButtonSize.L,
};

export const BtnXL = Template.bind({});
BtnXL.args = {
    children: '>',
    buttonSize: ButtonSize.XL,
};

export const BtnDisabled = Template.bind({});
BtnDisabled.args = {
    children: 'test',
    btnType: ButtonType.OUTLINE,
    disabled: true,
};
