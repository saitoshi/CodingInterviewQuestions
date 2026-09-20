# 20260921 SQL Practice 

## Exercise 47: Orders and Employees

<b>PROBLEM</b><br/>
Display a list of all orders together with the first name and last name of the employee who handled each order.

```
select orders.OrderID, employees.FirstName, employees.LastName from orders 
inner join employees 
on orders.EmployeeID = employees.EmployeeID
```

## Exercise 48: Customers with More Than 2 Orders
<b>PROBLEM</b><br/>
Display all customers who have placed more than 2 orders.
```
select customers.CustomerID, customers.CustomerName, count(orders.OrderID) as OrderCount from customers inner join orders on customers.CustomerID = orders. CustomerID 
group by customers.CustomerID
having Count(orders.CustomerID) > 2
```
