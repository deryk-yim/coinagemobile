import moment from 'moment';

export const TRACKING_DATA = [{
        color: ['#FD9722', '#FD9722', '#FC9722'],
        category: 'Food',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0  
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }, {    
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0 
        }]
    },{
        color: ['#F82279', '#934CDB', '#934CDB'],
        category: 'Leisure',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#5189DC', '#944BDB'],
        category: 'Health',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#714cfe', '#714cfe'],
        category: 'Clothing',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#dd0074', '#dd0074'],
        category: 'Shopping',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#41c300', '#41c300'],
        category: 'Transportation',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#ff8d00', '#ff8d00'],
        category: 'Bills',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        color: ['#d2c2fd', '#d2c2fd'],
        category: 'Dining',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        category: 'Porn',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }, {
        category: 'Snack',
        transactions: [{
            date: moment().calendar,
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(1, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(2, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(3, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(4, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(5, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }, {
            date: moment().subtract(6, 'days').calendar(),
            amount: Math.floor(Math.random() * (1000 - 0 + 1)) + 0
        }]
    }
]