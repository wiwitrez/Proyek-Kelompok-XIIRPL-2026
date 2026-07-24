const search = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");

search.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();

    rows.forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(keyword)
            ? ""
            : "none";
    });
});
