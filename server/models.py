from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

class Plant(db.Model, SerializerMixin):
    __tablename__ = 'plants'

    id = db.Column(db.Integer, primary_key = True)
    scientific_name = db.Column(db.String)
    common_name = db.Column(db.String)
    watering = db.Column(db.String)
    zone = db.Column(db.String)
    sunlight = db.Column(db.String)
    image = db.Column(db.String)

    purchased_plants = db.relationship('PurchasedPlant', back_populates = 'plant')
    users = association_proxy('purchased_plants', 'user')

    def __repr__(self):
        return f'<Plant {self.id} | {self.common_name}>'

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    username = db.Column(db.String, unique = True)
    #hash_password = db.Column(db.String)

    purchased_plants = db.relationship('PurchasedPlant', back_populates = 'user', cascade='all, delete')
    plants = association_proxy('purchased_plants', 'plant')   

    plant_cares = db.relationship('PlantCare', back_populates = 'user', cascade = 'all, delete')

    def __repr__(self):
        return f'<User {self.id} | {self.username} | {self.plants}>'
    
class PurchasedPlant(db.Model, SerializerMixin):
    __tablename__ = 'purchased_plants'
    
    id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    purchased_from = db.Column(db.String)
    purchased_on = db.Column(db.String)
    
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    plant = db.relationship('Plant', back_populates = 'purchased_plants')
    user = db.relationship('User', back_populates = 'purchased_plants')

    def __repr__(self):
        return f'<User {self.id} | {self.plant} | {self.user}>'
    
class PlantCare(db.Model, SerializerMixin):
    __tablename__ = 'plant_cares'

    id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at =  db.Column(db.DateTime, onupdate = db.func.now())
    type_care = db.Column(db.String)
    plant = db.Column(db.String)
    comment = db.Column (db.String)
    date = db.Column(db.DateTime)
    
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user = db.relationship('User', back_populates = 'plant_cares')

    def __repr__(self):
        return f'<PlantCare {self.id} | {self.user} | {self.plant} | {self.date}>'