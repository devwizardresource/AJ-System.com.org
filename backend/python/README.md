# AJ System — Backend (Python / FastAPI)

## Setup

```bash
cd backend/python
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
```

## Run

```bash
uvicorn main:app --reload --port 8000
```

Endpoints:

- `GET  /health` — liveness check
- `POST /contact` — accepts `{ name, email, company?, message }`

Contact submissions are appended as JSON lines to `CONTACT_LOG_PATH`
(default `./data/contact.log.jsonl`).
