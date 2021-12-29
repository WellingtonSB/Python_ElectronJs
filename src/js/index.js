const fs = require('fs')

fs.readFile('./src/dashboard/dashboard.html', (err, data) => {
    document.getElementById('index-right-container').innerHTML = data
    var imported = document.createElement('script')

    imported.src = './dashboard/dashboard.js'
    document.head.appendChild(imported)
})

document.getElementById('index-left-menu-item-dashboard').addEventListener('click', () => {
    fs.readFile('./src/dashboard/dashboard.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './dashboard/dashboard.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('index-left-menu-item-dispatch').addEventListener('click', () => {
    fs.readFile('./src/dispatch/dispatch.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './dispatch/dispatch.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('index-left-menu-item-return').addEventListener('click', () => {
    fs.readFile('./src/return/return.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './return/return.js'
        document.head.appendChild(imported)
    })
})

document.getElementById('index-left-menu-item-shipment').addEventListener('click', () => {
    fs.readFile('./src/shipment/shipment.html', (err, data) => {
        document.getElementById('index-right-container').innerHTML = data
        var imported = document.createElement('script')

        imported.src = './shipment/shipment.js'
        document.head.appendChild(imported)
    })
})