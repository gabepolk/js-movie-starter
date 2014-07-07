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
        $('.main').prepend(html);
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
          $('.main').html(html);
        }
      });
    };

  });
})()
