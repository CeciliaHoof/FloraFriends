#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports

from models import *

# Views go here!

class Plants(Resource):

    def get(self):
        plants = [plant.to_dict() for plant in Plant.query.all()]
        return make_response(plants, 200)
    
api.add_resource(Plants, '/plants')

class PlantsByID(Resource):

    def get(self, id):
        plant = Plant.query.filter(Plant.id == id).first()

        if not plant:
            return make_response({'error':'no plant found'}, 404)
        
        return make_response(plant.to_dict(), 200)
      

api.add_resource(PlantsByID, '/plants/<int:id>')

class PlantCares(Resource):

    def get(self):
        cares = [care.to_dict() for care in PlantCare.query.all()]
        return make_response(cares, 200)
    
    def post(self):
        care_data = request.get_json()
        try:
            new_plantcare = PlantCare()
            for key, value in care_data.items():
                setattr(new_plantcare, key, value)
            
            db.session.add(new_plantcare)
            db.session.commit()

            return make_response(new_plantcare.to_dict(), 201)
        except Exception as e:
            return make_response([str(e)], 422)

api.add_resource(PlantCares, '/plant_cares')

class PlantCaresByID(Resource):

    def get(self, id):
        plantcare = PlantCare.query.filter(PlantCare.id == id).first()
        if not plantcare:
            return make_response({'error':'No care found'}, 404)
        else:
            return make_response(plantcare.to_dict(), 200)
    

    def patch(self, id):
        plantcare = PlantCare.query.filter(PlantCare.id == id).first()
        if not plantcare:
            return make_response({'error':'No care found'}, 404)

        patch_data = request.get_json()
        try:
            for key, value in patch_data.items():
                setattr(plantcare, key, value)
            
            db.session.commit()
            return make_response(plantcare.to_dict(), 202)
        
        except Exception as e:
            return make_response([str(e)], 400)
        
    def delete(self, id):
        plantcare = PlantCare.query.filter(PlantCare.id == id).first()
        if not plantcare:
            return make_response({'error':'No care found'}, 404)
        
        db.session.delete(plantcare)
        db.session.commit()

        return make_response({}, 204)

api.add_resource(PlantCaresByID, '/plant_cares/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)

