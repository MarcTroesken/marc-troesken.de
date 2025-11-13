# Multi-stage build für optimale Image-Größe

############################
# Build Stage
############################
FROM node:20-alpine AS builder

WORKDIR /app

# Package-Dateien kopieren
COPY package*.json ./

# Dependencies installieren (inkl. Dev-Dependencies fürs Build)
RUN npm ci

# Source-Code kopieren
COPY . .

# React-App bauen (z. B. Create React App: erzeugt /build)
RUN npm run build


############################
# Production Stage
############################
FROM node:20-alpine AS runner

WORKDIR /app

# Non-root User anlegen
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 reactjs

# Leichten Static-File-Server installieren
RUN npm install -g serve

# Gebaute Dateien aus dem Builder übernehmen
# Create React App: Output liegt in /app/build
COPY --from=builder --chown=reactjs:nodejs /app/build /app/build

# Umgebungsvariablen
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Non-root User verwenden
USER reactjs

# Port freigeben
EXPOSE 3000

# Healthcheck (prüft, ob die App auf / erreichbar ist)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# App starten (serve: statischer Server für den Build-Ordner)
CMD ["serve", "-s", "build", "-l", "3000"]
