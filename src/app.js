import express from "express"
import eggsRoutes from './routes/eggs-routes'
const app = express()

app.set('port', process.env.PORT || 4000);

app.use(express.json())

app.get('/', (req,res)=>{
    res.json({message: 'Welcome to my application'})
})

app.use('/api/eggs',eggsRoutes)

export default app