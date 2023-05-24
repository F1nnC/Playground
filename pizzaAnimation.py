"""
* Creator: Nighthawk Coding Society
Sailing Ship Animation (programatic method)
"""

import time # used for delay
from IPython.display import clear_output  # jupyter specific clear


# ANSI Color Codes
OCEAN_COLOR = u"\u001B[34m\u001B[2D"
SHIP_COLOR = u"\u001B[35m\u001B[2D"
RESET_COLOR = u"\u001B[0m\u001B[2D"

def ship_print(position):  # print ship with colors and leading spaces according to position
    clear_output(wait=True)
    print(RESET_COLOR)
    
    sp = " " * position
    print(sp + "                     ____")
    print(sp + "               _,--~~    ~~--._")
    print(sp + "            ,/'  m%%%%%%=@%%m  `\.")
    print(sp + "           /' m%%o(_)%%o%%%%o%%m `\")
    print(sp + "         /' %%@=%o%%%o%%%o%(_)o%%% `\")
    print(sp + "        /  %o%%%%%=@%%%(_)%%o%%@=%%  \")
    print(sp + "       |  (_)%(_)%%o%%%o%%%%=@(_)%%%  |")
    print(sp + "       | %%o%%%%o%%%(_)%%o%%o%%%%o%%% |")
    print(sp + "       | %%o%(_)%%%%%o%(_)%%%o%%o%o%% |")
    print(sp + "       |  (_)%%=@%(_)%o%o%%(_)%o(_)%  |")
    print(sp + "        \ ~%%o%%%%%o%o%=@%%o%%@%%o%~ /")
    print(sp + "         \. ~o%%(_)%%%o%(_)%%(_)o~ ,/")
    print(sp + "           \_ ~o%=@%(_)%o%%(_)%~ _/")
    print(sp + "             `\_~~o%%%o%%%%%~~_/'")
    print(sp + "                `--..____,,--'")

    
    

















def pizza():  # pizza function, loop/controller for animation speed and times
    # loop control variables
    start = 0  # start at zero
    distance = 60  # how many times to repeat
    step = 2  # count by 2

    # loop purpose is to animate pizza sailing
    for position in range(start, distance, step):
        pizza_print(position)  # call to function with parameter
        time.sleep(.2)

        
pizza() # activate/call pizza function