const babel = require('@babel/core');

const code = `
  const App = () => {
    const obj = {a:1,b:2}
    return <div className="test" {...obj}>hello jsx</div>
  }
`;
const result = babel.transformFileSync(code, { plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]] });

// console.log('result', result);
