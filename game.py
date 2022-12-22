import copy
import random
import sys
import time

# Set up the constants:
WIDTH = 79   # The width of the cell grid.
HEIGHT = 20  # The height of the cell grid.


ALIVE = '#'  # The character representing a living cell.
DEAD = '.'   # The character representing a dead cell.

# (!) Luquinhas, lembrar de alterar ALIVE para '|' e DEAD para '-'.

# The cells and nextCells are dictionaries for the state of the game.
# Their keys are (x, y) tuples and their values are one of the ALIVE
# or DEAD values.

nextCells = {}

# Putting random dead and alive cells into nextCells:
for x in range(WIDTH):  # Loop over every possible column.
    for y in range(HEIGHT):  # Loop over every possible row.
        # 50/50 chance for starting cells being alive or dead.
        if random.randint(0, 1) == 0:
            nextCells[(x, y)] = ALIVE  # Add a living cell.
        else:
            nextCells[(x, y)] = DEAD  # Add a dead cell.

