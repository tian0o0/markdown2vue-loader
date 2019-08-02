## markdown2vue-loader

> A webpack loader to compile markdown to vue

### Install
```
npm install -D @findx/markdown2vue-loader
```

### Usage

```js
module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.md$/,
                use: ['vue-loader', '@findx/markdown2vue-loader']
            }
        ]
    }
}
```

You can also use it by simple options:
```js
module.exports = {
    // ...
    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    'vue-loader',
                    {
                        loader: '@findx/markdown2vue-loader',
                        options: {
                            linkSymbol: '#' // default: 👉
                        }
                    }
                ]
            }
        ]
    }
}
```


