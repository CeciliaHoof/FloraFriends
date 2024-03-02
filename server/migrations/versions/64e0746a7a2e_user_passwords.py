"""user passwords

Revision ID: 64e0746a7a2e
Revises: 25a37ba217b0
Create Date: 2024-03-02 11:46:25.206955

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '64e0746a7a2e'
down_revision = '25a37ba217b0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('_password_hash', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('_password_hash')

    # ### end Alembic commands ###
