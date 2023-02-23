// get references to HTML elements
const commentInput = document.getElementById("comment-input");
const commentSection = document.querySelector(".comment-section");

// add event listener to "Post" button
document.querySelector("button").addEventListener("click", function() {
  // create new comment div
  const commentDiv = document.createElement("div");
  commentDiv.innerHTML = "<p>You:</p><p>" + commentInput.value + "</p>";
  commentDiv.classList.add("comment");
  
  // create delete button for personal comment
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    commentSection.removeChild(commentDiv);
  });
  commentDiv.appendChild(deleteButton);
  
  // append new comment to comment section
  commentSection.appendChild(commentDiv);
  
  // clear comment input
  commentInput.value = "";
});



