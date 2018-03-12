# insensitive-object

Manipulate JavaScript object case insensitively

## Example

```js
const insensitiveObject = require('insensitive-object')
const obj = {
    "Accept": "*/*",
    "user-AGENT": "Mozilla/5.0",
    "cOOKIE": "SID=123;"
}

insensitiveObject.get(obj, 'user-agent') // "Mozilla/5.0"

insensitiveObject.set(obj, 'user-agent', 'Googlebot')
// { "Accept": "*/*", "user-agent": "Googlebot", "cOOKIE": "SID=123;" }

insensitiveObject.assign(obj, { 'accept':'application/json', 'accept-encoding':'gzip' })
// { "accept": "application/json", "user-agent": "Googlebot", "cOOKIE": "SID=123;", "accept-encoding":"gzip" }

insensitiveObject.remove(obj, 'cookie')
// { "accept": "application/json", "user-agent": "Googlebot", "accept-encoding":"gzip" }
```

## TODO

+ Publish to NPM
+ Publish to CDN
