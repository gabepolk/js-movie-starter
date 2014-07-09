define(function() {

  return {
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
    getMovieDetail: function(id, callback){
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
    getSearchResults: function(query, callback){
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f", query: query },
        dataType: 'json',
        success: function(data){
          callback(data.results);
        }
      });
    }
  };
});
