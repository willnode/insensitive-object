# insensitive-object

[![Build Status](https://travis-ci.org/willnode/insensitive-object.svg?branch=master)](https://travis-ci.org/willnode/insensitive-object)

Manipulate JavaScript object case insensitively.

Useful for manipulating 3rd-party objects, like Parsed JSON or HTTP Headers.

## Install

```
npm i insensitive-object --save
```

## Usage

```js
const insensitiveObject = require('insensitive-object')
const obj = {
    "Accept": "*/*",
    "user-AGENT": "Mozilla/5.0",
    "cOOKIE": "SID=123;"
}

insensitiveObject.get(obj, 'user-agent')
// "Mozilla/5.0"

insensitiveObject.set(obj, 'user-agent', 'Googlebot')
// { "Accept": "*/*", "user-agent": "Googlebot", "cOOKIE": "SID=123;" }

insensitiveObject.assign(obj, { 'accept':'application/json', 'accept-encoding':'gzip' })
// { "accept": "application/json", "user-agent": "Googlebot", "cOOKIE": "SID=123;", "accept-encoding":"gzip" }

insensitiveObject.remove(obj, 'cookie')
// { "accept": "application/json", "user-agent": "Googlebot", "accept-encoding":"gzip" }
```

#### More `Set` Options (Optional)

```js
const insensitiveObject = require('insensitive-object')
const obj = {
    "cOOKIE": "foo",
    "CoOKIE": "bar"
}

const options = {
    keepGoing: true, // don't quit after first match found (default is false)
    keepOriginalCasing: true, // preserve original casing (default is false)
}

insensitiveObject.set(obj, 'cookie', 'baz', options)
// { "cOOKIE": "baz", "CoOKIE": "baz" }
```

**PS** `inso` can be a great shorter alternative to `insensitiveObject`.

## Requirements

#### Node

Node.JS minimum version: **6.x.x**.

#### Browser (CDN)

(TODO)
