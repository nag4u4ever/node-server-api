const express=require("express");
const app=express(); 
const pool=require("./db.js");
const { response } = require("express");

app.use(express.json())

app.get("/",(req,res)=>
{
    console.log("connected to database successfully");
    res.json(status);
});

//post method
app.post("/save",async(req,res)=>{
    try{
         //await
         var itemlist=req.body
         //const{MRNo,Name,Age,Contact}=req.body;

         for(var item of itemlist)
         {            
            console.log(item.MRNo)
            var firstarug=item.MRNo
            var secondarug=item.Name
            var thirdarug=item.Age
            var fourtharug=item.Contact
            console.log(firstarug+secondarug+thirdarug+fourtharug)
  result= await pool.query('INSERT INTO antental (MRNo,Name,Age,Contact) VALUES ($1,$2,$3,$4)',[item.MRNo,item.Name,item.Age,item.Contact])
         }

//const result= await pool.query('INSERT INTO antental (MRNo,Name,Age,Contact) VALUES ($1,$2,$3,$4)',[MRNo,Name,Age,Contact])
//console.log(res.status(201))
if(res.statusCode ==200)
console.log('returning flag as succesufull')
res.json(result)     
}catch(err)
    {
        console.log(err.message);
    }
});

//detelet  method
app.delete("/deleteall",async(req,res)=>{
    const result= await pool.query('DELETE FROM antental')
    res.json(result)
})

//get method to display all details
app.get("/all",async(req,res)=>{
    const result=await pool.query("SELECT * FROM antental");    
console.log(res.body);
res.json(result);
});
app.listen(8080,()=>{ 
    console.log("serevr is listening on port 8080");
});
