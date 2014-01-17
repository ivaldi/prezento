;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document),
      Modernizr = window.Modernizr;

  $(document).ready(function() {
    $.fn.foundationAlerts           ? $doc.foundationAlerts() : null;
    $.fn.foundationButtons          ? $doc.foundationButtons() : null;
    $.fn.foundationAccordion        ? $doc.foundationAccordion() : null;
    $.fn.foundationNavigation       ? $doc.foundationNavigation() : null;
    $.fn.foundationTopBar           ? $doc.foundationTopBar() : null;
    $.fn.foundationCustomForms      ? $doc.foundationCustomForms() : null;
    $.fn.foundationMediaQueryViewer ? $doc.foundationMediaQueryViewer() : null;
    $.fn.foundationTabs             ? $doc.foundationTabs({callback : $.foundation.customForms.appendCustomMarkup}) : null;
    $.fn.foundationTooltips         ? $doc.foundationTooltips() : null;
    $.fn.foundationMagellan         ? $doc.foundationMagellan() : null;
    $.fn.foundationClearing         ? $doc.foundationClearing() : null;

    $.fn.placeholder                ? $('input, textarea').placeholder() : null;

    $('#rssupdates').FeedEk({
      FeedUrl : 'https://github.com/ivaldi/prezento/commits/master.atom',
      MaxCount : 1,
      ShowDesc : true,
      ShowPubDate:true,
      DescCharacterLimit:100,
      TitleLinkTarget:'_blank'
    });


    jQuery('.prezento-holder').prezento({
      devices: [{
        name: 'imac',
        deviceImageSRC: './images/imac.png',
        xLeftTop: 186,
        yLeftTop: 111,
        xRightBottom: 2106,
        yRightBottom: 1261,
        breakpoint: 1440,
        bgImgSrc : './images/facet-site-huge.jpg',
        bgTransitionDuration: '10s'
      },{
        name: 'macbookpro',
        deviceImageSRC: './images/mbp.png',
        xLeftTop: 126,
        yLeftTop: 36,
        xRightBottom: 876,
        yRightBottom: 505,
        breakpoint: 960,
        bgImgSrc : './images/facet-site-large.jpg',
        bgTransitionDuration: '13s'
      },{
        name: 'ipad',
        deviceImageSRC: './images/ipad.png',
        xLeftTop: 112,
        yLeftTop: 110,
        xRightBottom: 890,
        yRightBottom: 1144,
        breakpoint: 480,
        bgImgSrc : './images/facet-site-med.jpg',
        bgTransitionDuration: '3s'
      },{
        name: 'iphone',
        deviceImageSRC: './images/iphone.png',
        xLeftTop: 42,
        yLeftTop: 135,
        xRightBottom: 439,
        yRightBottom: 829,
        breakpoint: 0,
        bgImgSrc : './images/facet-site-small.jpg',
        bgTransitionDuration: '2s'
      }], 
      startAfterScroll: true,
      resetWhenBelow: true,
      responsive: 'window'
    });


  });

  // Hide address bar on mobile devices (except if #hash present, so we don't mess up deep linking).
  if (Modernizr.touch && !window.location.hash) {
    $(window).load(function () {
      setTimeout(function () {
        window.scrollTo(0, 1);
      }, 0);
    });
  }

})(jQuery, this);