import 'dotenv/config'
import mongoose from 'mongoose'
import app from './app.js'

// DATABASE
mongoose.connect(process.env.CONN_STR, {
}).then((conn) => {
    console.log("DB Connected Successfully")
}).catch(error => {
    console.log(error)
});

// SERVER
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
})
