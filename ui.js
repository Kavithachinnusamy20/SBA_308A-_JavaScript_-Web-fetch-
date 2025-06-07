
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
    eventContainer.innerHTML = "";

    events.forEach(event => {

        const div = document.createElement("div")
        div.className = "event-card";

        const eventName = document.createElement("h3")
        eventName.innerText = event.name;
        div.appendChild(eventName);

        // const eventDate = document.createElement("div")
         const eventDate = document.createElement("p")
        eventDate.innerText = event.dates.start.localDate;
        div.appendChild(eventDate);

        const imgP = document.createElement("p")
        const eventImg = document.createElement("img");
        eventImg.src = event.images[0].url;
        eventImg.width = 100;
        eventImg.height = 100;

        imgP.appendChild(eventImg);
        div.appendChild(imgP);

        const eventBookBtn = document.createElement("button")
        eventBookBtn.innerText = "Book Tickets"
        eventBookBtn.onclick = function () {
            // Set Timeout - Open  Book Ticket URL after 3 sec
            setTimeout(() => {
                window.open(event.url, '_blank');
            }, 1000)
        }
        div.appendChild(eventBookBtn);

        eventContainer.appendChild(div);

    });
}

export function renderPagination(onPageChange) {
    const pagination = document.getElementById("pagination");
    const section = document.getElementsByClassName("search-section")[0]; // Access first element

    // Corrected template literal formatting
    pagination.innerHTML = `
        <button id="previousNavigation">Previous</button>
        <button id="nextNavigation">Next</button>
    `;

    // Add event listeners for pagination buttons
    document.getElementById("previousNavigation").addEventListener("click", () => onPageChange("previous"));
    document.getElementById("nextNavigation").addEventListener("click", () => onPageChange("next"));

    // Append pagination to the section correctly
    section.appendChild(pagination); // Append the pagination element to the section
}

