(function(){
  $(document).ready(function(){

    $.get("https://api.themoviedb.org/3/movie/now_playing", { api_key: "85890c052e1f59ee8257fc442dd6066f" }, function(data){
      var source = $("#movie-release-template").html();
      var template = Handlebars.compile(source);
      var movieArr = data.results

      for (var i = 0; i < movieArr.length; i++) {
        html = $(template(movieArr[i]));
        html.click(function() {
          showMovie($(this).attr("data-id"));
        });
        $('.main-movies').prepend(html);
      };
    });

    var showMovie = function(id) {
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/movie/" + id,
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f" },
        dataType: 'json',
        success: function(movie){
          var source = $("#movie-detail-template").html();
          var template = Handlebars.compile(source);
          html = template(movie);
          $('.main-movies').html(html);
        }
      });
    };

    $("#enter-search").click(function(){
      var query = $("#search").val();
      $.ajax({
        type: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        data: { api_key: "85890c052e1f59ee8257fc442dd6066f", query: query },
        dataType: 'json',
        success: function(data){
          var source = $("#search-results-template").html();
          var template = Handlebars.compile(source);
          var searchArr = data.results

          console.log(searchArr);

          $('.main-movies').empty();
          for (var i = 0; i < searchArr.length; i++) {
            html = $(template(searchArr[i]));
            $('.main-movies').append(html)
          };
        }
      });

    });


  });
})()
