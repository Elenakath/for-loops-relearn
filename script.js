var lastNames = ["khan", "Martino", "Martinez", "Li", "Martindale", "Bai"];
var martinName = lastNames.filter(function (item) {
    return item.includes("Martin");
});

console.log(martinName);