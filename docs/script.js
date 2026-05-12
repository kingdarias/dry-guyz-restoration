const form = document.querySelector("#quote-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    status.textContent = "Request received. We'll call you back within 15 minutes.";
    form.reset();
  });
}
