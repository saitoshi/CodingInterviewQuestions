# 2026-09-24 PRACTICE PROBLEM SET 

A set of practices problem worked on the following date: 2026-09-24. The topics centered around the following;
- SQL
- Python 
- Agile Practitioner 
- System Design 
- AWS 
- JavaScript

## PRACTICE 1 - SQL Customers Spending Over 500


<b>PROBLEM</b>

Display customers who have spent more than 500 in total across all their orders.

<b>ANSWER</b>
```
select customers.CustomerID, customers.CustomerName, sum(order_details.Quantity * products.Price) As TotalSpent From customers inner join orders on customers.CustomerID = orders.CustomerID inner join order_details on orders.OrderID = order_details.OrderID inner join products on order_details.ProductID = products.ProductID group by customers.CustomerID, customers.CustomerName having TotalSpent > 500
```

## PRACTICE 2 (SQL) - Customers Ordering in Multiple Months

<b>PROBLEM</b>

- Display customers who have placed orders in at least two different months.
<b>ANSWER</b>
```
select customers.CustomerID, customers.CustomerName, count(distinct format(orders.OrderDate, 'yyyy-MM')) as MonthCount from customers inner join orders on customers.CustomerID = orders.CustomerID group by customers.CustomerID, customers.CustomerName having MonthCount >= 2
```

## PRACTICE 3 - (PYTHON) Check If Prime Or not 
<b>DIRECTIONS</b>
Create a function that checks whether the input is prime or nut. 

```
import math

def is_prime(n):
    # Your code here
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True
```

## PRACTICE 4 - Find All Prime Numbers in a Given Interval
<b>DIRECTIONS</b>

Reuse the previous prime function to create a function to determine all the prime numbers within a given interval. 

<b>ANSWER</b>
```
import math

def is_prime(n):
    # Your code here
    if n <= 1:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

def find_primes_in_interval(start, end):
    # Your code here
    intervalList = []
    for i in range(start, end + 1):
        if is_prime(i):
            intervalList.append(i)
    return intervalList
```

