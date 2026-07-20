# PT Askara Digital Technology - Web Application

## Project Overview

This repository contains the web application for PT Askara Digital Technology, built using Next.js 15, React 19, and Tailwind CSS. The project is architected using the Clean Architecture pattern to ensure strict separation of concerns, high scalability, and maintainability.

## System Architecture

The application implements Clean Architecture principles, dividing the codebase into four distinct layers. This approach isolates the domain models and business logic from the user interface and external services, allowing for easier testing and seamless future migrations (such as transitioning from static data to a REST API or cloud database).

### 1. Domain Layer (`src/domain/`)
The core of the application. It contains business entities, core data structures, and repository interfaces. This layer has no dependencies on other layers or external frameworks.
- `entities/`: Data structures and TypeScript interfaces (`ServiceItem`, `ValueItem`, etc.).
- `repositories/`: Interface contracts (e.g., `IDataRepository`) that define how data should be accessed by the application layer.
- `constants.ts`: Shared static values and configurations utilized across the application.

### 2. Application Layer (`src/application/`)
Contains the application's use cases. It orchestrates the flow of data to and from the domain entities, directing the business logic.
- `use-cases/`: Classes or functions (e.g., `GetLandingDataUseCase`) that implement specific business operations. They strictly depend on the repository interfaces from the domain layer, not concrete implementations.

### 3. Infrastructure Layer (`src/infrastructure/`)
Responsible for interacting with the outside world, including databases, APIs, and third-party services.
- `data/`: Concrete data sources, currently implemented as static mock data.
- `repositories/`: Concrete implementations of the interfaces defined in the domain layer (e.g., `MockDataRepository`).
- `di/`: Dependency Injection container. It wires up the application by providing instantiated concrete repositories to the application use cases.

### 4. Presentation Layer (`src/presentation/` and `src/app/`)
The user interface layer built with Next.js and React. It is solely responsible for rendering data and capturing user interactions.
- `src/presentation/components/`: Reusable UI components. These components receive data exclusively through React props and remain completely agnostic of the data fetching mechanisms.
- `src/app/page.tsx`: The Next.js Server Component acting as the application entry point. It calls the Dependency Injection container to execute the necessary use case, fetches the data server-side, and passes it down to the Client Components.

## Data Flow

The flow of data through the system follows a unidirectional and decoupled pattern:

1. **Initialization:** The Next.js Server Component (`src/app/page.tsx`) invokes the Dependency Injection Container to retrieve an instance of the required use case.
2. **Execution:** The Server Component executes the use case method asynchronously.
3. **Data Retrieval:** The use case requests data from the injected repository interface.
4. **Implementation:** The infrastructure repository fetches the data from the external source (or internal static files) and maps it to the domain entities.
5. **Response:** The formatted data is returned up the execution chain to the Server Component.
6. **Rendering:** The Server Component passes the retrieved data as props to the Presentation Components (Client Components) for rendering on the browser.

## Directory Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── application/
│   └── use-cases/
│       └── get-landing-data.ts
├── domain/
│   ├── entities/
│   │   └── types.ts
│   ├── repositories/
│   │   └── data-repository.ts
│   └── constants.ts
├── infrastructure/
│   ├── data/
│   │   └── mock-data.ts
│   ├── di/
│   │   └── container.ts
│   └── repositories/
│       └── mock-data-repository.ts
└── presentation/
    └── components/
        ├── LandingPageClient.tsx
        ├── Hero.tsx
        ├── About.tsx
        ├── Services.tsx
        └── ...
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

### Building for Production
To create an optimized production build:
```bash
npm run build
npm start
```
