.PHONY: install run dev test clean

install:
	uv sync

run dev:
	uv run uvicorn app.main:app --reload --port 8000

test:
	uv run python -c "from app.main import app; print('FastAPI application initialized successfully!')"

clean:
	find . -type d -name "__pycache__" -exec rm -rf {} +
	rm -rf .venv .pytest_cache
