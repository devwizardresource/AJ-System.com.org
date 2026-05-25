from pydantic import BaseModel, EmailStr, Field


class ContactIn(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    company: str | None = Field(default=None, max_length=160)
    message: str = Field(min_length=10, max_length=4000)


class ContactOut(BaseModel):
    ok: bool
    id: str
