<h1 align="center"><strong>Boilerplate for a Basic React + Ant Design + Apollo Application</strong></h1>

<br />

![](https://lh3.googleusercontent.com/hyByt57CbNjtZZyvtkSTcLRQtjI_ewK2sZ7V3d7_ha2ZXKQZu2S7PIEzM3u5lngSWaNoAxzbkh8=s700)

<div align="center"><strong>🚀 Bootstrap your React Ant Design Apollo App in seconds</strong></div>
<div align="center">Basic starter kit for a React + Ant Design + Apollo Application - based on best practices from the React community.</div>

## Features

- **Webpack 4:** Includes configuration for production and development mode
- **Ant Design Components** Includes integration with Ant Design Components
- **Apollo Client** Includes integration with Apollo Client
- **Extensible**: Simple and flexible – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`webpack.config.babel.js`](./webpack.config.babel.js) and [`webpack.config.dev.babel.js`](./webpack.config.dev.babel.js)

## Requirements

You need to have the [Yarn](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your React + Ant Design + Apollo App using `yarn install`
```sh
npm i -g yarn
```

## Getting started

```sh
# 1. Clone the project
git clone git@github.com:inspired-solutions/react-antd-apollo-starter.git

# 2. Navigate to the new project
cd react-antd-apollo-starter

# 3. Install dependencies
yarn

# 4. Start server (runs on http://localhost:4000)
yarn dev
```

## Configuring

```sh
# 1. Install eslint and babel-eslint
npm install eslint babel-eslint -g
```

## Documentation

### Commands

* `yarn build` generate compile files on `./dist` folder
* `yarn dev` starts server in development mode on [http://localhost:4000](http://localhost:4000)
* `yarn test` run jest form tests (`*.test.js` or `*.spec.js` or in `__test__` directory)

> **Note**: We recommend that you're using **yarn** to install packages from packages.json and **npm** to install global packages like **yarn**

### Project structure

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── src/ `  | _Contains all files that are related to the React and Ant Design Application_ |\
| `　　├── components/` | _Contains all components_ |
| `　　　　├── App.js` | React Application |
| `　　　　├── ExchangeRates.js` | Component test using Query component from Apollo |
| `　　├── config/` | _Contains config files_ |
| `　　├── queries/ ` | _Contains all query files that you will use_ |
| `　　├── styles/ ` | _Contains all styles_ |
| `　　├── tests/` | _Contains all tests for the Application_ |
| `　　├── utils/` | _Contains utilities_ |
| `　　　　├── graphql.js` | Create your Apollo Client |
| `　　├── index.js` | Main file related to Webpack |
| `　　├── index.pug` | Main Template |
| `├── .babelrc` | Config for Babel |
| `├── .editorconfig` | Config for editor |
| `├── .eslintrc` | Config for Eslint |
| `├── .gitignore` | Config file for ingore files |
| `├── .prettierrc` | Config for Prettier |
| `├── package.json` | Package file |
| `├── README.md` | Main Documentaion |
| `├── webpack.config.babel.js` | Webpack config for production |
| `├── webpack.config.dev.babel.js` | Webpack config for development |
| `├── yarn.lock` | Lock file generate by Yarn |

## Contributing

The react-antd-apollo-starter are maintained by the Inspired Solutions.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#react-antd-apollo-starter`](https://inspired-solutions.slack.com/messages/react-antd-apollo-starter) channel on our [Slack](https://inspired-solutions.slack.com/).
