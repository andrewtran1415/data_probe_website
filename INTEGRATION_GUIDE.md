# DataProbe Website - Backend & Frontend Integration Guide

## Tổng quan

Đã tích hợp database PostgreSQL với backend (Next.js) và frontend (React + Vite).

## Cấu trúc

### Backend (`/backend`)
- **Database**: PostgreSQL 16 (port 5429)
- **Framework**: Next.js 16
- **API Routes**: `/app/api/*`

### Frontend (`/frontend`)
- **Framework**: React + Vite
- **API Client**: `/src/lib/api.ts`

## Setup

### 1. Database

```bash
cd backend
docker-compose up -d postgres
```

Database sẽ chạy trên `localhost:5429`

### 2. Backend Environment

Tạo file `.env` trong `backend/`:

```env
POSTGRES_HOST=localhost
POSTGRES_PORT=5429
POSTGRES_DB=dataprobe_db
POSTGRES_USER=dataprobe
POSTGRES_PASSWORD=dataprobe_dev_password

JWT_SECRET=your-jwt-secret-key-change-in-production
JWT_EXPIRES_IN=7d
JWT_REFRESH_EXPIRES_IN=30d
```

### 3. Frontend Environment

Tạo file `.env` trong `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:3000/api
```

### 4. Chạy Backend

```bash
cd backend
npm run dev
```

Backend chạy trên `http://localhost:3000`

### 5. Chạy Frontend

```bash
cd frontend
npm run dev
```

Frontend chạy trên `http://localhost:5173` (hoặc port khác nếu 5173 bận)

## API Endpoints

### Authentication

#### `POST /api/auth/register`
Đăng ký tài khoản mới

**Request:**
```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "username": "username"
    },
    "accessToken": "jwt-token",
    "refreshToken": "refresh-token"
  }
}
```

#### `POST /api/auth/login`
Đăng nhập

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:** (giống register)

#### `POST /api/auth/google`
Google OAuth (placeholder - cần implement OAuth flow)

### License

#### `POST /api/licenses/validate`
Validate license code (gọi từ desktop app)

**Request:**
```json
{
  "code": "DP-XXXX-XXXX-XXXX-XXXX",
  "deviceId": "device-fingerprint"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "licenseType": "yearly",
    "expiresAt": "2025-12-31T23:59:59Z",
    "activated": true
  }
}
```

## Frontend Integration

### Sử dụng API Client

```typescript
import { apiClient } from '@/lib/api';

// Register
const response = await apiClient.register(email, username, password);
if (response.success) {
  localStorage.setItem('accessToken', response.data.accessToken);
  // ...
}

// Login
const response = await apiClient.login(email, password);

// Validate License
const response = await apiClient.validateLicense(code, deviceId);
```

### Authentication State

Tokens được lưu trong `localStorage`:
- `accessToken`: JWT token cho API calls
- `refreshToken`: Token để refresh access token
- `user`: User object (JSON stringified)

## Database Schema

Xem `backend/database/schema.sql` và `backend/database/SCHEMA_DESIGN.md`

### Tables chính:
- `users` - User accounts
- `user_sessions` - Authentication sessions
- `licenses` - License codes
- `license_activations` - Device bindings
- `purchases` - Purchase orders

## Testing

### Test Database Connection

```bash
cd backend
npm run dev
# Check console for connection status
```

### Test API Endpoints

```bash
# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","username":"testuser","password":"password123"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

## Next Steps

1. **Google OAuth**: Implement full Google OAuth flow
2. **Email Verification**: Add email verification flow
3. **Password Reset**: Add password reset functionality
4. **License Generation**: Create API to generate licenses after purchase
5. **Purchase API**: Integrate with payment provider (Paddle/Stripe)
6. **Protected Routes**: Add middleware for protected API routes

## Troubleshooting

### Database Connection Error
- Kiểm tra Docker container đang chạy: `docker ps`
- Kiểm tra port 5429 không bị chiếm
- Kiểm tra environment variables

### API Errors
- Kiểm tra backend đang chạy trên port 3000
- Kiểm tra CORS settings (nếu cần)
- Xem console logs trong backend

### Frontend API Calls Fail
- Kiểm tra `VITE_API_BASE_URL` trong `.env`
- Kiểm tra network tab trong browser DevTools
- Đảm bảo backend đang chạy
