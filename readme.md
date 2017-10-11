<p align="center">
  <img src="https://octodex.github.com/images/codercat.jpg" height="200px"/>
  <br><br>
  <b>Check if a github repo is public</b>
  <br>
</p>

&nbsp;

[![Build Status](https://travis-ci.org/siddharthkp/is-public.svg?branch=master)](https://travis-ci.org/siddharthkp/is-public)

&nbsp;

#### usage

From the CLI:

```
npx is-public siddharthkp/bundlesize
```

or

```
npm install is-public -g

is-public siddharthkp/bundlesize
```

&nbsp;

In your application:

```js
const isPublic = require('is-public')

isPublic('siddharthkp/bundlesize')
  .then(public => console.log(public))
  .catch(error => console.log(error))
}
```

&nbsp;

#### like it?

:star: this repo

&nbsp;

#### license

MIT © [siddharthkp](https://github.com/siddharthkp)
