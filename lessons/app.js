// const name = 'Mike Taylor'

// const greeting = function( name ) {

//     console.log( `Hello, ${ name }. Welcome to NodeJS` )

// }

// const greeting = require( './greeting.js' )

// const name = 'Mike Taylor'

// greeting( name )

// const person = require( './person.js' )

// console.log( person.name, person.car )

const { name, car } = require( './person.js' )

const hello = require( './hello.js' )

// console.log( hello, name, car )

hello()