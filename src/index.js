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
var Lint = require("tslint");
var Rule = /** @class */ (function (_super) {
    __extends(Rule, _super);
    function Rule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rule.prototype.apply = function (sourceFile) {
        return this.applyWithWalker(new NoReactAsteriskImportsWalker(sourceFile, this.getOptions()));
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
        this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
        _super.prototype.visitImportDeclaration.call(this, node);
    };
    return NoReactAsteriskImportsWalker;
}(Lint.RuleWalker));
exports.NoReactAsteriskImportsWalker = NoReactAsteriskImportsWalker;
