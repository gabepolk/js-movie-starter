define(function() {

  return {
    whatever: "piece of cake",
    getNowPlaying: function(){
      $.get("https://api.themoviedb.org/3/movie/now_playing", { api_key: "85890c052e1f59ee8257fc442dd6066f" }, function(data){
        var nowPlayingArr = data.results
        return nowPlayingArr;
      });
    },
    getMovieDetail: function(){
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + id,
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f" },
        dataType: 'json',
        success: function(movieDetail){
          return movieDetail;
        }
      });
    },
    getSearchResults: function(query){
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f", query: query },
        dataType: 'json',
        success: function(data){
          var searchResultsArr = data.results
          return searchResultsArr;
        }
      });
    }
  };
});


