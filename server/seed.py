#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Plant
from plantseed import plantseeds

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('clearing plants...')
        Plant.query.delete()
        print("Starting seed...")
        db.session.add_all(plantseeds)
        db.session.commit()
        # Seed code goes here!

