define(function() {

  return {
    whatever: "piece of cake",
    getNowPlaying: function(callback){
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f" },
        dataType: 'json',
        success: function(data){
          callback(data.results);
        }
      });
    },
    getMovieDetail: function(callback){
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + id,
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f" },
        dataType: 'json',
        success: function(movieDetail){
          callback(movieDetail);
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
