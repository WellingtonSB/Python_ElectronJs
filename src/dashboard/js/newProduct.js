var fs = require('fs')
var request = require('request-promise')

document.getElementById('newproduct-button-cancel').addEventListener('click', () => {
    fs.readFile('./src/dashboard/dashboard.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './dashboard/js/dashboard.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('newproduct-button-save').addEventListener('click', () => {

    var get_productname = document.getElementById('newproduct-input-productname').value
    var get_datetime = document.getElementById('newproduct-input-datetime').value
    var get_productweigth = document.getElementById('newproduct-input-productweigth').value

    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/postproduct',
        form: { productname: get_productname, datetime: get_datetime, productweigth: get_productweigth }
    }

    request(options).then(function (data) {
        if (data == 'success') {
            fs.readFile('./src/dashboard/dashboard.html', (err, data) => {
                document.getElementById('index-right-container').innerHTML = data
                var imported = document.createElement('script')

                imported.src = './dashboard/js/dashboard.js'
                document.head.appendChild(imported)
            })
        }
    }).catch(function(err){
        console.log(err)
    })
})