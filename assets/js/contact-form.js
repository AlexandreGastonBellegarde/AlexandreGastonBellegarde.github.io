(function () {
  "use strict";

  const form = document.getElementById("form-rdv");
  if (!form) return;

  const error = document.getElementById("form-error");
  const button = form.querySelector('button[type="submit"]');
  const name = form.elements.namedItem("nom");
  const email = form.elements.namedItem("email");
  const options = Array.from(form.querySelectorAll('input[name="tests[]"], input[name="psychologie[]"]'));
  const originalButtonText = button.textContent;
  let submitting = false;

  function clearFeedback() {
    error.hidden = true;
    error.textContent = "";
  }

  function showError(message) {
    error.textContent = message;
    error.hidden = false;
    error.focus();
  }

  form.addEventListener("input", function () {
    if (!submitting) clearFeedback();
    name.setCustomValidity("");
  });
  form.addEventListener("change", function () {
    if (!submitting) clearFeedback();
  });

  form.addEventListener("submit", function (event) {
    if (submitting) {
      event.preventDefault();
      return;
    }
    clearFeedback();

    name.value = name.value.trim();
    email.value = email.value.trim();
    name.setCustomValidity(name.value ? "" : "Veuillez renseigner votre nom.");
    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    const selected = options.filter(function (option) { return option.checked; });
    if (!selected.length) {
      event.preventDefault();
      showError("Veuillez sélectionner au moins un test ou une prise en charge psychologique.");
      return;
    }
    const needsCognitive = selected.some(function (option) { return option.dataset.type === "attentionnel-prerequis"; });
    const hasCognitive = selected.some(function (option) { return option.dataset.type === "cognitif"; });
    if (needsCognitive && !hasCognitive) {
      event.preventDefault();
      showError("Les évaluations attentionnelles sélectionnées nécessitent une évaluation cognitive préalable (WPPSI IV, WISC V ou WAIS IV).");
      return;
    }

    /* Let the native POST reach Formspree's hosted CAPTCHA; keep named fields enabled. */
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

  /* Without this script, native validation and the standard Formspree POST remain available. */
  form.noValidate = true;
}());
