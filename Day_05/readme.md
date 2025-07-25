1. MongoDB is non relational, noSQL and document oriented database.
2. It stores data in JSON-like format called BSON (Binary JSON).
3. Document :	Single record in MongoDB (like a row in SQL).
4. Collection :	Group of documents (like a table in SQL).
collection k andar jo record store karenge un each record ko document kahte hai

{
    "name":"Ujjwal",
    "email" : "ujjwal@gmail.com",
    "age":22,
    "height" :5.4,
    "Department" :{
        "DeptId" : "abc",
        "Dept_name" : "IT"
    }
}

{
    "name":"Ujjwal",
    "email" : "ujjwal@gmail.com",
    "age":22,
    "height" :5.4,
    "Experience" :[
        "HP","IBM","TCS"
    ],
}

5. Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.
    npm install mongoose

6. Mongosh (MongoDB Shell) is a command-line client of the MongoDB server.
7. "use" command is used to create new database or activate existing database
ex: use hp_org
8. db.createCollection("first_collection")
9. to see these collection use command "show collections"
10. to rename a collection use command "db.old_collection.renameCollection("new_collection")
11. db.help : will show all command
12. db.collection_name.help()  : It will provide help releted to that particular collection
13. db.collection_name.drop()  : It will drop that collection
14. db.dropDatabase  : It will drop the current database
15. use admin  :to come out of current db to main db 

16. insertOne({})   : inserting one object
17. insertMany([{},{},{}]) : inserting array of object
18. updating an existing database :
db.collection_name.updateOne(
    {firstname:"ujjwal"},
    {$set :{name: "Raj"}}
   )