# HttpAgent

## How to release ARSNN

To release a ARSNN version:

- Bump the project version in `package.json` in a PR and merge it.

- When the PR is merged, trigger the
  [Release Workflow](https://github.com/scality/httpagent/actions/workflows/release.yaml)
  via the workflow dispatch function. Use the `development/*` branch.

- You MUST fill the form with a tag. The new version you enter MUST be a valid
  [SemVer](https://semver.org) version, matching with your `package.json`
  version.

- The workflow will dynamically tag the project and generate a release
  changelog.
