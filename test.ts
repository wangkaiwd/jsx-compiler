import * as babel from '@babel/core'; // transform
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import types from '@babel/types';
import transformReactJsx from '@babel/plugin-transform-react-jsx';
// 1. babel plugin execute opportunity
// 2. parse jsx
// Stages of Babel: source -> parse -> transform -> generate
// https://github.com/babel/babel/blob/main/CONTRIBUTING.md#contributing
const code = `
  const App = () => {
    const obj = {a:1,b:2}
    return <div className="test" {...obj}>hello jsx</div>
  }
`;

// const result = babel.transformSync(code, { plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]] });
// console.log('result', result?.code);

const ast = parse(code, { plugins: ['jsx'] });

const newAst = traverse(ast, transformReactJsx({ types }));
console.log('newAst', newAst);
