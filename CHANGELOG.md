# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.1.3"></a>
## [0.1.3](https://github.com/dcos-labs/mesos-client/compare/v0.1.2...v0.1.3) (2017-11-03)


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