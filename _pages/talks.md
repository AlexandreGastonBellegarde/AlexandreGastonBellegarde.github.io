---
layout: archive
title: "Consultation: qui suis-je ?"
permalink: /talks/
author_profile: true
---


Je suis diplômé d’un Master 2 Psychologie Cognitive et Neuropsychologie obtenu à l’Université Paris Cité (ex-Descartes) en 2014. J’exerce actuellement dans le cadre d’une activité libérale.

J’interviens auprès des enfants, adolescents, adultes mais également auprès des personnes âgées.

* <ins>Mes champs de compétence</ins> 
  * Bilans neuropsychologiques enfants et adultes.
  * Entrainement cognitif enfants et adultes: utilisation d'outils innovants (réalité virtuelle, serious game, métacognition, cohérence cardiaque, méditation en pleine conscience...).
  * Spécialisations: bilan d'efficience intellectuelle (WISC – WPPSI – WAIS – KABC), bilan neuropsychologique, bilan attentionnel et exécutif, bilan neurovisuel, bilan.

* La marojrité de mon activitée se focalise sur la remédiation cognitive

<ins>La remédiation cognitive</ins>  est une forme de thérapie ayant pour objectif de diminuer l’impact sur le quotidien des difficultés cognitives d’un patient, préalablement objectivées lors d’un bilan neuropsychologique.

Il existe deux principales techniques de remédiation cognitive. La première consiste à entrainer de manière intensive la fonction déficitaire (par exemple, s’entrainer à apprendre de nouvelles informations si le patient à des problèmes de mémoire).

La seconde consiste à contourner la difficulté, en réfléchissant à des stratégies de compensation s’appuyant sur les capacités préservées du patient (par exemple, noter les informations à retenir, utiliser des moyens mnémotechniques…).

<ins>Le déficit d’attention avec ou sans hyperactivité et impulsivité (TDAH)</ins> est un trouble qui est particulièrement approprié pour la remédiation cognitive en raison de ses composantes neurobiologiques et cognitives. 


---


{% if site.talkmap_link == true %}

<p style="text-decoration:underline;"><a href="/talkmap.html">See a map of all the places I've given a talk!</a></p>

{% endif %}

{% for post in site.talks reversed %}
  {% include archive-single-talk.html %}
{% endfor %}
