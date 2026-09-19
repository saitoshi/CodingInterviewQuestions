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
