# CRUD

1.1 - db.restaurants.find()
1.2 - db.restaurants.find({cuisine:"Arab})
1.3 - db.restaurants.find({isKosherHalal:true})
1.4 - db.restaurants.find({"address.city" : "New York"})
1.5 - db.restaurants.find({"address.street" : "Stars"})
1.6 - db.restaurants.find({coordinates:[15.142,18.111]})
1.7 - db.restaurants.find().sort({name: 1})
1.8 - db.restaurants.find().sort({"address.city": 1})
1.9 - db.restaurants.updateOne({\_id: ObjectId('6593dc588ca5e1096dafda81')} , {$set:{name:"Mexican Restaurant"}})
1.10 - db.restaurants.updateOne({_id:ObjectId('6593dc348ca5e1096dafda80')} , {$push:{reviews:{date:"12/12/2025" , score: 10}}})
1.11 - db.restaurants.updateMany({} , {$set:{isKosherHalal : true}})
1.12 - db.restaurants.deleteOne({\_id:ObjectId("6593dc588ca5e1096dafda81")})
1.13 - db.restaurants.deleteMany({})

db.restaurants.insertOne({data...}) // to create data inside collection

# forEach Queries

2.1 - db.restaurants.find().forEach(doc => print(doc.name))
2.2 - db.restaurants.find().forEach(doc => print(doc.address.city))
2.3 - db.restaurants.find().forEach(doc => print(doc.coordinates))

# Advanced Queries

3.1 - db.restaurants.find({name: /^C/i })
3.2 - db.restaurants.countDocuments()
3.3 - db.restaurants.find({reviews: {$elemMatch : { date: "3/3/2024"}}})

# Aggregation operations

4.1 - db.restaurants.aggregate([{ $project: name: 1 , averageScore: {$avg: "$reviews.score"} }])
4.2 - db.restaurants.aggregate([{$match: {name: 'Restaurant 3'}},{$project: {name: 1,averageScore: { $avg: "$reviews.score" }}}])
