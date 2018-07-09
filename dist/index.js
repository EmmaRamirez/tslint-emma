"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var ts = require("typescript");
var Lint = require("tslint");
/**
 * Implementation of no-react-asterisk-import rule
 */
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoReactAsteriskImportsWalker(sourceFile, this.getOptions()));
    };
    Rule.metadata = {
        ruleName: 'no-react-asterisk-imports',
        type: 'maintainability',
        description: 'Avoid using asterisk imports with React',
        severity: 'Low'
    };
    Rule.FAILURE_STRING = "Use import React, { ... } instead";
    return Rule;
}(Lint.Rules.AbstractRule));
exports.Rule = Rule;
var NoReactAsteriskImportsWalker = /** @class */ (function (_super) {
    __extends(NoReactAsteriskImportsWalker, _super);
    function NoReactAsteriskImportsWalker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoReactAsteriskImportsWalker.prototype.visitImportDeclaration = function (node) {
        if (node.importClause.name != null) {
            var name_1 = node.importClause.name.text;
            if (node.moduleSpecifier.kind === ts.SyntaxKind.StringLiteral) {
                var moduleName = node.moduleSpecifier.text;
                this.validateImport(node, name_1, moduleName);
            }
        }
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    NoReactAsteriskImportsWalker.prototype.validateImport = function (node, importedName, moduleName) {
        if (moduleName === 'react') {
        }
    };
    return NoReactAsteriskImportsWalker;
}(Lint.RuleWalker));
exports.NoReactAsteriskImportsWalker = NoReactAsteriskImportsWalker;
