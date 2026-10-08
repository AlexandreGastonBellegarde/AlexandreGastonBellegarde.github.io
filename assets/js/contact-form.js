(function () {
  "use strict";

  const form = document.getElementById("form-rdv");
  if (!form) return;

  const button = form.querySelector('button[type="submit"]');
  const name = form.elements.namedItem("nom");
  const email = form.elements.namedItem("email");
  const originalButtonText = button.textContent;
  let submitting = false;

  form.addEventListener("input", function () {
    name.setCustomValidity("");
  });

  form.addEventListener("submit", function (event) {
    if (submitting) {
      event.preventDefault();
      return;
    }

    name.value = name.value.trim();
    email.value = email.value.trim();
    name.setCustomValidity(name.value ? "" : "Veuillez renseigner votre nom.");
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    /* Preserve the native POST and all named fields for Formspree's hosted CAPTCHA. */
    submitting = true;
    button.disabled = true;
    button.textContent = "Envoi en cours...";
    form.setAttribute("aria-busy", "true");
  });

  window.addEventListener("pageshow", function () {
    submitting = false;
    button.disabled = false;
    button.textContent = originalButtonText;
    form.removeAttribute("aria-busy");
  });

  /* Native required-field validation remains active if this script does not load. */
  form.noValidate = true;
}());
