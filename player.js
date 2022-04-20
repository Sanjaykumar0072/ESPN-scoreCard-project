const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link = "";

request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
    }
}