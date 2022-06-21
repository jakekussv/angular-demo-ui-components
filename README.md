# Angular - Carousel / Modal Demo

### Problem statement
This was a personal project I did in my spare time to learn a little of the latest version of Angular.
I wanted to see about creating a responsive 'carousel' component with Angular that loads in random images on the start
from . Every 5 seconds, it then loads in more and the user can navigate through them with the arrows. I also wanted to see about creating
a custom modal dialog component that is flexible enough to insert custom content in the modal. 

### Your solution
I created two components. One is a carousel located at 'src/ui/carousel'. This is taking advantage of a third party library (bootstrap)
to render the carousel. I wanted to see what bootstrap had for us in the latest angular version.
It is being used in the component 'src/components/carousel-demo'. The other component is a customizable modal component located (no framework, custom)
at 'src/ui/modal' that can be customized with a title / heading and custom contnent. The user can close this modal with the 'x' button. 

### Running the project
1) Run 'npm install' from same directory as package.json to install npm / node dependencies.
2) Install the angular CLI (npm i @angular/cli or npm install -g @angular/cli) -
      https://www.npmjs.com/package/@angular/cli so we can run 'ng' commands;
3) Run 'npm run start' or 'ng serve' from root directory (package.json scripts)
4) Application will then load on 'http://localhost:4200'
5) To see the carousel go to: 'http://localhost:4200/carousel'
6) To see the modal dialog, go to: 'http://localhost:4200/modal'




