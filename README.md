# Welcome to Assembla-Client

## Description

This one is an assemble client project, which you can view the comments added by you. It will show 50 comments at a time and then on load more, see next.

## THIS WON"T WORK in GH-PAGES

## Setup

### How to make it work in local

- Download/clone the assembla-client.
- go inside folder assembla-client('cd ass-client') & run 'npm start'.
- Download/clone the assembla-server.
- go inside assembla-server('cd assembla-server') & run 'npm start'.
- go to http://localhost:3000


### How to setup passwords

- create a file, example, 'passwords.txt',  in any location.
- Add the key, secret, space_id & user_id in it with a space separating them. For example, "key secret spaceId userId".
- Go to 'src/Constants.js' file & mention the file path in it.

### Others
- Now we are only fetching till 60 pages, you can change the page count in 'Reviews.js' class.

## Screenshots

### Login

![alt tag](https://github.com/jayahariv/ass-client/blob/master/login.png)

### Reviews

![alt tag](https://github.com/jayahariv/ass-client/blob/master/reviews.png)
