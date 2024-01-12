// Selecting Side Navbar, MenuIcon

var side_navbar = document.getElementById("side_navbar")
var menuicon = document.getElementById("menuicon")
var close_nav = document.getElementById("close_nav")

menuicon.addEventListener("click", function () {

    side_navbar.style.right = 0
})

close_nav.addEventListener("click", function(){
    side_navbar.style.right = "-50%"
})

// Product Search Functionality

var products_container = document.getElementById("products_container")
var search = document.getElementById("search")
var productList = products_container.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productList.length; count = count + 1) {
        var productname = productList[count].querySelector("h1").textContent
        if (productname.toUpperCase().indexOf(enteredValue) < 0)
        {
            productList[count].style.display = "none"
        }
        else
        {
            productList[count].style.display = "block"
        }
    }

    })