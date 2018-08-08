import * as ts from 'typescript';
import * as Lint from 'tslint';

export class Rule extends Lint.Rules.AbstractRule {
    public static metadata: Lint.IRuleMetadata = {
        ruleName: `relative-import-depth`,
        description: `Sets the depth of relative imports`,
        type: 'maintainability',
        typescriptOnly: false,
        options: {
            type: "number"
        },
        optionsDescription: Lint.Utils.dedent`
            Must be a number. Set to -1 to allow any depth.
        `,
        optionExamples: [
            [0],
            [1],
            [2],
        ]
    }

    public static FAILURE_STRING = `A relative import exceeds the set depth.`;

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithWalker(
            new ImportDepthsWalker(sourceFile, this.getOptions())
        );
    }
}

function walk(ctx: Lint.WalkContext<void>) {
    const diagnosticRegex: RegExp = null;


}

export class ImportDepthsWalker extends Lint.RuleWalker {
    public visitImportDeclaration(node: ts.ImportDeclaration) {
        
        super.visitImportDeclaration(node);
    }

    private validateImport(node: ts.ImportEqualsDeclaration | ts.ImportDeclaration, importedName: string, moduleName: string) {

    }
}