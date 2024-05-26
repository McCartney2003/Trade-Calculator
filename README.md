# Trade Calculator

Welcome to the Trade Calculator!
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Installation

1. **Clone the repository**
   
2. **Install the required dependencies**:
    ```sh
    npm i
    ```
3. **Create a .env file**:
    Create a .env file with all the necessities.


4. **Start the server**:
   ```sh
    npm start
    ```

##API Endpoints:
1. https://trade-calculator-production.up.railway.app/api/v1/asset-wise-balance/:id

In this API: id=user_id.

This API would give the asset-wise balance of the account at any given timestamp.

2. https://trade-calculator-production.up.railway.app/api/v1/upload

This API accepts a single input, CSV file et. as the input, parses the data present in it and stores it in a database.

Deployment
For deployment of the project, we used railway.app: https://trade-calculator-production.up.railway.app/
