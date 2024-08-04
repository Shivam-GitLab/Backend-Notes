# Backend Project

## Description
This project is a backend service for managing orders. It includes functionalities for creating, updating, and retrieving orders.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    ```
2. Navigate to the project directory:
    ```sh
    cd your-repo-name
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration
1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=3000
    MONGODB_URI=your_mongodb_uri
    ```

## Usage
1. Start the server:
    ```sh
    npm start
    ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints
- `GET /orders` - Retrieve all orders
- `POST /orders` - Create a new order
- `GET /orders/:id` - Retrieve a specific order by ID
- `PUT /orders/:id` - Update a specific order by ID
- `DELETE /orders/:id` - Delete a specific order by ID

## Order Model
The order model includes the following fields:
- `orderItems` (Array of `orderItemSchema`)
- `address` (String, required)
- `status` (String, enum: ["PENDING", "CANCELLED", "DELIVERED"], default: "PENDING")

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License
This project is licensed under the MIT License.
