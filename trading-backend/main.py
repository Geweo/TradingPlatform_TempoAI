from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello, Backend is running!"}

@app.get("/api/trades")
async def get_trades():
    return [
        {"coin": "BTC", "entry_price": 42000, "current_price": 43000, "profit": 2.38},
        {"coin": "ETH", "entry_price": 3000, "current_price": 3200, "profit": 6.67},
    ]