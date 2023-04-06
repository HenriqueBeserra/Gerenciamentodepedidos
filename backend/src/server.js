const app = require ('./app.js')
const router =  require('./router.js')

require('dotenv').config();
const PORT = process.env.PORT || 9999;

app.use(router)

app.listen(PORT, () => console.log(`Server runing on the port http://localhost:${PORT}`))