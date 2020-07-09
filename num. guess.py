import random

print("number guessing name")
num = random.randint(1,10)

chances = 0
print("guess a num.(bw 1 and 10):")

while chances <= 2 :
    guess = int(input())

    if guess == num:
        print("congrats you won!!! ha chl ab nikl ")
        break

    elif guess < num:
        print("bsdk: Guess something higher than", guess)
    
    else :
        print("hutiye: Guess something lower than", guess)
    chances += 1
    if not chances <= 2:
        print("tujhse naa ho payega beta",num)