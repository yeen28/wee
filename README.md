# WEE

## Requirements
- Java 17 or higher
- Gradle 8.12.1 (build tools)
- Database: MariaDB or MySQL

## Tech Stack
### Back-end
- Java 17 or higher
- Spring Boot 3.x or higher
- Gradle
- MariaDB or MySQL
- Spring Data JPA : ORM framework for interacting with the database
- Liquibase : Database schema version management

### Front-end
- React + Vite

## Installation & Running
### 1. Clone the project
```bash
git clone https://github.com/yeen28/wee.git

# BE
cd BE/

# FE
cd FE/
```
### 2. Install dependencies
Using Gradle:
```bash
./gradlew build
```

### 3. Run the application
Using Gradle:
```bash
./gradlew bootRun
```

### 4. Database Configuration
Set up the database connection in ```common/src/main/resources/application.yaml```.

**Example(MariaDB)**:
```yaml
spring:
  datasource:
    url: jdbc:mariadb://127.0.0.1:3306/wee
    driver-class-name: org.mariadb.jdbc.Driver
    username: ${DB_USERNAME:your_username}
    password: ${DB_PASSWORD:your_password}

    jpa:
      hibernate:
        ddl-auto: create
      properties:
        hibernate:
          dialect: org.hibernate.dialect.MariaDBDialect
```

## Contributing
To contribute to this project, please follow these steps:
1. Fork the project.
2. Work on a new branch.
3. Create a Pull Request when you're ready to merge your changes.