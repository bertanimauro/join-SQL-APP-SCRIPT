# join-SQL-APP-SCRIPT
implement join sql in app-script for gsheet

# deployment ID
AKfycbwrYs35P4sE1m2wWhSvYxiNkq6YqVVNig2LYWR5tu6jro78rEJNqbgieOUdwBn9O_iFhQ

# Specification API
https://script.google.com/macros/library/d/1irisxbpOpUYhX0T1SE5-ca_UYSfJ7SSksj3CtXIULxlTvkbEfTNgO-if/5

# How to use:
go to APP-Script and add a new library, then insert the deployment ID

# time execution
n load array1 = b

Sort(b).   nlogn
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort

m load array2 = a
BinarySearch (a, b) m*logn
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search

nlogn+mlogn +n+m
n=m
2nlogn +2n
q=number of caracther of ID
2nlog/q

https://www.wolframalpha.com/input?i=%2830000*log%2830000%29+%3Dx%29+%26%26+x*log%28x%29%3Dy array a search array b ordered with binary search for 30 seconds. 300000 items

https://www.wolframalpha.com/input?i=%2865000*log%2865000%29+%3D%28x%2F3%29%29+%26%26+x*log%28x%29%3Dy we have to consider that it must print in a gsheet 200000 divided by number of column

https://www.wolframalpha.com/input?i=%28%28%2865000*log%2865000%29%29%29%3D%28x%29%29+%26%26+q+%3Dx%2F3+%26%26+y%3D30q+%26%26+z%3Dy%2F%285*30log30%29 print of 5 column of 30 chars 140000 items

https://www.wolframalpha.com/input?i=z%3D15+%26%26+%28%28%2865000*log%2865000%29%29%2Fz%29+%3D%28x%29%29+%26%26+q+%3Dx%2F2+%26%26+y%3D30q+%26%26+r%3Dy%2F%285*z*log%28z%29%29 5 column of 15 characters, 3500 items in 30 seconds. A google sheet can make a join of two arrays of 3500 items print 5 column of 15 chars

https://www.wolframalpha.com/input?i=z%3D15+%26%26+%28%28%2865000*log%2865000%29-65000*2%29%2Fz%29+%3D%28x%29%29+%26%26+q+%3D%28x%2F2%29%26%26+y%3D30q+%26%26+r%3Dy%2F%285*z*log%28z%29%29 You must load the two array in memory. r=2900 items

https://www.wolframalpha.com/input?i=c%3D65000+%26%26+n%3Dc*2+%26%26+m%3Dc%2F10+%26%26+z%3D15+%26%26+%28%28%28n*log%28n%29-%28n%2Bm%29+-+nlogm%29%2Fz%29+%3D%28x%29%29+%26%26+q+%3D%28x%2F2%29%26%26+y%3D30q+%26%26+a%3Dy%2F%285*z*log%28z%29%29 n 6000 ed m 10 times less. 1200 items

https://www.wolframalpha.com/input?i=c%3D65000+%26%26+n%3Dc%2F10+%26%26+m%3Dc*2+%26%26+z%3D15+%26%26+%28%28%28n*log%28n%29-%28n%2Bm%29+-+nlogm%29%2Fz%29+%3D%28x%29%29+%26%26+q+%3D%28x%2F2%29%26%26+y%3D30q+%26%26+a%3Dy%2F%285*z*log%28z%29%29 if we invert n with m we have a timeout
