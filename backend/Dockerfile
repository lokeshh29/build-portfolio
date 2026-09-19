FROM python:3.11-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install uv for fast dependency management
RUN pip install --no-cache-dir uv

# Copy pyproject.toml
COPY pyproject.toml .

# Install dependencies using uv
RUN uv pip install --system -r <(uv pip compile pyproject.toml) || pip install --no-cache-dir fastapi uvicorn[standard] httpx pydantic pydantic-settings python-dotenv slowapi

# Copy application source code
COPY app ./app
COPY .env .env

EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
