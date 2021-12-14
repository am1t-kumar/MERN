// mongo db uses json like doc. with optional schema 
// it have bson 
// b for binary 

// show dbs show the data bases 
// > show dbs
// admin   0.000GB
// config  0.000GB
// local   0.000GB

// all data will create here 
// C:\Program Files\MongoDB\Server\5.0\data

// show collections 
// it shows all collections 
// collection is like json file 
// name{               <----
//  feild : value,          |
//  feild : value,          |-- that's a document 
//  feild : value,     <-----
// }
// multiple documents create a collection 

// use 6pp 
// no database so it will create itself 
// show database not will show bcz you create db but no data there 

// make a collection 
//  db.students.insertOne({name:"amit",sirname:"kumar"})
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("61addb3f47b5633fa50d30df")
// }

// > show dbs
// 6pp     0.000GB
// admin   0.000GB
// config  0.000GB
// local   0.000GB
// > use 6pp
// switched to db 6pp
// > show collections
// students
// > db.students.find()
// { "_id" : ObjectId("61addb3f47b5633fa50d30df"), "name" : "amit", "sirname" : "kumar" }
// >

// new collection 
// > db.new.insertOne({name:"aman",sirname:"kumar" })
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("61addc903c13c7c166f98b59")
// }
// > show collections
// new
// students
// > db.new.find()
// { "_id" : ObjectId("61addc903c13c7c166f98b59"), "name" : "aman", "sirname" : "kumar" }
// >

// if we have to add multiple obj 
// > db.new.insertMany([{name:"amit"},{sirname:"kumar"},{country:"india"}])
// {
//         "acknowledged" : true,
//         "insertedIds" : [
//                 ObjectId("61adddb73c13c7c166f98b5a"),
//                 ObjectId("61adddb73c13c7c166f98b5b"),
//                 ObjectId("61adddb73c13c7c166f98b5c")
//         ]
// }
// >

// > show collections
// new
// students
// > db.students.find()
// { "_id" : ObjectId("61addb3f47b5633fa50d30df"), "name" : "amit", "sirname" : "kumar" }
// > db.new.find()
// { "_id" : ObjectId("61addc903c13c7c166f98b59"), "name" : "aman", "sirname" : "kumar" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5b"), "sirname" : "kumar" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }
// >

// now to target only a specific value like india then how to show it
// > db.new.find({country:"india"})
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }
// >

// what if we have two same fields
// > db.new.insertOne({country:"india"})
// {
//         "acknowledged" : true,
//         "insertedId" : ObjectId("61addf083c13c7c166f98b5d")
// }
// > db.new.find({country:"india"})
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "india" }
// >

// what if we need only one 
// > db.new.find({country:"india"}).limit(1)
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }

// > db.new.findOne({country:"india"})
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }

// > db.new.find({country:"india"}).limit(2)
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "india" }
// >

// it's time for update method 
// $ before operator in mdb
// > db.new.updateOne({sirname:"kumar"},{$set:{sirname:"goswami"}})
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
// > db.new.find()
// { "_id" : ObjectId("61addc903c13c7c166f98b59"), "name" : "aman", "sirname" : "goswami" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5b"), "sirname" : "kumar" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "india" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "india" }
// >

// what if we have to update many
// > db.new.updateMany({country:"india"},{$set:{country:"USA"}})
// { "acknowledged" : true, "matchedCount" : 3, "modifiedCount" : 3 }
// > db.new.find()
// { "_id" : ObjectId("61addc903c13c7c166f98b59"), "name" : "aman", "sirname" : "goswami" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5b"), "sirname" : "kumar", "country" : "USA" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "USA" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "USA" }
// >

// delete now 
// db.new.deleteOne({}) delete the first 
// db.new.deleteOne()  delete all 
// db.new.deleteOne({sirename:"kumar"})

// > db.new.find()
// { "_id" : ObjectId("61addc903c13c7c166f98b59"), "name" : "aman", "sirname" : "goswami" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5b"), "sirname" : "kumar", "country" : "USA" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "USA" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "USA" }
// > db.new.deleteOne({})
// { "acknowledged" : true, "deletedCount" : 1 }
// > db.new.find()
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5b"), "sirname" : "kumar", "country" : "USA" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "USA" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "USA" }
// > db.new.deleteOne({sirname:"kumar"})
// { "acknowledged" : true, "deletedCount" : 1 }
// > db.new.find()
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// { "_id" : ObjectId("61adddb73c13c7c166f98b5c"), "country" : "USA" }
// { "_id" : ObjectId("61addf083c13c7c166f98b5d"), "country" : "USA" }
// >

// db.new.deleteMany({country:"USA"})
// { "acknowledged" : true, "deletedCount" : 2 }
// > db.new.find()
// { "_id" : ObjectId("61adddb73c13c7c166f98b5a"), "name" : "amit" }
// >

// > db.new.deleteMany({}) delete all
// { "acknowledged" : true, "deletedCount" : 1 }
// > db.new.find()

// > show collections
// new
// students
// > db.students.find()
// { "_id" : ObjectId("61addb3f47b5633fa50d30df"), "name" : "amit", "sirname" : "kumar" }
// > show collections
// new
// students
// > use new
// switched to db new
// > db.new.find()

// that's enough 
// open mongo db compass and connect 
// all data collections will shown there 

// now connect with node js so need to knwo about express 