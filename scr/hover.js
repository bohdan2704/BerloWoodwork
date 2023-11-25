document.addEventListener("DOMContentLoaded", function() {
    var hoverElements = document.getElementsByClassName("hover-element");
  
    // Check if any elements with the specified class were found
    if (hoverElements.length > 0) {
      // For simplicity, assuming you want to add the event listeners to the first element with the class
      var hoverElement = hoverElements[0];
  
      hoverElement.addEventListener('mouseover', function() {
        // Code to be executed when the mouse is over the element
        hoverElement.classList.add("fa-bounce");
        // console.log("Hover is on");
      });
  
      hoverElement.addEventListener('mouseout', function() {
        // Code to be executed when the mouse leaves the element
        hoverElement.classList.remove("fa-bounce");
        // console.log("Hover is off");
      });
    } else {
      console.error("No element found with the class 'hover-element'");
    }
  });