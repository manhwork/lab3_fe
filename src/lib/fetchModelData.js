/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 * @returns {Promise}       Promise that resolves to the response data
 */
async function fetchModel(url) {
    try {
        // const baseUrl = "https://7hjy43-8080.csb.app";
        const baseUrl = "http://localhost:8081";
        const response = await fetch(`${baseUrl}${url}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default fetchModel;
