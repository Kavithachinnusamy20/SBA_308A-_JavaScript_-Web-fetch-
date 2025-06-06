
// export function renderEvents2(events) {
//     const eventContainer = document.getElementById("event-list");
//     eventContainer.innerHTML = events.map(event => `
//             <div class="event-card">
//             <h3>${event.name}</h3>
//             <p>${event.dates.start.localDate}</p>
//             <p> <img src='${event.images[0].url}'  width="100", height="100" ></p>
//             <button onclick="window.open('${event.url}', '_blank')"> Book Ticket </button>
 
//         </div>
// `).join("");
// }



export function renderEvents(events) {
    const eventContainer = document.getElementById("event-list");
    events.forEach(event => {
        const div = document.createElement("div")
        div.className = "event-card";

        const eventName = document.createElement("div")
        eventName.innerText = event.name;
        div.appendChild(eventName);

        const eventDate = document.createElement("div")
        eventDate.innerText = event.dates.start.localDate;
        div.appendChild(eventDate);

        const eventImg = document.createElement("img");
        eventImg.src = event.images[0].url;
        eventImg.width = "100";
        eventImg.height = "100";
        div.appendChild(eventImg);

        const eventBookBtn  = document.createElement("button")
        eventBookBtn.textContent = "Book Tickets"
        eventBookBtn.onclick = function() {
            window.open('${event.url}', '_blank');
        }
        div.appendChild(eventBookBtn);

        eventContainer.appendChild(div);



    });

   
}

setTimeout(()=>renderEvents(events), 9000);


export function renderPagination(onPageChange) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = `
    <button id="previousNavigation" >Previous</button>
    <button id="nextNavigation">Next</button>
`;

}