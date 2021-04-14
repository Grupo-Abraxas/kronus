# kronus

> Minimally designed and structured component framework to run projects quickly, easily and highly configurable

[![NPM](https://img.shields.io/npm/v/kronus.svg)](https://www.npmjs.com/package/kronus)



## Documentation

Currently the project is starting, so, the documentation is pending.



## To use in your project

#### Install

```shell
npm install kronus
```

or

```shell
yarn add kronus
```

#### In your main SCSS file

```scss
@import "~kronus/scss/kronus";
```

#### Importing and using

```jsx
import React from 'react'
import { Button } from 'kronus'
// or import it by component
import Button from 'kronus/Button'

const Example = () => {
  render() {
    return (
      <Button>Example</Button>
    )
  }
}

export default Example
```



## Available scripts

##### `npm start`
##### `npm run test`
##### `npm run build`



## License

Code released under the [MIT License](https://github.com/Grupo-Abraxas/kronus/blob/master/LICENSE)