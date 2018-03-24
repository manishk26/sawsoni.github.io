// //appendTo(),join(),find(),each(),clone()
$(document).ready(function() {
  // var index=0;
  // console.log([
  //       '<a href="#footnote-',
  //       index + 1,
  //       '" id="context-',
  //       index + 1,
  //       '" class="context">',
  //       '<sup>',
  //       index + 1,
  //       '</sup></a>'
  //     ].join(''));
 //  // Use attr() to add an id, rel, and title.
 //  //console.log($('div.chapter a[href*="wikipedia"]'));
  

  $('div.chapter a[href*="wikipedia"]').attr({
   rel: 'external',
    title: function() {
      return 'Learn more about ' + $(this).text() + ' at Wikipedia.';//title attr value wil be this
    },
    id: function(index, oldValue) {
      return 'wikilink-'+index;

    }
  }); 

  // Add "back to top" links.
  //The insertAfter() method inserts HTML elements after the selected elements
  $('<a href="#top">back to top</a>').insertAfter('div.chapter p');//or
  // $('div.chapter p').after('<a href="#top">back to top</a>');//insert hyperlink after all paragraph
  // $('<a id="top"></a>').prependTo('body');
  $('body').prepend('<a id="top"></a>');

 // //  // // Create footnotes.

  var $notes = $('<ol id="notes"></ol>').insertBefore('#footer');
  //console.log($('span.footnote'));
  // join() takes an array as a paramteer and returns a
  // string
  //&nbsp;(html entites) get the space in UI
  // appendTo() cuts and pastes an existing element in the DOM

  $('span.footnote').each(function(index) {
    $(this)
      .before([
        '<a href="#footnote-',
        index + 1,
        '" id="context-',
        index + 1,
        '" class="context">',
        '<sup>',
        index + 1,
        '</sup></a>'
      ].join(''))// to get empty space between string (join(' ||')write like the to get it know)
        .appendTo($notes)
      .append([
        '&nbsp;&nbsp;&nbsp;&nbsp;(<a href="#context-',
        index + 1,
        '">context</a>)'
        //join is a jquery method that converts a array to a string
      ].join(''))
     .wrap('<li id="footnote-' + (index + 1) + '"></li>');
  });

//  // // //  // Style pull quotes.
  $('span.pull-quote').each(function(index) {
    var $parentParagraph = $(this).parent('p');
     $parentParagraph.css('position', 'relative');

    var $clonedCopy = $(this).clone();
    $clonedCopy
      .addClass('pulled')
      .find('span.drop')
        .html('&hellip;')
      .end()
      .addClass("cloned")
     .text($clonedCopy.text())
      .prependTo($parentParagraph);
 //console.log($clonedCopy.text());
  });

 });
