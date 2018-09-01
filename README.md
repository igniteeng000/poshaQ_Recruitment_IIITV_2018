## Timeline
* Impleneted backend task 
* Build a Node.js Graph Sql Api
* Successfully define database schema
* Data is not loaded properly in database;
* arrays are inserted like string
* So unable to test queries
* Due to limited time constraints 
  
  Writing overview of queries

1. Profit
Find year and group by productionCompanies name
Find profit by (revenue-budget)/size of (productionCompanies)
aggregate their sum

2. Similar Movie
Use setIntersection to find similiarity between two keywords arrays
and sort them according to their counts


3. Movies Cast
Group by actor now look for each actor and count genre



A normal query to test on graphql:
```
query{
  getSort{
  	title,
    budget,
    revenue,
    releaseDate
  }
}
```
