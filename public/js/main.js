console.log("hello")

requirejs.config({
  baseURL: "js/",
  paths: {
    'moviedbAPI': 'moviedb-api',
    'renderTemplate': 'render-template'
  }
});

require(['moviedb-api', 'render-template'], function(moviedbAPI, renderTemplate) {
  $(document).ready(function(){

    moviedbAPI.getNowPlaying(renderTemplate.renderNowPlaying);

    // $(document).click(".movie", function(){
    //   moviedbAPI.getmoviedetails($(this).data('id'))
    // });

  });
});

// require(['render-template'], function(renderTemplate) {
//   console.log(renderTemplate.whatever);
//   // renderTemplate.renderNowPlaying();
// })


// (function(){
//   $(document).ready(function(){

//     require(['render-template'], function(renderTemplate) {
//       renderTemplate.renderNowPlaying();
//     });

    // $("#enter-search").click(function(){
    //   var query = $("#search").val();
    //   $('.main-movies').empty();
    //   renderTemplate.renderSearchResults(query); // sends query to renderTemplate.renderSearchResults
    // });

//   });
// })()
