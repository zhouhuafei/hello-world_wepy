module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.wpy files
    plugins: [
        'html',
    ],
    settings: {
        'html/html-extensions': ['.html', '.wpy'],
    },
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        // 'arrow-parens': 0, // 要求箭头函数的参数使用圆括号
        // allow async-await
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'prefer-const': 2, // 建议使用const
        'no-new': 0, // 禁止new一个实例后不赋值
        'no-unused-vars': 0, // 禁止未使用过的变量
        'indent': [2, 4, { SwitchCase: 1 }], // 强制使用一致的缩进
        'semi': [2, 'always'], // 要求或禁止使用分号代替 ASI(自动分号插入)
        'comma-dangle': [2, 'always-multiline'], // 要求或禁止使用拖尾逗号
        'space-before-function-paren': 0, // 要求或禁止函数圆括号之前有一个空格
        'generator-star-spacing': 0, // 强制 generator 函数中 * 号周围使用一致的空格
    },
};
