---
draft: true
title: Home Assistant - Installer les add-ons Mosquito et Zigbee2MQTT
description: "Description vide"
pubDate: 01/10/2024
heroImage: '/images/flatpak-linux-box.webp'
categories: 
- Linux
authors: 
- mcfly
tags:
- tag
---

Le Zigbee est le protocole a la mode, basé sur la fréquence 2.4GHz donc celle du Wi-Fi et du Bluetooth. Il beneficit d'une multitude de capteurs a des prix tres correct. De plus, il permet de se construire un reseaux dit "maillé" permettant d'etendre sa portée.
Cependant, meme si la norme Zigbee a dabort etait faites pour créer un protocole uniforme, certains constructeur vendant leur appareils tres chere (coucou Philips) non pas vue d'un bon oeil l'interoperabilité avec des marque chinoise (Xiaomi, par exemple) ou grand public comme Ikea qui sont arrivé sur le marché avec des produits de tres bonne qualité a des prix bien plus attractifs. Ce qui a amené a ajouter une "surcouche propritaire" pour eviter cette interoperabilité.

Mais c'est a ce moment là qu'intervient la communauté internationale pour nous faire decouvrir des passerelles Zigbee dites "Universelle" et aussi des applications permettant a nos capteurs proprietaire de communiquer entre eux.

C'est applications disponnible sur Home Assistant sont :
* [ZHA](https://www.home-assistant.io/integrations/zha/) (natif a Home Assistant), 
* [Zigbee2MQTT](https://www.zigbee2mqtt.io/),
* [DeconZ](https://www.phoscon.de/en/conbee2/software#deconz),

La premiere, ZHA, a l'avantage de necessité **aucune** installation car elle est native a Home Assistant, cependant ce n'est pas celle qui supporte le plus de materiel.
Pour Zigbee2MQTT, c'est un add-on a ajouter a Home Assistant, et vu qu'il transforme les infos Zigbee vers le *protocole de communication* MQTT, il faut lui ajouter un **Broker MQTT** (comprendre une passerelle) sous la forme d'un add-on supplementaire.
Le dernier DeconZ, disponnible en add-on aussi, est celui que je connais le mois mais aussi celui qui beneficie d'une comatibilité moindre de capteurs. Cela ne l'empeche pas d'être un bon produits si j'en crois mes lectures.

Voici un [site repertortiant les capteurs disponnibles](https://zigbee.blakadder.com/index.html) (ils n'y sont pas tous) et leurs compatibilité avec les differentes solutions.

Vous l'aurez compris mon choix se porte sur Zigbee2MQTT, mais vous pouvez toujours essayer ZHA pour commencer.

*Si vous commencez par ZHA et que vous souhaitez passer sur Zigbee2MQTT, il vous faudra bien renommé vos entité de la meme maniere si vous ne voulez pas avoir toutes vos automatisation, votre interface ou vos scripts/scenes a refaire.*

***Personnellement**, si vous comptez faire du Zigbee votre protocole domotique principal, je vous conseil de passer directement sur Zigbee2MQTT*

Nous allons voir dans cette article comment installer le Broker MQTT, Mosquitto ainsi que Zigbee2MQTT afin de faire communiquer nos appareils Zigbee avec Home Assistant.
L'installation de Mosquitto Broker vous permettra par la suite de faire communiquer des appareils (grand public ou DIY) via le protocole MQTT sans aucun soucis.

### Les passerelles

Voici quelques passerelles USB Zigbee universelle recommandés pour Zigbee2MQTT. Les plus réputées sont :
* [**Sonoff Zigbee 3.0 USB Dongle Plus P**](https://sonoff.tech/product/gateway-and-sensors/sonoff-zigbee-3-0-usb-dongle-plus-p/) (TI CC2652P) disponibles sur [Amazon (19€)](https://amzn.to/41W8f4W) [AliExpress (22€)](https://s.click.aliexpress.com/e/_DlhO6qp),
* [Conbee II](https://www.phoscon.de/en/conbee2), très populaire, [Amazon (32€)](https://amzn.to/41Rryfu),
* [Zigate (FR)](https://zigate.fr/),  [Amazon (54€)](https://amzn.to/3SdV7VA)
* Clés à base Texas Instruments CC2531/2530 (Zigbee v1.2 a éviter),

[Liste des clés compatibles avec Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/adapters/#recommended)

Elles sont principalement pbasé sur le le chipset CC2652, sauf pour la Sonoff Zigbee 3.0 USB Dongle Plus **E** a base de chipset EFR32MG21, compatible Matter et Zigbee (**MAIS** pas en meme temps) qui est d'ailleur en experimentale avec Zigbee2MQTT.

*Home Assistant propose également une clé compatible Zigbee et **Matter** également très intéressante appelée [SkyConnect](https://www.home-assistant.io/skyconnect/). Elle permet de préparer l'arrivée du protocole Matter, qui est censé revolutionner la domotique mais ca fait 2 ans qu'on nous en parle ;).*

*Sachez qu'il y aura surement des cles Zigbee et Matter en meme temps qui devrait arriver mais quand ??, alors pour 20 euros prenez une [Sonoff Zigbee 3.0 USB Dongle Plus **P**](https://amzn.to/41W8f4W) et amusez-vous*

***IMPORTANT :** La clé [Sonoff Zigbee 3.0 USB Dongle Plus **P** ou E](https://amzn.to/41W8f4W) est par defaut avec un firmware bridant le nombre d'appareils acceptable a 40, pourquoi ? faudrait demander a Sonoff, mais comme d'habitude il est possible de passer outre en flashant le firmware par un autre débriant cette derniere a 200 appareils. Voici l'[article a suivre](/blog/ha_flasher_sonoff_zigbee/)*
## Mosquitto Broker

### Création d'un utilisateur Home Assistant

*Cette étape est **facultative**, car un utilisateur Zigbee2mqtt est créé automatiquement mais je vous la **recommande fortement**, si vous voulez connecter facilement d'autre appareils en MQTT plus tard.*

Si vous souhaitez créer un utilisateur dédié a Zigbee2mqtt par vous-même :

* Rendez-vous dans `Paramètre`, `Personnes`, `Utilisateurs` puis `AJOUTER UN UTILISATEUR`,
* Remplir `Nom d'affichage`, `Nom d'utilisateur`, et un `mot de passe`,
* Basculer le bouton `Ne peut se connecter qu'à partir du réseau local`,
* Laissez `Administrateur` desactivé,
* Valider en cliquant sur `Créer`.

![Création d'un utilisateur sur Home Assistant](./img/ajouter_utilisateur.gif)

### Installation et configuration de l'add-on
Il va falloir installer l'add-on `Mosquitto Broker` via les modules complementaires (si besoin, il y a un [article ici](/blog/ha_addons/))
![Add-on Mosquitto Broker dans Home Assistant](./img/add-on_mosquitto_broker.png)

**Si vous n'avez pas créer d'utilisateur**
Vous pouvez démarrer directement l'add-on, puis rendez vous dans `Paramètres`, `Appareils et services` vous devriez voir la decouverte automatique de Mosquitto Broker.


**Si vous avez créé un utilisateur**
Une fois l'add-on installé, rendez-vous dans l'onglet `Configuration` de l'add-on `Mosquitto Broker`.
* Dans logins rentrer les informations de l'utilisateur que vous venez de créer.

```yaml
- username: votre_utilisateur_mqtt
  password: "mot_de_passe_de_utilisateur_mqtt"
```

![Configuration de l'utilisateur MQTT dans Mosquitto Broker](./img/configuration_mosquitto.png)

* Laissez la partie reseau par défaut.
* Enregistrez puis démarrer l'add-on.

Une fois démarré, rendez vous dans `Paramètres`, `Appareils et services` vous devriez voir la decouverte automatique de Mosquitto Broker,
![Decouverte automatique de l'integration MQTT par Home Assistant](./img/decouverte_mqtt.png)

S'il n'est pas découvert automatiquement, cliquez sur `+ AJOUTER UNE INTEGRATION` rechercher `MQTT`, cliquez dessus puis de nouveau sur `MQTT`.


**BLABLABLABLA**

Vous avez fini l'installation de l'add-on Mosquitto Broker et venez d'ajouter une possibilité supplementaire d'interargir avec des capteurs grand public ou DIY via le protocole MQTT.

Passons maintenant a l'installation de Zigbee2MQTT

## Zigbee2MQTT
Zigbee2MQTT est un add-on qui n'est pas directement disponible dans les modules complémentaires, il faut ajouter une source externe. Je vous laisse regarder l'[article sur l'installation d'un add-on](/ha_addon).

Le lien à ajouter est le suivant :
```
https://github.com/zigbee2mqtt/hassio-zigbee2mqtt
```
Une fois la source ajoutée, il vous faut l'installer. Facile maintenant, il faudra chercher `zigbee2mqtt` et selectionner `Zigbee2MQTT` (le plus simple).
![Add-on Zigbee2MQTT dans Home Assistant](./img/add-on_zigbee2mqtt.png)

### Configuration de l'add-on
Il faut configurer l'add'on maintenant, pour cela nous allons ajouter l'adresse de notre broker, l'utilisateur et le mot de passe pour se connecter au brocker et le chemin de notre clé Zigbee.

**Si vous n'avez pas créé d'utilisateur pour votre brocker MQTT**
Au premier lancement de Zigbee2MQTT, il va automatiquement créer un utilisateur pour MQTT et ajouter l'adresse du broker.

Le résultat du fichier `configuration.yaml` après le premier lancement doit ressembler à cela.

```yaml
mqtt:
  server: mqtt://core-mosquitto:1883
  user: addons
  password: Thee8ahGhahpe4oKoe4xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
**Si vous avez créé un utilisateur pour votre brocker MQTT**
Il vous faut rentrer les informations vous même.

c'est aussi a cet endroit que vous pouvez ajouter des parametres comme le canal a utiliser pour votre clé Zigbee (si supporté) qui par defaut est sur le canal 11. Pour ma part j'utilise le canal 25 car c'est une bande de frequence qui n'est pas utilisé dans la plupart des routeurs/Box disponnible sur le marché Europeen, ce qui evite les interference avec le Wi-Fi.

***ATTENTION :** Un changement de canal vous oblige a tout réappairer.*
Voici quelques informations, si vous voulez garder les parametres par defaut vous n'avez riena toucher ou modifier.
*Les parametres sont disponnibles [ici](https://www.zigbee2mqtt.io/guide/configuration/)*

Dans la partie socat :
```yaml
channel: 25
```

Dans la partie mqtt :
```yaml
base_topic: zigbee2mqtt
server: mqtt://core-mosquitto
user: usermqtt
password: passwordmqtt
```

Pour la partie `Sérial`, de la configuration de l'add-on Zigbee2MQTT, saisir le chemin de votre clé Zigbee

**Comment récuperer le chemin de ma clé USB**
Pour commencer, il faut qu'elle soit branché (un oubli est si vite arrivé surtout si vous utilisez Proxmox, n'oubliez pas de l'ajouter a votre VM, voir l'[article sur l'installation de HAOS sur VM](/blog/ha_haos_proxmox_installation/))

Ensuite, rendez vous dans `Paramètres`, `Système`, `Matériel` puis cliquez sur `TOUT LE MATERIEL` et rechercher votre cle USB.
![Trouver le chemin de sa clé USB dans Home Assistant](./img/trouver_cle_usb_materiel_home_assistant.gif)

Dans la capture décran c'est `/dev/serial/by-id/usb-ITead_Sonoff_Zigbee_3.0_USB_Dongle_Plus_20fa0f2fc719ec11b20574e5f01c6278-if00-port0`, il se peut que `/dev/ttyUSB0` suffise mais ca marche pas a tous les coups.

Donc c'est ce chemin qui faut rentrer dans la partie `Sérial`, de la configuration.

***> ***ATTENTION :** La configuration est différente selon la clé utilisée.

Exemple :

 Pour la clé Sonoff Dongle Plus

```yaml
port: /dev/serial/by-id/usb-Silicon_Labs_Sonoff_Zigbee_3.0_USB_Dongle_Plus_0001-if00-port0
```
ou
```yaml
port: /dev/ttyUSB0
```

D'autres exemples :
**Conbee II**

```yaml
serial:
  port: /dev/serial/by-id/usb-dresden_elektronik_ingenieurtechnik_GmbH_ConBee_II_DE2234130-if00
  adapter: deconz
```
Il faudra ajouter `adapter: deconz`

**Sonoff Version E** (Remplacer 20XXXXXXXX-if00 par le numéro de votre propre clé).
```yaml
serial:
  port: >-
    /dev/serial/by-id/usb-ITEAD_SONOFF_Zigbee_3.0_USB_Dongle_Plus_V2_20XXXXXXXXX-if00
  adapter: ezsp
```
Il faudra ajouter `adapter: ezsp`

La configuration de Zigbee2MQTT est terminée, il suffit d'enregistrer puis de lancer l'add-on.


## Conclusion.

Nous venons de faire un grand pas pour notre installation domotique.
Maintenant, tous les capteurs Zigbee de n'importe quelle marque pourront communiquer entre eux et communiquer avec Home Assistant.


Vous pouvez connecter une multitude d'appareils Zigbee avec **une seule** passerelle, envoyer les informations d'autres appareils (aspirateur sous Valetudo ou shelly) via MQTT et connecter d'autres solutions (exemple Node-Red) a votre broker MQTT pour accéder aux différents appareils de votre installation.

Je vous conseille l'[article sur la gestion des indisponibilités](/zigbee2mqtt-availability) de vos appareils sous Zigbee2MQTT.