## QA automation homework assignment

### The app

This repository contains a simple web application, with Dockerfile and docker-compose files to make it easy to run it as a container. If you decide to use docker-compose, the application will be mapped to host port 3567.

The application itself permits user to edit budgets (lists of payment transactions) and also to share it with other users. It can also display charts with transaction summary that can be filtered by budgets and users.

When you first open the app, you will be asked to log in or create a new user. Creating a new user is very simple, just enter a new user name and password. We believe the interface is simple and intuitive, but if you need more clarification, please let us know.

### The task

Your task will be to write automated tests for the provided app. Even though the app is quite simple, we understand that testing it thoroughly would require a lot of effort and is not necessary - the purpose of this task is to demonstrate your ability to create automated tests. To make things easier, you can ignore the multi-user functionality (of course, you may do multi-user tests for bonus points :) ) and only test the basics - creating a budget, adding couple of transactions in different categories, making sure the totals and subtotals match, etc.

### The solution

Your solution should contain:
* brief description of the approach and tools used
* description of the test script, what use cases were covered, etc.
* the automated test itself

We leave the selection of tools and frameworks to you, as long as they are generally available and we will be able to run the tests. We would prefere if the tests were dockerized and a shell script would be provided to execute them.

We did not leave any intentional bugs in the app (which does not mean it's perfect), so it's OK if all the tests pass.
