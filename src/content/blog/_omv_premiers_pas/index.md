---
draft: true
title: OpenMediaVault - Premier lancement et réglages de base.
description: "Description vide"
pubDate: 12/11/2023
heroImage: '/src/content/blog/covers/flatpak-linux-box.webp'
categories: 
- Linux
authors: 
- mcfly
tags:
- tag
---

Voici la suite de l'article sur l'[installation d'OpenMediaVault](/blog/omv_installation/).

Nous allons voir les premiers reglage a effectuer commme changer de mot de passe, ajouter ses disques et créer un premier partages SMB.


## Mettre a jour notre installation.

L'avantage de OpenMediaVault, c'est que c'est un OS basé sur Debian, cela veut dire que toutes les mises a jour sont faites depuis l'interface, que ce soit les mises a jour sécurité comme celle des paquets et services.

**Mise a jour**
Sur le Tableau de bord allez dans `Système`, `Mises à jour` puis `Paquets`.
Cliquez ensuite sur le petite fleche vers le bas puis confirmez.
Les mises a jours devrait se lancer dans une fenetre type Terminal, il faut attendre qu'il soit affiché EOF.

## Changer mot de passe admin par defaut.
Il est important de changer le mot de passe par defaut du compte `admin`, car il est generique.

Pour se faire, cliquez sur l'icon utilisateur en haut a droite puis `Modifier le mot de passe`

## Ajouter un utilisateur.
Nous allons ajouter notre utilisateur avec le plus de droits.
Dans la barre latérale :
* Aller dans `Utilisateurs`,
* Cliquer sur le bouton `Utilisateurs`,
* Puis sur le `+` et `Créer`,

Saisir les informations obligatoires `Nom`, `Mot de passe` puis dans `Groupes` selectionner tous les `openmediavault-*`

## Ajouter l'acces SSH a un utilisateur.

Pour autoriser l'acces SSH a votre utlisateur (ou un autre créé pour l'occasion), il suffit de lui ajouter le groupe `ssh`.

Ensuite pour un peu plus de securité, nous allons peaufiner les reglages SSH.

### Création cles SSH.


### Ajouter une clé SSH a un utilisateur.

### Securiser l'accés SSH
Dans la barre latérale :
* Aller dans `Services` puis `SSH`,
* (Facultatif) Changer le port pr defaut,
* Décocher `Connexion root`
* Décocher `Authentification par mot de passe` (**SEULEMENT** si vous avez ajouté une cle SSH a votre utilisateur)

* Enregistrer puis valider les changements.

Tester la connexion en ouvrnt un terminal puis en lancant la commande `ssh votre_user@ip_de_votre_omv`

>Si vous avez besoin des privileges `root`, le mot de passe est celui saisi lors de l'installation de OMV.

## Ajouter OMV Extras

Pour ajouter OMV Extra et ajouter des fonctionalités (Docker, Yatch, Portainer) et l'acces a plus de plugins, il faut vous connecter en SSH puis lancer la commande suivante avec les privileges `sudo`

Liste des commandes completes :
```
ssh votre_user@ip_de_votre_omv
su -
wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash
```

Résultat de la commande.
```
root@NASPerso:~# wget -O - https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install | bash
--2023-05-07 15:16:06--  https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master/install
Résolution de github.com (github.com)… 140.82.121.4
Connexion à github.com (github.com)|140.82.121.4|:443… connecté.
requête HTTP transmise, en attente de la réponse… 302 Found
Emplacement : https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/packages/master/install [suivant]
--2023-05-07 15:16:06--  https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/packages/master/install
Résolution de raw.githubusercontent.com (raw.githubusercontent.com)… 185.199.110.133, 185.199.109.133, 185.199.108.133, ...
Connexion à raw.githubusercontent.com (raw.githubusercontent.com)|185.199.110.133|:443… connecté.
requête HTTP transmise, en attente de la réponse… 200 OK
Taille : 1208 (1,2K) [text/plain]
Sauvegarde en : « STDOUT »

-                   100%[===================>]   1,18K  --.-KB/s    ds 0s      

2023-05-07 15:16:06 (5,66 MB/s) — envoi vers sortie standard [1208/1208]

6
Downloading omv-extras.org plugin for openmediavault 6.x ...
Updating repos before installing...
Réception de :1 file:/var/cache/openmediavault/archives  InRelease
Ign :1 file:/var/cache/openmediavault/archives  InRelease
Réception de :2 file:/var/cache/openmediavault/archives  Release
Ign :2 file:/var/cache/openmediavault/archives  Release
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Réception de :4 file:/var/cache/openmediavault/archives  Translation-en        
Ign :4 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :5 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :5 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Atteint :7 http://ftp.fr.debian.org/debian bullseye InRelease                  
Atteint :8 http://ftp.fr.debian.org/debian bullseye-updates InRelease          
Atteint :9 http://packages.openmediavault.org/public shaitan InRelease         
Atteint :10 http://httpredir.debian.org/debian bullseye-backports InRelease    
Atteint :11 https://openmediavault.github.io/packages shaitan InRelease        
Atteint :12 http://security.debian.org/debian-security bullseye-security InRelease
Lecture des listes de paquets... Fait
Install prerequisites...
Lecture des listes de paquets... Fait
Construction de l'arbre des dépendances... Fait
Lecture des informations d'état... Fait      
dirmngr est déjà la version la plus récente (2.2.27-2+deb11u2).
gnupg est déjà la version la plus récente (2.2.27-2+deb11u2).
0 mis à jour, 0 nouvellement installés, 0 à enlever et 0 non mis à jour.
--2023-05-07 15:16:20--  https://github.com/OpenMediaVault-Plugin-Developers/packages/raw/master//openmediavault-omvextrasorg_latest_all6.deb
Résolution de github.com (github.com)… 140.82.121.4
Connexion à github.com (github.com)|140.82.121.4|:443… connecté.
requête HTTP transmise, en attente de la réponse… 302 Found
Emplacement : https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/packages/master/openmediavault-omvextrasorg_latest_all6.deb [suivant]
--2023-05-07 15:16:21--  https://raw.githubusercontent.com/OpenMediaVault-Plugin-Developers/packages/master/openmediavault-omvextrasorg_latest_all6.deb
Résolution de raw.githubusercontent.com (raw.githubusercontent.com)… 185.199.111.133, 185.199.110.133, 185.199.109.133, ...
Connexion à raw.githubusercontent.com (raw.githubusercontent.com)|185.199.111.133|:443… connecté.
requête HTTP transmise, en attente de la réponse… 200 OK
Taille : 59732 (58K) [application/octet-stream]
Sauvegarde en : « openmediavault-omvextrasorg_latest_all6.deb »

openmediavault-omve 100%[===================>]  58,33K  --.-KB/s    ds 0,02s   

2023-05-07 15:16:21 (2,53 MB/s) — « openmediavault-omvextrasorg_latest_all6.deb » sauvegardé [59732/59732]

Sélection du paquet openmediavault-omvextrasorg précédemment désélectionné.
(Lecture de la base de données... 40142 fichiers et répertoires déjà installés.)
Préparation du dépaquetage de openmediavault-omvextrasorg_latest_all6.deb ...
Dépaquetage de openmediavault-omvextrasorg (6.1.1) ...
Paramétrage de openmediavault-omvextrasorg (6.1.1) ...
Updating configuration database ...
debian:
----------
          ID: remove_apt_list_omvextras
    Function: file.absent
        Name: /etc/apt/sources.list.d/omvextras.list
      Result: True
     Comment: File /etc/apt/sources.list.d/omvextras.list is not present
     Started: 15:16:24.125759
    Duration: 0.885 ms
     Changes:   
----------
          ID: omvextrasbaserepo
    Function: pkgrepo.managed
        Name: deb https://openmediavault-plugin-developers.github.io/packages/debian shaitan main
      Result: True
     Comment: Configured package repo 'deb https://openmediavault-plugin-developers.github.io/packages/debian shaitan main'
     Started: 15:16:24.149027
    Duration: 7912.795 ms
     Changes:   
              ----------
              repo:
                  deb https://openmediavault-plugin-developers.github.io/packages/debian shaitan main
----------
          ID: deb https://openmediavault-plugin-developers.github.io/packages/debian shaitan-testing main
    Function: pkgrepo.absent
      Result: True
     Comment: Package repo deb https://openmediavault-plugin-developers.github.io/packages/debian shaitan-testing main is absent
     Started: 15:16:32.062098
    Duration: 128.13 ms
     Changes:   
----------
          ID: deb [arch=amd64] https://download.docker.com/linux/debian bullseye stable
    Function: pkgrepo.managed
      Result: True
     Comment: Configured package repo 'deb [arch=amd64] https://download.docker.com/linux/debian bullseye stable'
     Started: 15:16:32.190445
    Duration: 7932.324 ms
     Changes:   
              ----------
              repo:
                  deb [arch=amd64] https://download.docker.com/linux/debian bullseye stable
----------
          ID: configure_apt_pref_omvextras
    Function: file.managed
        Name: /etc/apt/preferences.d/omvextras.pref
      Result: True
     Comment: File /etc/apt/preferences.d/omvextras.pref updated
     Started: 15:16:40.123111
    Duration: 25.935 ms
     Changes:   
              ----------
              diff:
                  New file
              mode:
                  0644
----------
          ID: refresh_database_apt
    Function: module.run
      Result: True
     Comment: pkg.refresh_db: Success
     Started: 15:16:40.150134
    Duration: 5030.478 ms
     Changes:   
              ----------
              pkg.refresh_db:
                  ----------
                  file:/var/cache/openmediavault/archives InRelease:
                      False
                  file:/var/cache/openmediavault/archives Packages:
                      True
                  file:/var/cache/openmediavault/archives Release:
                      False
                  file:/var/cache/openmediavault/archives Translation-en:
                      False
                  file:/var/cache/openmediavault/archives Translation-fr:
                      False
                  http://ftp.fr.debian.org/debian bullseye InRelease:
                      None
                  http://ftp.fr.debian.org/debian bullseye-updates InRelease:
                      None
                  http://httpredir.debian.org/debian bullseye-backports InRelease:
                      None
                  http://packages.openmediavault.org/public shaitan InRelease:
                      None
                  http://security.debian.org/debian-security bullseye-security InRelease:
                      None
                  https://download.docker.com/linux/debian bullseye InRelease:
                      None
                  https://openmediavault-plugin-developers.github.io/packages/debian shaitan InRelease:
                      None
                  https://openmediavault.github.io/packages shaitan InRelease:
                      None

Summary for debian
------------
Succeeded: 6 (changed=4)
Failed:    0
------------
Total states run:     6
Total run time:  21.031 s
Traitement des actions différées (« triggers ») pour openmediavault (6.3.10-2) ...
Updating workbench configuration files ...
Restarting engine daemon ...
Updating repos ...
Réception de :1 file:/var/cache/openmediavault/archives  InRelease
Ign :1 file:/var/cache/openmediavault/archives  InRelease                     
Réception de :2 file:/var/cache/openmediavault/archives  Release              
Ign :2 file:/var/cache/openmediavault/archives  Release                        
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Ign :3 file:/var/cache/openmediavault/archives  Packages                       
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Réception de :3 file:/var/cache/openmediavault/archives  Packages              
Réception de :4 file:/var/cache/openmediavault/archives  Translation-fr_FR     
Ign :4 file:/var/cache/openmediavault/archives  Translation-fr_FR              
Réception de :5 file:/var/cache/openmediavault/archives  Translation-en        
Ign :5 file:/var/cache/openmediavault/archives  Translation-en                 
Réception de :6 file:/var/cache/openmediavault/archives  Translation-fr        
Ign :6 file:/var/cache/openmediavault/archives  Translation-fr                 
Atteint :7 http://ftp.fr.debian.org/debian bullseye InRelease                  
Atteint :8 http://ftp.fr.debian.org/debian bullseye-updates InRelease          
Atteint :9 http://httpredir.debian.org/debian bullseye-backports InRelease     
Atteint :10 http://security.debian.org/debian-security bullseye-security InRelease
Atteint :11 http://packages.openmediavault.org/public shaitan InRelease        
Atteint :12 https://download.docker.com/linux/debian bullseye InRelease        
Atteint :13 https://openmediavault-plugin-developers.github.io/packages/debian shaitan InRelease
Atteint :14 https://openmediavault.github.io/packages shaitan InRelease
Lecture des listes de paquets... Fait


Press ctrl-shift-R in the browser after signing in to the OMV web interface.
```
* Reconnectez-vous a votre interface.
* (**IMPORTANT**) Faites `CTRL + SHIFT + R` dans votre navigateur.

Vous devriez voir apparaitre dans la barre laterale, uis dans `Systeme` un nouveau menu appelé `omv-extras`.
 
## RETEX.
#### Probleme de paquets retenus ou bloqués.

`Packages being held back`

Connectez-vous en SSH puis avec les privileges `root` lancer la commande `omv-upgrade`.

Résultat de la commande.
```
root@NASPerso:~# omv-upgrade
Get:1 file:/var/cache/openmediavault/archives  InRelease
Ign:1 file:/var/cache/openmediavault/archives  InRelease
Get:2 file:/var/cache/openmediavault/archives  Release
Ign:2 file:/var/cache/openmediavault/archives  Release
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Ign:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Get:3 file:/var/cache/openmediavault/archives  Packages
Get:4 file:/var/cache/openmediavault/archives  Translation-en
Ign:4 file:/var/cache/openmediavault/archives  Translation-en
Get:5 file:/var/cache/openmediavault/archives  Translation-fr
Ign:5 file:/var/cache/openmediavault/archives  Translation-fr
Hit:6 http://security.debian.org/debian-security bullseye-security InRelease
Hit:7 http://httpredir.debian.org/debian bullseye-backports InRelease          
Hit:8 http://ftp.fr.debian.org/debian bullseye InRelease                       
Hit:9 http://packages.openmediavault.org/public shaitan InRelease   
Hit:10 https://openmediavault.github.io/packages shaitan InRelease
Hit:11 http://ftp.fr.debian.org/debian bullseye-updates InRelease
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Calculating upgrade... Done
The following packages will be REMOVED:
  libmemcachedutil2 proftpd-basic proftpd-core proftpd-mod-crypto
  proftpd-mod-vroot proftpd-mod-wrap
The following NEW packages will be installed:
  libnss-systemd linux-image-6.1.0-0.deb11.6-amd64
The following packages will be upgraded:
  linux-image-amd64 openmediavault
2 upgraded, 2 newly installed, 6 to remove and 0 not upgraded.
Need to get 0 B/75.2 MB of archives.
After this operation, 497 MB of additional disk space will be used.
Preconfiguring packages ...
Selecting previously unselected package libnss-systemd:amd64.
(Reading database ... 35391 files and directories currently installed.)
Preparing to unpack .../libnss-systemd_247.3-7+deb11u2_amd64.deb ...
Unpacking libnss-systemd:amd64 (247.3-7+deb11u2) ...
Preparing to unpack .../openmediavault_6.3.10-2_all.deb ...
Unpacking openmediavault (6.3.10-2) over (6.0.24-1) ...
(Reading database ... 35391 files and directories currently installed.)
Removing proftpd-basic (1.3.7a+dfsg-12+deb11u2) ...
Removing proftpd-mod-wrap (1.3.7a+dfsg-12+deb11u2) ...
Removing proftpd-mod-vroot (0.9.8-4+b1) ...
Removing proftpd-mod-crypto (1.3.7a+dfsg-12+deb11u2) ...
Removing proftpd-core (1.3.7a+dfsg-12+deb11u2) ...
Removing libmemcachedutil2:amd64 (1.0.18-4.2) ...
Selecting previously unselected package linux-image-6.1.0-0.deb11.6-amd64.
(Reading database ... 35217 files and directories currently installed.)
Preparing to unpack .../linux-image-6.1.0-0.deb11.6-amd64_6.1.15-1~bpo11+1_amd64.deb ...
Unpacking linux-image-6.1.0-0.deb11.6-amd64 (6.1.15-1~bpo11+1) ...
Preparing to unpack .../linux-image-amd64_6.1.15-1~bpo11+1_amd64.deb ...
Unpacking linux-image-amd64 (6.1.15-1~bpo11+1) over (5.16.12-1~bpo11+1) ...
Setting up libnss-systemd:amd64 (247.3-7+deb11u2) ...
First installation detected...
Checking NSS setup...
Setting up linux-image-6.1.0-0.deb11.6-amd64 (6.1.15-1~bpo11+1) ...
I: /vmlinuz is now a symlink to boot/vmlinuz-6.1.0-0.deb11.6-amd64
I: /initrd.img is now a symlink to boot/initrd.img-6.1.0-0.deb11.6-amd64
/etc/kernel/postinst.d/initramfs-tools:
update-initramfs: Generating /boot/initrd.img-6.1.0-0.deb11.6-amd64
/etc/kernel/postinst.d/zz-update-grub:
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-6.1.0-0.deb11.6-amd64
Found initrd image: /boot/initrd.img-6.1.0-0.deb11.6-amd64
Found linux image: /boot/vmlinuz-5.16.0-0.bpo.4-amd64
Found initrd image: /boot/initrd.img-5.16.0-0.bpo.4-amd64
done
Setting up openmediavault (6.3.10-2) ...
Installing new version of config file /etc/apt/post-invoke.d/10install-cleanup ...
Installing new version of config file /etc/apt/post-invoke.d/20fix-start-stop-daemon ...
Installing new version of config file /etc/bash_completion.d/omv-confdbadm ...
Installing new version of config file /etc/bash_completion.d/omv-salt ...
Installing new version of config file /etc/cron.daily/openmediavault-check_locked_users ...
Installing new version of config file /etc/cron.daily/openmediavault-cron-apt ...
Installing new version of config file /etc/cron.daily/openmediavault-flush-mailq ...
Installing new version of config file /etc/cron.daily/openmediavault-mdadm ...
Installing new version of config file /etc/cron.daily/openmediavault-pending_config_changes ...
Installing new version of config file /etc/cron.weekly/openmediavault-update-smart-drivedb ...
Installing new version of config file /etc/default/openmediavault ...
Installing new version of config file /etc/salt/minion.d/openmediavault.conf ...
Installing new version of config file /etc/udev/rules.d/61-openmediavault-dev-disk-by-id.rules ...
Installing new version of config file /etc/udev/rules.d/99-openmediavault-md-raid.rules ...
Installing new version of config file /etc/udev/rules.d/99-openmediavault-nonrot.rules ...
Failed to stop ntp.service: Unit ntp.service not loaded.
Unit ntp.service does not exist, proceeding anyway.
Created symlink /etc/systemd/system/ntp.service -> /dev/null.
Failed to stop systemd-timesyncd.service: Unit systemd-timesyncd.service not loaded.
Unit systemd-timesyncd.service does not exist, proceeding anyway.
Created symlink /etc/systemd/system/systemd-timesyncd.service -> /dev/null.
Creating configuration database ...
Migrating configuration database ...
  Running migration conf_6.0.31
  Running migration conf_6.3.2
  Running migration conf_6.3.3
Setting up Salt environment ...
[ERROR   ] Command '/usr/bin/patch' failed with return code: 1
[ERROR   ] stdout: patching file /tmp/__salt.tmp.zy0hqb3i (read from /lib/python3/dist-packages/salt/fileserver/roots.py)
Reversed (or previously applied) patch detected!  Skipping patch.
1 out of 1 hunk ignored -- saving rejects to file /tmp/__salt.tmp.oj5mk6k5
[ERROR   ] retcode: 1
Processing system modifications ...
Removed /etc/systemd/system/proftpd.service.
Setting up linux-image-amd64 (6.1.15-1~bpo11+1) ...
Processing triggers for rsyslog (8.2102.0-2+deb11u1) ...
Processing triggers for libc-bin (2.31-13+deb11u6) ...
Processing triggers for openmediavault (6.3.10-2) ...
Restarting engine daemon ...
Updating workbench configuration files ...
```