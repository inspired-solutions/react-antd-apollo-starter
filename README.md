<h1 align="center"><strong>Boilerplate for a Basic React and Ant Design Application</strong></h1>

<br />

![](https://tomas.piestansky.cz/static/ant-menu-hero-53d994835d83a2613df8013ae9537376-61a4d.png)

<div align="center"><strong>🚀 Bootstrap your React Ant Design App in seconds</strong></div>
<div align="center">Basic starter kit for a React and Ant Design Application - based on best practices from the React community.</div>

## Features

- **Webpack 4:** Includes configuration for production and development mode
- **Ant Design Components** Includes integration with Ant Design Components
- **Extensible**: Simple and flexible – easy to adjust and extend
- **No configuration overhead**: Preconfigured [`webpack.config.babel.js`](./webpack.config.babel.js) and [`webpack.config.dev.babel.js`](./webpack.config.dev.babel.js)

## Requirements

You need to have the [Yarn](https://github.com/graphql-cli/graphql-cli) installed to bootstrap your React and Ant Design App using `yarn install`
```sh
npm i -g yarn
```

## Getting started

```sh
# 1. Clone the project
git clone git@github.com:inspired-solutions/react-antd-starter.git

# 2. Navigate to the new project
cd react-antd-starter

# 3. Install dependencies
yarn

# 4. Start server (runs on http://localhost:4000)
yarn dev
```

## Documentation

### Commands

* `yarn build` generate compile files on `./dist` folder
* `yarn dev` starts server in development mode on `http://localhost:4000`
* `yarn test` run jest form tests (`*.test.js` or `*.spec.js` or in `__test__` directory)

> **Note**: We recommend that you're using **yarn** to install packages from packages.json and **npm** to install global packages like **yarn**

### Project structure

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── src/ `  | _Contains all files that are related to the React and Ant Design Application_ |\
| `　　├── App.js` | React Application |
| `　　├── App.scss` | Main Styles |
| `　　├── App.test.js` | Test for the Application |
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

The react-antd-starter are maintained by the Inspired Solutions.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#react-antd-starter`](https://insperd-solutions.slack.com/messages/react-antd-starter) channel on our [Slack](https://inspired-solutions.slack.com/).
