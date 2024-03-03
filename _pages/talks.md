---
layout: archive
title: "Consultation: Qui suis-je ?"
permalink: /talks/
author_profile: true
---


Je suis diplômée d’un Master 2 Psychologie Cognitive et Neuropsychologie obtenu à l’Université Paris Cité (ex-Descartes) en 2014. J’exerce actuellement dans le cadre d’une activité libérale.

J’interviens auprès des enfants, adolescents, adultes mais également auprès des personnes âgées.

* <ins>Mes champs de compétence</ins> 
  * Bilans neuropsychologiques enfants et adultes.
  * Entrainement cognitif enfants et adultes: utilisation d'outils innovants (réalité virtuelle, serious game, métacognition, cohérence cardiaque, méditation en pleine conscience...).
  * Spécialisations: bilan d'efficience intellectuelle(WISC – WPPSI – WAIS – KABC), bilan neuropsychologique, bilan attentionnel et exécutif, bilan neurovisuel, bilan.


---


{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
