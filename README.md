# wut-exercise

This is an **yoshi editor flow** (out of iframe) project.

The main idea of Editor Flow is to provide the best developer experience, the most optimized bundle, and a lot of features to reduce boilerplate on the user's side.

Loading experiments and translations, sending errors to sentry, monitoring client-side and server-side rendering time, sled end-to-end testing, providing relevant bi logger, live reload, and local overrides - everything is being provided from the box and works automatically.

## Setup 🔧

##### Install dependencies:

```bash
npm install
```

##### Start the project:

```bash
npm start
```

In case you are starting it the first time - the basic editor flow guide will be opened. It includes steps you need to take to finish the configuration.

If `VIEWER_START_URL`, `EDITOR_START_URL` and `ADI_START_URL` were configured - the flow will ask you to press the relevant key on keyboard to open chrome with viewer, editor or ADI urls with local overrides. Then you can just start to develop the out of iframe widget in a production environment with HMR.

## Deployment 🚀

Just commit changes you made and push it to github. The [auto-release](https://github.com/wix-private/devcenter/tree/master/serverless/app-service-autorelease) mechanism is configured from the box.

> Be sure your app in dev center has `Wix TPA` checkbox enabled.

## Testing 🤞

The app contains e2e and unit tests.

- **e2e** tests are located under the `sled` directory.
- **Unit** tests could be found in the components' source directory.

##### Running tests:

```bash
npm test
```

## Useful URLs

- [Yoshi Editor Flow](https://bo.wix.com/pages/yoshi/docs/editor-flow/overview)
- [Viewer Platform ](https://bo.wix.com/wix-docs/client/viewer-platform---ooi)
- [Editor Platform ](https://bo.wix.com/wix-docs/client/editor-platform)
- [App's Dev Center Page](https://dev.wix.com/dc3/my-apps/057258fa-0258-4159-a463-ab7d064fbb45/dashboard)
- [FED Handbook](https://github.com/wix-private/fed-handbook#welcome-to-the-fed-handbook)
