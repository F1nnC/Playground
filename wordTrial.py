import random

word_list = ["python", "computer", "programming", "algorithm", "database", "function", "variable", "loop", "iteration", "array", "mutable", "insertion", "deletion", "key", "API"]

word = random.choice(word_list)

scrambled_word = "".join(random.sample(word, len(word)))

print(f"Unscramble the following Computer Science Word: {scrambled_word}")

hints = 1
guesses = 1
guess = ""

while guess != word and guesses <= 4:
    guess = input("What's the unscrambled word? ").lower()
    if guess != word:
        print("Sorry, that's not the word. Try again!")
        if guesses == 1:
            guesses += 1
        elif guesses == 2:
            print(f"Hint 1: The first letter of the word is '{word[0]}'")
            guesses += 1
        elif guesses == 3:
            print(f"Hint 2: The second letter of the word is '{word[1]}'")
            guesses += 1
        else:
            print(f"All 4 Guesses have been used, you didn't unscramble the word, the word was {word}")
            guesses += 1
    else:
        print("Congratulations, you unscrambled the word!")
