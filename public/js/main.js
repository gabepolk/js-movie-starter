requirejs.config({
  baseURL: "js/",
  paths: {
    'moviedbAPI': 'moviedb-api',
    'renderTemplate': 'render-template'
  }
});

require(['moviedb-api', 'render-template'],
  function(moviedbAPI, renderTemplate) {
    $(document).ready(function(){

      moviedbAPI.getNowPlaying(renderTemplate.renderNowPlaying);

      $(document).click(".movie", function(){
        moviedbAPI.getMovieDetail($(".movie").attr("data-id"), renderTemplate.renderMovieDetail)
      });

      $("#enter-search").click(function(){
        var query = $("#search").val();
        console.log(query);
        moviedbAPI.getSearchResults(query, renderTemplate.renderSearchResults)
      });

    });
  }
);
