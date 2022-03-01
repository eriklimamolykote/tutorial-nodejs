const fs = require( 'fs' ).promises

fs.mkdir( 'data', ( err ) => {

    console.log( 'Data folder created' )

})