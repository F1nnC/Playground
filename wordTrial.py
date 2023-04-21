import random

word_list = ["python", "computer", "programming", "algorithm", "database", "function", "variable", "loop"]

word = random.choice(word_list)

scrambled_word = "".join(random.sample(word, len(word)))

print(f"Unscramble the following word: {scrambled_word}")

hints = 1
guesses = 1
guess = input("What's the unscrambled word? ").lower()

# != means not equal to
while guess != word and guesses == 1:
    print("Sorry, that's not the word. Try again!")
    guess = input("What's the unscrambled word? ").lower()
    guesses += 1 

while guess != word and guesses == 2:
    print("Sorry, that's not the word. Try again!")
    print(f"Hint 1: The first letter of the word is '{word[0]}'")
    guess = input("What's the unscrambled word? ").lower()
    guesses += 1

while guess != word and guesses == 3:
    print("Sorry, that's not the word. Try again!")
    print(f"Hint 2: The second letter of the word is '{word[1]}'")
    guess = input("What's the unscrambled word? ").lower()
    guesses += 1

if guess == word:
    print("Congratulations, you unscrambled the word!")
else:
    print(f"All 4 Guesses have been used, you didn't unscramble the word, the word was {word}")
