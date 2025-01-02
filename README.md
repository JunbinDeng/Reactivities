# Reactivities

Reactivities is a full-stack application built with .NET 9.0 and React 18, featuring React Router 6 for navigation. The app demonstrates a robust event management system, featuring user authentication, activity management, and real-time updates with SignalR.

## Demo

View a live demo of the application [here](https://reactivities-showcase.fly.dev).  
You just need to register a user and sign in to see it in action!

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Activity Management**: Create, edit, delete, and manage participants for activities.
- **Real-Time Notifications**: Stay updated with live activity notifications via SignalR.
- **Modern UI**: Responsive design powered by React 18 and Semantic UI React.
- **Dockerized Deployment**: Easy setup with Docker for local and production environments.
- **CI/CD Integration**: Automated workflows using GitHub Actions and Docker Hub.
- **Cloud Deployment**: Hosted on Fly.io for scalability and reliability.

## Tech Stack

### Backend

- **Language**: C#
- **Framework**: ASP.NET Core 9.0
- **Database**: PostgreSQL (Dockerized)
- **Authentication**: JSON Web Tokens (JWT)
- **Real-Time Communication**: SignalR

### Frontend

- **Language**: JavaScript/TypeScript
- **Framework**: React 18
- **Routing**: React Router 6
- **State Management**: MobX
- **Styling**: Semantic UI React

## Getting Started

### Prerequisites

- Docker
- Node.js and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JunbinDeng/Reactivities.git
cd Reactivities
```
2. Set up a docker.
```bash
docker run --name dev -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:latest
```
3. Set up the backend:
```bash
cd API
dotnet restore
dotnet run
```
4. Set up the frontend:
```bash
cd client-app
npm install
npm start
```
5. Access the app at:
```
http://localhost:3000
```

### Configuration
Add `API/appsettings.json` file:
  ```json
  {
    "Logging": {
      "LogLevel": {
        "Default": "Information",
        "Microsoft.AspNetCore": "Warning"
      }
    },
    "AllowedHosts": "*",
    "Cloudinary": {
      "CloudName": "YOUR_VALUE",
      "ApiKey": "YOUR_VALUE",
      "ApiSecret": "YOUR_VALUE"
    },
    "ConnectionStrings": {
      "DefaultConnection": "Server=host.docker.internal; Port=5432; User Id=admin; Password=secret; Database=reactivities"
    },
    "TokenKey": "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJSZWFjdGl2aXRpZXMiLCJuYW1lIjoiQm9iIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.kaEp24wCmflELNtDabPG-B0Vme93zA9dbkH2DDubVh_htNsSmnXhdWsR9vAeyeeX7DUrzMOtn4iIKQUSi0rL4w",
    "SendGrid": {
      "User": "YOUR_VALUE",
      "Key": "YOUR_VALUE"
    }
  }
  ```

