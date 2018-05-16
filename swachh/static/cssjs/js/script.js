
function genQuote() {
  var randNum = Math.floor(Math.random() * 10) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var selected_Quote = quotes[randNum]
  tweetQuote = "https://twitter.com/intent/tweet?text="+ "%23myEarth " + "Today i am "+ selected_Quote + " %23trendzingo"
  $('.twitter-share-button').attr('href', tweetQuote);
  var fb_share_link = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F" + randNum.toString() + "html"+ "&amp;src=sdkpreparse"
  $('.fb-share-button').attr('href', fb_share_link)}

//quote array
var quotes = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
" saving one litre of extra water !",
" switching off electric bulb for one hour extra ! ",
" going to talk to a old person for a while !",
" using public transport !",
]