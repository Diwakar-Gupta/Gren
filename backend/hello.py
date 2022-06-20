from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_image(url):
    img_path = tf.keras.utils.get_file(origin = url)
    image = tf.io.read_file(img_path)
    image = tf.io.decode_jpeg(image, channels=3)
    return image

model = tf.keras.models.load_model('model')
class_names = ['Olive_Oil', 'Palm_Oil', 'Rapeseed_Oil', 'Soyabeen_Oil', 'Sunflower_Oil']

def classify_image(images):
    pred = model.predict(images)[0]
    idx = np.argmax(pred)
    print(idx)
    return class_names[idx], pred[idx]

@app.route("/", methods = ['POST'])
@cross_origin()
def hello_world():
    print(type(request.form['image']))
    img_src = request.form['image']
    image = get_image(url=img_src)
    images = tf.expand_dims(image, axis=0)
    class_name, prob = classify_image(images)
    return jsonify({'product':class_name, 'prob': str(prob)})

