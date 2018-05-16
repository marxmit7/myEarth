
function genQuote() {
  var randNum = Math.floor(Math.random() * 18) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var selected_Quote = quotes[randNum]
  tweetQuote = "https://twitter.com/intent/tweet?text="+ "%23myEarth " + "Today i am "+ selected_Quote + " %23trendzingo www.trendzingo.com"
  $('.twitter-share-button').attr('href', tweetQuote);
  var fb_share_link = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F" + randNum.toString() + "html"+ "&amp;src=sdkpreparse"
  $('.fb-share-button').attr('href', fb_share_link)}

//quote array
var quotes = ["Blank",
  "Donating or sharing usable household items.",
  "participating to make my earth green again.",
  "going to aware 5 people to protect our environment.",
  "goint to feed few animals because they are adorable.",
  "taking only the stairs instead of using lifts",
  "planting a tree because they deserve it.",
  "checking the air filter of my car and giving it a clean.",
  "using microfiber cloth to clean my home, instead of chemicals.",
" saving one litre of extra water !",
" switching off electric bulb for one hour extra ! ",
" going to talk to a old person for a while !",
" using public transport !",
" purchaing appropriate reusable container instead of plastics.",
"using reusable grocery bags rather than plastic bags",
"Joining the carpool or public transportation to save fuel because they are too little.",
"Replaceing regular light bulbs in your home with compact fluorescent bulbs",
"Fixing all leaking pipes in my home.",
"Installing aeration nozzles on all taps to save water",

]