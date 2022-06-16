//------------Define variables and contants----------------
const periodsButtons = document.querySelector(".buttons-list");
const cards = document.querySelector(".card");
const currentPeriod = document.querySelectorAll(".current-time");
const previousPeriod = document.querySelectorAll(".previous-time");
const period = document.querySelectorAll(".period");

//------By default display the weekly report when loading the page-------
periodInnerText("Last Week");
displayTimeFrameData("weekly");

//------------Functions--------------------
function periodInnerText(text){
    period.forEach(entry => {
        entry.innerText = text;
    });
}

function toggleActiveState(event){
    document.querySelector("[data-active = 'yes']").dataset.active = "no";
    event.target.dataset.active = "yes";
}

function displayTimeFrameData(timeFrame){
    fetch("./data.json")
    .then(response => response.json())
    .then(objects => {
        objects.forEach((object, index) => {
            currentPeriod[index].innerText = object.timeframes[timeFrame].current;
            previousPeriod[index].innerText = object.timeframes[timeFrame].previous;
        });
    })
}

//-------------EventListeners----------------------
periodsButtons.addEventListener("click", event => {
    if (event.target.id == "daily"){
        periodInnerText("Yesterday");
        displayTimeFrameData("daily");
        toggleActiveState(event);
    }

    else if (event.target.id == "weekly"){
        periodInnerText("Last Week");
        displayTimeFrameData("weekly");
        toggleActiveState(event);
    }
    else if (event.target.id == "monthly"){
        periodInnerText("Last Month");
        displayTimeFrameData("monthly");
        toggleActiveState(event);
    }
})

