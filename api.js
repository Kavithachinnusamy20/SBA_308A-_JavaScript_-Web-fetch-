
const select = document.getElementById("choices");
async function initialLoad() {
    // let response = await fetch("https://mimic-server-api.vercel.app/quotes"); 
    // // `response` should be awaited first
    let url = ("https://app.ticketmaster.com/discovery/v2/events.json?apikey=K1X3XqQBZJp4oe79kFQSE2cjpWIY6t3B")
    try {
        const response = await fetch(url);

        if (!response.ok) {
            console.log("if block.  ")
            throw new Error(`Response status: ${response.status}`);
        } else {
            console.log("else block ", response.ok)
        }

        const data = await response.json();
        console.log("data", data);

        console.log("data.events", data._embedded.events);

        data._embedded.events.forEach((event) => {
            console.log(event);
            // let data = json
            let option = document.createElement("option")
            option.setAttribute("value", event.id)
            option.innerText = event.dates.start.localDate + " : " + event.name
            select.appendChild(option)


        });

    } catch (error) {
        console.log("final  catch block  ")
        console.error(error.message);
    }
}
initialLoad();



//create div for event
// Select the container where divs will be added
const cont = document.getElementById("container");



eventDiv.addEventListener("click", (e) => {

    console.log("hello :", e.target.value)
    // Set attributes and content  

    // Create a new div element
    let eventDiv = document.createElement("div");
    // eventDiv.setAttribute("value", event.id);

    // eventDiv.innerText = `${event.dates.start.localDate} : ${event.name}`;

    // Append the div to a parent element (make sure there's a container in your HTML)
    cont.appendChild(eventDiv);
    console.log("eventdiv", eventDiv)
    alert(`You clicked on: ${event.name}`);
});
