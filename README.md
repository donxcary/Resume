# Resume

A modern resume website built with **React** and **Node.js**. This application features a React frontend that fetches resume data from a Node.js/Express backend API.

## Features

- **React Frontend**: Modern, component-based UI built with React and Vite
- **Node.js Backend**: Express server with RESTful API for resume data
- **Responsive Design**: Clean, professional resume layout
- **API-driven**: Resume content is served via API, making it easy to update

## Tech Stack

- **Frontend**: React, Vite, CSS3
- **Backend**: Node.js, Express
- **Development**: Hot Module Replacement (HMR) for fast development

## Project Structure

```
Resume/
├── server.js           # Express server
├── package.json        # Root package configuration
├── img/               # Images directory
├── client/            # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Resume.jsx
│   │   │   └── Resume.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── public/
│   │   └── img/       # Public images
│   └── package.json   # Client dependencies
└── README.md
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/donxcary/Resume.git
   cd Resume
   ```

2. **Install root dependencies**:
   ```bash
   npm install
   ```

3. **Install client dependencies**:
   ```bash
   cd client
   npm install
   cd ..
   ```

   Or use the convenience script:
   ```bash
   npm run install-client
   ```

## Running the Application

### Development Mode

To run both the backend and frontend in development mode:

1. **Start the backend server** (in one terminal):
   ```bash
   npm run server
   ```
   The server will run on http://localhost:5000

2. **Start the frontend dev server** (in another terminal):
   ```bash
   npm run client
   ```
   The React app will run on http://localhost:5173

### Production Mode

1. **Build the React app**:
   ```bash
   npm run build
   ```

2. **Start the server**:
   ```bash
   NODE_ENV=production npm start
   ```
   The application will be available at http://localhost:5000

## API Endpoints

- `GET /api/resume` - Returns complete resume data in JSON format
- `GET /img/*` - Serves static image files

## Available Scripts

- `npm start` - Start the production server
- `npm run server` - Start the backend server in development
- `npm run client` - Start the React development server
- `npm run build` - Build the React app for production
- `npm run install-client` - Install client dependencies

## Customization

To update the resume content, modify the resume data in `server.js` in the `/api/resume` endpoint. The data structure includes:

- Personal Information
- Contact Details
- Skills
- Certifications
- Objective
- Personal Traits
- Education History
- Work Experience
- References

## Author

**Akoto Nana Ofori**  
Web & Graphic Designer

- Email: donxcary@gmail.com
- GitHub: [@donxcary](https://github.com/donxcary)

## License

ISC

