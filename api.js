const API_KEY = "kx3z9L9RvlGNGGShFvpxGnGahrnx8RTA";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";


export async function fetchEvents(userSelectedOption, page = 0) {

    const url = `${BASE_URL}?apikey=${API_KEY}&keyword=${userSelectedOption}&page=${page}`;
    console.log("Ticket Master URL :", url)

    try {
        const response = await fetch(url);
        const data = await response.json();

         console.log("data", data)

        return data._embedded?.events || [];
        
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}