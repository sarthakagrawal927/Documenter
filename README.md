# Documentor

To install dependencies

```bash
pnpm i
yarn
npm i
```

To start server

```bash
pnpm dev
```

I have stopped this project because unpkg.com doesn't work the way it used to , it doesnt redirects to the main file of the package when you go to package instead it shows the directory of the package. Without it a you can't import any npm packages from this, essentially making this a in-browser js toolbox.

Things I learned new:

TS with Redux
LocalForage
ESbuild packager.
iframe

I will be continuing this to brush up react.

LocalStorage, localForage won't be working in the code editor due to iframe middle ground. To make sure user cannot harm my application with his code there are 2 ways to for it: just use seperate url for showing iframe which is too much work and the other is using iframe sandbox property.
