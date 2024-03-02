#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print('clearing users...')
        User.query.delete()

        print("Starting seeding users...")
        # Seed code goes here!
        users = []
        
        u1 = User(
            username = 'user1',
            first_name = fake.first_name(),
            last_name = fake.first_name()
        )

        users.append(u1)

        u2 = User(
            username = 'user2',
            first_name = fake.first_name(),
            last_name = fake.first_name()
        )

        users.append(u2)

        u3 = User(
            username = 'user3',
            first_name = fake.first_name(),
            last_name = fake.first_name()
        )

        users.append(u3)

        db.session.add_all(users)
        db.session.commit()