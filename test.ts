import * as babel from '@babel/core'; // transform
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

// todo: debug , try to find source code of parse jsx syntax
const result = babel.transformSync(code, { plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]] });
console.log('result', result);
// babel plugin:
//  plugin type: https://babeljs.io/docs/en/options#entrytarget
//   function or object
//   function: return object which own visitor property
//   object: own visitor property


