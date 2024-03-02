#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response, session
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

from models import *

# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Users(Resource):
    
    def get(self):
        return make_response([user.to_dict() for user in User.query.all()], 200)

    def post(self):
        json = request.get_json()
        try:
            user = User(
                username=json['username'],
                first_name=json['first_name'],
                last_name = json['last_name'],
            )
            user.password_hash = json['password']
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id

            return make_response(user.to_dict(rules = ('-_password_hash',)), 201)

        except Exception as e:
            return make_response({'errors': str(e)}, 422)
        
api.add_resource(Users, '/users')

class UsersById(Resource):

    def get(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            return make_response({'error': 'User not found'}, 404)
        return make_response(user.to_dict(), 200)
    
    def patch(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            response_message = {'error': 'User not found'}
            status = 404
        else:
            request_json = request.get_json()
            try:
                for k, v in request_json.items():
                    setattr(user, k, v)
                db.session.commit()
                response_message = user.to_dict()
                status = 202
            except Exception as e:
                response_message = {'error': str(e)}
                status = 422
        return make_response(response_message, status)
    
    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        if not user:
            response_message = {'error': 'User not found'}
            status = 404
        else:
            db.session.delete(user)
            db.session.commit()
            response_message = {}
            status = 204
        return make_response(response_message, status)

api.add_resource(UsersById, '/users/<int:id>')

class CheckSession(Resource):
    
    def get(self):
        user = User.query.filter(User.id == session['user_id']).first()
        if not user:
            return make_response({}, 204)
        else:
            return make_response(user.to_dict(), 200)

api.add_resource(CheckSession, '/check_session', endpoint='check_session')

class Login(Resource):

    def post(self):
        username = request.get_json()['username']

        user = User.query.filter(User.username == username).first()
        password = request.get_json()['password']

        if not user:
            response_body = {'error': 'User not found'}
            status = 404
        else:
            if user.authenticate(password):
                session['user_id'] = user.id
                response_body = user.to_dict()
                status = 200
            else:
                response_body = {'error': 'Invalid username or password'}
                status = 401
        return make_response(response_body, status)

api.add_resource(Login, '/login', endpoint='login')

class Logout(Resource):
    
    def delete(self):
        session['user_id'] = None
        return {}, 204
    
api.add_resource(Logout, '/logout', endpoint='logout')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

