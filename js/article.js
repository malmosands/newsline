$(document).ready(function() {

  var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
  };

  $("[data-content='pubDate']").html('<i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+getUrlParameter('pubDate'));
  $("[data-content='title']").html(getUrlParameter('title'));
  $("[data-content='description']").html(getUrlParameter('description'));

  var proxy = 'https://cors-anywhere.herokuapp.com/';

  var relatedArticlesUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&output=rss&q='+getUrlParameter('title');
  var relatedArticlesFeed = proxy + relatedArticlesUrl;
  $.ajax(relatedArticlesFeed, {
      accepts:{
          xml:"application/rss+xml"
      },
      dataType:"xml",
      success:function(data) {

          $(data).find("item").each(function () {
            $("#relatedArticles").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action flex-column align-items-start">\
              <div class="d-flex w-100 justify-content-between">\
                <h6 class="mb-1">'+$(this).find("title").text()+'</h6>\
              </div>\
              <small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>\
            </a>');
          });


      }
  });

  var twitterSearchUrl = 'https://queryfeed.net/twitter?q='+getUrlParameter('title');
  var twitterSearchFeed = proxy + twitterSearchUrl;
  $.ajax(twitterSearchFeed, {
      accepts:{
          xml:"application/rss+xml"
      },
      dataType:"xml",
      success:function(data) {

          $(data).find("item").each(function () {
            $("#twitterSearch").append('<li class="list-group-item flex-column align-items-start">\
              <div class="d-flex w-100 justify-content-between">\
                <h6 class="mb-1">'+$(this).find("title").text()+'</h6>\
              </div>\
              <p class="mb-1">'+$(this).find("description").text()+'</p>\
              <small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>\
            </li>');
          });


      }
  });

});
