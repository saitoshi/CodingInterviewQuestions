## Beginner SQL Practice 
The following are the solutions written for beginner level SQL practice problems sets.

### Exercise 31: Top 10 Most Expensive Products

<b>Problem: Display the name and price of the 10 most expensive products.

Your query should:

- return only the ProductName and Price columns

- sort products by Price

- display the highest prices first

- return only the first 10 products

</b>

```
-- Table: products
-- Columns: ProductID, ProductName, SupplierID, CategoryID, Unit, Price

-- Write your query below:
select ProductName, Price from products order by Price desc limit 10;
```

### Exercise 32: Unique Customer Countries


<b> Display all unique countries where customers are located.</b>

```
select distinct country from customers;
```


### Exercise 33: Count All Products
<b>Display the total number of products stored in the database.</b>

```
select count(*) from products
```

### Exercise 34: Average Product Price

<b>Display the average price of all products in the database.</b>

```
select AVG(Price) from products;
```

### Exercise 35: Total Product Prices

<b>Display the total value of all product prices in the database.</b>

```
select SUM(Price) from products;
```

### Exercise 36: Minimum and Maximum Price

<b>Display the minimum and maximum product price.</b>
```
select MAX(Price), MIN(Price) from products;
```

### Exercise 37: Customers by Country

<b>Display the number of customers from each country.</b>

```
select country, COUNT(*) as CustomerCount from customers group by Country;
```

### Exercise 38: Countries with More Than 5 Customers

<b>Display only the countries that have more than 5 customers.</b>

```
select Country, count(*) as CustomerCount from customers group by Country having count(*) > 5;
```

### Exercise 39: Products Without a Category
<b>Display all products that do not belong to any category.</b>

```
select * from products where CategoryID IS NULL;
```
### Exercise 40: Categorized Products Over 50
<b>Display all products that have a category assigned and whose price is greater than 50.</b>

```
select * from products where CategoryID is not null and Price > 50
```