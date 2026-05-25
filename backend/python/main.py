from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from core.config import get_settings
from routes.contact import router as contact_router

settings = get_settings()

app = FastAPI(
    title="AJ System API",
    version="0.1.0",
    description="Backend for ajsystem.vc — contact intake and partner ops.",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


app.include_router(contact_router)
