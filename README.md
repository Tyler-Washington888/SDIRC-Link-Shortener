# SDIRC-Link-Shortener 
- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Project Overview

**SDIRC-Link-Shortener**  is a URL shortening web service, which provides short aliases for redirection of long URLs. 

<br>

## MVP

- The SDIRC-Link-Shortener MVP is a full CRUD, full stack application built using MongoDB, Express, React and Node. It is fully responsive, and styled using tailwindCSS.
<br>

### Goals

- Full CRUD, REST API, built with Node
- Full CRUD interactive front end built with React
- Forms to authenticate users via Active Directory
- Forms to create and update shortUrl's
- Fully responsive styling with two media queries
- Clean, organized, and structured code

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
| cors | mechanism that allows servers to indicate origins from which a browser should permit loading resources |
| colors | color-management system used to style NodeJS console |
| dotenv | zero-dependency module used to load environment variables from a .env file into process.env. |
| express | back end web framework used for building RESTful APIs in Node.js |
| mongoose | data modeling library used to build schema-based solutions to model application data |
| valid-url | Check whether a string is a valid HTTP URL |
<br>

### Client (Front End)

#### Wireframes

[Link to Wireframes](https://www.figma.com/file/9ArR80N00RAJ1YmVlvpijc/Wireframes?t=gaMT5kgmH8HfVA9s-6)

- Home Screen   

<img src='meta-minds-fe/src/assets/images/Group 24.png'>

- Mobile Sign In Screen

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915201/SDIRC-Link-Shortener/Mobile-Wireframes/Group_3_umbzzx.png)

- Mobile Shorten URL Screen

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915406/SDIRC-Link-Shortener/Mobile-Wireframes/Group_4_ogqbyb.png)

- Mobile Shortened URL Screen

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669923037/SDIRC-Link-Shortener/Mobile-Wireframes/Group_12_u61phq.png)

- Mobile Navigation Menu

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669923110/SDIRC-Link-Shortener/Mobile-Wireframes/Group_13_1_gjdanu.png)

- Mobile All URL's Screen

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915662/SDIRC-Link-Shortener/Mobile-Wireframes/Group_7_ufpd5v.png)

- Mobile URL Details Screen 

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915775/SDIRC-Link-Shortener/Mobile-Wireframes/Group_8_hhwqwf.png)

- Mobile My URL's Screen 

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915876/SDIRC-Link-Shortener/Mobile-Wireframes/Group_9_n0mbtr.png)

- Mobile My URl Details Screen 

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669915876/SDIRC-Link-Shortener/Mobile-Wireframes/Group_9_n0mbtr.png)

- Mobile Rename URL Screen

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669916063/SDIRC-Link-Shortener/Mobile-Wireframes/Group_11_tmnqon.png)



#### Component Tree

[Link to Component Tree](https://www.figma.com/file/eOt4Lh4EN8KzqvXVt3Awpi/Component-Trees?node-id=0%3A1&t=gaMT5kgmH8HfVA9s-0)

- Mobile Component Tree

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669916277/SDIRC-Link-Shortener/Mobile-Component-Hierarchy/Group_1_1_oefk7z.png)

- Desktop Component Tree

![Dummy Link](https://res.cloudinary.com/daefwvbfj/image/upload/v1669916277/SDIRC-Link-Shortener/Mobile-Component-Hierarchy/Group_1_1_oefk7z.png)
