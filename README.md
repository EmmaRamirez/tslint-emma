# tslint-emma

> ⚠️ This needs a better name.

This isn't a stable library. It's mostly for me to mess-around with tslint rules.

### Rules

Rule Name   | Description      | Since
:-----------| :-------------- | --------
`no-react-asterisk-export` | Bans use of imports styled as `import * as React from 'react'`. Prefer to use `import React, { Component, etc } from 'react'` | |
`ban-ts-ignore` | Bans use of `// @ts-ignore` comments | |