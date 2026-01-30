# Barber App - Complete Setup Guide

This is a comprehensive barber shop management platform with AI-powered features.

## Project Structure

```
barber_app/
├── backend/              # Node.js + Express + MongoDB (MVC)
├── user-web/             # Next.js User Web Application
├── barber-web/           # Angular Barber Web Application
├── user-mobile/          # React Native User Mobile App
├── barber-mobile/        # React Native Barber Mobile App
└── admin-dashboard/      # React.js Admin Dashboard
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn
- For mobile apps: Expo CLI

## Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
   - MongoDB connection string
   - JWT secret
   - OpenAI API key (for AI features)
   - Cloudinary credentials (for image uploads)
   - Email configuration

5. Start MongoDB service

6. Run the backend:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

## User Web Application (Next.js)

1. Navigate to user-web:
```bash
cd user-web
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

4. Run development server:
```bash
npm run dev
```

Access at `http://localhost:3000`

## Barber Web Application (Angular)

1. Navigate to barber-web:
```bash
cd barber-web
```

2. Install dependencies:
```bash
npm install
```

3. Update `src/environments/environment.ts` with API URL

4. Run development server:
```bash
npm start
```

Access at `http://localhost:4200`

## User Mobile App (React Native)

1. Navigate to user-mobile:
```bash
cd user-mobile
```

2. Install dependencies:
```bash
npm install
```

3. Update API URL in `src/lib/api.ts`

4. Start Expo:
```bash
npm start
```

Press `i` for iOS simulator or `a` for Android emulator

## Barber Mobile App (React Native)

1. Navigate to barber-mobile:
```bash
cd barber-mobile
```

2. Install dependencies:
```bash
npm install
```

3. Update API URL in `src/lib/api.ts`

4. Start Expo:
```bash
npm start
```

## Admin Dashboard (React.js)

1. Navigate to admin-dashboard:
```bash
cd admin-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Update API URL in `src/lib/api.ts`

4. Run development server:
```bash
npm run dev
```

Access at `http://localhost:3001`

## Features Implemented

### Backend (MVC Architecture)
- ✅ User, Barber, Admin authentication
- ✅ Appointment management
- ✅ Customer history tracking
- ✅ Chat system (Socket.IO)
- ✅ AI features (OpenAI integration)
- ✅ Content management API
- ✅ No-show prediction
- ✅ Pricing recommendations
- ✅ Business insights

### User Web (Next.js)
- ✅ Responsive design
- ✅ User authentication
- ✅ Browse barbers
- ✅ View appointments
- ✅ Dashboard with loyalty points

### Barber Web (Angular)
- ✅ Responsive design
- ✅ Barber authentication
- ✅ Appointment management
- ✅ Dashboard with earnings
- ✅ Customer history

### Mobile Apps (React Native)
- ✅ User mobile app
- ✅ Barber mobile app
- ✅ Responsive UI
- ✅ Authentication
- ✅ Core features

### Admin Dashboard (React.js)
- ✅ Admin authentication
- ✅ User management
- ✅ Barber management & verification
- ✅ Content management (Logos, Banners, Privacy Policy, Terms)

## API Endpoints

### Authentication
- `POST /api/users/register` - Register user
- `POST /api/users/login` - Login user
- `POST /api/barbers/register` - Register barber
- `POST /api/barbers/login` - Login barber
- `POST /api/admin/login` - Login admin

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments/user` - Get user appointments
- `GET /api/appointments/barber` - Get barber appointments
- `PUT /api/appointments/:id/status` - Update status

### AI Features
- `POST /api/ai/hairstyle-recommendation` - Get AI recommendations
- `GET /api/ai/predict-no-show/:id` - Predict no-show
- `POST /api/ai/pricing-recommendation` - Get pricing suggestion
- `GET /api/ai/business-insights` - Get business insights

### Chat
- `GET /api/chat` - Get or create chat
- `POST /api/chat/message` - Send message
- `GET /api/chat/:id/messages` - Get messages

### Content
- `GET /api/content/active` - Get active content (public)
- `POST /api/content` - Create content (admin)
- `PUT /api/content/:id` - Update content (admin)

## Database Models

- User
- Barber
- Admin
- Appointment
- CustomerHistory
- Chat
- Content

## Next Steps

1. Set up MongoDB database
2. Configure environment variables
3. Add OpenAI API key for AI features
4. Set up Cloudinary for image uploads
5. Configure email service for notifications
6. Deploy backend to production
7. Deploy frontend applications
8. Set up mobile app builds

## Notes

- All applications use TypeScript
- Backend follows MVC architecture
- All frontend apps are fully responsive
- Mobile apps use Expo for easy development
- Admin dashboard can manage all content including logos, banners, privacy policy, and terms & conditions
