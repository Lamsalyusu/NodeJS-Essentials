// const http = require('http');
// const server = http.createServer((req,res)=>{
//     console.log(req.method); // ---> GET,PUT,POST,DELETE
//     console.log(req.url); // ---> /users , /products ,/login
//     console.log(req.headers); // ---> {authorization:'bearer token...'}
// });


// let http2;
// try{
//     http2 = require('node:http2');
// }
// catch(err){
//     console.log('http support is disabled!');
// }

// console.log(1===1);

// let http2;
// try {
//   http2 = await import('node:http2');
// } catch (err) {
//   console.error('http2 support is disabled!');
// }

// const { createHmac } = await import('crypto');

// const secret = 'i love cupcakes';
// const hash = createHmac('sha256', secret)
//                .update('I love cupcakes')
//                .digest('hex');
// console.log(hash);
// Prints:
//   c0fa1bc00531bd78ef38c628449c5102aeabd49b5dc3a2a516ea6ea959d6658e


// let crypto;
// try {
//   crypto = require('node:crypto');
//   console.log(`module found ${crypto.Hash}`);
// } catch (err) {
//   console.error('crypto support is disabled!');
// }


// const crypto = require('node:crypto');

// // Generate standard RSA keys
// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048, // Standard secure key size
// });

// const message = "Secret Project Data";

// // 1. Encrypt with Public Key
// const encryptedData = crypto.publicEncrypt(publicKey, Buffer.from(message));
// console.log("Encrypted:", encryptedData.toString('base64'));

// // 2. Decrypt with Private Key
// const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);
// console.log("Decrypted:", decryptedData.toString()); // "Secret Project Data"



// const crypto = require('node:crypto');
// // Generate the key objects
// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// // 1. Export and view the Public Key (Safe to share with anyone)
// const publicKeyPem = publicKey.export({
//   type: 'spki',       // Standard public key format
//   format: 'pem'       // Plain text format
// });
// // console.log("--- YOUR PUBLIC KEY ---");
// console.log(publicKeyPem);

// // 2. Export and view the Private Key (Keep this secret!)
// const privateKeyPem = privateKey.export({
//   type: 'pkcs8',      // Standard private key format
//   format: 'pem'       // Plain text format
// });
// // console.log("--- YOUR PRIVATE KEY ---");
// console.log(privateKeyPem);


// const fs = require('node:fs/promises');
// const crypto = require('node:crypto');
// const keyfunc = () =>{
// // Generate the key objects
// crypto.generateKeyPair('rsa',{modulusLength: 2048},(err,publicKey,privateKey)=>{
//   if (err) 
//     throw err; 
//     const publicKeyPem = publicKey.export({
//       type: 'spki',       // Standard public key format
//       format: 'pem'       // Plain text format
//     });
//     fs.writeFile('public_key.pem',publicKeyPem);
//     console.log('written to public file');
//     // console.log(publicKeyPem);

//     const privateKeyPem = privateKey.export({
//     type: 'pkcs8',      // Standard private key format
//     format: 'pem'       // Plain text format
//   });

//     fs.writeFile('private_key.pem',privateKeyPem);
//     console.log('written to private file');
//   });

// };
// keyfunc();

// ====================================================================================================

// const encdec = async() =>{
//   const readpubkey = await fs.readFile('public_key.pem','utf8');
//   const readprikey = await fs.readFile('private_key.pem','utf8');
//   const supersecretmsg = "this msg cannot be seen";
//   const dataBuffer = Buffer.from(supersecretmsg, 'utf8');
// try{

//   const encryptbuff = crypto.publicEncrypt(
//     {
//       key:readpubkey,
//       padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
//       oaepHash:'sha1'
//     },
//     dataBuffer  
//   );
//   await fs.writeFile('encfile.txt',encryptbuff.toString('base64'));

//   const decryptbuff = crypto.privateDecrypt(
//     {
//       key:readprikey,
//       oaepHash:'sha1',
//       padding:crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     },
//     encryptbuff
//   );
//   // console.log("Decrypted Message:", decryptbuff.toString('utf8'));
//   await fs.writeFile('decfile.txt',decryptbuff);
// }
// catch(error){
//   console.log(error)
// }
// };
// encdec();


// const { unlink } = require('node:fs/promises');
// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// })('/path/of/file');


// const fs = require('node:fs/promises');
// const del = async(filepath) =>{
//   try{
//     await fs.unlink(filepath);
//     console.log(`successfully deleted ${filepath}`);
//   }catch(error){
//     console.log("Error deletign the file");
//   }
// };
// del('haina.txt');


// const { unlinkSync } = require('node:fs');
// try {
//   unlinkSync('a.txt');
//   console.log('successfully deleted /tmp/hello');
// } catch (err) {
//   // handle the error
//   console.log(err);
// }

// const fs = require('node:fs/promises');
// const { text } = require('node:stream/consumers');
// const opening = async(filepath) =>
//   {
//     let fh;
//   try{
//       fh = await fs.open(filepath,'r');
//       console.log('file opened successfully');
//        console.log(await text(fh.createReadStream()));
//   }
//   catch(error){
//     console.log(error);
//   }
//   finally{
//       await fh?.close()
//   }
// }
// opening('new.txt');



// const fs = require('node:fs');
// const filename = 'new.txt';
// fs.open(filename,(err)=>{
//   if (err)
//     throw err;
//   console.log('sof');
// });

// const { text } = require('node:stream/consumers');
// const fs = require('node:fs/promises');
// const readfile = async(fp) => {
//     let filehandle;
//     try{
//         filehandle = await fs.open(fp,'r');
//         console.log(await text(filehandle.createReadStream()));
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         console.log("opn done")
//     }
// }
// readfile('new.txt');


// const fs = require('node:fs/promises');
// const fl = async(fp) =>{
//     let fh;
//     try{
//         fh = await fs.open(fp,'r');
//         const content = await fh.readFile({encoding:'utf8'});
//         console.log(content);
//     }catch(error){
//         console.log(error);

//     }finally{
//         // if(fh){
//         //     await fh.close();
//             // console.log('file closed');
//         // }
//     }
// }
// fl('new.txt');

// const fs = require('node:fs/promises');
// const writee = async(fp,data) =>{
//     try{

//         await fs.writeFile(fp,data,'utf8');
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         if (writee){

//             console.log('written in file');
//         }
//     }
// }
// writee('new.txt','ki haal hai');

// const append = async(fp,dt)=>{
//     try{
//         await fs.appendFile(fp,dt);
//     }
//     catch(error){
//         console.log(error);
//     }finally{
//         if(append){
//             console.log('appended');
//         }
//         else{
//             console.log('not done');
//         }
//     }
// };
// append('neww.txt','ma nai ho');

// const { copyFile } = require('node:fs');
const { readdir } = require('node:fs');
const fs = require('node:fs/promises');
// // // import fs from 'node:fs/promises';
// // await fs.rename('new.txt','hmm.txt');
// const cp = async(src,dst) =>{
//     try{
//     await fs.copyFile(src,dst);
//     }
//     catch(error){
//         console.log(error)
//     }
//     finally{
//         if (cp){
// console.log('file copied');
//         }
//     }
// }
// cp('hmm.txt','new.txt');

// const dir = async(p,o) =>{
//     try{
//         await fs.mkdir(p,o);
//     }
//     catch(error){
//         console.log(error);
//     }
//     finally{
//         if(dir){
//            console.log("kaam bhayo hai");
//         }
//     }
// }
// dir('new/comps/utils',{recursive:true});

const f = async(p) =>{
    try{
    const files = await fs.readdir(p);
    console.log(files);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log('k bhayo hola');
       } 
}
f('./FS');