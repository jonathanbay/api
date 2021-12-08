
function afficheChats() {

    fetch("https://api.thecatapi.com/v1/images/search")
    .then((res) => res.json())
    .then((data) => {
     console.log(data);
     document.querySelector("#cat").src = data[0].url;
    });
    
}

function nasa(){
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-03-17")
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    document.querySelector("#nasa").src = data.url;
});
}

// function nameR(){
//     fetch("https://api.agify.io/?name=robert")
// .then((res) => res.json())
// .then((data) => {
//  console.log(data.age);
//  document.querySelector("#age").innerHTML = data.age;
// });
// }

// function activity(){
//     fetch("https://www.boredapi.com/api/activity")
// .then((res) => res.json())
// .then((data) => {
//  console.log(data);
//  document.querySelector("#bored").innerHTML = data.activity;
// });
// }

const headerBlague = document.getElementById("headerBlague");
const contenuBlague = document.getElementById("contenuBlague");

function appelBlague() {

    fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);

        headerBlague.textContent = data.data.content.text_head;
        contenuBlague.textContent = data.data.content.text !== ""
        ? data.data.content.text
        : data.data.content.text_hidden;
    });
}
appelBlague();

document.getElementById("blague").addEventListener("click", appelBlague);

