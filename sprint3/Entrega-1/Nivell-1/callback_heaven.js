/* El codi ha de llegir un fitxer situat en un directori inbox i escriu el seu contingut invertit en un altre fitxer al directori outbox.
Reestructura i simplifiqui el codi existent per a evitar el denominat Callback Hell. */

const {
  readdirSync,
  readFileSync,
  writeFileSync
} = require( "fs" );

const {
  join
} = require( "path" );
const inbox = join( __dirname, "inbox" );
const outbox = join( __dirname, "outbox" );


const reverseText = str =>
  str
    .split( "" )
    .reverse()
    .join( "" );

const files = readdirSync( inbox );

files.forEach( file => {
  try {
    const data = readFileSync( join( inbox, file ), "utf8" );
    writeFileSync( join( outbox, file ), reverseText( data ) );
    console.log( `${ file } was successfully saved in the outbox!` );
  } catch ( error ) {
    console.log( "Error: File could not be saved!" );
  }
} );

// Código original con callback hell

/* const {
  readdir,
  readFile,
  writeFile
} = require("fs");
const {
  join
} = require("path");
const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>
  str
  .split("")
  .reverse()
  .join("");

// Read and reverse contents of text files in a directory
readdir(inbox, (error, files) => {
  if (error) return console.log("Error: Folder inaccessible");
  files.forEach(file => {
    readFile(join(inbox, file), "utf8", (error, data) => {
      if (error) return console.log("Error: File error");
      writeFile(join(outbox, file), reverseText(data), error => {
        if (error) return console.log("Error: File could not be saved!");
        console.log(`${file} was successfully saved in the outbox!`);
      });
    });
  });
}); */
