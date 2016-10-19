# node-promise-sleep

## install

```
npm i @you21979/promise-sleep
```

# usage

```
const sleep = require('@you21979/promise-sleep');
sleep(1000, "test data").
  then( res => sleep(2000, res)).
  then( res => sleep(3000, res)).
  then( res => sleep(4000, res)).
  then( res => console.log(res))
```


