import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbiddenProps = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(current) {
                        const { name } = current.node;

                        if (forbiddenProps.includes(name)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
