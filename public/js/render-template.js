define(function() {

  return {
    renderNowPlaying: function(nowPlayingArr){
      var source = $("#movie-release-template").html();
      var template = Handlebars.compile(source);
      var html = $(template({ movieList: nowPlayingArr }));
      $('.main-movies').empty();
      $('.main-movies').prepend(html);
    },
    renderMovieDetail: function(movie){
      var source = $("#movie-detail-template").html();
      var template = Handlebars.compile(source);
      var html = $(template(movie));
      $('.main-movies').empty();
      $('.main-movies').append(html);
    }
    // renderSearchResults: function(query){
    //   var source = $("#search-results-template").html();
    //   var template = Handlebars.compile(source);
    //   var searchResultsArr = moviedbAPI.getSearchResults(query); // gets search results from moviedbAPI
    //   for (var i = 0; i < searchResultsArr.length; i++) {
    //     html = $(template(searchResultsArr[i]));
    //     $('.main-movies').append(html)
    //   };
    // }
  };
});
