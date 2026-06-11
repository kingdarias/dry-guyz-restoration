const form = document.querySelector("#quote-form");

if (form) {
  form.addEventListener("submit", () => {
    const status = form.querySelector(".form-status");
    status.textContent = "Sending request...";
  });
}
