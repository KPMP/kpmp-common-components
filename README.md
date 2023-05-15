# kpmp-common-components
KPMP's common set of cross application react componenets


## Installation

```
$ npm i kpmp-common-components --save
```

## Usage

Import the component
```
import { NavBar, NavFooter } from 'kpmp-common-components';
```

Call the component inside render()
```
<NavBar app='atlas'/>
<NavFooter app='atlas'/>
```


## Currently Supported Apps

atlas



## Developers

Build after any changes

`$ npm install`
`$ npm run build`

Run pack to create a temp package for testing in your project

`$ npm pack`

Copy the tgz package to wherever you're test project is

Delete your current package-lock.json file

modify the package.json to include `'kpmp-common-components': 'file:./kpmp-common-components-x.y.z.tgz'`

Delete node modules and re-install

`$ rm -rf node_modules && npm i`

## To publish changes to NPM
`$ npm publish`

If you are not logged in, you may need to login first
`$ npm login`
