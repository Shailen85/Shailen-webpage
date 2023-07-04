var openBoxId = null; // Keep track of the currently open box ID

function displayapp(boxId) {
  var box = document.getElementById(boxId);

  // Check if there is an open box
  if (openBoxId !== null) {
    var openBox = document.getElementById(openBoxId);
    openBox.style.display = "none"; // Close the currently open box
    var openButton = document.getElementById("button" + openBoxId.slice(3));
    openButton.classList.remove("active"); // Remove active class from the previously active button
    openButton.classList.add("inactive"); // Add inactive class to the previously active button
  }

  if (box.style.display === "none") {
    box.style.display = "block";
    openBoxId = boxId; // Update the open box ID
    var button = document.getElementById("button" + boxId.slice(3));
    button.classList.remove("inactive"); // Remove inactive class from the clicked button
    button.classList.add("active"); // Add active class to the clicked button
  } else {
    box.style.display = "none";
    openBoxId = null; // Reset the open box ID
    var button = document.getElementById("button" + boxId.slice(3));
    button.classList.remove("active"); // Remove active class from the clicked button
    button.classList.add("inactive"); // Add inactive class to the clicked button
  }
}
