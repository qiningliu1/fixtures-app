# Fixtures Management System

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Git

### Installation
```bash
git clone https://github.com/qiningliu1/fixtures-app.git
cd fixtures-app
npm install
```

### Environment Setup
1. Create `.env.local` file:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/fixtures?retryWrites=true&w=majority
```

2. Get your MongoDB connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Running the App
```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

### Project Structure
```
src/
├── app/
│   ├── api/            # API routes
│   ├── page.js         # Home page
│   └── upload/
│       └── page.js     # Upload page
├── components/         # React components
└── models/             # MongoDB models
```

## Dependencies
- Frontend:
  - next 15.3.2
  - react 18.2.0
  - axios 1.6.8
  - papaparse 5.4.1

- Backend:
  - mongodb 6.5.0
  - mongoose 8.2.1

##  Deployment
Deployed on Vercel: [Live Demo](https://your-vercel-url.vercel.app)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fqiningliu1%2Ffixtures-app)
