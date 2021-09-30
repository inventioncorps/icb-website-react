# icb-website-react

## Setup

- Install npm

- TODO

## Workflow

**You MUST be familiar with pull requests and git basics before you can work on this project.**

> We will use git as our version-control system. If you don't know what git is, read more [here](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/).

> We will be using pull-requests to manage this project. If you do not know what a pull-request is, read more [here](https://learn.co/lessons/github-pull-request-basics).

If you have any questions about this process, please use the internet as a resource. If that doesn't work please ask for help from someone who knows how this stuff works.

### Getting started

- If you have never worked on the project before, start by cloning the repository onto your local machine.
  - In your terminal on your computer, navigate to the directory (folder) where you want the project to live
  - In this directory, run the command `git clone https://github.com/inventioncorps/icb-website-react.git icb-website`

### Contributing

> Visual Studio Code and other code editors have terminals embedded in their UI. It's usually easier to work from within the code editor for these kinds of things - otherwise you have to keep switching back and forth between the code itself and the terminal.

- To start working on a new feature:

  - Make sure you are on the `develop` branch as this will have the latest changes to the codebase. You can run `git checkout develop` to switch to the branch if you are not already there.
  - Create a new branch called `feature\<name>-<description>` by running the command `git branch feature\<name>-<description>`. Replace`<name>` with your name and `<description>` with a short description of the feature. For example, if Bongi was working on the README he might use the branch name `feature\bongi-readme`.
  - Checkout (switch to) that branch by running `git checkout feature\<name>-<description>`.
  - Make sure the remote repository is tracking your local branch. Run `git push -u origin feature\<name>-<description>`
  - You can now work on this feature when you are on this branch.

- When working on a feature:

  - Commit often (with useful commit messages). This is best practice and it means you can pick-up where you left-off or revert to a previous state easily.
  - Push somewhat often. This lets you 'save' your work remotely, so anyone else can see what you are doing and you won't lose everything if your computer burns or drowns.

- When you are done working on a feature:
  - Remember to commit and push if you have not already.
  - Create a pull-request for you feature on github.
  - Add reviewers to the pull-request.
  - **DO NOT** merge your own pull request - unless you have a very special reason for doing so.
  - TODO add info about merge conflicts etc. ?

## Reviewing Code

TODO

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
