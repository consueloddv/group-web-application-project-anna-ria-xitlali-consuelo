[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12688241&assignment_repo_type=AssignmentRepo)
# CPST 342 Group Project Repository 

You will complete three assignments that will culminate in developing a monolithic full-stack web application. 

For the first group assignment, you will propose what type of app you will build and use the README.md file to document your responses to the questions for Assignment 1 deliverable 1.  All documentation pertaining to your project should occur in the README.md. 

After this course, your application will consist of the following components listed below.

1. Routing Framework using Express.js
2. Demonstrate and utilize a REST API
3. Create, Retrieve, Update and Delete (CRUD) Functionality
4. Utilize SQLite Database for persistent data store
5. Functional and User-friendly front-end interface
6. Hosting that allows users to access the site via domain name

**Assignment 1 consist of deliverables 1,2 and 3** <br>
**Assignment 2 consist of deliverables  4 and 5** <br>
**Assignment 3 consist of deliverables 6 and 7** <br>


## Assignment 1  - Project proposal
### Deliverable 1 (10 Points)
For this deliverable, you will need to modify the readme file and add responses to the questions below. that you are currently reading and address the following items below using a variety of permissible markdown syntax.

- **Team's name:**
   DigiReads Connector 

- **Name of the application:**
    BookHub

- **Description of application:**<br>
This Website is devoted to passionate book enthusiasts seeking a particular literary gem, eager to engage in a book club or immerse themselves in fandoms. Each user will possess an account empowering them to search for books, share insightful comments, provide reviews, and, most importantly, become part of vibrant book clubs or fandoms. By fostering a community centered around books, this platform aims to transcend the solitary nature of reading, transforming it into a shared and communal experience. Additionally, users can effortlessly track and share their reading progress, further enhancing the community's collaborative spirit.

- **Describe the need and purpose of the application:**<br>
In a world where the act of reading typically unfolds in solitude, [BookClub, Read and Share] emerges as a vital solution, meeting the innate human need for connection and shared experiences within the vast realm of literature. This groundbreaking web application is meticulously designed to seamlessly blend the solitary nature of reading with the innate desire for companionship. Serving as a virtual gathering place for book enthusiasts, [BookClub, Read and Share] reshapes the traditional solo experience of reading into a dynamic and social endeavor. In recognizing that books aren't merely stories but gateways to unexplored worlds, our application acts as a catalyst for communities where these literary realms can be collectively embraced. At its core, [BookClub, Read and Share] serves an essential purpose — streamlining the complex task of managing one's reading materials while simultaneously providing a carefully curated platform for discovering new literary gems tailored to individual preferences. In essence, it meets the fundamental need for a centralized hub, effortlessly connecting readers with books and like-minded individuals, thereby transforming the reading experience from a solitary pursuit into a vibrant communal journey.

- **Intended target audience:**<br>
It targets a mature audience (+18) of individuals who are book enthusiasts, avid readers, students, and anyone who enjoys reading and wants to maintain an organized reading list. It caters to individuals who want to keep track of their reading progress, explore new books, and share recommendations with fellow book lovers. 

- **Identify the various pages your application will have and describe what users will be able to accomplish:**<br>
   **1. Log-in page/home page:** The description of the website, the creators, and some statistics such as numbers of clubs, and fandom. Will also include an area where the reader can log in to access their personalized page. 

   **2. Feed page:**  Users can stay in the loop with the latest updates from clubs and fandoms they are subscribed to. Additionally, they'll enjoy a curated feed of their friends' publications.

   **3. Profile:** Users can empower their reading journey by creating and managing their profile by tracking their reading statistics, setting and achieving reading goals, and taking charge by creating new fandoms or book clubs.

   **4. Search page:** It helps the user to discover a world of literature with distinct features. <br>
    1. *Book search feature:* Users can explore new books based on their interests, view recommendations, check reviews and ratings.<br>
    2. *Clubs or fandoms search feature:* Users can explore clubs or fandoms and join the ones that resonate with them.<br> 
    3. *Friend search feature:* For users to connect and expand their literary circle by finding and adding friends.
 
   **5. Book page:** This page will display the comprehensive details of a book in particular for the user.  It will show the book’s:<br>
    1. Title<br>
    2. Editorial<br>
    3. Covers<br>
    4. Author<br>
    5. ISBN<br>
    6. Genre<br>
    7. Purchase options<br>
    8. Supported formats: audio, kindle, traditional<br>
    9. Club and fandoms created from this book<br>

   Also on this page, the users will be able to add, categorize, and organize books in their virtual bookshelf, mark books as read, and set bookmarks.

   **6. Clubs page:** The main page of the club. The user will be able to engage in discussions, explore shared reads, and connect with fellow enthusiasts. This dedicated space functions as a forum, offering the user the opportunity to contribute to lively conversations,  and initiate discussion with their fellow members of the club. 

   **7. Fandom Page:** The main page of fandom. In a similar fashion as the club page. The Fandom page will work as a forum, users will be able to engage in discussions and create new ones with the other members of the fandom. 

   **8. Additional Function:**
      1. *Book Recommendation Algorithm:* 
   Implement an intelligent recommendation system that analyzes the user's reading history, preferences, and activities within book clubs or fandoms. Provide personalized book recommendations tailored to each user's taste, ensuring a more enjoyable and customized reading experience. Allow users to fine-tune their preferences to improve the accuracy of the recommendation algorithm. Enhance the algorithm over time, leveraging user feedback and community interactions to continually refine the book suggestions. This addition will not only engage users but also make their experience more personalized and satisfying. <br>
      2. *Book rating opportunity:* Allowing readers to rate books they have read. A book can be rated on difficulty level, recommendation level, or a reader may personally rate of book on how much they liked it.<br>

   **9. Reading Challenges:**
   Enable users to set reading goals and challenges, such as reading a certain number of books within a specified time frame or exploring books from diverse genres.
   Provide a progress tracker within the user's profile, allowing them to monitor their achievements and share their reading challenges with the community.
   Introduce badges or rewards for users who complete reading challenges, fostering a sense of accomplishment and friendly competition within the community.
   Remote community engagement by allowing users to create group challenges that book clubs or fandoms can participate in collectively.
   This new function adds a gamified element to the platform, motivating users to set and achieve reading goals while fostering a sense of community around shared challenges.

 
- **Identify three goals of the application:**<br>
   1. *Built a community:* Support reading, and help the book industry. 

   2. *Simplify Book Management:* Provide a seamless platform for users to organize and manage their personal book collections by making a virtual bookshelf.

   3. *Enhance Reading Experience:* Offer tools and features to improve the overall reading experience, alone and as a group, and keep track of reading progress.

- **Identify tools/software you will use to complete the project:** <br>
   1. *Frontend:* HTML, CSS, JavaScript

   2. *Backend:* Node.js, Express.js

   3. *Database:* MongoDB

   4. *Other Tools:* Git, GitHub, GitHub Codespaces, VS Code, Canva



### Deliverable 2 (10 Points)
For this deliverable, you will demonstrate your understanding of modules and JavaScript.  Listed below are tasks you will need to complete to satisfy the requirements for this deliverable.
- Initialize NPM into your project folder and go through the process of creating a package.json file (3 points)
- Create an index.js file and demonstrate your ability to declare and call functions *This file will be deleted prior to starting requirements for assignment 2. (4 points)
- Search through the NPM marketplace and demonstrate your ability to add and use an external module that you will potentially use in your final project. (3 points)

### Deliverable 3 (10 Points)
For this deliverable, you will implement version control into your project folder.
- Your remote repository will need to contain a minimum of 2 commits from each member for assignment 1 (6 points)
- You will need to add a .gitignore file that ignores the node_modules folder (4 points)


## Assignment 2 - Express Routing + CRUD Operations using SQLite Database.

### Deliverable 4 - Routing and Middleware configuration (15 Points)
For this deliverable, you will focus on implementing the necessary middleware needed to configure and route your application. Feel free to refer back to the [node.js](https://instructorc.github.io/site/slides/logic/nodejs.html) presentation for code samples and an explanation of concepts.
- Middleware is implemented for static files such as images, pdf's, etc (2 points)
- Middleware is implemented for view templating engine (2 points)
- Middleware configured to parse JSON data and interpret form data.  Implement the following code below to meet requirement. (2 points)
``` javascript
 // parse application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
```

- Application has a minimum of 5 routes implemented 
  1.  A minimum of three routes should accept data. Both the GET and POST methods will need to be represented in your routing functions (5 points)
     1. At a minimum one route should make a call to an external REST API
  2.  A minimum of three routes should render data back to the client/user interface. (4 points)
     1. At a minimum one route should return JSON data from external REST API to the interface
 
 

### Deliverable 5 - Database implementation (15 Points)
- Your application contains a file titled "database.js" and all of your SQL queries are listed and identified. (2 points)
- Your database.js file contains a minimum of 4 queries that represent the Create, Retrieve, Update and Delete (CRUD) functionality. (8 points)
- Database queries are represented within the routes and perform CRUD operations. (2 points)
- SQLite Database file is included within the project folder  (3 points)

## Assignment 3 - Finalizing User-Interface and Hosting Site

### Deliverable 6 - Functional and User-Friendly front-end interface (15 Points)

For this deliverable, you will need to make sure each of the pages of your site are properly functioning and renders in the browser.  Listed below are items that should be identified in your app. 

- Interface uses HTML form(s) to capture data that is related to CREATE and UPDATE functionality. (7 Points)
- Interface displays data that is queried from the database (5 Points)
- Interface includes a home page that is mapped to the root directory of your project folder.  For example, your web application should have a route that listens for the URL path of “/” and returns the homepage. (3 Points)

### Deliverable 7 - Hosting Site (15 Points)

For this deliverable, your group will deploy and host your site on Heroku.  The service cost $5 a month for an Eco dynos.  Information regarding cost can be found at this [link](https://www.heroku.com/pricing#containers) 
I recommend all group members pitch in a few dollars to host the site for 1 month.
Heroku - [https://www.heroku.com](https://www.heroku.com/)  

Only one member of your team will need to create an account. 
Heroku will need to be configured to host your site from the GitHub repository issued by the instructor. 

Update the repository Readme file to include the URL from Heroku


### Extra Credit – Implementing Authentication + Authorization using Passport.js or AuthO (7 Extra Credit Points)

Once requirements from deliverable 1 -7 are met and and your group would like an additional challenge then I would encourage you to consider implementing an authentication library called passport.js or implementing a hosted authentication service called AuthO. To successfully meet the requirements for extra credit, you will need to adhere to the following bullet points below. All the following requirements will need to be met to receive full credit. 

- Implementation of authentication should flow succinctly with the rest of your applicaiton and not be disjointed and unpurposeful.
- Once an account is successfully created, the end user will be directed to a welcome screen connects account to a dashboard or user profile page.
- Once a user logs out, the end user is redirected to the the home page
  
### Submission Guidelines
Your project folder will need to be submitted to the assigned GitHub repository provided to you by the instructor. In Sakai, you will need to submit the link to your repository by the due date and time listed in the write-up. Make sure you receive confirmation from Sakai that your assignment has been submitted.

## Resources
[Markdown Syntax CheatSheet](https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf) .open

