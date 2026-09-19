## SQL Practice Problems 

### Exercise 46: Customers Without Orders

<b>Problem Statement</b>
<hr/>
Display all customers who have never placed an order.

<b>Answer</b>
```
select customers.* from customers left join orders on customers.CustomerID = orders.CustomerID where orders.CustomerID is null;
```