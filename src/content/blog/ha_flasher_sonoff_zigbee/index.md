---
draft: true
title: Home Assistant_ Flasher la clé Sonoff Zigbee avec l'add-on Zigstar
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

Version
HA Core 11.6
HAOS
Add-on : Zigstar 0.40
BLABLABLABLA


Rendez vous sur le [Github de Koenkk](https://github.com/Koenkk) pour recuperer le [firmware coordinateur Z-Stack](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator) correspondant a votre clé. pour ma [Sonoff Zigbee 3.0 USB Dongle Plus **P**](https://amzn.to/41W8f4W), le dernier firmware a date est le `CC1352P2_CC2652P_launchpad_coordinator_20230507` récuperable directement [ici](https://github.com/Koenkk/Z-Stack-firmware/blob/master/coordinator/Z-Stack_3.x.0/bin/CC1352P2_CC2652P_launchpad_coordinator_20230507.zip)

Le tableau des correspondance se trouve sur le GiHub [ici](https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator) pour les coordinateurs et [ici](https://github.com/Koenkk/Z-Stack-firmware/tree/master/router) pour les routeurs
***IMPORTANT :** Vous utiliserz la version coordinteur par defaut. La version routeur permet si vous avez plus clé USB Zigbee d'en passer une en tant que routeur et donc d'etendre votre reseaux comme le ferait une prise Zigbee ou la plupart des appareils branché en permanance au 220v.*

## Add-on Zigstar
Nous allons ajouter une source externe, vous savez faire maintenant, sinon l'[article est ici](/blog/ha_addons/), ou plus simple en cliquant sur l'image ci-dessous;
[![](./img/add_repository.svg)](https://my.home-assistant.io/redirect/supervisor_add_addon_repository/?repository_url=https%3A%2F%2Fgithub.com%2Fmercenaruss%2Fzigstar_addons)

La version a installer est `ZigStar TI CC2652P/P7 FW Flasher` (v0.40 ici) car la [Sonoff Zigbee 3.0 USB Dongle Plus **P**](https://amzn.to/41W8f4W) est sous chipset CC2652P
![Version de Zigstar](./img/add-ons_zigstar.png)

Une fois intallé, vous allez dans configuration.
* Selectionner votre clé USB Zigbee,
* Saisir un nom bidon dans `Network Device`,
Cochez :
* Network device/USB device,
* Sonoff USB
* Last Koenkk Firmware - CC1352P2_CC2652P_launchpad_*.zip
![Configuration de l'add-on Zigstar sur Homer Assistant](./img/configuration_add-on_zigstar.gif)

Enregistrer puis démarrer l'add-on et rendez vous dans le journal pour voir si tout ce passe bien

Voici mes logs:
```
s6-rc: info: service s6rc-oneshot-runner: starting
s6-rc: info: service s6rc-oneshot-runner successfully started
s6-rc: info: service fix-attrs: starting
s6-rc: info: service fix-attrs successfully started
s6-rc: info: service legacy-cont-init: starting
s6-rc: info: service legacy-cont-init successfully started
s6-rc: info: service banner: starting

-----------------------------------------------------------
 Add-on: ZigStar TI CC2652P/P7 FW Flasher
 ZigStar TI CC2652P/P7 firmware flasher add-on
-----------------------------------------------------------
 Add-on version: 0.4.0
 You are running the latest version of this add-on.
 System: Home Assistant OS 11.4  (amd64 / qemux86-64)
 Home Assistant Core: 2024.1.2
 Home Assistant Supervisor: 2023.12.0
-----------------------------------------------------------
 Please, share the above information when looking for help
 or support in, e.g., GitHub, forums or the Discord chat.
-----------------------------------------------------------
s6-rc: info: service banner successfully started
s6-rc: info: service cc2652-flasher: starting
[15:55:27] INFO: Starting CC2652P flasher with Sonoff /dev/ttyUSB0
Setting filename to /root/firmware.hex
sonoff
Opening port /dev/ttyUSB0, baud 500000
Reading data from /root/firmware.hex
Your firmware looks like an Intel Hex file
Connecting to target...
pg_rev = 3, protocols = f, wafer_id = 0xbb41
CC135x PG2.0 (7x7mm): 352KB Flash, 20KB SRAM, CCFG.BL_CONFIG at 0x00057FD8
Primary IEEE Address: 00:12:4B:00:25:8D:3E:02
    Performing mass erase
Erasing all main bank flash sectors
    Erase done
Writing 360448 bytes starting at address 0x00000000
 Write 248 bytes at 0x00000000
 Write 248 bytes at 0x000000F8
 Write 248 bytes at 0x000001F0
 Write 248 bytes at 0x000002E8
...
...
 Write 248 bytes at 0x0002BF50
 Write 248 bytes at 0x0002C048
Write 104 bytes at 0x00057F98
    Write done                                
Verifying by comparing CRC32 calculations.
    Verified (match: 0xe83aa727)
[15:55:37] INFO: cc2652-flasher-up script exited with code 0
s6-rc: info: service cc2652-flasher successfully started
s6-rc: info: service legacy-services: starting
s6-rc: info: service legacy-services successfully started
s6-rc: info: service legacy-services: stopping
s6-rc: info: service legacy-services successfully stopped
s6-rc: info: service cc2652-flasher: stopping
s6-rc: info: service cc2652-flasher successfully stopped
s6-rc: info: service banner: stopping
s6-rc: info: service banner successfully stopped
s6-rc: info: service legacy-cont-init: stopping
s6-rc: info: service legacy-cont-init successfully stopped
s6-rc: info: service fix-attrs: stopping
s6-rc: info: service fix-attrs successfully stopped
s6-rc: info: service s6rc-oneshot-runner: stopping
s6-rc: info: service s6rc-oneshot-runner successfully stopped
```

Voila le flash est terminé. Verifier votre version de firmware depuis Zigbee2MQTT en ouvrant ce dernier puis dans `Paramètres`, onglet `A propos`, regarder la version apres `Révision du coordinateur` (ici 20230507).
![Recuperer la version du firmware de sa clé Sonoff](./img/zigbee2mqtt_version_firmware_sonoff.png)

## Sources :
* https://github.com/mercenaruss/zigstar_addons
* https://github.com/Koenkk/Z-Stack-firmware/tree/master/coordinator/Z-Stack_3.x.0/bin
* https://community.home-assistant.io/t/zigstar-zigbee-coordinators-and-routers/338586/205