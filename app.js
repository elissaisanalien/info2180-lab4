// OPTION 1: fetch() API
document.addEventListener("DOMContentLoaded", function () {
    const searchBtn = document.getElementById("search-btn");

    searchBtn.addEventListener("click", function () {
        fetch("superheroes.php")
            .then(function (response) {
                if (!response.ok) {
                    throw new Error("Request failed with status " + response.status);
                }
                return response.text();
            })
            .then(function (data) {
                alert(data);
            })
            .catch(function (error) {
                console.error(error);
                alert("Something went wrong. Please try again.");
            });
    });
});