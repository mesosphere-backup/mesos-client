# Apache Mesos Client [![Build Status](https://travis-ci.org/dcos-labs/mesos-client.svg?branch=master)](https://travis-ci.org/dcos-labs/mesos-client)

---
👩‍🔬  Please be aware that this package is still experimental —
changes to the interface  and underlying implementation are likely,
and future development or maintenance is not guaranteed.

---

This package provides a nice way of connecting to the Mesos Event Stream API. It is a wrapper that uses `@dcos/http-service` to establish a connection and `@dcos/recordio` package to parse the incoming data and deliver it as a `Rx.Observable`.

## Example
```javascript
import { stream, request } from "@dcos/mesos-client";

stream({ type: "SUBSCRIBE" }).subscribe(
  value => console.log(value),
  error => console.log(error),
  () => console.log("complete")
);

request({ type: "GET_FLAGS" }).subscribe(
  value => console.log(value),
  error => console.log(error),
  () => console.log("complete")
);
```

`stream` opens a persistent connection to [Mesos HTTP Operator Api](http://mesos.apache.org/documentation/latest/operator-http-api) Event Stream and returns `rxjs` Observable.

`request` makes a call to the [Mesos HTTP Operator Api](http://mesos.apache.org/documentation/latest/operator-http-api)  and returns response as an `rxjs` Observable.
