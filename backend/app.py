import os
import random
from flask import Flask
from flask import session
from flask import request

app = Flask(__name__)
#app.secret_key(FLASK_SESSION_KEY)
app.secret_key = '6e 67 4d ff 31 bb b4 d1 e3 e2 ab 7b 36 c5 a4 99 ' #KEEP ZIS SECRET BITCHAROO


@app.route('/')
def test():
    return "Server Running"

@app.route('/getmap')
def getMap():
    if 'servedMaps' not in session:
        session['servedMaps'] = []
    
    #mapfile =  random.choice(os.listdir("/home/toba/Code/metro-map-game/metro-map-game/backend/static"))
    mapfile =  random.choice(os.listdir(os.path.realpath(os.path.join(os.path.dirname(__file__), 'static'))))

    while mapfile in session['servedMaps']:
        #mapfile =  random.choice(os.listdir("/home/toba/Code/metro-map-game/metro-map-game/backend/static"))
        mapfile =  random.choice(os.listdir(os.path.realpath(os.path.join(os.path.dirname(__file__), 'static'))))
    
    session['servedMaps'].append(mapfile)

    splitstr = mapfile.split("-")
    nameeng = splitstr[0]
    namesvk = splitstr[1]
    difficulty = int(splitstr[2][0])

    return {
        'nameeng': nameeng,
        'namesvk': namesvk,
        'difficulty': difficulty,
        'file': mapfile,
        'session': session['servedMaps']
    }, 200

@app.route('/finish')
def finishedGame():
    session.pop('servedMaps', None)
    return f"it should've popped the thing if this false: {'servedMaps' in session}"


#getMap()