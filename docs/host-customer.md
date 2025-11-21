# Host the Customer Website Locally

Follow these steps to build and host the Barbertop customer MVP site on your machine. Docker is the only runtime dependency for this flow.

1. **Clone and enter the repo**
   ```bash
   git clone <repo-url>
   cd rajuj0
   ```

2. **Copy environment defaults (optional)**
   ```bash
   cp .env.example .env
   ```
   The customer site does not require secrets for the static MVP page, but copying the template keeps the stack consistent if you later start the full compose setup.

3. **Start the customer site with Docker**
   ```bash
   make host-customer
   ```
   This builds the Next.js image and serves it via `infrastructure/docker-compose.customer.yml` on port `3000`.

4. **Open the site**
   Visit `http://localhost:3000` in your browser to see the MVP experience.

5. **Stop the container**
   Press `Ctrl+C` in the terminal running the command, or stop the compose project directly:
   ```bash
   docker compose -f infrastructure/docker-compose.customer.yml down
   ```

## Troubleshooting
- Ensure Docker Desktop (or another Docker engine) is running before starting the container.
- If port 3000 is busy, set `PORT=3001` in a `.env` file before running `make host-customer`.
- To host the entire stack instead of just the customer site, run `make compose-up` from the repo root.
