# Problem 16 - To Do List

## What are the core features?

- The users should be able to create, modify, complete to-do items.

## What are the support features?

- The items should be private for all the users i.o.w. other users should not be able to see other items.
- Each item should have a title, description (text), start date, level of difficulty, and a due date.
- The app shows a list of to do items sorted by a metadata.

## What are the non-functional requirements?

- Low latency
- Highly Available
- Highly Scalable

## What are the scale of the system?

- 1000 active users per day
- Each users create 5 to do per day
- Each todo has a size of 20kb
- Read/Write ratio is 5:1
