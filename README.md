# Healthcare Platform Mono-Repo

This repository contains a mono-repo that groups client applications, an API gateway, multiple Node-based microservices, background workers, and infrastructure definitions for running the entire platform locally.

## Repository Structure

- `client-apps/`
  - `admin-dashboard/` – placeholder for the administrative UI.
  - `customer-app/` – Next.js 15 MVP website for the loyalty-first barber booking experience (Dockerized for local runs).
- `api-gateway/` – Express API gateway that load balances requests across downstream services.
- `microservices/`
  - `patient-service/`
  - `user-management-service/`
  - `analytics-service/`
  - `review-scheduling-service/`
  - `booking-service/`
 - `notification-service/`
- `background-workers/` – shared message schemas, RabbitMQ publisher helpers, and queue consumers.
- `infrastructure/docker-compose.yml` – orchestrates services plus PostgreSQL, Redis, and RabbitMQ.

## Customer Web App (MVP)

The `client-apps/customer-app` directory contains a statically rendered MVP website that communicates the product pillars,
architecture, roadmap, and SLAs for Barbertop.

## Quick steps: host the customer website locally

Follow these copy/paste commands to view the Barbertop MVP site on your machine. Docker is the only requirement for this path.

1) Clone the repo and enter it:
```bash
git clone <repo-url>
cd rajuj0
```

2) (Optional) copy the environment template to keep defaults consistent:
```bash
cp .env.example .env
```

3) Build and host the customer site with Docker:
```bash
make host-customer
```
This uses `infrastructure/docker-compose.customer.yml` to start the site on `http://localhost:3000`.

4) Stop the container when finished:
```bash
docker compose -f infrastructure/docker-compose.customer.yml down
```

If port 3000 is busy, set `PORT=3001` in a `.env` file before running step 3.

See [`docs/host-customer.md`](docs/host-customer.md) for a more detailed walkthrough and troubleshooting tips.

## Customer Web App (MVP)

The `client-apps/customer-app` directory contains a statically rendered MVP website that communicates the product pillars,
architecture, roadmap, and SLAs for Barbertop.

**Run locally (Node dev server)**

```bash
# install dependencies then start the dev server
make install-customer
make dev-customer
```

Open `http://localhost:3000` to preview the MVP page.

## Getting Started

1. Copy `.env.example` to `.env` and adjust any ports or connection strings.
2. Run `make compose-up` from the repository root to start all containers (including the customer web app on port 3000).
3. Once containers are healthy you can preview the customer web app at `http://localhost:3000` and the API gateway at `http://localhost:4000`.
   - Patient records: `GET/POST /api/patients`
   - User management: `GET/POST /api/users`
   - Analytics: `GET/POST /api/analytics/reports`
   - Review scheduling: `GET/POST /api/reviews`
   - Booking: `GET/POST /api/bookings`
   - Notifications: `POST /api/notifications/sms` or `/email`

### Background Workers

The `background-workers` service consumes RabbitMQ queues (`bookings`, `analytics`) defined in `background-workers/src/schemas.js`. Booking events trigger SMS notifications through the notification-service provider adapters and persist audit events to PostgreSQL. Analytics jobs are persisted into the analytics database for later processing.

## Development Notes

- Each service exposes a `/health` endpoint for readiness checks.
- Dockerfiles are available in each service directory for containerized deployments.
- Message schemas and publisher utilities live in `background-workers/src` and are reused by services such as the booking-service.

Feel free to extend the client applications with real implementations or replace the placeholder providers with production-ready adapters (e.g., Twilio, SendGrid).
