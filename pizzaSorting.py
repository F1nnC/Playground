"""
* Creator: Nighthawk Coding Society
Bubble Sort of a List with optimizations
"""

# bubble sorts a list of dictionaries, base off of provided key
def bubbleSort(list, key):
    n = len(list) - 1  # list are indexed 0 to n-1, len is n
    
    # Traverse through list with i index
    for i in range(n):
        swapped = False  # optimize code, so it exits if now swaps on inner loop

        # Inner traversal using j index
        for j in range(n-i):  # n-i as positions on right are in order in bubble
 
            # Swap if the element KeyN is greater KeyN1
            keyN = list[j].get(key)
            keyN1 = list[j+1].get(key)
            if keyN > keyN1:
                swapped = True
                list[j], list[j + 1] = list[j + 1], list[j]  # single line swap
         
        if not swapped:  # if no swaps on inner pass, list is sorted
            return  # exit function
    

if __name__ == "__main__":
    # list/dictionary samplea
    orders = [
    {"orderName": "Luka", "pizzaType": "cheese", "address": "DisneyLane"},
    {"orderName": "Bob", "pizzaType": "pepperoni", "address": "UniversalRoad"},
    {"orderName": "Tom", "pizzaType": "mushroom", "address": "WashingtonStreet"},
    {"orderName": "Bill", "pizzaType": "BBQ", "address": "TokyoBoulevard"}
    ]
    
    # assuming uniform keys, pick 1st row as source of keys
    key_row = orders[0]

    # print list as defined
    print("Original")
    print(orders)
    
    for key in key_row:  # finds each key in the row
        print(key)
        bubbleSort(orders, key)  # sort list of people
        print(orders)
