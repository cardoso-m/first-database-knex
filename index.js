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

database.insert(data).into('user').then(data =>{
    console.log(data)
}).catch( err => {
    console.log(err)
})