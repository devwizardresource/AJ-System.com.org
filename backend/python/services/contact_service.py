import json
import uuid
from datetime import datetime, timezone
from pathlib import Path

from models.contact import ContactIn


def save_contact(payload: ContactIn, log_path: Path) -> str:
    log_path.parent.mkdir(parents=True, exist_ok=True)
    record_id = uuid.uuid4().hex
    record = {
        "id": record_id,
        "received_at": datetime.now(timezone.utc).isoformat(),
        **payload.model_dump(),
    }
    with log_path.open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")
    return record_id
