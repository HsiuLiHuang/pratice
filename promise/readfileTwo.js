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

let reading = readFile('test.txt', 'utf8' );
reading
  .then((data) => {
    console.log(data);
    return readFile('test2.txt', 'utf8');;
    
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    // 用來接住 reject
    console.error('在 promise 發生錯誤:', err);
  });