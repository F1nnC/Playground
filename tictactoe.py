import random 

# using 2d arrays to make the grid for our game. This whole game would be based on accessing 2d arrays.
grid = [[" - " ," - "," - "],[" - "," - "," - "],[" - "," - "," - "]]

def p():
    print()
    for i in range(3):
        print(''.join(grid[i]))

def x(r,c):
        grid[r][c] = " x "
def o(r,c):
        grid[r][c] = " o "




row = input('Enter row 1 - 3 ')
row = int(row)
column = input("Enter column 1 - 3")
column = int(column)



p()

if grid[row-1][column-1] == ' - ':
      x(row-1,column-1)
else: 
       print('please choose a different space')


column = random.randint(1,3)
row = random.randint(1,3)



p()





