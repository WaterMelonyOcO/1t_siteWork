const { Router, static } = require("express");
const fs = require('fs');
const path = require("path")

const route = Router();
let srcFolder = path.join(path.resolve("src"), "/")
route.use(static(srcFolder))


//шрифты
route.get("/fonts/:font", function( request, response ){
    let data = request.params;
    let folderName = data.fontName.split("-")[0]
    let ContentType = request.url.split()[-1]

    fs.readFile(traverseDirIs(data.font), function( err, file ){
        if ( err ){
            response.sendStatus(404)
            response.statusMessage = "not script"
            console.log(err);
        }
        else{
            response.contentType(response.type(ContentType))
            response.statusCode = 200
            response.end(file)
        }
    })
})

// route.get("/media/:file", function( request, response ){
//     console.log(request.url);
//     let data = request.params;
//     let ContentType = request.url.toString()

//     console.log("content type",ContentType);
//     console.log("enter request file", data);

//     if ( data.file.endsWith(data.file.endsWith("svg"))){
//         response.statusCode(404)
//         response.end()
//     }
//     fs.readFile(traverseDirIs(data.file), function( err, file ){
//         if ( err ){
//             response.sendStatus(404)
//             response.statusMessage = "not file"
//             console.log(err);
//             console.log("err in file:",data.file);
//         }
//         else{
//             response.contentType(response.type(ContentType))
//             response.statusCode = 200
//             response.end(file)
//         }
//     })
// })

route.get("/scripts/:file", function( request, response ){
    console.log(request.url);
    let data = request.params;
    let ContentType = request.url.toString()
    
    console.log("content type",ContentType);

    fs.readFile(srcFolder + "scripts/" + data.file, function( err, file ){
        if ( err ){
            response.sendStatus(404)
            response.statusMessage = "not file"
            console.log(err);
            console.log("err in file:",data.file);
        }
        else{
            response.contentType(response.type(ContentType))
            response.statusCode = 200
            response.end(file)
        }
    })
})

//генератор для обхода всех папок
function* traverseDir(dirPath) {
    const dirEntries = fs.readdirSync(dirPath, {withFileTypes: true});
  
    // Сортируем сущности для обеспечения большей предсказуемости
    dirEntries.sort(
      (a, b) => a.name.localeCompare(b.name, "en")
    );
  
    for (const dirEntry of dirEntries) {
      const fileName = dirEntry.name;
      const pathName = path.join(dirPath, fileName);
      yield pathName.toString();
  
      if (dirEntry.isDirectory()) {
        yield* traverseDir(pathName);
      }
    }
  }

function traverseDirIs(file){
    for ( const some of traverseDir(srcFolder)){
        // console.log(some);
        let sp = some.split("/")
        let len = sp.length - 1
        if ( sp[len] == file ){
            return some
        }
        // else{
        //     return false;
        // };
    
    }
}

// console.log(traverseDirIs("about_us.png"));

module.exports = route