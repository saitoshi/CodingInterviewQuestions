## Intermediate Practice Problems 
The following are the solutions to the intermediate practice problem sets from the following SQL course on <a href="https://udemy.com/course/sql-top-100-real-world-practice-exercises">Udemy</a>.

### Exercise 41: Products with Categories

<b> Learning Objectives</b><br/>
<hr/>
Practice combining data from two related tables using an INNER JOIN.
<b>
<br/>
<b>Problem Statement</b>
<hr/>
Display each product name together with the name of its category.

<b>Answer </b>
```
select products.ProductName, categories.CategoryName from products inner join categories on products.CategoryID = categories.CategoryID;
```

### Exercise 42: Employees by Last Name

<b> Learning Objectives</b><br/>
<hr/>
Practice selecting specific columns and sorting text values using the ORDER BY clause.
<b>
<br/><br/>
<b>Problem Statement</b>
<hr/>
Display the last names and first names of all employees, sorted alphabetically by last name.
<br/><br/>

<b>Answer </b>
```
select LastName, FirstName from employees order by LastName asc;
```




### Exercise 43: Customers and Order Count

<b> Learning Objectives</b><br/>
<hr/>
Practice combining LEFT JOIN, COUNT, and GROUP BY to summarize related records.
<b>
<br/><br/>
<b>Problem Statement</b>
<hr/>
Display every customer name together with the number of orders they have placed
<br/><br/>

<b>Answer </b>
```
select customers.CustomerName, COUNT(orders.OrderID) as OrderCount FROM customers left join orders on customers.CustomerID = orders.CustomerID Group By customers.CustomerID, customers.CustomerName;
```

### Exercise 44: Cheapest Product by Category
<b> Learning Objectives</b><br/>
<hr/>
Practice using a subquery with the MIN function to find the cheapest product in each category.
<b>
<br/><br/>
<b>Problem Statement</b>
<hr/>
Display the name and price of the cheapest product in each category.
<br/><br/>

<b>Answer </b>
```
select p1.ProductName, p1.Price from products as p1 where p1.Price = (
select min(p2.Price) From products as p2 where p2.CategoryID = p1.CategoryID
);
```


### Exercise 45: Average Price by Category

<b> Learning Objectives</b><br/>
<hr/>
Practice combining AVG, GROUP BY, and ORDER BY to calculate and sort grouped results.
<b>
<br/><br/>
<b>Problem Statement</b>
<hr/>
Display the average product price for each category, sorted from the highest average price to the lowest.
<br/><br/>

<b>Answer </b>
```
select p1.CategoryID, avg(p1.price) as AveragePrice from products as p1 group by CategoryID order by AveragePrice desc;
```