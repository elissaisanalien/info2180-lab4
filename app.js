document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const searchBtn = document.getElementById("search-btn");
    const result = document.getElementById("result");

    function searchSuperheroes() {
        // Trim whitespace; the server sanitizes the value as well
        const query = searchInput.value.trim();

        // encodeURIComponent makes the value safe to place in a URL
        const url = "superheroes.php?query=" + encodeURIComponent(query);

        fetch(url)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed with status " + response.status);
                }
                return response.text();
            })
            .then(function (html) {
                // The server escapes all output, so it is safe to insert here
                result.innerHTML = html;
            })
            .catch(function (error) {
                console.error(error);
                result.textContent = "Something went wrong. Please try again.";
            });
    }

    searchBtn.addEventListener("click", searchSuperheroes);

    // Let the Enter key trigger a search too
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchSuperheroes();
        }
    });
});