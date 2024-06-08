function makeRequest(formData) {
  document.querySelector(".sent-message").style.display = "none";
  document.querySelector(".error-message").style.display = "none";
  document.querySelector(".loading").style.display = "block";

  const requestOptions = {
    method: "POST",
    body: formData,
    redirect: "follow",
  };
  console.log(requestOptions);

  fetch("http://localhost:8000/api/requests/create", requestOptions)
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
