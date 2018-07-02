## flipt (Flex project)

### Background

flipt connects people with books. The idea behind flipt is to make use of books that everyone stores in their homes and make them part of a greater communal library. 

The app will allow users to lend books they own to other readers around them as well check out books they are interested in reading. flipt aims to get the dust off those books stored on those bookshelves and put them to good use. 



### Functionality & MVP

With this app, users will be able to:

- [ ] User Authorization,
- [ ] Search for books by location and different filters(name, author, genre, year),
- [ ] Send direct messages to other users after requesting and being accepted by other user,
- [ ] Checkout and return a book,
- [ ] View book profiles with summaries and nearby locations of book,
- [ ] View user profiles that display books shared by the user and display user ratings,
- [ ] List their own books by scanning ISBN to add to database


### Wireframes

![](https://image.ibb.co/mZGeAT/Screen_Shot_2018_06_25_at_12_21_22_AM.png)
![](https://image.ibb.co/coEXVT/Screen_Shot_2018_06_25_at_12_21_29_AM.png)
![](https://image.ibb.co/edHrPo/Screen_Shot_2018_06_25_at_12_27_35_AM.png)
![](https://image.ibb.co/f817x8/Screen_Shot_2018_06_25_at_12_21_53_AM.png)

### Technologies & Technical Challenges

This app will involve: 

Languages:
- JavaScript
- HTML5
    
Frameworks:
- React Native
- Redux
- node.js
- Express
- Mongo DB 

Etc:
- Searching through database
- Geolocation 
- API Requests to third parties
- Messaging
- Searching by ISBN or title
- Authorization via Google and Facebook
- Checkout button to send request to book owner
- Splash Page
- User Profile Page
- Book Profile Page
- Google books embedded api



The primary technical challenges will be:

- Using geo location to allow users to search for books nearby,
- Setting up messaging between lenders and borrowers,
- Implementing a barcode scanner,
- API requests to third party to receive book info. 

### Things we accomplished this weekend.
1. Learn implementation of MERN stack. 
2. User Auth Frontend/Backend
3. Email authentication
4. Splash/Home Page
5. Learn how to implement React Native for different mobile devices
6. User profile page

### Group Members & Work Breakdown

Our group consists of four members, Kartik, Felix, Tiffany, and Robin.
// TBD
Robin's primary responsibilities will be:
    - node.js and express

Tiffany's primary responsibilities will be:
    - Frontend
    - Messaging

Felix's primary responsibilities will be:
    - node.js and Express
    - 

Kartik's primary responsibilities will be:
    - Frontend
    - Geolocation/Maps


### Implementation Timeline

**Day 1**: User profile page, Work on Book model, controller, Book profiles, and being able to add books to database. CRUD for Books. Seed books.

**Day 2**: Geolocation. Search for books by location, title, and other filters. Being able to checkout

**Day 3**: Messaging

**Day 4**: Messaging, Start on checking out and returning books

**Day 5**: ISBN scan

**Monday of deadline**: Push to heroku. (8:59:59 AM)

### Future Plans
- Book and User ratings
- Implement Web Sockets for messaging
- Email authorization
- eBook Preview
- Suggest a Book
- Loading Screen
- Waitlist
- Link to create meetup event for book club
- User camera to scan ISBN
