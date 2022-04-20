const request = require("request");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/royal-challengers-bangalore-vs-kolkata-knight-riders-eliminator-1254115/full-scorecard";

request(link,cb);

function cb(error,respose,html){
    if(error){
        console.log(error);
    }
    else{
        const dom = new JSDOM(html);
        const document = dom.window.document;
        let bowlerDetail=document.querySelectorAll(".bowler tbody tr");
        let wicket = 0;
        let highestwicketTakername = "";
        for(let i=0;i<bowlerDetail.length;i++){
            let bowlerName = bowlerDetail[i].querySelector("td").textContent;
            if(bowlerName.length>0){
                //console.log(bowlerName);
                let highestwicket = bowlerDetail[i].querySelectorAll("td")[4].textContent;
                //console.log(highestwicket);
                if(highestwicket>wicket){
                    wicket = highestwicket;
                    highestwicketTakername=bowlerName;
                }
            }
        }
        console.log("name--> ",highestwicketname);
        console.log("wicket---> ",wicket);
    }

}