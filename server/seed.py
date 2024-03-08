#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc
from datetime import datetime

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Plant, User, PurchasedPlant, PlantCare
from plantseed import plantseeds

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('clearing tables...')
        Plant.query.delete()
        User.query.delete()
        PurchasedPlant.query.delete()
        PlantCare.query.delete()


        print("Seeding plants...")
        db.session.add_all(plantseeds)

        print("Seeding users...")
        users = []

        for _ in range(10):
            unique_username = fake.unique.user_name()
            first_name = fake.first_name()
            last_name = fake.last_name()

            user_instance = User(username=unique_username, first_name=first_name, last_name=last_name)
            user_instance.password_hash = "abc123"
            
            users.append(user_instance)
        
        db.session.add_all(users)

        print('Seeding purchased plants...')

        purchased_plants = []

        for _ in range(30):
            plant_id = randint(1, 40)
            user_id = randint(1, 10)

            purchase = PurchasedPlant(user_id = user_id, plant_id = plant_id)
            purchased_plants.append(purchase)
        
        db.session.add_all(purchased_plants)

        print("Seeding plant cares...")

        db.session.commit()