import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = process.env.PORT

mongoose.connect(process.env.CONN_STR, {
}).then((conn) => {
    console.log("DB Connected Successfully")
}).catch(error => {
    console.log(error)
});


app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})