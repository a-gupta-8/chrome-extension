document.getElementById("myButton").addEventListener("click", replaceText);

function replaceText() {
  var originalParagraph = document.getElementById("originalText");
  var replacementParagraph = document.getElementById("replacementText");
  if (originalParagraph.style.display === "none") {
    originalParagraph.style.display = "block";
    replacementParagraph.style.display = "none";
  } else {
    originalParagraph.style.display = "none";
    replacementParagraph.style.display = "block";
  }
}
