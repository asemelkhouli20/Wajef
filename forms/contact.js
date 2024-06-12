function makeRequest(formData) {
  const totalSize = calculateFormDataSize(formData); // Calculate total form data size
  console.log(totalSize);
  const maxSize = 1000000; // 1 MB
  if (totalSize > maxSize) {
    alert(
      "Form data exceeds maximum allowed size. Please reduce the size of your input."
    );
    return; // Stop further execution if size exceeds limit
  }

  document.querySelector(".sent-message").style.display = "none";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".loading").style.display = "block";

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };

  
  fetch("https://iems-main.test/api/requests/create", requestOptions)
    .then((response) => {
      if (response.ok) {
        // If the response is successful, display success message
        setTimeout(() => {
          handelResult(".sent-message");
          document.getElementById("requestForm").reset();
        }, 1000);
      } else {
        throw new Error("Request failed");
      }
    })
    .catch((error) => {
      setTimeout(() => {
        handelResult(".error-message");
      }, 1000);
      console.error(error);
    });
}

function handelResult(name) {
  document.querySelector(".loading").style.display = "none";
  document.querySelector(name).style.display = "block";
}

document
  .getElementById("requestForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    makeRequest(formData);
  });
function calculateFormDataSize(formData) {
  let totalSize = 0;
  for (const pair of formData.entries()) {
    const value = pair[1];
    if (typeof value === "string") {
      totalSize += value.length; // Add the length of the string value
    } else if (value instanceof Blob) {
      totalSize += value.size; // Add the size of the Blob (e.g., file)
    }
    // Add additional handling for other types of form data if needed
  }
  return totalSize;
}