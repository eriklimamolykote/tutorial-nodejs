const fs = require( 'fs' ).promises

fs.rename( 'info.txt', 'data.txt', ( err ) => {

    if ( err ) return console.log( err )
    console.log( 'File renamed' )
    
})