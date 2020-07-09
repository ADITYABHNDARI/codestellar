class bank():
    def getroi(self):
        return 10
class SBI(bank):
    def getroi(self):
        return 7
class PNB(bank):
    def getroi(self):
        return 5
b1 = bank()
b2 = SBI()
b3 = PNB()                     
print("bank rate of interst is =",b1.getroi())
print("SBI rate of interst is =",b2.getroi())
print("PNB rate of interst is =",b3.getroi())