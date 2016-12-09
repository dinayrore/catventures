var optionOne = $('.option-one')

var positive = $('.positive')

var negative = $('.negative')

$('.beans').click(function() {
  $('.catventures').fadeOut(function() {
    optionOne.fadeIn('slow');
  });
});

function positiveChoice() {
  optionOne.fadeOut(function() {
    positive.fadeIn('slow');
  });
};

$('.meow').click(function positiveChoice() {
});

$('.purr' ).click(function() {
  optionOne.fadeOut(function() {
    positive.fadeIn('slow');
  });
});

$('.run' ).click(function() {
  optionOne.fadeOut(function() {
    positive.fadeIn('slow');
  });
});

$('.bite').click(function() {
  optionOne.fadeOut(function() {
    negative.fadeIn('slow');
  });
});

$('.scratch').click(function() {
  optionOne.fadeOut(function() {
    negative.fadeIn('slow');
  });
});

$('.hiss').click(function() {
  optionOne.fadeOut(function() {
    negative.fadeIn('slow');
  });
});


// Less global variables is better
