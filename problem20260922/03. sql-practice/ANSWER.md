## 

```
SELECT customers.CustomerName,
       COALESCE(SUM(order_details.Quantity * products.Price), 0) AS TotalOrderValue
FROM customers
LEFT JOIN orders
ON customers.CustomerID = orders.CustomerID
LEFT JOIN order_details
ON orders.OrderID = order_details.OrderID
LEFT JOIN products
ON order_details.ProductID = products.ProductID
GROUP BY customers.CustomerID, customers.CustomerName;
```

##  Exercise 51: Top 5 Most Expensive Products
<b>PROBLEM</b><br/>
For a given table display the 5 most expensive products 

<b>ANSWER COMMAND</b>
<br/>
```
select ProductName, Price from products order by products.Price desc limit 5
```

## Exercise 52: Products Above Average Price
<b>PROBLEM</b><br/>
Display the name and price of all products whose price is above the average price of all products.

<b>ANSWER</b>
```
select ProductName, Price from products where products.price > (select avg(price) from products);
```

## Exercise 53: Orders with More Than 3 Products
<b>PROBLEM</b>

Display all orders that included more than 3 different products.

<b>ANSWER</b>

```
select OrderID, count( distinct ProductID) as productCount from order_details group by OrderID having count(distinct ProductID) > 3;
```

## Exercise 54: Customers per Employee
<b>PROBLEM</b>

For each employee, display their first name, last name, and the number of different customers whose orders they handled.

<b>ANSWER</b>
```
select employees.FirstName, employees.LastName, count(distinct orders.CustomerID)  as CustomerCount from employees left join orders on employees.EmployeeID = orders.EmployeeID group by employees.EmployeeID,
         employees.FirstName,
         employees.LastName;
```