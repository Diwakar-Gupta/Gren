from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import tensorflow as tf
import numpy as np
import pandas as pd


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


def get_image(url):
    img_path = tf.keras.utils.get_file(origin = url)
    image = tf.io.read_file(img_path)
    image = tf.io.decode_jpeg(image, channels=3)
    return image

# https://colab.research.google.com/drive/1tuOEoLbnZyutALJ3EeeT_CMC-oGZP027?usp=sharing
model = tf.keras.models.load_model('model')
product_details = pd.read_csv('CarbonEmission.csv')
class_names = ['Olive_Oil', 'Palm_Oil', 'Rapeseed_Oil', 'Soyabeen_Oil', 'Sunflower_Oil']

def classify_image(images):
    pred = model.predict(images)[0]
    idx = np.argmax(pred)
    print(idx)
    return class_names[idx], pred[idx]

def getproductdetails(class_name):
    details = {}
    carbon_produced = product_details[product_details['Product'].map(lambda x: x.lower() == class_name.lower())]['CE/kg'].iloc[0]
    details['details'] = f'Produces {carbon_produced} Co2/kg'
    
    last_name = class_name.split('_')[-1].lower()
    alternates = product_details[product_details['Product'].map(lambda x: x.lower().endswith(last_name))].sort_values(by='CE/kg')
    
    alts = list(map(lambda x: f'{x[0]} -> {x[1]} Co2/kg', alternates.values.tolist()))

    details['alternates'] = alts
    return details

@app.route("/", methods = ['POST'])
@cross_origin()
def hello_world():
    print(type(request.form['image']))
    img_src = request.form['image']
    image = get_image(url=img_src)
    images = tf.expand_dims(image, axis=0)
    class_name, prob = classify_image(images)
    details = getproductdetails(class_name)
    return jsonify({'product':class_name, 'prob': str(prob), **details})

