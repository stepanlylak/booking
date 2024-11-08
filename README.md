# Booking

This is a project with a front-end and back-end setup using React (Vite) and NestJS.

## Project Structure

The repository is organized as follows:
- **apps/client-main** - React application built with Vite.
- **apps/server-main** - Backend server using NestJS.

## Getting Started

### Prerequisites

Make sure you have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:stepanlylak/booking.git
   cd booking

2. Install dependencies in both client-main and server-main:
   ```bash
   cd apps/client-main
   npm install

   cd ../server-main
   npm install

### Running the Project

1. Build the client application:
   ```bash
   cd apps/client-main
   npm build

2. Start the server application:
   ```bash
   cd ../server-main
   npm start

### Additional Information
1. The client application (React + Vite) can be accessed on the port defined in the Vite configuration.
2. The server application (NestJS) will start on the default port specified in the NestJS configuration.
