const database = require('./database')

var data = [
    {
        name: 'Matheus',
        email: 'matheus@gmail.com',
        pass: 'mat6868'
    },
    {
        name: 'Guilherme',
        email: 'guilherme@gmail.com',
        pass: 'gui99283'
    },
    {
        name: 'Kaue',
        email: 'kaue@gmail.com',
        pass: '93890293'
    }
]

/* Insert de dados no banco
database.insert(data).into('user').then(data =>{
    console.log(data)
}).catch( err => {
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

//Order by
database.select('*').from('user').orderBy('id', 'desc').then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})