(function(){
  $(document).ready(function(){

    $.get("https://api.themoviedb.org/3/movie/now_playing", { api_key: "85890c052e1f59ee8257fc442dd6066f" }, function(data){
      var source = $("#movie-release-template").html();
      var template = Handlebars.compile(source);

      for (var i = 0; i < data.results.length; i++) {
        html = template(data.results[i]);
        $('.main').prepend(html);
      };

      // $.each(data.results, function( index, value ) {
      //   $(".main").append("<div>" +
      //                       "<h2>" + value.title + "</h2>" +
      //                       "<img src='http://image.tmdb.org/t/p/w185/" + value.poster_path + "' />" +
      //                       "<p>Rating: " + value.vote_average + "</p>" +
      //                     "</div>");
      //   // console.log(value.title);
      // });
    });




  });
})()
