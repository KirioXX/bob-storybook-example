# bob-storybook-example

React(-Native) components for projects

[🎨 Storybook](https://kirioxx.github.io/bob-storybook-example/?path=/story/atoms-defaultbutton--with-text)

## Installation

```sh
npm install @kirioxx/bob-storybook-example
```

## Installation from private registry

Request a personal access token on GitHub under:<br/>
__Settings > Developer settings > Personal access tokens > Generate new token__<br/>
enable for this token __[repo]__ and __[read:packages]__ access.

Use your token to authenticate your self with the private registry:
```sh
npm login --scope=@kirioxx --registry=https://npm.pkg.github.com
```

add to your project root a `.npmrc` file with this content:
```
@kirioxx:registry=https://npm.pkg.github.com
```

Install the package via
```sh
npm install @kirioxx/bob-storybook-example
```

## Usage

```js
import { DefaultButton } from "bob-storybook-example";

// ...
const App = () => (<div>
  <DefaultButton onPress={() => alert('Hello World')}>
    Click Me!
  </DefaultButton>
</div>);

export default App;
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
