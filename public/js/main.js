console.log("hello")

requirejs.config({
  paths: {
    'moviedbAPI': 'moviedb-api',
    'renderTemplate': 'render-template'
  }
})

require(['moviedb-api'], function(moviedbAPI) {
  console.log(moviedbAPI.whatever);
})


// (function(){
//   $(document).ready(function(){

//     require(['render-template'], function(renderTemplate) {
//       renderTemplate.renderNowPlaying();
//     });

//     $("#enter-search").click(function(){
//       var query = $("#search").val();
//       $('.main-movies').empty();
//       renderTemplate.renderSearchResults(query); // sends query to renderTemplate.renderSearchResults
//     });

//   });
// })()
