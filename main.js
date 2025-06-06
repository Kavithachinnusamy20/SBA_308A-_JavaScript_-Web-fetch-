import { fetchEvents } from "./api.js";
import { renderEvents, renderPagination } from "./ui.js";

let currentPage = 0;

const searchBtn = document.getElementById("searchButton");
const ticketOptions = document.getElementById("choices")
//adding event listener for search
searchBtn.addEventListener("click", async () => {

    console.log("click")
    const query = ticketOptions.value;

    if (!query) {
        return alert("Please select the your choise!");
    }

    const events = await fetchEvents(query, currentPage);

    renderEvents(events);
    renderPagination(changePage);
});
//event listener ends


function changePage(direction) {
    currentPage += direction;
    document.getElementById("searchButton").click();
}



