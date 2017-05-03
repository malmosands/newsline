$(document).ready(function() {

  var proxy = 'https://cors-anywhere.herokuapp.com/';

    var allUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&output=rss';
    var allFeed = proxy + allUrl;
    $.ajax(allFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #all").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var businessUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=b&output=rss';
    var businessFeed = proxy + businessUrl;
    $.ajax(businessFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #business").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var entertainmentUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=e&output=rss';
    var entertainmentFeed = proxy + entertainmentUrl;
    $.ajax(entertainmentFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #entertainment").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var healthUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=m&output=rss';
    var healthFeed = proxy + healthUrl;
    $.ajax(healthFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #health").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var sportsUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=s&output=rss';
    var sportsFeed = proxy + sportsUrl;
    $.ajax(sportsFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #sports").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var technologyUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=tc&output=rss';
    var technologyFeed = proxy + technologyUrl;
    $.ajax(technologyFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #technology").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var scienceUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=snc&output=rss';
    var scienceFeed = proxy + scienceUrl;
    $.ajax(scienceFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #science").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });

    var worldUrl = 'https://news.google.com/news?cf=all&hl=en&ned=us&topic=w&output=rss';
    var worldFeed = proxy + worldUrl;
    $.ajax(worldFeed, {
        accepts:{
            xml:"application/rss+xml"
        },
        dataType:"xml",
        success:function(data) {

            $(data).find("item").each(function () {
              $(".tab-content #world").append('<a href="article.html?title='+encodeURI($(this).find("title").text())+'&pubDate='+encodeURI($(this).find("pubDate").text())+'" class="list-group-item list-group-item-action"><small class="text-muted"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;'+$(this).find("pubDate").text()+'</small>'+$(this).find("title").text()+'</a>');
            });


        }
    });
});
