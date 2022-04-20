//lbc----------> Last Ball Commentary.
const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const link = "https://www.espncricinfo.com/series/ipl-2021-1249214/chennai-super-kings-vs-punjab-kings-53rd-match-1254094/ball-by-ball-commentary";

request(link,cb);
function cb(error,response,html){
    if(error){
        console.log(error);
    }else{
       const dom = new JSDOM(html);
       const document = dom.window.document;
       let allCommentBox = document.querySelector(".mb-5.comments-container-body");
       let firstMatchCommentBox = allCommentBox.querySelector(".match-comment");
       let lastBallCommentbox = firstMatchCommentBox.querySelector(".d-flex.match-comment-padder.align-items-center");
       let lastBallComment = lastBallCommentbox.querySelector(".match-comment-long-text > p").textContent;
       console.log(lastBallComment);
    }
}