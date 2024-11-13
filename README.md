# Movie Quiz

![Movie Quiz - Project Banner](/assets/images/10070310.jpg)


<p align="center">
| <a href="" target="_blank">Live Project</a> |
</p>

## Introduction

The Movie Quiz represents the first hackathon collaborative project given to us for the Code Institute Full Stack Software Developer Bootcamp. 

Live project: <a href="" target="_blank">Movie Quiz</a>

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
* [Testing](#testing)
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
- Mobile Responsiveness: The quiz will be fully responsive and work well on both mobile and desktop screens.


## UX Design

## User Stories




<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Colors

We stuck to a classic colour scheme on our end, mainly using black and white, as the main background were images we pulled from online.

To ensure compliance to standards, the [Colour Contrast Checker](https://colourcontrast.cc/) (also available as extension on [Chrome Web Store](https://chromewebstore.google.com/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe)) was used.<br>
Both the [WebAIM](https://webaim.org/resources/contrastchecker/) and the [Adobe](https://color.adobe.com/create/color-contrast-analyzer) color contrast tools were used to corroborate these results.

### Main Palette
- White `#ffffff` `--white`
- Black `#000000` `--black`

[ColorContrastChecker](/documentation/images/Color%20Contrast%20Checker%201.png)
[Adobe](/documentation/images/Color%20Contrast%20Checker%202.png)
[WebAIM](/documentation/images/Color%20Contrast%20Checker%203.png)


Due to the potential impact of color on mental health, additional research and feedback was found to ensure an appropriate selection was made for this project. Additional research in the documentation [research](/documentation/research.md).

<hr>
<p align="right"><a href="#moviequiz">Back To Top</a></p>

## Fonts

When looking in Google Fonts I wanted to ensure a positive user experience whilst visiting the page in which they wuld be able to clearly see the sections and headings.<br>
Two  fonts were selected for the project, and implemented via [Google Fonts](https://fonts.google.com) using a direct import code within the style.css file.

[Sour Gummy] (https://fonts.google.com/specimen/Sour+Gummy) is a more fun font, to add some style to the pages

[Roboto] (https://fonts.google.com/specimen/Roboto) is the primary content font ensuring content looks good and seamless

<hr>
<p align="right"><a href="moviequiz">Back To Top</a></p>

### Wireframes

These wireframes were created using [Balsamiq](https://balsamiq.com/) to highlight key features in the layout that work to guide the user experience. While using a [Bootstrap](https://getbootstrap.com/) framework with its available components that allow for ease of navigation and structured content with a fully responsive design.

**Mobile Wireframe**
![Mobile Wireframe]()

**Tablet Wireframe**
![Tablet Wireframe]()

**Desktop Wireframes**
![Desktop Wireframe 1] ()


<hr>
<p align="right"><a href="moviequiz">Back To Top</a></p>

## Imagery

The image I selected became a key influence and neccessary in the design of the overall project, including the naming, branding and metaphors.

With the requirements of the end user, I found an image that would fulfil the specific criteria;
- Thematic link to mental health that could be used for branding purposes
- Identifiable, appealing, and calming to the target audiences
- Promotes inclusivity and equality by being without a specfic target
- Variety for use and relevance in the project
- Follows color research to maintain user well-being

After looking through nature inspired images, I choose the mountains and lake during sunset.

This selection fulfilled the criteria set out and offered further inspiration.
- It maintains a consistent theme and works well as a brand image and name
- Usage of the same image easily identifiable and has a calming minfullness appeal
- Adopting research that has been applied to mental health, the use of nature adopts universal representation and inclusivity
- The image follows color requirements, but also informed adjustments to the color palette

![Mountain Image](/assets/images/73bfb902-44a1-4f97-b790-0d6099074d69.jpg)

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

## Features

### General Features

The criteria requested that the page consists of sectioned information with links, resources and other elements that contribute to user experience.

When coding the project, receiving feedback and implementing the [Bootstrap Framework](https://getbootstrap.com/docs/5.3/getting-started/introduction/) the features and design changed from the original wireframe and colour scheme.

Adjustments:

- Adding Grid to page instead of just resources.<br>
This was done to provide the user an easy navigation through sections they would most likely be seeking to interact with when needing immediate help.

- Changing the Navbar to the top of the page instead of under the Slider section.<br>
This decision was made as a result of personal reflection and user feedback to provide a more enjoyable user experience because the hero section doesn't include the sites name and when viewed on an iPad or mobile device the section takes the users attention.

#### Navigation and Carousel Section

I chose to use a bold and welcoming slider section for the start of the page using the [Bootstrap Carousel](https://getbootstrap.com/docs/5.3/components/carousel/)

This gives a clear indication of the content by using a Carousel Jumbotron to show positive quotes as well as imagery that links to the brand and identity of the organisation.

The navigation bar is a Bootstrap component that allows for easy navigation around the site using a familiar method for a positive user experience that is resposive.

![Navigation & Carousel Desktop](/documentation/images/Desktop%20Hero%20+%20Nav.png)
![Navigation & Carousel Mobile/Tablet](/documentation/images/Phone%20+%20Tablet%20Hero%20+%20Nav.png)

#### Bootstrap Cards

I chose the [Bootstrap Card](https://getbootstrap.com/docs/5.3/components/card/) feature for the Tips + Resources content of the page as this allowed for a clean organisation of the information I wanted for the main content.

Within these sections I have given additional resources and links via buttons for ease.

![Tips Cards](/documentation/images/Tips%20+%20Common%20Issues%20Card.png)
![Resources Cards](/documentation/images/Resources%20Card.png)

#### Links and Buttons

Although the page used a variety of colours for buttons to adhere to contrast requirements, each link and button does maintain a level of consistency.

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

### Responsive Design

Using the [Bootstrap Framework](https://getbootstrap.com/docs/5.3/getting-started/introduction/) grid allowed for an implementation that is responsive but additional CSS + media queries were needed for presentation.

Though it took some experimentation and troubleshooting, I have been able to create a page that is fully responsive to modern standards.

As a result of my debugging within Dev Tools and help from other students to identify and resolve responsiveness issues I believe I have a better understanding of how to use Bootstrap for future projects.

[Am I Responsive](https://ui.dev/amiresponsive?url=https://mx-crystalj.github.io/IP1-The-Mental-Mountain-Hub/)<br>
![Am I Responsive](/documentation/images/Responsive%20Full.png)<br>
![Mobile](/documentation/images/Responsive%20Mobile.png)<br>
![ipad Mini](/documentation/images/Responsive%20iPad.png)<br>
![Dektop](/documentation/images/Responsive%20Desktop.png)<br>

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>


## Built With

### Technologies and Languages
![Static Badge](https://img.shields.io/badge/HTML5-Language-grey?logo=html5&logoColor=%23ffffff&color=%23E34F26)
![Static Badge](https://img.shields.io/badge/CSS3-Language-grey?logo=css3&logoColor=%23ffffff&color=%231572B6)

<a href="https://git-scm.com/" target=_blank_>![Static Badge](https://img.shields.io/badge/Git-v2.46.2-grey?logo=git&logoColor=%23ffffff&color=%23F05032)</a>
<a href="https://github.com/" target="_blank">![Static Badge](https://img.shields.io/badge/GitHub-Repo_Hosting-white?logo=github&logoColor=%23ffffff&color=%23181717)</a>
<a href="https://www.gitpod.io/" target="_blank">![Static Badge](https://img.shields.io/badge/Gitpod-IDE-white?logo=gitpod&logoColor=%23ffffff&color=%23FFAE33)</a>

### Libraries and Frameworks
<a href="https://getbootstrap.com/" target="_blank">![Static Badge](https://img.shields.io/badge/Bootstrap-v5.3.3-grey?logo=bootstrap&logoColor=%23ffffff&color=%237952B3)</a>
<a href="#" target="_blank">![Static Badge](https://img.shields.io/badge/Font_Awesome-Icons-grey?logo=fontawesome&logoColor=%23ffffff&color=%23538DD7)</a>
<a href="#" target="_blank">![Static Badge](https://img.shields.io/badge/Google_Fonts-Fonts-grey?logo=googlefonts&logoColor=%23ffffff&color=%234285F4)</a>


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
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

## Testing

Testing and validation os the website was carried out throughout the course of the project.

This included regular debugging and testing using the Dev Tools as provided within Chrome Browser.

[HTML Validation](https://validator.w3.org/)<br>
![HTML Validation](/documentation/images/HTML%20Validator%201.png)

[CSS Validation](https://jigsaw.w3.org/css-validator/)<br>
![CSS Validation](/documentation/images/CSS%20Validator%202.png)

Several bugs appeared in the duration of the project:
- Centering Carousel + took up too much space on desktop = adding white space on sides + CSS media query. 
- Favicon not loading = moved to root directory.
- Desktop view grid errors = deleted align-items-center.
- Vid lengths too big = removed frameborder.

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>

## Credits

### Code

Project and primary learning supplied by [Code Institute](https://codeinstitute.net/ie/)<br>
Supplemental learning resources within the project:

- 
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3)
- [Gemini](https://gemini.google.com) as a learning and content creation tool, no code was directly used.

All additional sources [research](/documentation/research.md).

### Content Research

The additional [research](/documentation/research.md) is listed and can be found within the documentation folder of this repo.

### Media

- Static badges for README documentation [Shields.io](https://shields.io/badges/static-badge) & [Simple Icons](https://simpleicons.org/)
- Youtube (https://youtube.com/)
- Canva (https://canva.com/)

### Acknowledgements

- Mathew and Wai Yi Wong for contributing to my debugging process.

<hr>
<p align="right"><a href="#the-mental-mountain-hub">Back To Top</a></p>