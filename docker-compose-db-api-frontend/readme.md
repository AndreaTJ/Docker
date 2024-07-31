# Docker Compose Full Stack Application

This repository contains a full stack application with a PostgreSQL database, an API, and a frontend, all managed using Docker Compose.

## Project Structure

- `docker-compose.yml`: Defines the services for the database, API, and frontend.
- `api/`: Contains the API code, including its Dockerfile.
- `db/`: Placeholder for database initialization scripts if needed.
- `frontend/`: Contains the frontend code, including its Dockerfile.

## Getting Started

To run this project, ensure you have Docker and Docker Compose installed. Follow these steps:

1. Clone the repository:
    
    ```bash
    git clone https://github.com/AndreaTJ/docker-compose-db-api-frontend.git
    cd docker-compose-db-api-frontend
    ```

2. Add the necessary environment variables:
   
    ```env
    DB_NAME=mydatabase
    DB_USER=myuser
    DB_PASSWORD=mypassword
    API_PORT=5000
    FRONTEND_PORT=3000
    ```

3. Build and start the services:
   
    ```bash
    docker-compose up --build -d
    ```

4. Access the application:
    - API: http://localhost:5000
    - Frontend: http://localhost:3000


## License

This project is licensed under the MIT License.
