const express = require('express');
const app = express()

app.get('/', (req, res) => {
    return res.json([
        {
            item: {
                itemn:"leite",
                quantidade:"1"
            },
            item: {
                itemn:"açucar",
                quantidade:"1"
            },
            comoFaz: ""
        }
    ])
})

app.listen('4567')