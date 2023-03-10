const { Router, static } = require("express");
const fs = require('fs');
const path = require("path")

const route = Router();
let srcFolder = path.join(path.resolve("src"), "/")
let mediaFolder = path.join(path.resolve("src"), "/media/")
let fontFolder = path.join(path.resolve("src"), "/fonts/")
route.use(static(srcFolder))
route.use(static(mediaFolder))
route.use(static(fontFolder))


//шрифты
route.get("/fonts/:font", function( request, response ){
    let font = request.params.font;
    // let folderName = data.fontName.split("-")[0]
    // let ContentType = request.url.split()[-1]

    fs.readFile(traverseDirIs(font, fontFolder), function( err, file ){
        if ( err ){
            response.sendStatus(404)
            response.statusMessage = "not font"
            console.log(err);
        }
        else{
            try{
                response.setHeader("Content-Type", GetContentType(font))
            response.statusCode = 200
            response.end(file)
            }
            catch (err){
                console.log(font + " \n");
                console.log(err);
            }
        }
    })
})

route.get("/media/:file", function( request, response ){
    // console.log(request.url);
    
    let file = request.params.file;
    let ContentType = GetContentType(file)

    // console.log("content type",ContentType);
    // console.log("enter request file", file, "\n");

    // if ( file.endsWith("svg")){
    //     response.statusCode(404)
    //     response.end()
    // }
    fs.readFile(traverseDirIs(file, mediaFolder), function( err, file ){
        if ( err ){
            response.sendStatus(404)
            response.statusMessage = "not file"
            console.log(err);
            console.log("err in file:",file);
        }
        else{
            response.setHeader("Content-Type", ContentType)
            response.statusCode = 200
            response.end(file)
        }
    })
})

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

function GetContentType(file){

    const mimeType = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".ttf": "font/ttf"
    }
    for ( let i of Object.keys(mimeType) ){
        if( file.includes(i) ){
            return mimeType[i]
        }
    }
}


function traverseDirIs(file, folder = srcFolder){
    for ( const some of traverseDir(folder)){
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