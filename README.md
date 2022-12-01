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

[Live Site](https://meta-minds.netlify.app/)

**Meta-Minds** is a blog app that allows users to create and discover ideas about the metaverse. Users begin on the home page where they are provided a preview of all the latest posts. From there, they can click on a post to view it in detail, or navigate to other screens where they can view posts by category and create posts. The first two categories users can navigate to are called 'Meta' and 'Mana'. Meta allows users to read about the company formerly known as Facebook, while Mana allows users to stay up-to-date with one of the BIGGEST metaverse platforms, Decentraland. In addition to these two options, users can also explore the 'Cyrpto' and 'Film' categories. The Crypto category is for users wanting to read about other incredible metaverse platforms, not named Decentraland, and the Film category is for the Sci-Fi/Dystopian enthusiasts who love to dissect movies that incorporate virtual reality and other emerging technologies into their production. 

<br>

## MVP

- The Meta Minds MVP is a full CRUD, full stack application with a Rails back end and React front end. It is fully responsive, and styled using CSS. 

<br>

### Goals

- RESTful JSON API built with Ruby on Rails with full CRUD
- Full CRUD interactive front end built with React
- Form to input new posts and update posts
- Display all user posts 
- Implement Auth for users
- Fully responsive styling with two media queries
- Clean, organized, and structured code

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Javascript library for building user interfaces |
|   React Router   | Library for routing, enabling navigation between components|
|   axios | Promise-based HTTP client for Node.js and the browser | 
|   bcrypt | Password hashing function | 
|   jwt | Securely transmits information between parties as a JSON object | 
|   cors | Allows a server to indicate any origins from which a browser should permit loading resources|
| CKEditor| WYSIWYG rich text editor|
| Luxon | Library for dealing with dates and times in JavaScript |
| React HTML Parser | A utility for converting HTML strings into React components | 


