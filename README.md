# cn-ex

The utility functions of class string groups and conditionals.

### `Required`

`*`

### [cn-ex repository](https://github.com/ioeridev/cn-ex)

## Installation [cn-ex:](https://github.com/ioeridev/cn-ex)

using [npm](https://www.npmjs.com/package/cn-ex)

```cirru
npm install cn-ex
```

using [yarn](https://yarnpkg.com/)

```cirru
yarn add cn-ex
```

## Usage

```js
import { cnx } from 'cn-ex';
// const { cnx}  = require('cnx');

const clNx = cnx(
  ['class_root', `variant-${variant}`, `size-${props.size}`, !(variant === 'unstyled') && classes.root],
  classNames?.root,
  className
);
  ...
  // Contoh dengan banyak nilaiPertama dan nilaiKedua
<div className={cnx(['class1', 'class2', clNx], classNames?.root, className, `additionalClass1`, `additionalClass2`)} />
```

🚨

In practice, some of our syntax/code approach may be incompatible with the library and version you are using.

🏗️

You can join for testing or take part in providing updates.

## Contributors

<a href="https://github.com/ioeridev/ioeri/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ioeridev/ioeri" />
</a>

[Become a contributor](https://github.com/ioeridev/ioeri/blob/main/CONTRIBUTING.md)

## License

MIT License

[© ioeridev](https://github.com/ioeridev/cn-ex/blob/main/LICENSE)
