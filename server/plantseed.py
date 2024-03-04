from models import Plant
# from client.public import database_pictures

plantseeds = [
    Plant(
        scientific_name = 'Aloe vera',
        common_name = 'Aloe vera',
        watering = 'Low',
        zone = '10 and above',
        sunlight = 'Bright, direct light',
        image = '/static/aloe_vera.jpg'
    ),
     Plant(
        scientific_name = 'Epipremnum Aureum',
        common_name = 'Golden Pothos',
        watering = 'Moderate',
        zone = '10 and above',
        sunlight = 'Bright, indirect light',
        image = '/static/golden_pothos.jpg'
    ),
     Plant(
        scientific_name = 'Dracaena trifasciata',
        common_name = 'Snake Plant',
        watering = 'Low',
        zone = '9 and above',
        sunlight = 'Low to Bright, indirect or direct light',
        image = '/static/snake_plant.jpg'
    ),
    Plant(
        scientific_name='Aglaonema commutatum',
        common_name="Chinese Evergreen 'Silver Queen",
        watering='Moderate',
        zone='10 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/chinese_evergreen.jpeg'
    ),
    Plant(
        scientific_name='Alocasia cuprea',
        common_name="Alocasia 'Red Secret'",
        watering='Moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/red_secret.jpg'
    ),
    Plant(
        scientific_name='Anthurium andraeanum',
        common_name='Flamingo Flower',
        watering='Moderate',
        zone='11 and above',
        sunlight='Bright, indirect light',
        image='/static/flamingo_flower.jpg'
    ),
    Plant(
        scientific_name='Dieffenbachia oerstedii',
        common_name='Dumb Cane',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/dumb_cane.jpeg'
    ),
    Plant(
        scientific_name='Philodendron hastatum',
        common_name='Silver Sword Philodendron',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/silver_sword.jpeg'
    ),
    Plant(
        scientific_name='Syngonium podophyllum',
        common_name='Arrowhead Plant',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/arrowhead_plant.jpg'
    ),
    Plant(
        scientific_name='Monstera adansonii',
        common_name='Swiss Cheese Vine',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/swiss_cheese_vine.jpg'
    ),
    Plant(
        scientific_name='Rhaphidophora tetrasperma',
        common_name='Mini Monstera',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate, indirect light',
        image='/static/mini_monstera.jpeg'
    ),
    Plant(
        scientific_name='Scindapsus pictus',
        common_name='Silver Satin Pothos',
        watering='Moderate',
        zone='11 and above',
        sunlight='Moderate, indirect light',
        image='/static/silver_satin_pothos.jpg'
    ),
    Plant(
        scientific_name='Spathiphyllum wallisii',
        common_name='Peace Lily',
        watering='Moderate',
        zone='11 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/peace_lily.jpg'
    ),
    Plant(
        scientific_name='Schefflera actinophylla',
        common_name='Umbrella Tree',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/umbrella_tree.jpg'
    ),
    Plant(
        scientific_name='Asparagus retrofractus',
        common_name='Asparagus Fern',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/asparagus_fern.jpg'
    ),
    Plant(
        scientific_name='Haworthiopsis limifolia',
        common_name='Fairy Washboard',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/fairy_washboard.jpg'
    ),
    Plant(
        scientific_name='Phalaenopsis',
        common_name='Moth Orchid',
        watering='Moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/moth_orchid.jpg'
    ),
    Plant(
        scientific_name='Curio radicans',
        common_name='String of Bananas',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/string_of_bananas.jpeg'
    ),
    Plant(
        scientific_name='Lithops',
        common_name='Living Stone',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, direct light',
        image='/static/living_stone.jpg'
    ),
    Plant(
        scientific_name='Astrophytum myriostigma',
        common_name='Bishop\'s Cap Cactus',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, direct light',
        image='/static/bishops_cap_cactus.jpg'
    ),
    Plant(
        scientific_name='Epiphyllum oxypetalum',
        common_name='Queen of the Night',
        watering='Low',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/queen_of_the_night.jpg'
    ),
    Plant(
        scientific_name='Opuntia microdasys',
        common_name='Bunny Ears Cactus',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, direct light',
        image='/static/bunny_ear_cactus.jpg'
    ),
    Plant(
        scientific_name='Schlumbergera truncata',
        common_name='Christmas Cactus',
        watering='Moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/christmas_cactus.jpg'
    ),
    Plant(
        scientific_name='Hoya australis',
        common_name='Wax Plant',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/wax_plant.jpg'
    ),
    Plant(
        scientific_name='Fittonia albivenis',
        common_name='Nerve Plant',
        watering='Moderate',
        zone='10 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/nerve_plant.jpg'
    ),
    Plant(
        scientific_name='Saintpaulia ionantha',
        common_name='African Violet',
        watering='Moderate',
        zone='11 and above',
        sunlight='Bright, indirect light',
        image='/static/african_violet.jpg'
    ),
    Plant(
        scientific_name='Euphorbia milii',
        common_name='Crown of Thorns',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/crown_of_thorns.jpg'
    ),
    Plant(
        scientific_name='Peperomia caperata',
        common_name='Emerald Ripple',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Moderate, indirect light',
        image='/static/emerald_ripple.jpg'
    ),
    Plant(
        scientific_name='Tillandsia ionantha',
        common_name='Air Plant',
        watering='Low to moderate',
        zone='10 and above',
        sunlight='Bright, indirect light',
        image='/static/air_plant.jpg'
    ),
    Plant(
        scientific_name='Sedum burrito',
        common_name='Burro\'s Tail',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/burros_tail.jpg'
    ),
    Plant(
        scientific_name='Ficus lyrata',
        common_name='Fiddle Leaf Fig',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/fiddle_leaf_fig.jpg'
    ),
    Plant(
        scientific_name='Chamaedorea elegans',
        common_name='Parlor Palm',
        watering='Moderate',
        zone='8 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/parlor_palm.jpg'
    ),
    Plant(
        scientific_name='Zamioculcas zamiifolia',
        common_name='ZZ Plant',
        watering='Low to moderate',
        zone='9 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/zz_plant.jpg'
    ),
    Plant(
        scientific_name='Maranta leuconeura',
        common_name='Prayer Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Low to moderate, indirect light',
        image='/static/prayer_plant.jpg'
    ),
    Plant(
        scientific_name='Pilea peperomioides',
        common_name='Chinese Money Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to Bright, indirect light',
        image='/static/money_plant.jpg'
    ),
    Plant(
        scientific_name='Chlorophytum comosum',
        common_name='Spider Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to bright, indirect light',
        image='/static/spider_plant.jpg'
    ),
    Plant(
        scientific_name='Peperomia obtusifolia',
        common_name='Baby Rubber Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Moderate to bright, indirect light',
        image='/static/baby_rubber_plant.jpeg'
    ),
    Plant(
        scientific_name='Tradescantia zebrina',
        common_name='Wandering Dude',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/wandering_dude.jpg'
    ),
    Plant(
        scientific_name='Ficus elastica',
        common_name='Rubber Plant',
        watering='Moderate',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/rubber_plant.jpg'
    ),
    Plant(
        scientific_name='Ceropegia woodii',
        common_name='String of Hearts',
        watering='Low',
        zone='9 and above',
        sunlight='Bright, indirect light',
        image='/static/string_of_hearts.jpg'
    )
]