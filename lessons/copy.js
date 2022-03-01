const fs = require( 'fs' ).promises

fs.copyFile( 'info.txt', 'info2.txt', ( err ) => {

    if ( err ) return console.error( err )
        console.log( 'File copied' )

})