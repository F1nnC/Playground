import random

words = ['kindly', 'recite', 'repeat', 'tree', 'display', 'geeks', 'coader', 'programmer', 'python', 'premium', 'watch']

word = random.choice(words)

spaces = ['_']* len(word)

def get_letter_position(guess, word, spaces):
    index = -2
    while index != -1:
        if guess in word:
            index = word.find(guess)
            removed_character ='*'
            word = word[:index]+removed_character+word[index+1:]
            spaces[index] = guess
        else:
            index = -1
     
    return (word, spaces)


def win_check():
    for i in range(0, len(spaces)):
        if spaces[i] == '_':
            return -1
     
    return 1

num_turns = len(word) + 3
for i in range(-1, num_turns):
    guess = input('Guess a character:')
 
    if guess in word:
        word, spaces = get_letter_position(guess, word, spaces)
        print(spaces)
    else:
        print('Sorry that letter is not in the word.')
     
    if win_check() == 1:
        print('Congratulations you won')
        break
     
    print('you have '+str(num_turns - i)+' turns left.')
    print()