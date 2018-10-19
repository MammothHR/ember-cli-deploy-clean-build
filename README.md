ember-cli-deploy-clean-build
==============================================================================

[Short description of the addon.]

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-deploy-clean-build
```


Usage
------------------------------------------------------------------------------

While it may be ideal to deploy from a clean environment (such as CI), sometimes you need to do that from a local build.  When doing this, there are several things that can sneak into a build with undesirable outcomes:
- unstaged changes
- symlinked packages

This plugs into the ember-cli-deploy pipeline and ensures a clean build.

It currently supports a single environmenet variable to override: `SAFETY_ASSURED`, e.g.

```
SAFETY_ASSURED=1 ember deploy production
```



NOTE: this makes use of bash commands, so currently only supports Linux environments.


Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd ember-cli-deploy-clean-build`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
