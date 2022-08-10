const fs = require('fs');

function readFile(path, code) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, code,(err, data) => {
      if (err){
        reject(err)
      }{
        resolve(data)
      }
      
    });
  });
}

async function readFile2() {
try {
  let reading = await readFile('test.txt', 'utf8');
  console.log(reading);
  let doRead = await readFile('test2.txt', 'utf8');
  console.log(doRead);

}
catch (err) {
  console.error(err);
}
}
readFile2();



