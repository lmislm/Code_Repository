/**
 * Created by lmislm on 2018/2/21- 15:02.
 */

const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log(`App listening at port 3000`)
});