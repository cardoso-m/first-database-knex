const database = require('./database')

var data = [
    {
        name: 'Processador',
        user_id: 3
    },
    {
        name: 'Cooler',
        user_id: 3
    },
    {
        name: 'SSD',
        user_id: 3
    }
]

/* Insert de dados no banco 
database.insert(data).into('products').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

/* Select no banco de dados
database.select('*').from('user').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

/* Select com Where
database.where({ name: 'Matheus' }).from('user').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
}) */

/* Delete
database.where({ name: 'Guilherme' }).from('user').delete().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

/* Update 
database.where({ id: 1 }).from('user').update({ pass: 'admin2469' }).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

/* Order by
database.select('*').from('user').orderBy('id', 'desc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})*/

// Join com where
database.select(['user.name', 'products.name as name_product']).table('user').innerJoin('products', 'products.user_id', 'user.id').where('user.id', 1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})