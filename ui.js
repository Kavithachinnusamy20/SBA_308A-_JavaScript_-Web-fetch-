

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
        //adding timeout for book ticket
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
    const pagination = document.getElementById("pagination") || document.createElement("div");
    pagination.id = "pagination"; // Ensure the element has the correct ID

    const previousButton = document.createElement("button");
    previousButton.id = "previousNavigation";
    previousButton.textContent = "Previous";
    previousButton.addEventListener("click", () => {
        setTimeout(() => onPageChange("previous"), delay)
    });

    const nextButton = document.createElement("button");
    nextButton.id = "nextNavigation";
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", () => { setTimeout(() => onPageChange("next"), delay) });

    pagination.innerHTML = ""; // Clear existing content to prevent duplicate buttons
    pagination.appendChild(previousButton);
    pagination.appendChild(nextButton);

    const section = document.getElementsByClassName("search-section")[0]; // Access first element
    if (!document.getElementById("pagination")) {
        section.appendChild(pagination);
    }
}

