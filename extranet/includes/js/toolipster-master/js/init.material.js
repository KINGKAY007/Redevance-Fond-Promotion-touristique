var datePickerOptions = {
    format: 'dd/mm/yyyy',
    setDefaultDate: true,
    i18n: i18nDatepicker,
    autoClose: true
};

function initCalendar(pickername) {
  var pickername = (typeof pickername !== 'undefined') ? pickername : "";
    $('.datepicker'+pickername).datepicker(datePickerOptions);
}

/**
 * page d'accueil, page d'accueil connect?e conversion des largeurs de table de px en %
 */
function tablePixelToPercent() {
  $('#text_accueil table td, .accueil_msg table td').each(function(e) {
    var tableWidth = $(this).closest('table').outerWidth();
    var percentage = (1-(( tableWidth - $(this).outerWidth() ) / tableWidth))*100 ; // 0.92%
    $(this).width(percentage+'%');
  })
}

// Get the header
var header = null;

// Get the offset position of the navbar
var sticky = null

// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyMenu()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {
  if (header !== null) {
    if (window.pageYOffset > sticky) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
}

// rewrite alert js
function alert(txt) {
  swal({
    type: 'info',
    html: txt,
    focusConfirm: false
  });
}
window.alert = alert;

// hack pour le positionnement du footer (pas trop gerable en css pur)
function stickyfooter() {
  setTimeout(function() {
    var bodyH = $('.page-body-wrapper').outerHeight(true);
    var navH = $('.nav-extended').outerHeight(true);
    var footerH = $('.page-footer-wrapper').outerHeight(true);
    if(parseInt($(window).height()) > parseInt(bodyH + navH + footerH)) {
      $('.page-footer-wrapper').addClass('sticked');
    }
    else {
      $('.page-footer-wrapper').removeClass('sticked');
    }
  }, 10);
}

$(document).ready(function(){
  $('.page-footer-wrapper').removeClass('loading');
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible({
    onOpenEnd: function() { stickyfooter(); }
  });
  $('.sidenav').sidenav();
  $('.tabs').tabs({
    onShow: function() { stickyfooter(); }
  });

  // gestion des modales de la homepage connectée (pb d'id en double a cause des div masquées / affichées selon si on est sur mobile ou non)
  var modals = [];
  $('.card-content.homepage .modal').each(function() {
    if ($.inArray($(this).attr('id'), modals)==-1) {
      $('.main-panel').append("<div class='modal' id='"+$(this).attr('id')+"'>" + $(this).html() + "</div>")
      modals.push($(this).attr('id'))
    }
    $(this).remove()
  });

  $('.modal').modal();

  // browser-default a ajouter pour les mobiles
  // doc: https://materializecss.com/select.html
  $('select').not('.select2').not('.selectSejour').not('.dynamic').addClass('browser-default');
  $('select').not('.select2').not('.selectSejour').not('.dynamic').formSelect();
  // $('.tooltipped').tooltip();
  $('.tooltip').tooltipster({
    theme: 'tooltipster-borderless'
  });
  $('.fixed-action-btn').floatingActionButton();
  initCalendar();

  // Click sur le bouton "i" d'information
  $("body").delegate('click', '.swal', function(e) {
    swal({html: $(this).attr('title')});
  });

  $("#logoutFranceConnect").click(function(e) {
    swal({
      html: i18n3do.franceconnect_logout, 
      showCancelButton: true,
      cancelButtonText: 'Annuler'
    }).then(function(result) {
      if (result.value) {
        window.location.href="php/deconnexion.php";
      }
    });
  });

  // Get the header
  if ($("nav#navextended").length > 0) {
    header = $("nav#navextended");
    if (typeof header.offset() !=='undefined')
      sticky = header.offset().top;
  }

  // Update des iframe video pour les rendre responsive (page d'accueil et page d'accueil connectÃ©e)
  $('.homepage iframe, #text_accueil iframe').not('#receiver').wrap('<div class="video-wrapper"></div>');

  var card_menu_gauche = true;
  var card_attente = false;
  var card_declas = false;
  var card_declas_forfait = false;
  var card_paiements = false;

  // page d'accueil extranet -> controle de la card paiement si vide, on remove
  if($('#id_menu_gauche').length == 0 || ($('#id_menu_gauche').length > 0 && $('#id_menu_gauche .item.card').length==0)) {
    $('#id_menu_gauche').remove();
    card_menu_gauche = false;
  }

  // page d'accueil extranet -> controle de la card decla en attente
  if(typeof $('#tabs-card_en_attente').html() !== 'undefined') {
    card_attente = true;
  }
  // page d'accueil extranet -> controle de la card decla si vide, on remove
  if(typeof $('#tabs-card_a_faire').html() !== 'undefined') {
    card_declas = true;
  }
  // page d'accueil extranet -> controle de la card decla si vide, on remove
  if(typeof $('#tabs-card_forfait_a_faire').html() !== 'undefined') {
    card_declas_forfait = true;
  }
  // page d'accueil extranet -> controle de la card paiements en attente
  if(typeof $('#tabs-card_en_attente').html() !== 'undefined') {
    card_paiements = true;
  }
  // page d'accueil extranet -> controle de la card paiements en attente
  if(typeof $('#tabs-card_en_attente_facture').html() !== 'undefined') {
    card_paiements = true;
  }

  if(!card_menu_gauche && !card_attente && !card_declas_forfait && !card_declas && !card_paiements) {
    $('.accueil_msg').removeClass('l6');
    $('.accueil_msg').addClass('l12');
  }

  var card_login = true;

  if($('.card_login .card-content').text().trim().length==0 && $('.card_login .card-content').find('img').length==0) {
    $('.card_login').remove();
    card_login = false;
  }

  if(!card_login) {
    $('.portail_accueil_msg').removeClass('l8');
    $('.portail_accueil_msg').addClass('l12');
    $('.menu_gauche').removeClass('l4');
    $('.menu_gauche').addClass('l12');
  }

  // Detection des tableaux sensés avoir une bordure dans le bloc de texte de la page d'accueil
  $('.accueil_msg table').each(function(e){
    if($(this).attr('border') === '1') {
      $(this).addClass('border');
    }
  })

  tablePixelToPercent();

});

$(window).load(function(){
  stickyfooter();
  $( window ).resize(function() {
    stickyfooter();
  });
});