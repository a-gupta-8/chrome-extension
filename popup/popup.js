document.getElementById("myButton").addEventListener("click", replaceText);

function replaceText() {
  var originalParagraph = document.getElementById("originalText");
  var replacementParagraph = document.getElementById("replacementText");

  originalParagraph.style.display = "none";
  replacementParagraph.style.display = "block";
}
