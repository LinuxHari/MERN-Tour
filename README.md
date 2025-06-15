# MERN Tours (Frontend)

## Description

This is the frontend repository for MERN Tours, a tour booking platform designed to provide users with a seamless experience for discovering and booking tours. Built with React, this application focuses on a dynamic and responsive user interface, efficient data handling, and a smooth booking process.

## Features

* **Tour Search and Listing:** Easily search and browse through a diverse range of tour packages with a responsive and intuitive interface.
* **Detailed Tour Information:** View comprehensive details about each tour, including itineraries, inclusions, exclusions, and pricing, presented clearly to the user.
* **User Authentication:** Secure user registration and login flow for a personalized Browse and booking experience.
* **Booking Management:** Users can view and manage their tour bookings directly within the frontend application.
* **Secure Payment Integration:** Seamless and secure payment processing powered by Stripe integration on the frontend.
* **Image Display:** Displays tour images efficiently, leveraging Firebase for storage (images are fetched and displayed by the frontend).
* **Interactive Maps:** Utilizes Chart.js to render interactive maps, enhancing the user's understanding of tour locations or routes.
* **Robust Data Fetching and Caching:** Leverages Redux Toolkit and RTK Query for efficient data fetching from the backend API and intelligent caching, resulting in a faster and more responsive user experience.

## Technologies Used

* React
* Redux Toolkit
* RTK Query
* TypeScript
* Chart.js
* Firebase (specifically for image handling and display on the frontend)
* Stripe (frontend integration for payment processing)

## Architecture and Principles

The frontend of MERN Tours is built following the **SOLID principles** to ensure a well-structured, maintainable, and scalable codebase.

* **Single Responsibility Principle:** Components and modules are designed with a single, clear purpose.
* **Open/Closed Principle:** The design allows for adding new features with minimal modification to existing code.
* **Liskov Substitution Principle:** Ensures that instances of a class can be replaced with instances of its subclasses without altering the correctness of the frontend application.
* **Interface Segregation Principle:** Components only depend on the parts of the state or props they actually need.
* **Dependency Inversion Principle:** High-level React components do not depend on low-level implementation details; instead, both depend on abstractions (e.g., through hooks or context).

The frontend also employs various **React design patterns** to enhance code reusability, improve component organization, and promote a more maintainable structure.

## Security

While backend security is crucial, the frontend also incorporates security considerations to protect users and data, addressing relevant aspects of the **OWASP Top 10** from a client-side perspective. This includes measures to prevent:

* Cross-Site Scripting (XSS) through careful handling of user input and rendering.
* Exposure of sensitive data through secure communication with the backend and avoiding storing sensitive information client-side unnecessarily.
* Broken Access Control in how the UI responds to different user roles and permissions (though enforcement is primarily backend).
* Security Misconfiguration related to frontend dependencies and build processes.
* Using Components with Known Vulnerabilities by keeping dependencies updated.

Secure practices are followed in handling API requests and integrating third-party services like Stripe and Firebase on the frontend.

## Installation and Usage

(Provide instructions on how to set up and run the frontend project locally. This section will need to be filled in with specific steps for your frontend's setup.)

```bash
# Clone the repository
git clone https://github.com/LinuxHari/MERN-Tour

# Navigate to the frontend directory
cd MERN-Tour

# Install dependencies
npm install # Or yarn install

# Set up environment variables
# Create a .env file in the frontend directory and add necessary environment variables (e.g., API base URL, Firebase config, Stripe public key)

# Run the development server
npm run dev # Or yarn start