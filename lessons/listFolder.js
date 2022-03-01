const fs = require( 'fs' ).promises

fs.readdir( '.', ( err, files ) => {

    console.log( files )
    
})