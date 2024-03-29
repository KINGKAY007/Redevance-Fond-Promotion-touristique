var i18nDatepicker = {
    months: [
      'Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'
    ],    
    monthsShort: [
      'Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Dec'
    ],    
    weekdays: [
      'Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'
    ],    
    weekdaysShort: [
      'Dim','Lun','Mar','Mer','Jeu','Ven','Sam'
    ],
    weekdaysAbbrev: ['D','L','Ma','Me','J','V','S'],
    cancel: "Annuler"
}

var i18nDatatable = {
  "sProcessing":     "Traitement en cours...",
  "sSearch":         "Rechercher&nbsp;:",
  "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
  "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
  "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
  "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
  "sInfoPostFix":    "",
  "sLoadingRecords": "Chargement en cours...",
  "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
  "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
  "oPaginate": {
      "sFirst":      "Premier",
      "sPrevious":   "<",
      "sNext":       ">",
      "sLast":       "Dernier"
  },
  "oAria": {
      "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
      "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
  },
  "select": {
          "rows": {
              _: "%d lignes séléctionnées",
              0: "Aucune ligne séléctionnée",
              1: "1 ligne séléctionnée"
          } 
  }
}

var i18n3do = {
  langMoment: 'fr',
  langKo: 'fr-FR',
  coordonnees_client: 'Coordonnées du client',
  selected_taux_required: 'Le choix du mode de collecte est obligatoire',
  no_tarif_configure: "Il n'y a pas de tarif configuré pour cette période sur cet hébergement",
  no_tarif_configure_categorie: "Il n'y a pas de tarif configuré pour cette période sur cette catégorie",
  dates_problems: "Problèmes sur les dates",
  dates_declaration_invalid: "Une date se situe dans une période où la déclaration est fermée",
  dates_activite_sejour_err: "Le séjour est en dehors des dates d'activité de l'hébergement",
  no_reel: "L'hébergement n'a pas de classement au réel sur toute la période",
  closed_period: "Il y'a une période de fermeture sur les dates du séjour",
  invoiced_period: "Il y a déjà une facture sur la période sélectionnée.",
  session_expire: "Votre session a expiré, une reconnexion est nécessaire.",
  saved_decla: "La déclaration est bien enregistrée !",
  saved_decla_csv: "L'import des déclarations s'est bien déroulé !",
  form_not_valid: "Le formulaire n'est pas valide !",
  file_problem: "Il semble avoir un problème avec le fichier importé, veuillez réessayer",
  nombre_champs: "Le fichier CSV ne contient pas le bon nombre de colonnes",
  changement_mode_jour: "Certaine dates de votre déclaration ont déjà été validées.\nPar soucis de compatibilité, la déclaration au séjour a été basculée en mode journalier.\nVeuillez vérifier les dates déclarées ou changer le format de votre fichier",
  changement_mode_jour: "Certaine dates de votre déclaration ont déjà été validées.\nPar soucis de compatibilité, la déclaration au séjour a été basculée en mode mensuel.\nVeuillez vérifier les dates déclarées ou changer le format de votre fichier",
  file_format: "Format du fichier d'import incorrect. Veuillez vérifier le format de fichier d'import.",
  date_debut_activite: "La date de début d'activité de votre hébergement n'est pas renseignée. Veuillez contacter votre collectivité afin de renseigner cette information.",
  duree_declaration_invalid: "Le type de déclaration n'est pas configuré pour cet hébergement. Veuillez contacter votre collectivité ou le support de 3D Ouest afin de renseigner cette information.",
  date_debut_sup: "La date de début d'activité est postérieure à la date du premier jour du fichier.",
  date_fin_inf: "La date de fin d'activité est antérieure à la date du dernier jour du fichier.",
  please_wait: "Veuillez patienter",
  loading: "Chargement",
  zipcode_invalid: "Le code postal ne semble pas correct",
  declaration_a_zero_non_modifiable: "Ce séjour a été enregistré via la fonction \"Je n'ai pas loué\".<br>Il ne peut être modifié.",
  confirm_remove: "Confirmation de la suppression",
  confirm_done: "Suppression réussie",
  want_remove: "Voulez vous vraiment supprimer la déclaration ?",
  calcul_en_cours: 'Calcul de votre déclaration en cours, cela prend quelques secondes, veuillez patienter...',
  confirm: "Confirmer",
  cancel: "Annuler",
  new_sejour: "Nouveau séjour",
  finish: "Terminer",
  info_save_with_empty: "Attention, votre séjour est saisi avec un prix de nuitée de 0€ alors que vous avez plus d'une personne accueillie sur ce séjour",
  info_save_capacite_over_the_top: "La capacité saisie est supérieure à la capacité réelle déclarée pour votre hébergement",
  info_save_nb_nuitee_over_the_top: "Le nombre d'unité est supérieur au nombre d'unités déclaré pour votre hébergement",
  force_sejour: "Valider le séjour avec un prix de nuitée à 0€",
  force_decla: "Valider la déclaration",
  back_decla: "Revenir sur ma déclaration",
  error_decla_montant: "Vous avez déclaré des lignes avec plus d'une personne et un montant à 0€",
  error_decla_nbpers: "Vous avez déclaré des lignes avec un montant supérieur à 0€ et aucune personne",
  error_decla_plafond: "Vous avez déclaré des lignes avec un montant par personne supérieur au plafond maximum",
  error_decla_capacite: "Vous avez déclaré des lignes avec une capacité supérieure à celle déclarée sur votre hébergement",
  error_decla_nbunite: "Vous avez déclaré des lignes avec un nombre d'unité supérieur à celui déclaré sur votre hébergement",
  error_capacite_sejour: "Vous avez saisi un nombre d'unités louées supérieur à la capacité déclarée sur votre hébergement. En incluant les autres séjours déclarés sur cet établissement, vous indiquez %s unités louées au %s là ou vous avez déclaré une capacité réelle de %s à cette date.",
  info_save_day: "Attention, votre déclaration a au moins une journée avec plus d'une personne accueillie et une taxe de séjour de 0€ saisie sur cette journée.",
  warning: "Attention",
  ok: "OK",
  from: "Du",
  to: "au",
  close: "Fermer",
  edit: "Modifier",
  delete: "Supprimer",
  error: "Erreur",
  unknown_error: "Une erreur s'est produite.",
  prix_moyen_nuit: "Prix moyen de la nuit sur la période de perception",
  taux_applique: "Taux local appliqué",
  tarif_retenu: "Tarif retenu",
  prix_moyen_ht: "Prix moyen HT",
  capacite: "capacité",
  taux_local: "taux local",
  mention_application_plafond_light: "Le montant dépasse le plafond par nuit et par personne délibéré par la collectivité",
  mention_application_plafond: "Le tarif calculé dépassé le plafond délibéré par la collectité. \nApplication du tarif plafonné de",
  tarif_journalier: "Tarif unitaire journalier",
  abattement_pour: "Abattement pour",
  jours_ouverture: "nuitées ouvertes",
  capacite_retenue_apres_abattement: "Capacité retenue après abattement",
  capacite_apres_abattement: "capacité après abattement",
  nombre_jours_ouverture: "Nombre de nuitées ouvertes",
  error_mois_ouverts_periode: "Tous les mois de la période sélectionnée ne sont pas ouverts à la déclaration",
  tarif: "tarif",
  total_avec_abattement: "au total après abattement",
  warning_date: "Faites attention à la saisie de la date",
  warning_date_butoire: "La date butoire de la période est atteinte, nous allons procéder à la suppression des périodes suivantes",
  plateforme_inconnu: "il faut selectionner une plateforme",
  adresse_intravable_ajouter: "Adresse introuvable ? Ajouter l'adresse saisie.",
  quit_declaration_not_saved: "Vous n'avez pas enregistré toutes vos déclarations. Êtes-vous sur de vouloir quitter ?",
  quit_csv_declaration_not_saved: "L'import de votre fichier csv n'est pas totalement terminé. Fermer l'import en cours d'enregistrement peux générer des erreurs dans votre déclaration. Avez-vous terminé ?",
  nombre_personnes: "Nombre de personnes",
  nombre_nuitees: "Nombre de nuitées",
  en_attente_saisie: "En attente de Saisie...",
  lang_popup_explication_sejour_recipisse_declaration: "Cette fonction vous permet de délivrer un justificatif de facturation de la taxe à votre client",
  declaration_tiers_collecteur: "Utiliser le bouton \"ajouter une période\" pour déclarer une période pendant laquelle la collecte de la taxe de séjour est faite par un tiers (Opérateurs numériques, agences, conciergeries, ... )",
  selectionner_tiers_collecteur: "Vous devez sélectionner le tiers collecteur",
  sejour_plafond_depasse: "Le plafond est dépassé, séjour invalide",
  sejour_mois_ouvert: "La période n'est pas ouverte a la déclaration, séjour invalide",
  sejour_non_importe: "Séjour non importé car non valide",
  sejour_nb_imports_csv_singulier_fail: "ligne n'a pas pu être importée",
  sejour_nb_imports_csv_singulier_success: "ligne correctement importée",
  sejour_nb_imports_csv_pluriel_fail: "lignes n'ont pas pu être importées",
  sejour_nb_imports_csv_pluriel_success: "lignes correctement importées",
  error_taux: "Les taux suivants ne sont plus valides sur les dates sélectionnées",
  cerfa_indispo_title: "Cerfa de déclaration indisponible.",
  cerfa_indispo: "Cet hébergement est concerné par la procédure de délivrance de n° d'enregistrement qui se substitue au Cerfa de déclaration",
  deja_facture: "Il y a déjà une facture sur la période sélectionnée.",
  dates_declaration_degrade_non_modifiable: "Vous ne pouvez modifier un séjour en mode sans calcul partiellement validé",
  nouvel_hebergement_message_1 : "Votre demande de création de compte a bien été prise en compte.",
  nouvel_hebergement_message_1_hebergement : "Votre demande de création d'hébergement a bien été prise en compte.",
  nouvel_hebergement_message_2 : "Votre collectivité validera votre création de compte dans les meilleurs délais.",
  nouvel_hebergement_message_2_hebergement : "Votre collectivité validera votre demande dans les meilleurs délais.",
  nouvel_hebergement_message_cerfa : "Vous allez être dirigé vers la page de génération du Cerfa afin de finaliser vos démarches.",
  mon_paris_unavailable: "Le portail de connexion \"Mon Paris\" est momentanément indisponible.",
  franceconnect_logout: "Cette action va aussi vous déconnecter de FranceConnect",
  logout_provider: "Cette action va aussi vous déconnecter de "
}
