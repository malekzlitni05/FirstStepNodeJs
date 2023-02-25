 const http= require ('http')

 const server = http.createServer((req,res)=>{
    //   console.log(res)
   //  res.write('welcome Malek\n ')
   //  res.write('happy to see u again')
   //  res.end()

   // res.write(req.url)
   if(req.url =='/home'){
      res.statusCode=200
      res.write('welcome to home page')
   }else if(req.url=='/contact'){
      res.statusCode=200
      res.write('welcome to contact page')
   }else if (req.url =='/about'){
      res.statusCode=200
      res.write('welcome to about page ')
   }else{
      res.statusCode=404
      res.write('not found')
   }
   res.end()
 })

 server.listen(5000,()=>{console.log('server running on port 5000 ')})
 