# MarketNexus-API

![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
![Redis](https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

_An eCommerce Restful API built using NodeJS, Express and MongoDB. It introduces a flexible solution for managing an online store's backend operations. The API provides endpoints for creating, reading, updating, and deleting products, as well as for processing orders and managing customer information._

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos (Postman) work well in this space. You may also link to more resources.

<details>
<summary>API Endpoints</summary>
<br>

Authentication Services:

- **POST /auth/login :** Login with user credentials. [Public]
- **POST /auth/signup :** Sign up and create a new user account. [Public]
- **POST /auth/logout :** Logout the currently authenticated user. [User]
- **PUT /auth/change-password :** Change the password of the currently authenticated user. [User]

User Services:

- **GET /users :** Query all users by name, email, phone, role. [Public]
- **GET /users/:id :** Get user data by ID. [Public]
- **GET /users/me :** get details of the currently authenticated user. [User]
- **PUT /users/me :** Update details of the currently authenticated user. [User]
- **DELETE /users/me :** Delete the account of the currently authenticated user. [User]
- **DELETE /users/:id :** Delete user by ID. [Admin]

Product Services:

- **GET /products :** Query products by search term (name, description), category, price, rate. [Public]
- **GET /products/:id :** Query product by ID. [Public]
- **GET /products/top-cheapest :** Get the top 5 cheapest products by category. [Public]
- **GET /products/top-rated :** Get the top-rated products by category. [Public]
- **GET /products/most-sold :** Get the most sold products by category. [Public]
- **POST /products :** Create a new product. [Seller]
- **PUT /products/:id :** Update product details by ID. [Seller]
- **DELETE /products/:id :** Delete product by ID. [Seller]

Review Services:

- **POST /reviews/:productId :** Create a new review on product by id. [User]
- **GET /reviews/:productId/reviews :** Query all reviews on product by id [Public]
- **GET /reviews/:id :** Get review by ID. [Public]
- **PUT /reviews/:id :** Update review by ID. [User]
- **DELETE /reviews/:id :** Delete review by ID. [User]

Cart Services:

- **POST /cart/products :** Add a product to the cart. [User]
- **PUT /cart/products/:id/reduce :** Reduce the quantity of a product in the cart by one. [User]
- **PUT /cart/products/:id/increase :** Increase the quantity of a product in the cart by one. [User]
- **GET /cart :** Get the cart for the currently authenticated user. [User]
- **DELETE /cart/products/:id :** Delete a product from the cart. [User]
- **DELETE /cart/:id :** Delete the entire cart. [User]

Order Services:

- **POST /orders :** Create a new order. [User]
- **GET /orders/user/:userId :** Get all orders for the currently authenticated user. [User]
- **GET /orders/:id :** Query order by ID. [User]
- **PUT /orders/:id/cancel :** Cancel an order. [User]
- **PUT /orders/:id/return :** Initiate a return for an order. [User]
- **PUT /orders/:id/status :** Update order status. [Admin]

</details>

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

[NodeJS](https://nodejs.org/en/download) & [MongoDB](https://www.mongodb.com/docs/manual/installation/) should be installed on your machine.

### Installation

1. Clone the repo & navigate to the folder.
   ```sh
   git clone https://github.com/3laaHisham/MarketNexus-API.git && cd MarketNexus-API
   ```
2. Install NPM packages & create an .env file and supply it with variables from .env.sample and values on your own.
   ```sh
   npm install && copy .evn.sample .env
   ```
3. Run the project.
   ```sh
   npm start
   ```

<!-- ROADMAP -->

## Roadmap

- [x] Registeration, Login, Logout, Change Password.
- [x] User Management.
- [x] Product, Review Service.
- [ ] Cart Service.
- [ ] Order Service via Stripe.
- [ ] Tests.
- [x] Security.
  - [x] Authentication & Authorization.
  - [x] Protection against Cross-Origin attacks (XSS & CSRF).
  - [x] Encryption.
- [ ] Caching & Tokens.
- [ ] API Features (Filters, Pagination, Sorting, Limit & Full Text Search).
- [ ] CI/CD.
- [ ] Documentation (Postman & Comments).

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

- 👨🏼‍💻 [**Alaa Hisham**](https://github.com/3laaHisham)
  - LinkedIn: [@AlaaHisham](https://www.linkedin.com/in/alaahisham/)
  - Email: **alaaismail286@gmail.com**
- 👨🏻‍💻 [**Abdulrahman Fahmy**](https://github.com/abdulrhman500)
  - LinkedIn: [@Abdulrhman-Fahmy](https://www.linkedin.com/in/abdulrhman-fahmy/)
  - Email: **abdulrhmanabotor@gmail.com**

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This Project was inspired by these awesome open source APIs.

- [Braineanear](https://github.com/Braineanear/EcommerceAPI)
- [xUser5000](https://github.com/xUser5000/pingo-server)
- [yamilt351](https://github.com/yamilt351/api-rest)
