from fastapi import FastAPI
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from datetime import date


d = [
    {"User": "a", "date": date.today(), "count": 1},
    {"User": "b", "date": date.today(), "count": 2},
]

app = FastAPI()

@app.get("/")
async def hello(name: str):
    return {'Message': "Congrats " + name + '! This is your first APi!'}

@app.get('/json')
async def main():
    return JSONResponse(content=jsonable_encoder(d))