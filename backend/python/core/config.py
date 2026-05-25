import os
from functools import lru_cache
from pathlib import Path

from dotenv import load_dotenv

load_dotenv()


class Settings:
    cors_origins: list[str]
    contact_log_path: Path

    def __init__(self) -> None:
        origins = os.getenv("CORS_ORIGINS", "http://localhost:3000")
        self.cors_origins = [o.strip() for o in origins.split(",") if o.strip()]
        self.contact_log_path = Path(
            os.getenv("CONTACT_LOG_PATH", "./data/contact.log.jsonl")
        )


@lru_cache
def get_settings() -> Settings:
    return Settings()
