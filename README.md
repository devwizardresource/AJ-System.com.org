# AJ System

Sitio corporativo de **AJ System** — seis áreas alineadas: Gerencia, Ingeniería, Logística, Soporte Técnico, Jurídica y Contabilidad.

- **Frontend**: Next.js 16 + TypeScript + Tailwind v4 (exportable como sitio estático)
- **Backend**: FastAPI + Python 3.12 (endpoint `/contact`)

```
ajsystem/
├── frontend/          # Next.js — se publica en GitHub Pages
├── backend/python/    # FastAPI — se despliega aparte (Render/Railway/Fly)
└── resources/img/     # Referencias visuales
```

## Desarrollo local

### Frontend

```bash
cd frontend
npm install
npm run dev
# http://localhost:3000
```

### Backend

> Requiere `python3-venv` (`sudo apt install python3.12-venv` si falla).

```bash
cd backend/python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload --port 8000
```

## Despliegue

### Frontend → GitHub Pages (gratis)

El workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) construye y publica el sitio automáticamente en cada push a `main`.

Pasos para activarlo:

1. Crear el repo en GitHub y empujar este código:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:USUARIO/REPO.git
   git push -u origin main
   ```

2. En el repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. (Opcional) **Settings → Secrets and variables → Actions → Variables**, crear `CONTACT_EMAIL` con tu correo de contacto.
4. El sitio queda en `https://USUARIO.github.io/REPO/`.

> El `basePath` se ajusta automáticamente al nombre del repo. Si más adelante conectas un dominio propio, borra la variable `NEXT_PUBLIC_BASE_PATH` del workflow.

### Backend → FastAPI (cuando lo necesites)

GitHub Pages solo sirve archivos estáticos, no Python. Para activar el endpoint `/contact`:

1. Desplegar `backend/python/` en Render, Railway, Fly o similar.
2. En el repo, **Settings → Secrets and variables → Actions → Variables**, agregar `NEXT_PUBLIC_API_URL` con la URL pública del backend.
3. Re-correr el workflow.

Mientras tanto, el formulario de contacto cae a `mailto:` automáticamente, abriendo el cliente de correo del visitante con los datos pre-rellenados.

## Variables de entorno (frontend)

| Variable | Para qué sirve | Valor por defecto |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | Prefijo de ruta cuando el sitio vive en `/REPO/` (GitHub Pages) | vacío |
| `NEXT_PUBLIC_API_URL` | Endpoint del backend FastAPI | vacío → fallback a `mailto:` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email de fallback del formulario | `contacto@ajsystem.com` |
