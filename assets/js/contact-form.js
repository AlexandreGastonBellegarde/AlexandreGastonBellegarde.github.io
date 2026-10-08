(function () {
  "use strict";

  const form = document.getElementById("form-rdv");
  if (!form || !window.fetch || !window.FormData || !window.AbortController) return;

  const success = document.getElementById("form-success");
  const error = document.getElementById("form-error");
  const button = form.querySelector('button[type="submit"]');
  const name = form.elements.namedItem("nom");
  const email = form.elements.namedItem("email");
  const options = Array.from(form.querySelectorAll('input[name="tests[]"], input[name="psychologie[]"]'));
  const originalButtonText = button.textContent;
  const contactEmail = "alexandre.bellegarde@gmail.com";
  let submitting = false;

  function clearFeedback() {
    success.hidden = true;
    error.hidden = true;
    error.textContent = "";
  }

  function showError(message) {
    success.hidden = true;
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

  form.addEventListener("submit", async function (event) {
    event.preventDefault();
    if (submitting) return;
    clearFeedback();

    name.value = name.value.trim();
    email.value = email.value.trim();
    name.setCustomValidity(name.value ? "" : "Veuillez renseigner votre nom.");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const selected = options.filter(function (option) { return option.checked; });
    if (!selected.length) {
      showError("Veuillez sélectionner au moins un test ou une prise en charge psychologique.");
      return;
    }
    const needsCognitive = selected.some(function (option) { return option.dataset.type === "attentionnel-prerequis"; });
    const hasCognitive = selected.some(function (option) { return option.dataset.type === "cognitif"; });
    if (needsCognitive && !hasCognitive) {
      showError("Les évaluations attentionnelles sélectionnées nécessitent une évaluation cognitive préalable (WPPSI IV, WISC V ou WAIS IV).");
      return;
    }

    const data = new FormData(form);
    const controls = Array.from(form.querySelectorAll("input, textarea, select"));
    const disabledStates = controls.map(function (control) { return control.disabled; });
    const controller = new AbortController();
    const timeout = window.setTimeout(function () { controller.abort(); }, 30000);
    submitting = true;
    controls.forEach(function (control) { control.disabled = true; });
    button.disabled = true;
    button.textContent = "Envoi en cours...";
    form.setAttribute("aria-busy", "true");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
        signal: controller.signal
      });
      if (!response.ok) {
        const message = response.status === 429
          ? "Le service d'envoi est temporairement indisponible."
          : "Le service d'envoi n'a pas accepté votre demande.";
        showError(message + " Vos informations restent affichées. Vous pouvez nous écrire à " + contactEmail + ".");
        return;
      }

      /* A CAPTCHA page or an unexpected response is not a submission confirmation. */
      const result = await response.json();
      if (!result || result.ok === false || result.error || (result.errors && result.errors.length)) {
        throw new Error("Unconfirmed submission");
      }
      form.reset();
      success.hidden = false;
      success.focus();
    } catch (_) {
      showError("La confirmation de l'envoi n'a pas pu être obtenue. Vos informations restent affichées. Pour éviter un doublon, contactez-nous à " + contactEmail + " avant de renvoyer votre demande.");
    } finally {
      window.clearTimeout(timeout);
      submitting = false;
      controls.forEach(function (control, index) { control.disabled = disabledStates[index]; });
      button.disabled = false;
      button.textContent = originalButtonText;
      form.removeAttribute("aria-busy");
    }
  });

  /* Without this script, native validation and the standard Formspree POST remain available. */
  form.noValidate = true;
}());
