define(function() {

    return {
      renderNowPlaying: function(){
        var source = $("#movie-release-template").html();
        var template = Handlebars.compile(source);
        var nowPlayingArr = moviedbAPI.getNowPlaying(); // gets nowPlayingArr from moviedb-api
        for (var i = 0; i < nowPlayingArr.length; i++) {
          html = $(template(nowPlayingArr[i]));
          html.click(function() {
            renderTemplate.renderMovieDetail($(this).attr("data-id")); // calls renderMovieDetail function
          });
          $('.main-movies').prepend(html);
        };
      },
      renderMovieDetail: function(id){
        var source = $("#movie-detail-template").html();
        var template = Handlebars.compile(source);
        html = template(moviedbAPI.getMovieDetail()); // gets movie detail from moviedb-api file
        $('.main-movies').html(html);
      },
      renderSearchResults: function(query){
        var source = $("#search-results-template").html();
        var template = Handlebars.compile(source);
        var searchResultsArr = moviedbAPI.getSearchResults(query); // gets search results from moviedbAPI
        for (var i = 0; i < searchResultsArr.length; i++) {
          html = $(template(searchResultsArr[i]));
          $('.main-movies').append(html)
        };
      };
    };

});
