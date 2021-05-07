document.querySelector(".minus-btn").setAttribute("disabled", "disabled");
var ValueCount
document.querySelector (".plus-btn").addEventListener("click", function() {
    valueCount = document.getElementById("quantity").value;
    valueCount++;
    document.getElementById("quantity").value = valueCount
})
