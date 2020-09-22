# Todo App  
  
### Create Database  
use *db-name*  

### Creat User  
#### No roles assigned  
db.createUser({
    user: "<user>",
    pwd: "<password>",
    roles: []
})

### Query Users  
db.getUsers()

### Query Database  
db.*db-name*s.find({})

### Remove Item from Database  
db.*db-name*s.remove({ "*key*": "*value*" })

### Start App  
npm i  
npm start