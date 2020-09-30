const server = require('./server')
const port  = process.env.PORT || 5000

server.get("/", (req,res) => {
    res.json({message:"welcome"})
})


server.listen(port, () => console.log(`Server is running on port ${port}`))

