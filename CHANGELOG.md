# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.2.4"></a>
## [0.2.4](https://github.com/dcos-labs/mesos-client/compare/v0.2.3...v0.2.4) (2018-08-15)



<a name="0.2.3"></a>
## [0.2.3](https://github.com/dcos-labs/mesos-client/compare/v0.2.2...v0.2.3) (2018-06-27)



<a name="0.2.2"></a>
## [0.2.2](https://github.com/dcos-labs/mesos-client/compare/v0.2.1...v0.2.2) (2018-06-27)



<a name="0.2.1"></a>
## [0.2.1](https://github.com/dcos-labs/mesos-client/compare/v0.2.0...v0.2.1) (2018-03-27)



<a name="0.2.0"></a>
# [0.2.0](https://github.com/dcos-labs/mesos-client/compare/v0.1.10...v0.2.0) (2018-02-21)


### Features

* **stream/index:** remove retry(-1) ([2ef5dfd](https://github.com/dcos-labs/mesos-client/commit/2ef5dfd))


### BREAKING CHANGES

* **stream/index:** stream won't retry automatically when connection drops
From now on you should implement the retry mechanism in your application.

Before:

```
stream({ type: "SUBSCRIBE" }).subscribe(...);
```

After:

```
stream({ type: "SUBSCRIBE" }).retry(-1).subscribe(...);
```



<a name="0.1.10"></a>
## [0.1.10](https://github.com/dcos-labs/mesos-client/compare/v0.1.9...v0.1.10) (2018-01-09)


### Bug Fixes

* **readRecordioRecords:** copy strings to avoid meamory leak ([05cf1fa](https://github.com/dcos-labs/mesos-client/commit/05cf1fa))



<a name="0.1.9"></a>
## [0.1.9](https://github.com/dcos-labs/mesos-client/compare/v0.1.8...v0.1.9) (2017-12-14)



<a name="0.1.8"></a>
## [0.1.8](https://github.com/dcos-labs/mesos-client/compare/v0.1.7...v0.1.8) (2017-11-27)


### Bug Fixes

* **stream:** remove arbitrary timeout ([ef5ae42](https://github.com/dcos-labs/mesos-client/commit/ef5ae42))



<a name="0.1.7"></a>
## [0.1.7](https://github.com/dcos-labs/mesos-client/compare/v0.1.6...v0.1.7) (2017-11-24)



<a name="0.1.6"></a>
## [0.1.6](https://github.com/dcos-labs/mesos-client/compare/v0.1.5...v0.1.6) (2017-11-16)



<a name="0.1.5"></a>
## [0.1.5](https://github.com/dcos-labs/mesos-client/compare/v0.1.4...v0.1.5) (2017-11-07)


### Features

* **request:** switch from json to raw text response ([b3af5da](https://github.com/dcos-labs/mesos-client/commit/b3af5da))


### BREAKING CHANGES

* **request:** Switching from parsed JSON to raw text response
as a return value for `request` function.

As `stream` function returns raw text and not JSON we've made a decision
to unify the interface

Before:
```
request({...}).subscribe((jsonData) => ...);
```

After:
```
request({...}).map(data => JSON.parse(data)).subscribe((jsonData) => ...);
```



<a name="0.1.4"></a>
## [0.1.4](https://github.com/dcos-labs/mesos-client/compare/v0.1.2...v0.1.4) (2017-11-03)


### Features

* allow changing mesos URL ([ba46693](https://github.com/dcos-labs/mesos-client/commit/ba46693))
* **stream:** increase timeout interval to be 30 seconds ([81f0129](https://github.com/dcos-labs/mesos-client/commit/81f0129))


### BREAKING CHANGES

* baseUrl argument changes its behaviour
Instead of being a baseUrl it is becomming a complete url:

Before:

request({...}, "base/url")
stream({...}, "base/url")

After:

stream({...}, "base/url/mesos/api/v1")
request({...}, "base/url/mesos/api/v1")
