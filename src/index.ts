import * as ts from 'typescript';
import * as Lint from 'tslint';

/**
 * Implementation of no-react-asterisk-import rule
 */
export class Rule extends Lint.Rules.AbstractRule {
    public static metadata = {
        ruleName: 'no-react-asterisk-imports',
        type: 'maintainability',
        description: 'Avoid using asterisk imports with React',
        severity: 'Low'
    }

    public static FAILURE_STRING = "Use import React, { ... } instead";

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(new NoReactAsteriskImportsWalker(sourceFile, this.getOptions()));
    }
}

export class NoReactAsteriskImportsWalker extends Lint.RuleWalker {
    public visitImportDeclaration(node: ts.ImportDeclaration) {
        if (node.importClause.name != null) {
            const name: string = node.importClause.name.text;

            if (node.moduleSpecifier.kind === ts.SyntaxKind.StringLiteral) {
                const moduleName: string = (<ts.StringLiteral>node.moduleSpecifier).text;
                this.validateImport(node, name, moduleName);
            }
        }
        
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));

        super.visitImportDeclaration(node);
    }

    private validateImport(node: ts.ImportEqualsDeclaration | ts.ImportDeclaration, importedName: string, moduleName: string) {
        if (moduleName === 'react') {

        }
    }
}