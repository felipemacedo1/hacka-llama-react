# Explora+ (Hacka-Llama React)

Explora+ is a React-based application developed during the Hacka-Llama hackathon. It integrates Firebase for authentication and utilizes various React libraries to deliver a seamless, interactive user experience.

---

## Features

- **Authentication**: Google login using Firebase.
- **Interactive Charts**: Built using Chart.js and React Chart.js 2.
- **Responsive Design**: Developed with TailwindCSS and Material-UI.
- **Dashboard**: Visualize data dynamically using Recharts.
- **API Integration**: Axios-based REST API integration.
- **Routing**: Client-side navigation with React Router DOM.

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/felipemacedo1/hacka-llama-react.git
   cd hacka-llama-react
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
   ```

---

## Usage

### Development Server

Run the application locally:

```bash
npm run dev
```

### Build for Production

Generate a production-ready build:

```bash
npm run build
```

### Preview Production Build

Preview the production build:

```bash
npm run preview
```

---

## Project Structure

```
src/
├── components/         # Shared components (Footer, Navbar, Sidebar, etc.)
├── contexts/           # React Context for global state management
├── pages/              # Page-level components (Login, Dashboard, etc.)
├── routes/             # Routing configurations
├── services/           # API integration and utility functions
├── mocks/              # Mock API handlers for testing
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── vite-env.d.ts       # TypeScript environment types
```

---

## Technologies Used

### Frontend

- **React**: Component-based UI library.
- **TypeScript**: Static typing for JavaScript.
- **TailwindCSS**: Utility-first CSS framework.
- **Material-UI**: Pre-built React components for UI design.
- **Swiper**: Interactive carousels and sliders.

### Charts

- **Chart.js**: Visualization library for interactive charts.
- **Recharts**: Chart library built on React.

### State and Routing

- **React Router DOM**: Client-side routing.
- **React Context**: Global state management.

### Backend Integration

- **Firebase**: Authentication and backend as a service.
- **Axios**: HTTP client for API communication.

### Testing

- **MSW**: Mock Service Worker for API simulation.

---

## Scripts

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Run the development server        |
| `npm run build`   | Build the project for production  |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Lint the project for code quality |

---

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

---

## License

This project is licensed under the MIT License.



