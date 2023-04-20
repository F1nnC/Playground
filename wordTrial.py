import random

word_list = ["python", "computer", "programming", "algorithm", "database", "function", "variable", "loop"]

word = random.choice(word_list)

scrambled_word = "".join(random.sample(word, len(word)))

print(f"Unscramble the following word: {scrambled_word}")

hints = 1

guesses = 1
guess = input("What's the unscrambled word? ").lower()

while guess != word and guesses < 3:
    print("Sorry, that's not the word. Try again!")
    guess = input("What's the unscrambled word? ").lower()
    guesses += 1

if guesses == 2:
    print(f"Hint 1: The first letter of the word is '{word[0]}'")
if guesses == 1:
    print(f"Hint 2: The second letter of the word is '{word[1]}")

if guess == word:
    print("Congratulations, you unscrambled the word!")
else:
    print(f"Sorry, you didn't unscramble the word. The word was {word}.")
