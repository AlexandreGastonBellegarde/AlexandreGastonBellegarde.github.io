# Site personnel d'Alexandre Gaston-Bellegarde

Ce dépôt contient le code source de mon site web personnel accessible à l'adresse <https://alexandregastonbellegarde.github.io/>.
Le site est construit avec [Jekyll](https://jekyllrb.com/) et le thème [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes). Il présente mes activités d'ingénieur en réalité virtuelle et de neuropsychologue : publications, enseignements, portfolio et informations de consultation.

## Structure du dépôt

- `_pages/` contient les pages principales (à propos, CV, enseignements...)
- `_publications/`, `_talks/`, `_portfolio/`, `_teaching/` regroupent les contenus par catégorie
- `assets/` et `images/` stockent les ressources statiques
- `markdown_generator/` propose des scripts Jupyter/Python pour générer des pages automatiquement à partir de fichiers TSV

## Lancer le site en local

1. Installer Ruby (>= 2.5), Bundler et Node.js
2. Cloner ce dépôt puis se placer dans son dossier
3. Exécuter `bundle install` pour installer les dépendances Ruby
4. Lancer `bundle exec jekyll serve` pour générer le site
5. Ouvrir <http://localhost:4000> dans votre navigateur

Les modifications seront automatiquement prises en compte lors de l'actualisation du navigateur.

## Contribution

Les issues et pull requests sont les bienvenues. Consultez `CONTRIBUTING.md` pour plus d'informations sur la manière de contribuer.

## Licence

Ce projet est distribué sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
