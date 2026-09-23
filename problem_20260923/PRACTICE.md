# PRACTICE 2026/09/23 

## DESCRIPTION
The following are practice problems worked on the following date: 2026/09/23. 
Practice includes the following topics:
- SQL 
- Python
- System Design 
- Agile Management 

## PRACTICE 1 - Order Details and Total Value (SQL)
### PROBLEM 
Display a list of orders together with the order date, customer name, and total value of each order.

The query should include the following: 
- display the OrderID
- display the OrderDate
- display the CustomerName
- calculate each order line as Quantity × Price
- calculate the total value of each order
- return one row per order

### ANSWER 
```
SELECT orders.OrderID,
       orders.OrderDate,
       customers.CustomerName,
       SUM(order_details.Quantity * products.Price) AS TotalOrderValue
FROM orders
INNER JOIN customers
ON orders.CustomerID = customers.CustomerID
INNER JOIN order_details
ON orders.OrderID = order_details.OrderID
INNER JOIN products
ON order_details.ProductID = products.ProductID
GROUP BY orders.OrderID,
         orders.OrderDate,
         customers.CustomerName;
```

<b>EXPLANATION</b>
- Based on the given requirements we have to show the following information: orderID, OrderDate, CustomerName, the total sum of the product between Quantity and Price
- Finally, we have to group them necessary in the given: OrderID, OrderDate, CustomerName 

## PRACTICE 2 - AGILE MINDSET 

### PROBLEM 
1. As a PM, what tool or artifact should a PM use to manage the expectations and provide clarity when certain features may be delivered without commiting to a specific date <br/>

<b>ANSWER</b>  Product Roadmap 
<br/>
<b>NOTE</b> 

The difference between Product Roadmap and Sprint Backlog 
- Product Roadmap focuses on high level and themes 
- Sprint Backlog is a short term plan that lists user stories and task chosen for the current sprint

## PRACTICE 3 - AGILE MINDSET 
2. What kind of participation model a PM can use to get a consensus that is more than a YES or NO from stakeholders 

<b>ANSWER:</b> FIST OF FIVE 

<b>NOTE</b> What is the difference between fist of five and a consensus workshop 
- Fist of Five: transparent way to assess the team sentiment and identify early resistance 
- Consesus Workshop: a multi step framework to build a collective understanding towards complex or ambiguous problems 
