## Intermediate Practice Problems 
The following are the solutions to the intermediate practice problem sets from the following SQL course on <a href="https://anasystems.udemy.com/course/sql-top-100-real-world-practice-exercises">Udemy</a>.

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
select LastName, FirstName from employees order by LastName asc;
```