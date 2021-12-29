var fs = require('fs')
var request = require('request-promise')

document.getElementById('dashboard-supplier-add-new-btn').addEventListener('click', () => {
    fs.readFile('./src/dashboard/newProduct.html', (err, data) => {
        document.getElementById('dashboard-bottom-container-right-out').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './dashboard/js/newProduct.js'
        document.head.appendChild(imported)
    })
})

var options = {
    method: 'GET',
    uri: 'http://127.0.0.1:5000/getproducts',
}
request(options).then(function (data) {
    var obj = JSON.parse(data)
    var length = Object.keys(obj).length

    document.getElementById('dashboard-products-count-newvalue').innerHTML = length

}).catch(function (err) {
    console.log(err)
})


