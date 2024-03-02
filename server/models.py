from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

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

    serialize_rules = ('-purchased_plants.plant', )

    def __repr__(self):
        return f'<Plant {self.id} | {self.common_name}>'

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable = False)
    username = db.Column(db.String, unique = True, nullable = False)
    #_password_hash = db.Column(db.String) --will need to add this to serialize rules once it is active

    purchased_plants = db.relationship('PurchasedPlant', back_populates = 'user', cascade='all, delete')
    plants = association_proxy('purchased_plants', 'plant')   
    plant_cares = association_proxy('purchased_plants', 'plant_cares')

    serialize_rules = ('-purchased_plants.user', )
    
    @validates('username')
    def validate_username(self, key, value):
        if not 3 <= len(value) <=20:
            raise ValueError('Username must be between 3 and 20 characters')
        return value
    
    @validates('first_name', 'last_name')
    def validate_names(self, key, value):
        if not 2 <= len(value) <= 20:
            raise ValueError('First and last name must be between 2 and 20 characters')
        return value
    
    def __repr__(self):
        return f'<User {self.id} | {self.username} | {self.plants}>'
    
class PurchasedPlant(db.Model, SerializerMixin):
    __tablename__ = 'purchased_plants'
    
    id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    purchased_from = db.Column(db.String)
    purchased_on = db.Column(db.DateTime)
    
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    plant = db.relationship('Plant', back_populates = 'purchased_plants')
    user = db.relationship('User', back_populates = 'purchased_plants')

    plant_cares = db.relationship('PlantCare', back_populates = 'purchased_plant', cascade = 'all, delete')

    serialize_rules = ('-plant.purchased_plants', '-user.purchased_plants', '-plant_cares.purchased_plant')

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
    
    purchased_plants_id = db.Column(db.Integer, db.ForeignKey('purchased_plants.id'))
    purchased_plant = db.relationship('PurchasedPlant', back_populates = 'plant_cares')

    serialize_rules = ('-purchased_plant.plant_cares', )

    def __repr__(self):
        return f'<PlantCare {self.id} | {self.user} | {self.plant} | {self.date}>'
    
# validate purchased_on for correct format to turn into datetime?