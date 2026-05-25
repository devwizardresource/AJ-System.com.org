from fastapi import APIRouter, Depends

from core.config import Settings, get_settings
from models.contact import ContactIn, ContactOut
from services.contact_service import save_contact

router = APIRouter(tags=["contact"])


@router.post("/contact", response_model=ContactOut)
def post_contact(
    payload: ContactIn,
    settings: Settings = Depends(get_settings),
) -> ContactOut:
    record_id = save_contact(payload, settings.contact_log_path)
    return ContactOut(ok=True, id=record_id)
