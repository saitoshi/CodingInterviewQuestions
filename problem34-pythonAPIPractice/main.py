from fastapi import FastAPI

app = FastAPI() # Ensure this line exists and uses the correct variable name

@app.get("/")
async def root():
    return {"message": "Hello World"}

'''
/get-message?name=Stefan
'''
@app.get("/get-message")
async def hello(name: str):
    return {'Message': "Congrats " + name + '! This is your first APi!'}

static_string = "Intial Text"

@app.post("/add")
async def add_text(text: str):
    global static_string
    static_string += text
    return {"Message" : "Text changed", "current_string": static_string}