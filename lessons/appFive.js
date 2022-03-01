// const fs = require( 'fs' )

// const info = fs.readFile( 'info.txt', 'utf-8', ( err, data ) => {

//     // console.log( data )

//     if ( err )
//         console.log( err )

//     else
//         console.log( data )    

// })

const fs = require( 'fs' ).promises

const start = async () => {

    const data = await fs.readFile( 'info.txt', 'utf8' )
    console.log( data )

}

start()