"""initial models

Revision ID: 1669077f7880
Revises: 
Create Date: 2024-03-01 13:58:46.471506

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1669077f7880'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('plants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('scientific_name', sa.String(), nullable=True),
    sa.Column('common_name', sa.String(), nullable=True),
    sa.Column('watering', sa.String(), nullable=True),
    sa.Column('zone', sa.String(), nullable=True),
    sa.Column('sunlight', sa.String(), nullable=True),
    sa.Column('image', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_plants'))
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('first_name', sa.String(), nullable=True),
    sa.Column('last_name', sa.String(), nullable=True),
    sa.Column('username', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_users')),
    sa.UniqueConstraint('username', name=op.f('uq_users_username'))
    )
    op.create_table('plant_cares',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.Column('type_care', sa.String(), nullable=True),
    sa.Column('plant', sa.String(), nullable=True),
    sa.Column('comment', sa.String(), nullable=True),
    sa.Column('date', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_plant_cares_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_plant_cares'))
    )
    op.create_table('purchased_plants',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), server_default=sa.text('(CURRENT_TIMESTAMP)'), nullable=True),
    sa.Column('purchased_from', sa.String(), nullable=True),
    sa.Column('purchased_on', sa.String(), nullable=True),
    sa.Column('plant_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['plant_id'], ['plants.id'], name=op.f('fk_purchased_plants_plant_id_plants')),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name=op.f('fk_purchased_plants_user_id_users')),
    sa.PrimaryKeyConstraint('id', name=op.f('pk_purchased_plants'))
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('purchased_plants')
    op.drop_table('plant_cares')
    op.drop_table('users')
    op.drop_table('plants')
    # ### end Alembic commands ###
