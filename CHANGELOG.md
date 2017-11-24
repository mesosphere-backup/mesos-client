# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
