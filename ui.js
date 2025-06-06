
export function renderEvents(events) {
    const eventContainer = document.getElementById("event-list");
    eventContainer.innerHTML = events.map(event => `
            <div class="event-card">
            <h3>${event.name}</h3>
            <p>${event.dates.start.localDate}</p>
            <p> <img src='${event.images[0].url}'  width="100", height="100" ></p>
            <button onclick="window.open('${event.url}', '_blank')"> Book Ticket </button>
 
        </div>
`).join("");
}

setTimeout(()=>renderEvents(events), 9000);


export function renderPagination(onPageChange) {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = `
    <button id="previousNavigation" >Previous</button>
    <button id="nextNavigation">Next</button>
`;

}