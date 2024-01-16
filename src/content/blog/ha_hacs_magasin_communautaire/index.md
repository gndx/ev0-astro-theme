---
draft: true
title: Home Assistant - Ajout du magasin alternatif communautaire HACS
description: "Description vide"
pubDate: 01/16/2024
heroImage: '/images/flatpak-linux-box.webp'
categories: 
- Home Assistant
- Domotique
authors: 
- mcfly
tags:
- HACS
- Add-on
- automatisation
- Intégration
- Lovelace
- App-deamon
- Net-deamon
- Theme
---
**Tuto réalisé avec :**
* HAOS 11.4, Core 2024.1.3
* Add-on : SSH Web Terminal


BLALABLABLA

**Prérequis**

* Un compte [GitHub](https://github.com/),
* Avoir `default_config` dans votre`configuration.yaml` *(par défaut normalement) sinon voir [ici](https://www.home-assistant.io/integrations/my/)*,
* Version de Home Assistant supérieure à 2023.6.0.

## Installation de SSH Web Terminal



## Magasin communautaire HACS
### Installation
1. Démarrer l'add-on SSH precedement installé,
1. Connectez vous a cet add-on,
1. Lancer la commande d'installation de HACS suivant.

```bash
wget -O - https://get.hacs.xyz | bash -
```
![Installation de HACS depuis l'add-on Terminal & SSH](./img/terminal_ssh_hacs_installation_resultat.png)
### Configuration








[Installation de HACS en SSH depuis Home Assistant](img/hacs_installation_ssh.gif "Installation de HACS en SSH depuis Home Assistant")

Vous pouvez maintenant arrêter l'add-on Web Terminal SSH et réactiver le mode protégé.

Ensuite :

* **Vider le cache** de votre navigateur ou effectuer un rafraichissement complet (*sinon HACS n'apparaitra pas.* S'il n'apparait toujours pas, redémarrer)
* Se rendre dans `Paramètres` ->  `Appareils et services` ->  `AJOUTER L'INTEGRATION` ->  Rechercher `HACS`,
* Cliquer dessus et accepter en cochant les cases de première page,
* Cliquer sur le lien GitHub et connectez-vous,
* Saisir le code d'autorisation affiché, au moment où GitHub vous le demande,
* Cliquer sur `Authorize hacs`
* Sélectionner la pièce dans laquelle vous souhaitez ajouter HACS.

[Ajouter HACS à votre Home Assistant](img/hacs_integration.gif "Ajouter HACS à Home Assistant")

* Retourner dans `Paramètres` ->  `Appareils et services` 
* Cliquer sur `CONFIGURER` de l'intégration HACS,
* *Facultatif* Configurer votre intégration*, possibilité d'activer AppDaemon, NetDaemon (Déprécié) et les choses experimentales*

Vous devez avoir dans votre bandeau latéral, HACS de disponible et une tuile dédié dans les intégrations.

Vous avez à présent accès à plusieurs intégrations et composants d’interface supplémentaires.

[Interface de HACS](img/hacs_interface.png "Interface de HACS")

## Ajouter une intégration, une interface ou une automatisation.

* Ouvrir HACS, 
* Choisir entre Intégrations, Interface ou Automatisation,
* Cliquer sur le`+ EXPLORER ET TÉLÉCHARGER DES DEPOTS' 
* Rechercher l’intégration, le thème, la carte ou l'automatisation que vous souhaitez,
* Cliquer dessus, lire le descriptif puis `TELECHARGER`,
* Vérifier votre configuration et redémarrer Home Assistant.

> Il est possible de choisir une version précise ou d'essayer une version bêta lors de l'installation d'un dépôt, bien sûr, cela est à vos risques.

## Conclusion

Vous avez à présent la possibilité d’ajouter encore plus de matériels via les intégrations de HACS, des custom cards, des thèmes grâce à la formidable communauté de Home Assistant.

### Sources

* [Site officiel](<* https://hacs.xyz/>) (EN)
* [Dernière version à télécharger si installation manuelle](https://github.com/hacs/integration/releases).