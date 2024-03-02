from models import Plant
#from client.public import database_pictures



# class Plant(db.Model, SerializerMixin):
#     __tablename__ = 'plants'

#     id = db.Column(db.Integer, primary_key = True)
#     scientific_name = db.Column(db.String)
#     common_name = db.Column(db.String)
#     watering = db.Column(db.String)
#     zone = db.Column(db.String)
#     sunlight = db.Column(db.String)
#     image = db.Column(db.String)

#     purchased_plants = db.relationship('PurchasedPlant', back_populates = 'plant')
#     users = association_proxy('purchased_plants', 'user')

#     def __repr__(self):
#         return f'<Plant {self.id} | {self.common_name}>'


#  [ 'Full Sun', 'Partial Sun', 'Bright Indirect Light', 'Direct Light']



plantseeds = [
    Plant(
        scientific_name = 'Aloe vera',
        common_name = 'Aloe vera',
        watering = 'Low',
        zone = '10 and above',
        sunlight = 'Bright, direct light',
        image = '../client/public/database_pictures/aloe_vera.jpg'
    ),
     Plant(
        scientific_name = 'Epipremnum Aureum',
        common_name = 'Golden Pothos',
        watering = 'Moderate',
        zone = '10 and above',
        sunlight = 'Bright, indirect light',
        image = '../client/public/database_pictures/golden_pothos.jpg'
    ),
     Plant(
        scientific_name = 'Dracaena trifasciata',
        common_name = 'Snake Plant',
        watering = 'Low',
        zone = '9 and above',
        sunlight = 'Low to Bright, indirect or direct light',
        image = '../client/public/database_pictures/snake_plant.jpg'
    ),
    Plant(
        scientific_name='Aglaonema commutatum',
        common_name="Chinese Evergreen 'Silver Queen",
        watering='Moderate',
        zone='10 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/chinese_evergreen.jpeg'
    ),
    Plant(
        scientific_name='Alocasia cuprea',
        common_name="Alocasia 'Red Secret'",
        watering='Moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/red_secret.jpg'
    ),
    Plant(
        scientific_name='Anthurium andraeanum',
        common_name='Flamingo Flower',
        watering='Moderate',
        zone='11 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/flamingo_flower.jpg'
    ),
    Plant(
        scientific_name='Dieffenbachia oerstedii',
        common_name='Dumb Cane',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/dumb_cane.jpeg'
    ),
    Plant(
        scientific_name='Philodendron hastatum',
        common_name='Silver Sword Philodendron',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/silver_sword.jpeg'
    ),
    Plant(
        scientific_name='Syngonium podophyllum',
        common_name='Arrowhead Plant',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/arrowhead_plant.jpg'
    ),
    Plant(
        scientific_name='Monstera adansonii',
        common_name='Swiss Cheese Vine',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/swiss_cheese_vine.jpg'
    ),
    Plant(
        scientific_name='Rhaphidophora tetrasperma',
        common_name='Mini Monstera',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/mini_monstera.jpeg'
    ),
    Plant(
        scientific_name='Scindapsus pictus',
        common_name='Silver Satin Pothos',
        watering='Moderate',
        zone='11 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/silver_satin_pothos.jpg'
    ),
    Plant(
        scientific_name='Spathiphyllum wallisii',
        common_name='Peace Lily',
        watering='Moderate',
        zone='11 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/peace_lily.jpg'
    ),
    Plant(
        scientific_name='Schefflera actinophylla',
        common_name='Umbrella Tree',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/umbrella_tree.jpg'
    ),
    Plant(
        scientific_name='Asparagus retrofractus',
        common_name='Asparagus Fern',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/asparagus_fern.jpg'
    ),
    Plant(
        scientific_name='Haworthiopsis limifolia',
        common_name='Fairy Washboard',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/fairy_washboard.jpg'
    ),
    Plant(
        scientific_name='Phalaenopsis',
        common_name='Moth Orchid',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/moth_orchid.jpg'
    ),
    Plant(
        scientific_name='Curio radicans',
        common_name='String of Bananas',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/string_of_bananas.jpeg'
    ),
    Plant(
        scientific_name='Lithops',
        common_name='Living Stone',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, direct light',
        image='../client/public/database_pictures/living_stone.jpg'
    ),
    Plant(
        scientific_name='Astrophytum myriostigma',
        common_name='Bishop\'s Cap Cactus',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, direct light',
        image='../client/public/database_pictures/bishops_cap_cactus.jpg'
    ),
    Plant(
        scientific_name='Epiphyllum oxypetalum',
        common_name='Queen of the Night',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/queen_of_the_night.jpg'
    ),
    Plant(
        scientific_name='Opuntia microdasys',
        common_name='Bunny Ears Cactus',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, direct light',
        image='../client/public/database_pictures/bunny_ear_cactus.jpg'
    ),
    Plant(
        scientific_name='Schlumbergera truncata',
        common_name='Christmas Cactus',
        watering='Moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/christmas_cactus.jpg'
    ),
    Plant(
        scientific_name='Hoya australis',
        common_name='Wax Plant',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/wax_plant.jpg'
    ),
    Plant(
        scientific_name='Fittonia albivenis',
        common_name='Nerve Plant',
        watering='Moderate',
        zone='10 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/nerve_plant.jpg'
    ),
    Plant(
        scientific_name='Saintpaulia ionantha',
        common_name='African Violet',
        watering='Moderate',
        zone='11 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/african_violet.jpg'
    ),
    Plant(
        scientific_name='Euphorbia milii',
        common_name='Crown of Thorns',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/crown_of_thorns.jpg'
    ),
    Plant(
        scientific_name='Peperomia caperata',
        common_name='Emerald Ripple',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='../client/public/database_pictures/emerald_ripple.jpg'
    ),
    Plant(
        scientific_name='Tillandsia ionantha',
        common_name='Air Plant',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/air_plant.jpg'
    ),
    Plant(
        scientific_name='Sedum burrito',
        common_name='Burro\'s Tail',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/burros_tail.jpg'
    ),
    Plant(
        scientific_name='Ficus lyrata',
        common_name='Fiddle Leaf Fig',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/fiddle_leaf_fig.jpg'
    ),
    Plant(
        scientific_name='Chamaedorea elegans',
        common_name='Parlor Palm',
        watering='Moderate',
        zone='8 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/parlor_palm.jpg'
    ),
    Plant(
        scientific_name='Zamioculcas zamiifolia',
        common_name='ZZ Plant',
        watering='Low to moderate',
        zone='9 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/zz_plant.jpg'
    ),
    Plant(
        scientific_name='Maranta leuconeura',
        common_name='Prayer Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Low to moderate, indirect light',
        image='../client/public/database_pictures/prayer_plant.jpg'
    ),
    Plant(
        scientific_name='Pilea peperomioides',
        common_name='Chinese Money Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to Bright, indirect light',
        image='../client/public/database_pictures/money_plant.jpg'
    ),
    Plant(
        scientific_name='Chlorophytum comosum',
        common_name='Spider Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to bright, indirect light',
        image='../client/public/database_pictures/spider_plant.jpg'
    ),
    Plant(
        scientific_name='Peperomia obtusifolia',
        common_name='Baby Rubber Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to bright, indirect light',
        image='../client/public/database_pictures/baby_rubber_plant.jpeg'
    ),
    Plant(
        scientific_name='Tradescantia zebrina',
        common_name='Wandering Dude',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/wandering_dude.jpg'
    ),
    Plant(
        scientific_name='Ficus elastica',
        common_name='Rubber Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/rubber_plant.jpg'
    ),
    Plant(
        scientific_name='Ceropegia woodii',
        common_name='String of Hearts',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='../client/public/database_pictures/string_of_hearts.jpg'
    )
]