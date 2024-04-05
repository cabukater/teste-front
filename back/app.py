from flask import Flask, request, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS

app = Flask(__name__)
# Aplicar o CORS a todas as rotas e permitir solicitações de localhost:4200
CORS(app, resources={r"*": {"origins": "http://localhost:4200"}}, supports_credentials=True)

api = Api(app)

# Simulação de um banco de dados simples em memória para exemplo
users = [{"username": "usuario1", "password": "senha123"}]
devices = []  # Simulação de um "banco de dados" para dispositivos

class Login(Resource):
    def post(self):
        # Simula uma verificação de login
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')
        for user in users:
            if user['username'] == username and user['password'] == password:
                return {"message": "Login bem-sucedido!"}, 200
        return {"message": "Usuário ou senha inválidos!"}, 401

class DeviceList(Resource):
    def get(self):
        return jsonify(devices)
    
    def post(self):
        device = request.json
        devices.append(device)
        return {"message": "Dispositivo cadastrado com sucesso"}, 201

class Device(Resource):
    def get(self, id):
        device = next((device for device in devices if device["identifier"] == id), None)
        if device:
            return device
        return {"message": "Dispositivo não encontrado"}, 404

    def put(self, id):
        for i, device in enumerate(devices):
            if device["identifier"] == id:
                devices[i] = request.json
                return {"message": "Dispositivo atualizado com sucesso"}
        return {"message": "Dispositivo não encontrado"}, 404

    def delete(self, id):
        global devices
        initial_length = len(devices)
        devices = [device for device in devices if device["identifier"] != id]
        if len(devices) < initial_length:
            return {"message": "Dispositivo removido com sucesso"}
        return {"message": "Dispositivo não encontrado"}, 404

# Adicionando os recursos à API
api.add_resource(Login, '/api/login')
api.add_resource(DeviceList, '/api/device')
api.add_resource(Device, '/api/device/<string:id>')

if __name__ == '__main__':
    app.run(debug=True)
