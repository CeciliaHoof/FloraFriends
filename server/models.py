from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt

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
    bio = db.Column(db.String)
    _password_hash = db.Column(db.String)

    purchased_plants = db.relationship('PurchasedPlant', back_populates = 'user', cascade='all, delete')
    plants = association_proxy('purchased_plants', 'plant')   
    plant_cares = association_proxy('purchased_plants', 'plant_cares', creator=lambda plant_care_obj: PurchasedPlant(plant_care = plant_care_obj))

    @hybrid_property
    def password_hash(self):
        raise Exception('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    serialize_rules = ('-purchased_plants.user', '-password_hash', '-_password_hash')

    @validates('username')
    def validate_username(self, key, value):
        if not value or not 3 <= len(value) <=20:
            raise ValueError('Username must be between 3 and 20 characters')
        return value
    
    @validates('first_name', 'last_name')
    def validate_names(self, key, value):
        if not value or not 2 <= len(value) <= 20:
            raise ValueError('First and last name must be between 2 and 20 characters')
        return value
    
    def __repr__(self):
        return f'<User {self.id} | {self.username}>'
    
class PurchasedPlant(db.Model, SerializerMixin):
    __tablename__ = 'purchased_plants'
    
    id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at =  db.Column(db.DateTime, onupdate = db.func.now())
    
    plant_id = db.Column(db.Integer, db.ForeignKey('plants.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    plant = db.relationship('Plant', back_populates = 'purchased_plants')
    user = db.relationship('User', back_populates = 'purchased_plants')

    plant_cares = db.relationship('PlantCare', back_populates = 'purchased_plant', cascade = 'all, delete')

    serialize_rules = ('-plant.purchased_plants', '-user.purchased_plants', '-plant_cares.purchased_plant')

    def __repr__(self):
        return f'<Purchased Plant {self.id} | {self.plant} | {self.user}>'
    
class PlantCare(db.Model, SerializerMixin):
    __tablename__ = 'plant_cares'

    id = db.Column(db.Integer, primary_key = True)
    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at =  db.Column(db.DateTime, onupdate = db.func.now())
    type_care = db.Column(db.String)
    comment = db.Column (db.String)
    date = db.Column(db.DateTime)
    
    purchased_plant_id = db.Column(db.Integer, db.ForeignKey('purchased_plants.id'), nullable=False)
    purchased_plant = db.relationship('PurchasedPlant', back_populates = 'plant_cares')
    
    user = association_proxy('purchased_plant', 'user')

    serialize_rules = ('-purchased_plant.plant_cares', 'user', '-user.purchased_plants')

    @validates('purchased_plant_id')
    def validates_id(self, key, value):
        if not value:
            raise Exception('You must specify which plant you cared for.')
        return value
    def __repr__(self):
        return f'<PlantCare {self.id} | {self.user.username} | {self.purchased_plant.plant} | {self.date}>'
    
# validate purchased_on for correct format to turn into datetime?