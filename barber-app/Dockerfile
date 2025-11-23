# Build Next.js customer app
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --prefer-offline --no-audit --progress=false
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/package*.json ./
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.next ./.next
COPY --from=deps /app/public ./public
COPY --from=deps /app/app ./app
COPY --from=deps /app/next.config.js ./next.config.js
COPY --from=deps /app/tsconfig.json ./tsconfig.json
COPY --from=deps /app/.eslintrc.json ./.eslintrc.json
EXPOSE 3000
CMD ["npm", "run", "start"]
