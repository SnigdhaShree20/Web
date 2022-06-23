app.get('/add-product', (req, res)=>{
    res.sendFile('add-product.html', {root: "public"});
})