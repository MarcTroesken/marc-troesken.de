# 🚀 Quick Start Guide

## Lokale Entwicklung starten

### Option 1: Direkt mit Node.js
```bash
npm install
npm run dev
```
Website läuft auf: http://localhost:3000

### Option 2: Mit Docker Compose (empfohlen)
```bash
# Development mit Hot Reload
docker-compose up dev

# Production Build
docker-compose up website
```

### Option 3: Nur Docker
```bash
docker build -t marc-troesken-website .
docker run -p 3000:3000 marc-troesken-website
```

## 📝 Erste Schritte

1. **Profilbild anpassen**
   - Ersetze `public/profile.jpg` mit deinem Foto

2. **Social Links anpassen**
   - Öffne `components/Footer.vue`
   - Update GitHub, Twitter Links

3. **Karriere-Daten prüfen**
   - Öffne `components/CareerTrajectory.vue`
   - Verifiziere die 3 letzten Positionen

4. **LinkedIn URL prüfen**
   - Suche nach `linkedin.com/in/marc-troesken`
   - Ersetze mit deiner korrekten URL

## 🔧 GitHub Actions Setup

1. Gehe zu GitHub Repository Settings
2. Navigiere zu: Secrets and variables > Actions
3. Füge hinzu:
   - `DOCKER_USERNAME`: Dein Docker Hub Username
   - `DOCKER_PASSWORD`: Dein Docker Hub Token

## 🌐 Deployment Optionen

### Vercel (einfachste Option)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run generate
# Upload dist/ folder to Netlify
```

### Docker auf Server
```bash
# Build und Push
docker build -t username/marc-troesken-website .
docker push username/marc-troesken-website

# Auf Server
docker pull username/marc-troesken-website
docker run -d -p 80:3000 username/marc-troesken-website
```

## 📱 Testen auf verschiedenen Geräten

Development Server ist erreichbar über:
- Lokal: http://localhost:3000
- Netzwerk: http://[deine-ip]:3000

## 🎨 Anpassungen

### Farben ändern
`tailwind.config.js`:
```javascript
colors: {
  primary: {
    DEFAULT: '#3B82F6',  // Hauptfarbe
    dark: '#1E40AF',     // Dunklere Variante
  }
}
```

### Content ändern
- Navigation: `components/Navigation.vue`
- Hero: `components/HeroSection.vue`
- Skills: `components/TechnicalProficiency.vue`
- Karriere: `components/CareerTrajectory.vue`

## 🐛 Troubleshooting

**Port bereits belegt?**
```bash
# Ändere Port in docker-compose.yml
ports:
  - "3001:3000"  # Statt 3000
```

**Node Module Fehler?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Docker Build Probleme?**
```bash
docker system prune -a
docker build --no-cache -t marc-troesken-website .
```

## 📞 Support

Bei Fragen oder Problemen:
1. Prüfe die Konsole auf Fehler
2. Stelle sicher, dass Node.js 20+ installiert ist
3. Prüfe ob alle Dependencies installiert sind
