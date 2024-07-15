import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const isAbsolute = (value: string) => {
    const paths = ['shared', 'app', 'entities', 'features', 'widgets', 'pages'];

    return paths.some((path) => value.startsWith(path));
};

files.forEach((file) => {
    const importDeclarations = file.getImportDeclarations();

    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
