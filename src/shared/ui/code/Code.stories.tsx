import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodeBlockBasic = Template.bind({});
CodeBlockBasic.args = {
    code: 'import React from \'react\';\n'
        + 'import { ComponentMeta, ComponentStory } from \'@storybook/react\';\n'
        + 'import { StoreDecorator } from \'shared/config/storybook/StoreDecorator/StoreDecorator\';\n'
        + 'import { ArticleCodeBlock } from \'./ArticleCodeBlock\';\n'
        + '\n'
        + 'export default {\n'
        + '    title: \'entities/ArticleCodeBlock\',\n'
        + '    component: ArticleCodeBlock,\n'
        + '    argTypes: {\n'
        + '        backgroundColor: { control: \'color\' },\n'
        + '    },\n'
        + '} as ComponentMeta<typeof ArticleCodeBlock>;\n'
        + '\n'
        + 'const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;\n'
        + '\n'
        + 'export const ArticleCodeBlockBasic = Template.bind({});\n'
        + 'ArticleCodeBlockBasic.args = {\n'
        + '    code: \'\',\n'
        + '};\n'
        + '\n'
        + 'ArticleCodeBlockBasic.decorators = [StoreDecorator({})];\n',
};

CodeBlockBasic.decorators = [StoreDecorator({})];
