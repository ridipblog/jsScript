const express=require('express');
const app=express();
const fs=require('fs');
const path=require('path');
const port=process.env.PORT || 3000;
const hbs=require('hbs');
app.set('view engine','hbs');
app.use('/public',express.static('public'));
var push=[]
app.get('/show',async(req,res)=>{
	push=[];
	var folders=await fs.readdir('./public',(err,folder)=>{
		folder.forEach(async folderName=>{
			var files=await fs.readdir(`./public/${folderName}/`,(err,file)=>{
				file.forEach(fileName=>{
					console.log(fileName)
				});
			});
			push.push(folderName);
		});
	});
	res.render('show',{
		data:push
	});
})
app.listen(port)