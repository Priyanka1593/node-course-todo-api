const MongoClient=require('mongodb').MongoClient();
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to MongoDB Server");

   /* db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err)
        {
            return console.log("Unable to create Todo",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })*/

     db.collection('Users').insertOne({
        name:'Priyanka',
        age:24,
        location:'Pune'

    },(err,result)=>{
        if(err)
        {
            return console.log("Unable to create Todo",err);
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })
    db.close(); 
})