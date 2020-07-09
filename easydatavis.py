import numpy as np
import pandas as pd

labels = ['a','b','c','d']
list = [10,20,30,40]
array = np.array([10,20,30,40])
dict = {'a':10,'b':20,'c':30,'d':40}

#pd.Series(data=list,index=labels)
pd.Series(array)
pd.Series(dict)