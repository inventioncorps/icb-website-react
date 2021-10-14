# icb-website-react

## Setup

- Install npm

- Github access and authentication

- Split up between Mac and Windows

## Workflow

**You MUST be familiar with pull requests and git basics before you can work on this project.**

> We will use git as our version-control system. If you don't know what git is, read more [here](https://www.freecodecamp.org/news/learn-the-basics-of-git-in-under-10-minutes-da548267cc91/).

> We will be using pull-requests to manage this project. If you do not know what a pull-request is, read more [here](https://learn.co/lessons/github-pull-request-basics).

If you have any questions about this process, please use the internet as a resource. If that doesn't work please ask for help from someone who knows how this stuff works.

### Getting started

- If you do not have git installed, or you are unsure whether you have git on your machine, follow [this guide](https://github.com/git-guides/install-git).
- The following instructions are for setting up your github credentials.
  - Download GitHub CLI or Git Credential Manager Core using the online [instructions](https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git). *(Git Credential Manager Core is recommended as the only required steps are downloading it GitHub CLI will require some set up)*
  - Log into GitHub and click on the icon on the top right in order to access Settings>Developer settings>Personal Access Token.
  - Click on **Generate new token**
  - Type in a description for this auth token and set the expiration time.
  - Under **Select Scopes** select the check box next to **repo**. This will give you read write access to which ever repository you are contributing to.
  - Click on **Generate token**
  - Copy the token and save it somewhere temporarily.
  - When you clone the repository in the next step, you will be asked to provide authentication. Use your Github user name and Authentication token when prompted. Your credentials will be saved until your token expires.
- If you have never worked on the project before, start by cloning the repository onto your local machine.
  - In your terminal on your computer, navigate to the directory (folder) where you want the project to live
  - In this directory, run the command `git clone https://github.com/inventioncorps/icb-website-react.git icb-website`
  - A new directory called `icb-website` should have been created in your directory. You can confirm this by listing all the items in the directory using `ls`
  - Navigate to the `icb-website` folder using `cd icb-website` and run `yarn install`. This ensures your dependencies are up-to-date with what is required for the project. (You should have installed `yarn` in the **setup** above)

### Contributing

> Visual Studio Code and other code editors have terminals embedded in their UI. It's usually easier to work from within the code editor for these kinds of things - otherwise you have to keep switching back and forth between the code itself and the terminal.

- To start working on a new feature:

  - Make sure you are on the `develop` branch as this will have the latest changes to the codebase. You can run `git checkout develop` to switch to the branch if you are not already there.
  - Create a new branch called `feature/<name>-<description>` by running the command `git branch feature/<name>-<description>`. Replace`<name>` with your name and `<description>` with a short description of the feature. For example, if Bongi was working on the README he might use the branch name `feature/bongi-readme`.
  - Checkout (switch to) that branch by running `git checkout feature/<name>-<description>`.
  - Make sure the remote repository is tracking your local branch. Run `git push -u origin feature/<name>-<description>`
  - You can now work on this feature when you are on this branch.

- When working on a feature:

  - Commit often (with useful commit messages). This is best practice and it means you can pick-up where you left-off or revert to a previous state easily.
  - Push somewhat often. This lets you 'save' your work remotely, so anyone else can see what you are doing and you won't lose everything if your computer burns or drowns.
  - If any changes have been made in the `develop` branch, merge those changes into your branch first by using the following steps:
    - Enter the develop branch using `git checkout develop`
    - Pull the newest changes using `git pull`
    - Go to your own branch using  `git checkout feature/<name>-<description>`
    - Merge the new changes in using `git merge develop`

- When you are done working on a feature:
  - Remember to commit and push if you have not already.
  - Make sure you have merged all the up to date changes from the remote develop branch.
  - Create a pull-request for you feature on github.
  - Add reviewer(s) to the pull-request.
  - **DO NOT** merge your own pull request - unless you have a very special reason for doing so.
  - TODO add info about merge conflicts etc. ?

## Creating a pull-request

TODO

You can create a pull request to propose and collaborate on changes to a repository. These changes are proposed in a *branch*, which ensures that the default branch only contains finished and approved work.

### <u>To submit a pull request:</u>
1. Push your commit(s) to the remote repository using `git push -u origin feature/<name>-<description>`
2. Navigate in your browser to the main page of the "[inventioncorps/icb-website-react](https://github.com/inventioncorps/icb-website-react)" repository.

![ICB Repo Main Page](https://user-images.githubusercontent.com/25873509/135940121-00500d49-5e92-45c9-a41b-c005cab88d16.png)

You should see a new notification at the top that your branch had recent pushes. Click the green "Compare & pull request" button.

Alternatively, you can navigate to the "Pull Requests" page, where you will see the same notification and green "Compare & pull request" button.

![Pull Requests page](https://user-images.githubusercontent.com/25873509/135940697-378c1a80-46d3-40f4-bad4-599795ef0854.png)

3. Click this button, which will take you to the "Open a pull request" page.

![Open Pull Request](https://user-images.githubusercontent.com/25873509/135940885-592374ee-4198-4e61-bcd8-dda7bc997370.png)

Here you can write a comment and select the team members who you want to review your changes. 

Select "Reviewers" from the right sidebar.

![Reviewers](https://user-images.githubusercontent.com/25873509/135941195-9d2f8166-c551-4ec8-b106-ba2e931eddaa.png) ![Reviewers Selection](https://user-images.githubusercontent.com/25873509/135941939-72156b5d-1883-4d96-8ca1-a52ec906fb70.png)

4. If not already the case, use the "**base**" branch dropdown menu to select the branch you'd like to merge your changes into. This should be "develop." Then use the "**compare**" branch drop-down menu to choose the topic branch you made your changes in. 

![Base Develop](https://user-images.githubusercontent.com/25873509/135942129-c4cef25d-d2c8-433b-babb-f6da00431386.png)
![Correct Branch](https://user-images.githubusercontent.com/25873509/135942134-fe18fe3a-186a-4ef2-85b0-98179cc5d761.png)

5. Finally, click the green "Create pull request" button to create a pull request that is ready for review!

![Create pull button](https://user-images.githubusercontent.com/25873509/135942690-eaad8e42-4e27-44af-8774-ec6c3ef97a8b.png)

### <u>What happens next?!</u>

On the "Pull requests" page, you should now see the pull request you just added as an "Open" pull request.

![New pull added](https://user-images.githubusercontent.com/25873509/135943270-fa6a9a08-f5c5-4eef-a32b-3a0a49df4e23.png)

If you click to open this pull request, you will see that a review is required and your new commits will not be merged until they are approved. 

![Review required](https://user-images.githubusercontent.com/25873509/135943583-70c355ed-40b8-453e-8de1-2f6a2bb12a2e.png)

Expanding the code, you can see the changes you commited. Code you added is highlighted in green. Code you deleted is highlighted in red. 

You can also click the green "Review changes" button to add a comment.

![Expanding the code](https://user-images.githubusercontent.com/25873509/135944141-f9e00b6e-f6ae-465a-9a3e-51eaa6798211.png)

><u>**Note** that you **WILL NOT** be able to "Approve" or "Request changes" to your own pull request.</u>

![Approve](https://user-images.githubusercontent.com/25873509/135944350-12c87b05-7678-4000-8e9a-d19cd43e94ad.png)

![Request Changes](https://user-images.githubusercontent.com/25873509/135944346-2115c807-70be-4af8-ab2f-dc1ce3b637de.png)

><u>**Note**</u>: If you push new commits to the same branch while it has an open pull request, you will not need to create another pull request. Your open pull request will record your subsequent commits. 

![New push to pull request](https://user-images.githubusercontent.com/25873509/136302295-d1d2fe81-d424-40f3-bde9-83876304d0d0.png)

You can see this more clearly by clicking the "Commits" tab. There are now 2 commits in the same pull request. 

![Commits Tab](https://user-images.githubusercontent.com/25873509/136302288-39172d2b-9200-42bc-81aa-c08b3bef04f4.png)

## Reviewing Code
TODO

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<!-- Content below is auto-generated by create-next-app -->

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
