import os
import random
from flask import Flask
from flask import session
from flask import request

app = Flask(__name__)
#app.secret_key(FLASK_SESSION_KEY)
app.secret_key = '6e 67 4d ff 31 bb b4 d1 e3 e2 ab 7b 36 c5 a4 99 ' #KEEP ZIS SECRET BITCHAROO
#change the secret key when hosting it (so it isnt on github)


@app.route('/')
def test():
    return "Server Running"

@app.route('/getmap')
def getMap():
    if 'servedMaps' not in session:
        session.permanent = True        
        session['servedMaps'] = list()
    
    #mapfile =  random.choice(os.listdir("/home/toba/Code/metro-map-game/metro-map-game/backend/static"))
    mapfile =  random.choice(os.listdir(os.path.realpath(os.path.join(os.path.dirname(__file__), 'static'))))

    i = 0
    while mapfile in session['servedMaps']:
        #mapfile =  random.choice(os.listdir("/home/toba/Code/metro-map-game/metro-map-game/backend/static"))
        mapfile =  random.choice(os.listdir(os.path.realpath(os.path.join(os.path.dirname(__file__), 'static'))))
        
        i += 1
        if i > 20:
            return "Loop detected. Will fix this at some point", 508

    
    session['servedMaps'].append(mapfile)

    splitstr = mapfile.split("-")
    nameeng = splitstr[0]
    namesvk = splitstr[1]
    #difficulty = int(splitstr[2][0]) #difficulty deprecated

    return {
        'nameeng': nameeng,
        'namesvk': namesvk,
        'file': f"/static/{mapfile}",
        'session': session['servedMaps']
    }, 200

@app.route('/finish')#methods=['POST']
def finishedGame():
    session.pop('servedMaps', None)
    
    if 'servedMaps' in session:
        return "can't clear session data", 500
    else:
        return "cleared session", 200


#getMap()