.PHONY: help install-customer dev-customer compose-up compose-down host-customer

help:
@echo "Available targets:"
@echo "  install-customer  - Install dependencies for the customer Next.js app"
@echo "  dev-customer      - Run the customer app in development mode"
@echo "  host-customer     - Build and run only the customer app via Docker"
@echo "  compose-up        - Build and start the full stack via docker compose"
@echo "  compose-down      - Stop the docker compose stack and remove containers"

install-customer:
cd client-apps/customer-app && npm install

dev-customer:
cd client-apps/customer-app && npm run dev

host-customer:
cd infrastructure && docker compose -f docker-compose.customer.yml up --build

compose-up:
cd infrastructure && docker compose up --build

compose-down:
cd infrastructure && docker compose down
