$(document).ready(function(){
    var blogPosts = '';
    $.ajax({
      url:'index.json',
    }).done(function(response){
      blogPosts = response;
    })
    
    $("#searchQuery").keyup(function(e){
      e.preventDefault();
      if (e.key === 'Enter' || e.keyCode === 13) {
        var searchQuery = $("#searchQuery").val();
        searchQuery = $.trim(searchQuery);
        if(searchQuery.length==0 || blogPosts.length==0) return false;

        $("#results").empty();

        var results = '';
        $.each(blogPosts , function(index , post){
          if(post.title.includes(searchQuery) || post.contents.includes(searchQuery)){
            var resultTemplate = $("#resultTemplate").html();
            resultTemplate = resultTemplate.replace("#post-url#" , post.permalink);
            resultTemplate = resultTemplate.replace("#post-url#" , post.permalink);
            resultTemplate = resultTemplate.replace("#post-id#" , index);
            resultTemplate = resultTemplate.replace("#post-title#" , post.title);
            resultTemplate = resultTemplate.replace("#post-contents#" , post.contents.substring(0, 80));

            results += resultTemplate;
          }
        })
        $("#results").html(results);
      }
    })
    
  })