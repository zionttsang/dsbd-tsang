# ui
FROM node:20-alpine AS ui

WORKDIR /app

COPY frontend ./frontend
RUN cd frontend && npm install && npm run build

# service
FROM node:20-alpine AS runner
WORKDIR /app

COPY service.sh .
COPY --from=ui /app/frontend/ ./frontend
COPY backend ./backend
RUN cd backend && npm install

RUN addgroup -g 1001 -S nodejs
RUN adduser -u 1001 -S nextjs
USER nextjs

CMD sh ./service.sh 
EXPOSE 3000 3001
