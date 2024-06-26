from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
import uuid

app = Flask(__name__)
CORS(app, resources={r"*": {"origins": "http://localhost:4200"}}, supports_credentials=True)
api = Api(app)

devices = []

class Login(Resource):
    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        if username == "usuario1" and password == "senha123":
            return {"message": "Login bem-sucedido!", "username": username}, 200
        return {"message": "Usuário ou senha inválidos!", "error": "Unauthorized"}, 401

class DeviceList(Resource):
    def get(self):
        return jsonify(devices)
    
    def post(self):
        device = request.json
        device['id'] = str(uuid.uuid4())  
        devices.append(device)
        return {"message": "Dispositivo cadastrado com sucesso", "device": device}, 201

class Device(Resource):
    def get(self, id):
        device = next((device for device in devices if device["id"] == id), None)
        if device:
            return device, 200
        return {"message": "Dispositivo não encontrado", "error": "Not Found"}, 404

    def put(self, id):
        updated_device = request.json
        for i, device in enumerate(devices):
            if device["id"] == id:
                updated_device["id"] = id  
                devices[i] = updated_device
                return {"message": "Dispositivo atualizado com sucesso"}, 200
        return {"message": "Dispositivo não encontrado", "error": "Not Found"}, 404

    def delete(self, id):
        global devices
        initial_length = len(devices)
        devices = [device for device in devices if device["id"] != id]
        if len(devices) < initial_length:
            return {"message": "Dispositivo removido com sucesso"}, 200
        return {"message": "Dispositivo não encontrado", "error": "Not Found"}, 404

api.add_resource(Login, '/api/login')
api.add_resource(DeviceList, '/api/device')
api.add_resource(Device, '/api/device/<string:id>')

if __name__ == '__main__':
    app.run(debug=True)
