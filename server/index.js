const express = require('express');
const path = require('path');
const fs = require("fs"); 
const mysql = require('mysql2/promise');
const db = require('./db');
const helper = require('./helper');
require('dotenv').config();

const { getPostById } = require('./stub/posts');


const PORT = process.env.REACT_APP_PORT || 80;
const indexPath  = path.resolve(__dirname, '..', 'build', 'app.html');

const app = express();

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// here we serve the index.html page

// app.get('/', function (req, res) {
//     res.send('hello world')
//   })




app.get('/article/:article_link',async function (req, res, next){
  

    let article_link = req.params.article_link;
    //article_link = article_link.replace(/-/g," ");
    // getMedaData(tableName="",link_name="",page_link="")
    const metaData = await helper.getMedaData("Article","link",article_link);
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>${metaData.title}</title>`
        )
        .replace('__META_OG_TITLE__', metaData.title)
        .replace('__META_OG_DESCRIPTION__', metaData.intro)
        .replace('__META_DESCRIPTION__', metaData.intro)
        .replace('__META_OG_IMAGE__', process.env.REACT_APP_IMAGE_Domain+metaData.image)
        return res.send(htmlData);
    });
});
app.get('/category/:category_name',async function (req, res, next) {
   
    let category_name = req.params.category_name;
    const metaData = await helper.getMedaData("Category","name",category_name);
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
       
        // inject meta tags
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>${metaData.name} : aungkyawnyunt.com</title>`
        )
        .replace('__META_OG_TITLE__', metaData.name)
        .replace('__META_OG_DESCRIPTION__', metaData.meta)
        .replace('__META_DESCRIPTION__', metaData.meta)
        .replace('__META_OG_IMAGE__', process.env.REACT_APP_IMAGE_Domain+metaData.image)
        return res.send(htmlData);
    });
});

app.get('/*', function (req, res) {
    
    console.log('hello testing 1,2,3');
    

    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        htmlData = htmlData.replace(
            "<title>React App</title>",
            `<title>this is title</title>`
        )
        .replace('__META_OG_TITLE__', "this is title")
        .replace('__META_OG_DESCRIPTION__',"thi sis desc")
        .replace('__META_DESCRIPTION__', "thi sis desc")
        .replace('__META_OG_IMAGE__', "thi sis img")
        return res.send(htmlData);
        
    });
});
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});