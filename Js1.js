{\rtf1\ansi\ansicpg1252\cocoartf2512
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 $(function()\{\
  wmSlider.endingSection ++;\
  let numOfSlides = wmSlider.endingSection - wmSlider.startingSection;\
  let url = (window.location != window.parent.location) ? document.referrer : document.location.href;\
\
  if ( (url.indexOf('squarespace.com/config') === -1) || !wmSlider.editingMode )\{\
    if ($('main.Index').length) \{\
      console.log("7.0");\
      $('main.Index section:nth-of-type(' + wmSlider.startingSection +')').each(function()\{ \
        $(this)\
          .nextUntil('main.Index section:nth-of-type(' + wmSlider.endingSection +')')\
          .addBack()\
          .wrapAll('<div id="wm-slider-container" />');\
      \}); \
\
    \} else \{ \
      console.log("7.1");\
      $('article section:nth-of-type(' + wmSlider.startingSection +')').each(function()\{ \
        $(this)\
          .nextUntil('article section:nth-of-type(' + wmSlider.endingSection +')')\
          .addBack()\
          .wrapAll('<div id="wm-slider-container" />');\
      \}); \
    \}\
\
    /* Build Next icon */\
    $('#wm-slider-container').prepend('<div class="slide-btn next-btn">    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="256" height="256"><title>Angle Right</title><path fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M40 31.998L26 18l-4 4.486 9.515 9.512L22 41.513 26 46l14-14.002z" stroke-linejoin="round" stroke-linecap="round"/></svg></div>');\
\
    /* Build Previous icon */\
    $('#wm-slider-container').prepend('<div class="slide-btn prev-btn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" width="256" height="256"><title>Left</title><path fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M24 32.001L38 46l4-4.485-9.515-9.514L42 22.487 38 18 24 32.001z" stroke-linejoin="round" stroke-linecap="round"/></svg></div>');\
\
  \}\
\
  /* Adjust for Header height on first section */\
  let sectionPaddingTop = $('header#header').css('height') || '0px';\
  document.documentElement.style.setProperty('--sectionPaddingTop', sectionPaddingTop);\
  //determine whether the slider is the first section on the page\
  if ($('#wm-slider-container').prev().length === 0 )\{\
    /*$('article.sections #wm-slider-container section').css('padding-top', sectionPaddingTop);*/ //7.1 Header Refactor based on padding\
    $('article.sections #wm-slider-container section').addClass('padding-top');\
    $('#wm-slider-container').addClass('first-section');\
  \} else \{\
    console.log('not first section');\
  \}\
\
  /*======END BUILDING======*/\
\
\
  /* Initial State */\
  $('#wm-slider-container section:first-of-type').attr('data-slide', 'current');\
  $('#wm-slider-container section:nth-of-type(2)').attr('data-slide', 'next');\
  $('#wm-slider-container section:last-of-type').attr('data-slide', 'previous');\
\
  /* Next Click Button */\
  $(".next-btn").click(function()\{\
    nextSlide();\
  \});\
\
  /* Previous Click Button */\
  $(".prev-btn").click(function()\{\
    prevSlide();\
  \});\
\
  function nextSlide()\{\
    $("#wm-slider-container section[data-slide='current']").removeAttr('data-slide', 'current');\
    $("#wm-slider-container section[data-slide='next']").attr('data-slide', 'current');\
    $("#wm-slider-container section[data-slide='previous']").removeAttr('data-slide', 'previous');\
\
    if ($("#wm-slider-container section[data-slide='current']").is('#wm-slider-container section:first-of-type'))  \
      $("#wm-slider-container section:last-of-type").attr('data-slide', 'previous');\
    else\
      $("#wm-slider-container section[data-slide='current']").prev().attr('data-slide', 'previous');\
\
    if ($("#wm-slider-container section[data-slide='current']").is('#wm-slider-container section:last-of-type'))\
      $("#wm-slider-container section:first-of-type").attr('data-slide', 'next');\
    else \
      $("#wm-slider-container section[data-slide='current']").next().attr('data-slide', 'next');\
\
  \}\
\
  function prevSlide()\{\
    $("#wm-slider-container section[data-slide='current']").removeAttr('data-slide', 'current');\
    $("#wm-slider-container section[data-slide='previous']").attr('data-slide', 'current');\
    $("#wm-slider-container section[data-slide='next']").removeAttr('data-slide', 'next');  \
\
    if ($("#wm-slider-container section[data-slide='current']").is('#wm-slider-container section:last-of-type'))\
      $("#wm-slider-container section:first-of-type").attr('data-slide', 'next');\
    else \
      $("#wm-slider-container section[data-slide='current']").next().attr('data-slide', 'next');\
\
    if ($("#wm-slider-container section[data-slide='current']").is('#wm-slider-container section:first-of-type'))  \
      $("#wm-slider-container section:last-of-type").attr('data-slide', 'previous');\
    else\
      $("#wm-slider-container section[data-slide='current']").prev().attr('data-slide', 'previous');\
  \}\
\
\});\
\
$( window ).resize(function() \{\
  let sectionPaddingTop = $('header#header').css('height') || '0px';\
  document.documentElement.style.setProperty('--sectionPaddingTop', sectionPaddingTop);\
\});\
}