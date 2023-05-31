# E-Commerce Application - Seller Dashboard 

It is an E-commerce web application created using ReactJS which can be used to browse, explore, and buy various types of products.

This repository contains the source code of the main application (to be accessed by the users).

The source code for the seller dashboard of the application is present [here](https://github.com/muskanmi/E-Commerce-Admin).


## Features:

- Users can browse over a wide variety of products listed on the platform.
- Users also get an option to view the products belonging to a specific category or product line.
- Users can see various details of the products like their description, images, prices, etc.
- Ability to add multiple products to the cart.
- Users can place a purchase order for one or more products by checking out payment using Stripe payment gateway.


## Tools & Technology Used:

- React.js
- Next.js
- Tailwind CSS
- HTML
- CSS
- Javascript
- MongoDB
- Google Auth
- Stripe Payments
- Web APIs


## Prerequisites:

* React.js Version: **18.2.0**
* Next.js Version: **13.3.0**
* NPM Version: **9.6.2**
* You also need to have Mongo database setup using Mongo Atlas.


## Instructions:

Before proceeding with the steps for running this application, you might first need to start & access the seller dashboard application for adding few products by following the instructions present in the [seller application repo](https://github.com/muskanmi/E-Commerce-Admin).

You can follow the below steps to run the ecommerce application in your system's local environment:

1. Get the source code on your pc via git.

    ```shell
    git clone https://github.com/muskanmi/E-Commerce
    ```

2.  Now, navigate inside the folder through your terminal.

    ```shell
    cd E-Commerce
    ```

3. Next, you need to create a configuration file named as `.env` at the root of the folder (where package.json file is present).

4. Then, enter the following statements after adding the values of appropriate configurations like *MongoDB URI*, *Stripe Payment Gateway API keys* in this newly created `.env` file:

    ```js
        MONGODB_URI = ""
        STRIPE_PK = ""
        STRIPE_SK = ""
        PUBLIC_URL = ""
    ```

5. Next, install the required dependencies by running the following command:

    ```shell
    npm install
    ```

6. Finally, start the application by running:

    ```shell
    npm run dev
    ```

7. Voila! the ecommerce application is ready for use. You can run it at [http://127.0.0.1:3001/](http://127.0.0.1:3001/) (*Note:* The port might differ depending on the running application on your system).


***Note:*** The products displayed in the web application are just for reference and do not correspond to any real products.


#### :small_blue_diamond: Please do give a ⭐️ if you find this project useful.

