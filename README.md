# Home
Home is an all-in-one software solution that allows users to customize their home panel to tackle specific home chores effectively! Every widget is a self-contained assistant for tackling a very particular chore/task. This design makes it very easy to break up each widget as a microservice. The idea is not ground-breaking, it's not the next biggest thing, but it's an opportunity to build a platform that scales with developers that love to build useful tools for people, even when they already exist.

# Home in Angular
The first of many UIs is Home in Angular, an Angular web application where users can interact with assistants like JobHunt to handle the stress of keep tracking of job applications that the user applied to. It is the first of many because I would like to start other UI projects using other technologies like React/Vue/Blazor, Android/iOS, even Discord as we get more and more contributors.

# Running Locally
## Requirements
- Node Package Manager

## Running the Angular Application
1. Pull/Download the repository
2. Navigate to root of the project (where package.json is located) inside a command prompt
3. Run `npm install` to install all project dependencies
4. Run `npm start` to run the Angular application
5. Open a browser and go to `http://localhost:4200/`

Side Note: Unfortunately, there is not alot you can do with the UI at the moment. We'll be working on docker-compose file so that users can setup the backend services locally. For now you will need to go to [JobHunt](https://github.com/sero-dev/JobHunt) repository and follow the wiki page for [local development](https://github.com/sero-dev/JobHunt/wiki/Setting-Up-Local-Environment)
