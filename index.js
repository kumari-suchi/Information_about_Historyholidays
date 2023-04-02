const btnele=document.getElementById("btn");
const quele=document.getElementById("question");
const ansele=document.getElementById("answer");
const apikey="3vTKBmrkgSGr8S8g00ZluA==RkEV1kaMaCauGsMj"
const option={
    method: 'GET',
    headers: {
        'X-Api-Key':apikey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/trivia?category=historyholidays"
async function getQueans()
{
    try {
        quele.innerText="Updating...";
        ansele.innerText="Updating...";
        btnele.disabled=true;
        btnele.innerText="Loading...";
        const response=await fetch(apiURL,option);
        const data=await response.json();
        btnele.disabled=false;
        btnele.innerText="Tell me all the informations";
        quele.innerText="Question: "+data[0].question;
        ansele.innerText="Ans: "+data[0].answer;
        
    } catch (error) {
        quele.innerText="An error happened!";
        ansele.innerText="Sorry,try again later!!";
        btnele.disabled=false;
        btnele.innerText="Tell me all the informations";
        console.log(error);
        
    }
    
}
btnele.addEventListener("click",getQueans)