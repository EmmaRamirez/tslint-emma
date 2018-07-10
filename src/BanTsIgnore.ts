import * as ts from 'typescript';
import * as Lint from 'tslint';
import { forEachComment } from 'tsutils';

const OPTION_ALLOW_WITH_EXPLANATION = "allow-with-explanation";

export class Rule extends Lint.Rules.AbstractRule {
    public static metadata: Lint.IRuleMetadata = {
        ruleName: `ban-ts-ignore`,
        description: `Bans '// @ts-ignore' comments from being used`,
        type: `typescript`,
        typescriptOnly: true,
        options: {
            type: "array",
            items: [
                {
                    type: "string",
                    enum: [OPTION_ALLOW_WITH_EXPLANATION]
                }
            ],
            additionalItems: false,
        },
        optionsDescription: Lint.Utils.dedent`
            One of the following arguments must be provided:

            \`true\` or \`false\` - If @ts-ignore is banned

            \`${OPTION_ALLOW_WITH_EXPLANATION}\` allows comments that have an explanation
        `,
        optionExamples: [
            [true, OPTION_ALLOW_WITH_EXPLANATION],
            [true],
            [false],
        ]
    }

    public static FAILURE_STRING = `Usage of @ts-ignore is banned.`;

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, walk);
    }
}

function walk(ctx: Lint.WalkContext<void>) {
    const diagnosticRegex = /^\s*\/\/\/?\s*@ts-ignore/;

    forEachComment(ctx.sourceFile, (fullText, comment) => {
        const commentText = fullText.slice(comment.pos, comment.end);
        if (Boolean(commentText.match(diagnosticRegex))) {
            ctx.addFailure(comment.pos, comment.end, Rule.FAILURE_STRING);
        }
    })
}