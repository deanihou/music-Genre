from flask import Flask, request, abort, jsonify
from scipy.io.wavfile import read as read_sound
import numpy as np

app = Flask(__name__)


def json_response(params):
    res = jsonify(params)
    res.headers.add('Access-Control-Allow-Origin', '*')
    return res


@app.route('/classify-music-genre', methods=['GET', 'POST'])
def classify_music_genre():
    if request.method == 'POST' and 'sound_file' in request.files:
        sf = request.files['sound_file'].read()
        sf = np.fromstring(sf, np.uint8)
        print(sf)
        return json_response({
            "Classical": 0.43,
            "Blues": 0.2,
            "Country": 0.15,
            "Disco": 0.48,
            "Hiphop": 0.96,
            "Jazz": 0.65,
            "Metal": 0.23,
            "Pop": 0.52,
            "Reggae": 0.81,
            "Rock": 0.34,
        })
    abort(400)


if __name__ == '__main__':
    app.run(debug=True)
