# Movie Quiz

![Movie Quiz - Project Banner](/assets/documentation/Quizz%20by%20Quizz.cyy.png)


<p align="center">
| <a href="https://mx-crystalj.github.io/Hackathon-1/questions.html" target="_blank">Live Project</a> |
</p>

## Introduction

The Movie Quiz represents the first hackathon collaborative project given to us for the Code Institute Full Stack Software Developer Bootcamp. Us refers to the collaborators: Caprice, Cristian, Crystal and Yusuf.

Live project: <a href="https://mx-crystalj.github.io/Hackathon-1/questions.html" target="_blank">Movie Quiz</a>

<h2 align="center" id="TOC">Table of Contents</h2>

* [Movie Quiz](#moviequiz)
  - [Introduction](#introduction)
  - [Table of Contents](#TOC)
  - [Project Ouline](#project-outline)
* [Project Planning](#project-planning)
    - [UX Design](#ux-design)
      - [User Stories](#user-stories)
      - [Colors](#colors)
      - [Fonts](#fonts)
      - [Imagery](#imagery)
      - [Wireframes](#wireframes)
* [Features](#features)
  - [General Features](#general-features)
    - [Navigation and Carousel Section](#navigation-and-carousel-section)
    - [Bootstrap Cards](#bootstrap-cards)
    - [Links and Buttons](#links-and-buttons)
  - [Resnposive Design](#responsive-design)
* [Built With](#built-with)
  - [Technology and Languages](#technologies-and-languages)
  - [Libraries and Frameworks](#libraries-and-frameworks)
  - [Tools & Programs](#tools-and-programs)
* [Development](#deployment)
* [Any Bugs](#any-bugs)
* [Credits](#credits)
  - [Code](#code)
  - [Content Research](#content-research)
  - [Media](#media)
  - [Acknowledgements](#acknowledgements)


<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Project Outline

A fun, interactive movie quiz game where players answer multiple-choice questions related to movies. The quiz will test their knowledge on various movie-related topics, such as characters and movie plots. Players will receive immediate feedback on whether their answers are correct or incorrect.

### Key Objectives
- Welcome Page: A homepage with a brief introduction and a "Start Quiz" button.
- Quiz Interface: A series of questions with multiple-choice answers (three options per question).
- Answer Feedback: Immediate feedback displayed after each answer (correct or incorrect).
- Score Tracking: Display the player’s score at the end of the quiz.
- Timer (Optional): A countdown timer for each question to add a time challenge.
- Mobile/iPad Responsiveness: The quiz will be fully responsive and work well on both mobile and desktop screens.


## UX Design

## User Stories
~[#1](https://github.com/Mx-CrystalJ/Hackathon-1/issues/1)
~[#2](https://github.com/Mx-CrystalJ/Hackathon-1/issues/2)
~[#3](https://github.com/Mx-CrystalJ/Hackathon-1/issues/3)
~[#9](https://github.com/Mx-CrystalJ/Hackathon-1/issues/9)
~[#10](https://github.com/Mx-CrystalJ/Hackathon-1/issues/10)

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Colors

We stuck to a classic colour scheme on our end, mainly using black and white, as the main background were images we pulled from online.


### Main Palette
- White `#ffffff` `--white`
- Black `#000000` `--black`

![Colours](/assets/documentation/Colors.png)

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Fonts

When looking in Google Fonts I wanted to ensure a positive user experience whilst visiting the page in which they wuld be able to clearly see the sections and headings.<br>
Two  fonts were selected for the project, and implemented via [Google Fonts](https://fonts.google.com) using a direct import code within the style.css file.

[Sour-Gummy] (https://fonts.google.com/specimen/Sour+Gummy) is a more fun font, to add some style to the pages

[Roboto] (https://fonts.google.com/specimen/Roboto) is the primary content font ensuring content looks good and seamless

<hr>
<p align="right"><a href="moviequiz">Back To Top</a></p>

### Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) to highlight key features in the layout that work to guide the user experience. While using a [Bootstrap](https://getbootstrap.com/) framework with its available components that allow for ease of navigation and structured content with a fully responsive design.

**Mobile Wireframe**
![Mobile Wireframe](assets/documentation/mobile.jpg)

**Tablet Wireframe**
![Tablet Wireframe](assets/documentation/tablet.jpg)

**Desktop Wireframes**
![Desktop Wireframe 1](assets/documentation/Screenshot%202024-11-13%20164344.jpg) 
![Desktop Wireframe 2](assets/documentation/Screenshot%202024-11-13%20164410.jpg) 
![Desktop Wireframe 3](assets/documentation/Screenshot%202024-11-13%20164430.jpg) 
![Desktop Wireframe 4](assets/documentation/Screenshot%202024-11-13%20164453.jpg) 

<hr>
<p align="right"><a href="moviequiz">Back To Top</a></p>

## Imagery

The visuals for the movie quiz project combine elements that evoke a cinematic experience. The first image features an elegant, vintage-style decorative frame with intricate corner details, set against a black background. This frame suggests a classic or timeless atmosphere, possibly hinting at a traditional movie aesthetic or offering a sense of mystery and anticipation.

The second image takes inspiration from the interior of a movie theatre, showing a row of plush red cinema seats arranged in front of a blank screen. The dark, rich tones of the theater and the neutral screen create a feeling of being in the midst of a cinematic experience, setting the stage for the quiz participants to engage in the world of films.

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Features
- Introduction to the quiz and its purpose.
- Option to start the quiz or learn more about the game.
- Display multiple-choice questions about movies (e.g., movie trivia, actors, genres, etc.).
- Randomized questions to keep the quiz fresh.
- Time limit for answering each question
- Immediate feedback on whether the user's answer is correct or incorrect.
- Option to display the correct answer after each question.
- Display the number of questions answered and remaining questions.
- Show score after each question or at the end of the quiz.
- Time limit for answering each question.
- Display a countdown timer for added challenge.

### General Features

The criteria requested that we create and design an interactive Front-End web application using HTML, CSS and JavaScript based on the principles of user experience design, accessibility, and responsivity.

When coding the project, receiving feedback, the features and design changed from the original wireframes to be more interacctive.

Adjustments:

- Added javascript to include features such as questions, scores and a timer.
- Removed images for questions and answers.

#### Navigation and Carousel Section
We chose to keep the navbar simple as it isn't a main feature of this project.

#### Links and Buttons

We stuck to one colour for links and buttons based on the website background, sticking to either black or white for consistency.

![Links and Buttons](/assets/documentation/Screenshot%202024-11-14%20143537.png)<br>

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

### Responsive Design

For an implementation that is responsive additional CSS + media queries were needed for presentation.

Though it took some experimentation and troubleshooting, we were able to create a page that is fully responsive to modern standards.

As a result of our debugging within Dev Tools and help from other students to identify and resolve responsiveness issues I believe I have a better understanding of how to use Bootstrap for future projects.

[Am I Responsive](https://ui.dev/amiresponsive?url=https://mx-crystalj.github.io/Hackathon-1/index.html)<br>
![Am I Responsive](/assets/documentation/Screenshot%202024-11-14%20142806.png)<br>
![Mobile](/assets/documentation/Screenshot%202024-11-14%20143344.png)<br>
![ipad Mini](/assets/documentation/Screenshot%202024-11-14%20143507.png)<br>
![Dektop](/assets/documentation/Screenshot%202024-11-14%20143537.png)<br>

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

### Technologies and Languages
![Static Badge](https://img.shields.io/badge/HTML5-Language-grey?logo=html5&logoColor=%23ffffff&color=%23E34F26)
![Static Badge](https://img.shields.io/badge/CSS3-Language-grey?logo=css3&logoColor=%23ffffff&color=%231572B6)

<a href="https://git-scm.com/" target=_blank_>![Static Badge](https://img.shields.io/badge/Git-v2.46.2-grey?logo=git&logoColor=%23ffffff&color=%23F05032)</a>
<a href="https://github.com/" target="_blank">![Static Badge](https://img.shields.io/badge/GitHub-Repo_Hosting-white?logo=github&logoColor=%23ffffff&color=%23181717)</a>
<a href="https://www.gitpod.io/" target="_blank">![Static Badge](https://img.shields.io/badge/Gitpod-IDE-white?logo=gitpod&logoColor=%23ffffff&color=%23FFAE33)</a>

### Libraries and Frameworks
<a href="https://getbootstrap.com/" target="_blank">![Static Badge](https://img.shields.io/badge/Bootstrap-v5.3.3-grey?logo=bootstrap&logoColor=%23ffffff&color=%237952B3)</a>
<a href="https://favicon.io/emoji-favicons/" target="_blank">![Static Badge](https://img.shields.io/badge/Font_Awesome-Icons-grey?logo=fontawesome&logoColor=%23ffffff&color=%23538DD7)</a>
<a href="https://fonts.google.com/" target="_blank">![Static Badge](https://img.shields.io/badge/Google_Fonts-Fonts-grey?logo=googlefonts&logoColor=%23ffffff&color=%234285F4)</a>


### Tools and Programs

<a href="https://balsamiq.com/wireframes/" target="_blank">![Static Badge](https://img.shields.io/badge/Balsamiq-Wireframes-grey?logoColor=%23ffffff&color=%23CC0100)</a>
<a href="https://canva.com/" target="_blank">![Static Badge](https://img.shields.io/badge/Canva-grey?logoColor=%23ffffff&color=%23CC0100)</a>


<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

## Deployment


This [GitHub](https://github.com/) project was created using the [Code Institute Template](https://github.com/Code-Institute-Org/ci-full-template) ensuring all necessary dependencies were included when opening within the designated workspace on the [Gitopod IDE](https://www.gitpod.io/).

Setup a repo using this method and template:
1. Login to your GitHub profile.
2. Navigate to the Code Institute Full Template
3. Click the dropdown for 'Use this template' and select "Create a new repository"
4. Generate the necessary name and description for your repo and click 'Create repository from template'
5. Navigate to the new repo and click the green 'Open' button with the Gitpod logo<br>
**IMPORTANT - This button should only be clicked once to generate the new IDE workspace**
6. You can now work on your repository within the Code Institute Gitpod IDE workspace

Once the project repo is created, an early deployment for the live project should performed.<br>
This allows for early and continuous testing using a variety of devices, as well as the Dev Tools available within browsers.

Additional information on the deployment process can be found on the official [GitHub Docs](https://docs.github.com/en/pages/quickstart)



<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>


## Any Bugs
- In mobile/tablet view the nav bar is not aligned.
- The gif for the results page would not show.
- Alignment, size, and padding issues.

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

## Credits
[Crystal](https://github.com/Mx-CrystalJ)
[Caprice](https://github.com/CapriceHolford)
[Cristian](https://github.com/YazdanTaheri)
[Yusuf](https://github.com/YEGuzel)

### Code

Project and primary learning supplied by [Code Institute](https://codeinstitute.net/ie/)<br>
Supplemental learning resources within the project:

- [Chat GPT](https://chatgpt.com/) as a learning and content creation tool, no code was directly used.



### Media
- Static badges for README documentation [Shields.io](https://shields.io/badges/static-badge) & [Simple Icons](https://simpleicons.org/)
- Youtube (https://youtube.com/)
- Canva (https://canva.com/)

### Acknowledgements
- Mathew and John for contributing to my debugging process.

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>