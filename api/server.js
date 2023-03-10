const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")
const app = express()

const PRODUCT_DATA_FILE = path.join(__dirname, "server-product-data.json")
const CART_DATA_FILE = path.join(__dirname, "server-cart-data.json")
const SALES_TEAM_DATA_FILE = path.join(__dirname, "server-sales-team-data.json")

app.set("port", process.env.PORT || 3000)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate")
    res.setHeader("Pragma", "no-cache")
    res.setHeader("Expires", "0")
    next()
})

// API Calls from frontend
// get all products
app.get("/products", (req, res) => {
    fs.readFile(PRODUCT_DATA_FILE, (err, data) => {
        res.setHeader("Cache-Control", "no-cache")
        res.json(JSON.parse(data))
    })
})

// get all products in cart
app.get("/cart", (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
        res.setHeader("Cache-Control", "no-cache")
        res.json(JSON.parse(data))
    })
})

// add product to cart
app.post("/cart", (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
        const cartProducts = JSON.parse(data)
        const newCartProduct = {
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            quantity: 1,
        }
        let cartProductExists = false
        cartProducts.map((cartProduct) => {
            if (cartProduct.id === newCartProduct.id) {
                cartProduct.quantity++
                cartProductExists = true
            }
        })
        if (!cartProductExists) cartProducts.push(newCartProduct)
        fs.writeFile(
            CART_DATA_FILE,
            JSON.stringify(cartProducts, null, 4),
            () => {
                res.setHeader("Cache-Control", "no-cache")
                res.json(cartProducts)
            }
        )
    })
})

// remove product from cart by id
app.delete("/cart/delete/:id", (req, res) => {
    fs.readFile(CART_DATA_FILE, (err, data) => {
        let cartProducts = JSON.parse(data)
        cartProducts.map((cartProduct) => {
            if (cartProduct.id === parseInt(req.params.id) && cartProduct.quantity > 1) {
                cartProduct.quantity--
            } 
            else if (cartProduct.id === parseInt(req.params.id) && cartProduct.quantity === 1) {
                // Insert data in sales-team-data.json only if product.quantity become to 0
                fs.readFile(SALES_TEAM_DATA_FILE, function (err, data) {
                    var salesTeam = JSON.parse(data)
                    salesTeam.push(cartProduct)
                    fs.writeFile(SALES_TEAM_DATA_FILE, JSON.stringify(salesTeam), function(err){
                      if (err) throw err;
                      console.log('Data was appended to file for Sales team when product removed from cart.');
                    });
                })

                const cartIndexToRemove = cartProducts.findIndex(
                    (cartProduct) => cartProduct.id === parseInt(req.params.id)
                )
                cartProducts.splice(cartIndexToRemove, 1)
            }
        })
        fs.writeFile(
            CART_DATA_FILE,
            JSON.stringify(cartProducts, null, 4),
            () => {
                res.setHeader("Cache-Control", "no-cache")
                res.json(cartProducts)
            }
        )
    })
})

// Run server
app.listen(app.get("port"), () => {
    console.log(`Server running at: http://localhost:${app.get("port")}/`)
})
