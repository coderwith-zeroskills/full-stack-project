// MONGOO DB:compass,client-mongo db shell,and mongoDb service,atlas:free hosted DB

//embedde document hepls avoid complex relationn.
// document size<16mb,level of embedded is 100
// _id:object id

/*BSON: added data-type in JSON,example ObjectId()
number:NumberInt(Int32),NumberLong(Int64),NumberDecimal
ObjectID:
date:ISODate,TimeStamp
Embedded document:
Arrays:
*/

/*
CURSOR in mongoDB:related to findOne()
method on CURSOR: c=db.collections.find():returna cursor and document in batches
hence: 
c.toArray()
c.forEach((current)=>{})
*/

/*
METHOD:
#)db.collections.findOne()/find(): inside we can pass filters;
#)updateOne()
*/
