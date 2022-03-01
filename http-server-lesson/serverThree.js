const fs = require( 'fs' )

console.log( 'First task started' )

fs.readFile( './data/products.json', 'utf8', ( err, data ) => {

    console.log( data )
    console.log( 'First task ended' )

})

console.log( 'Second task started' )