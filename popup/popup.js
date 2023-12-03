//document.getElementById("myButton").addEventListener("click", replaceText);

//function replaceText() {
//var originalParagraph = document.getElementById("originalText");
//var replacementParagraph = document.getElementById("replacementText");
//if (originalParagraph.style.display === "none") {
// originalParagraph.style.display = "block";
//replacementParagraph.style.display = "none";
//} else {
//originalParagraph.style.display = "none";
//replacementParagraph.style.display = "block";
//}
//}

document.getElementById("Array").addEventListener("click", function () {
  switchToPage("ArrayPage");
});
document.getElementById("LinkedList").addEventListener("click", function () {
  switchToPage("LinkedListPage");
});
document.getElementById("HashSet").addEventListener("click", function () {
  switchToPage("HashSetPage");
});
document.getElementById("HashMap").addEventListener("click", function () {
  switchToPage("HashMapPage");
});

function switchToPage(pageId) {
  // Hide all pages
  var pages = document.querySelectorAll("#MainContent > div");
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = "none";
  }

  // Show the selected page
  var selectedPage = document.getElementById(pageId);
  if (selectedPage) {
    selectedPage.style.display = "block";
  }
}
