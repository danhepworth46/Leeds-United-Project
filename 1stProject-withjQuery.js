// jQuery

// News Wrapper Active

$(".cross").css("display", "none");

$(".news-wrapper").click(function(){
    $(".vid-container").addClass("hide");
    $(".news-article-wrapper").addClass("hide");
    $(".preview-wrapper").addClass("hide");
    $(".head-img-container").addClass("hide");
    $(".break-container").addClass("hide");
    $(".leeds-badge").addClass("hide");
    $(".news-wrapper").addClass("new-wrapper-styles");
    $(".news-wrapper").removeClass("news-wrapper");
    $(".bamford-callup").addClass("new-callup-styles");
    $(".bamford-callup").removeClass("bamford-callup");
    $(".bamford-title").addClass("new-bamTitle-styles");
    $(".bamford-title").removeClass("bamford-title");
    $(".home").addClass("new-home-styles");
    $(".home").removeClass("home");
    $(".lufc").addClass("new-lufc-styles");
    $(".lufc").removeClass("lufc");
    $(".news").addClass("new-news-styles");
    $(".news").removeClass("news");
    $(".news-wrapper-column").addClass("col-lg-12");
    $(".news-container").addClass("col-xxl-12").addClass("new-news-container");
    $(".news-container").removeClass("news-container");
    $(".leeds-badge-hidden").addClass("new-badge-styles");
    $(".leeds-badge-hidden").removeClass("leeds-badge-hidden");
    $(".cross").css("display", "block");
})

// News Wrapper Hide

$(".fa-times").click(function(){
    $(".cross").css("display", "none");
    $(".new-wrapper-styles").addClass("news-wrapper"); 
    $(".new-wrapper-styles").removeClass("new-wrapper-styles");
    $(".new-callup-styles").addClass("bamford-callup");
    $(".new-callup-styles").removeClass("new-callup-styles");
    $(".new-bamTitle-styles").addClass("bamford-title");
    $(".new-bamTitle-styles").removeClass("new-bamTitle-styles");
    $(".new-home-styles").addClass("home");
    $(".new-home-styles").removeClass("new-home-styles");
    $(".new-lufc-styles").addClass("lufc");
    $(".new-lufc-styles").removeClass("new-lufc-styles");
    $(".new-news-styles").addClass("news");
    $(".new-news-styles").removeClass("new-news-styles");
    $(".news-wrapper-column").removeClass("col-lg-12");
    $(".new-news-container").addClass("news-container");
    $(".new-news-container").removeClass("col-xxl-12").removeClass("new-news-container");
    $(".new-badge-styles").addClass("leeds-badge-hidden");
    $(".new-badge-styles").removeClass("new-badge-styles");
    $(".vid-container").removeClass("hide");
    $(".news-article-wrapper").removeClass("hide");
    $(".preview-wrapper").removeClass("hide");
    $(".head-img-container").removeClass("hide");
    $(".break-container").removeClass("hide");
    $(".leeds-badge").removeClass("hide");
});
