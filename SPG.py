#SIMPLE PASSWORD GENERATOR
import random
from random import choice, randint
import string

value = string.ascii_letters + string.punctuation + string.digits

passwrd = "".join(choice(value) for x in range(randint(10,22)))

print("\n your passwrd is :",passwrd)

