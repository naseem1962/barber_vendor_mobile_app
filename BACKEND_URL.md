# Using the Vercel Backend in All Apps

**Backend URL:** `https://barber-app-backend.vercel.app/api`

All apps are configured to use this URL by default. You can override it per app for local development.

---

## User app (customer)

| App        | Config location                         | Override for local backend                    |
|-----------|------------------------------------------|-----------------------------------------------|
| **user-web**   | `user-web/src/lib/api.ts` + `next.config.js` | Set env: `NEXT_PUBLIC_API_URL=http://localhost:5000/api` |
| **user-mobile**| `user-mobile/src/lib/api.ts`             | Create `.env`: `EXPO_PUBLIC_API_URL=http://localhost:5000/api` |

---

## Vendor app (barber)

| App         | Config location                          | Override for local backend                    |
|------------|-------------------------------------------|-----------------------------------------------|
| **barber-web**  | `barber-web/src/environments/environment.ts` | Change `apiUrl` to `http://localhost:5000/api` |
| **barber-mobile** | `barber-mobile/src/lib/api.ts`          | Create `.env`: `EXPO_PUBLIC_API_URL=http://localhost:5000/api` |

---

## Admin app

| App              | Config location                    | Override for local backend                    |
|------------------|-------------------------------------|-----------------------------------------------|
| **admin-dashboard** | `admin-dashboard/src/lib/api.ts` | Create `.env`: `VITE_API_URL=http://localhost:5000/api` |

---

## Backend CORS (Vercel)

If you deploy the frontends to Vercel, set these in the **backend** project’s Environment Variables on Vercel so the API allows those origins:

- `USER_WEB_URL` = your user-web URL (e.g. `https://your-user-web.vercel.app`)
- `BARBER_WEB_URL` = your barber-web URL
- `ADMIN_DASHBOARD_URL` = your admin-dashboard URL

Also set `MONGODB_URI` and any other secrets the backend needs.
