from flask import Flask
import os, random

app = Flask(__name__)

@app.route('/test')
def test():
    return "Hello World!"

@app.route('/getmap')
def getMap():
    
    mapfile =  random.choice(os.listdir("/home/toba/Code/metro-map-game/metro-map-game/backend/static"))
    
    splitstr = mapfile.split("-")
    nameeng = splitstr[0]
    namesvk = splitstr[1]
    difficulty = int(splitstr[2][0])

    return {
        'nameeng': nameeng,
        'namesvk': namesvk,
        'difficulty': difficulty
    }

getMap()