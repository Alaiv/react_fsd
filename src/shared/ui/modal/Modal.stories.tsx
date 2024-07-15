import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/themeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum quaerat quos! Atque dolores eius excepturi exercitationem fugit illo inventore ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
    isOpen: true,
};

export const ModalDark = Template.bind({});
ModalDark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem earum quaerat quos! Atque dolores eius excepturi exercitationem fugit illo inventore ipsa iure laborum magnam, odit quasi rerum, sapiente totam, vero?',
    isOpen: true,
};

ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
