document.addEventListener("DOMContentLoaded", function () {
    // Fetch tags.html content
    fetch("src/tags.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      // Insert the content into the tags html
      document.getElementById('tags').innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading tags", error);
    });
  // Fetch header.html content
  fetch("src/header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      // Insert the content into the header-container
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });

  // Fetch footer.html content
  fetch("src/footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then(data => {
      // Insert the content into the footer-container
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
});
