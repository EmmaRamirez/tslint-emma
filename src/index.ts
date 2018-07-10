import * as ts from 'typescript';
import * as Lint from 'tslint';

/**
 * Implementation of no-react-asterisk-import rule
 */
export class Rule extends Lint.Rules.AbstractRule {

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

        super.visitImportDeclaration(node);
    }

    private validateImport(node: ts.ImportEqualsDeclaration | ts.ImportDeclaration, importedName: string, moduleName: string) {
        if (moduleName === 'react') {
            if (importedName.match('*') != null) {
                this.addFailureAtNode(node, Rule.FAILURE_STRING);
            }
        }
    }
}