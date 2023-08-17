/*global $,document*/
$(document).ready(function () {
    "use strict";
    $("a").on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top
        }, 2000);
    });
/*start icons*/
    $(".show1").hover(function () {
        $(".one").slideDown(1000);
    });
    $(".show1").mouseleave(function () {
        $(".one").slideUp(500);
    });
    $(".show2").hover(function () {
        $(".tow").slideDown(1000);
    });
    $(".show2").mouseleave(function () {
        $(".tow").slideUp(500);
    });
    $(".show3").hover(function () {
        $(".three").slideDown(1000);
    });
    $(".show3").mouseleave(function () {
        $(".three").slideUp(500);
    });
    $(".show4").hover(function () {
        $(".four").slideDown(1000);
    });
    $(".show4").mouseleave(function () {
        $(".four").slideUp(500);
    });
    $(".buttonm").hover(function () {
        $(".foundation").slideUp(1000, function () {
            $(".mission").slideDown(1000);
        });
        $(".buttonf").css("background-color", "#fff");
        $(".buttonf").css("color", "#ffa800");
        $(".buttonm").css("background-color", "#ffa800");
        $(".buttonm").css("color", "#fff");
    });
    $(".buttonf").click(2000, function () {
        $(".mission").slideToggle(1000, function () {
            $(".foundation").slideToggle(1000);
        });
        $(".buttonm").css("background-color", "#fff");
        $(".buttonm").css("color", "#ffa800");
        $(".buttonf").css("background-color", "#ffa800");
        $(".buttonf").css("color", "#fff");
    });
/*end icons*/
/*start our-gallary*/
    $(".allf").click(500, function () {
        $(".all").toggle(500);
        $(".activitie").fadeOut(500);
        $(".event").fadeOut(500);
        $(".photo").fadeOut(500);
        $(".programe").fadeOut(500);
        $(".soheg").fadeOut(500);
        $(".video").fadeOut(500);
        //turn the images
        $(".allimages").fadeIn(1000);
        $(".videosimages").hide(1000);
        $(".sohegimages").hide(1000);
        $(".programesimages").hide(1000);
        $(".eventsimages").hide(1000);
        $(".photosimages").hide(1000);
    });
    $(".eventsf").click(500, function () {
        $(".event").toggle(500);
        $(".activitie").fadeOut(500);
        $(".all").fadeOut(500);
        $(".photo").fadeOut(500);
        $(".programe").fadeOut(500);
        $(".soheg").fadeOut(500);
        $(".video").fadeOut(500);
        //turn the images
        $(".eventsimages").slideDown(1000);
        $(".videosimages").hide(1000);
        $(".sohegimages").hide(1000);
        $(".programesimages").hide(1000);
        $(".allimages").hide(1000);
        $(".photosimages").hide(1000);
    });
    $(".photosf").click(500, function () {
        $(".photo").toggle(500);
        $(".activitie").fadeOut(500);
        $(".event").fadeOut(500);
        $(".all").fadeOut(500);
        $(".programe").fadeOut(500);
        $(".soheg").fadeOut(500);
        $(".video").fadeOut(500);
        //turn the images
        $(".photosimages").fadeIn(2000);
        $(".videosimages").hide(1000);
        $(".sohegimages").hide(1000);
        $(".programesimages").hide(1000);
        $(".allimages").hide(1000);
        $(".eventsimages").hide(1000);
        
    });
    $(".programesf").click(500, function () {
        $(".programe").toggle(500);
        $(".activitie").fadeOut(500);
        $(".event").fadeOut(500);
        $(".photo").fadeOut(500);
        $(".all").fadeOut(500);
        $(".soheg").fadeOut(500);
        $(".video").fadeOut(500);
         //turn the images
        $(".programesimages").slideDown(1000);
        $(".videosimages").hide(1000);
        $(".sohegimages").hide(1000);
        $(".allimages").hide(1000);
        $(".eventsimages").hide(1000);
        $(".photosimages").hide(1000);
    });
    $(".sohegsf").click(500, function () {
        $(".soheg").toggle(500);
        $(".activitie").fadeOut(500);
        $(".event").fadeOut(500);
        $(".photo").fadeOut(500);
        $(".programe").fadeOut(500);
        $(".all").fadeOut(500);
        $(".video").fadeOut(500);
         //turn the images
        $(".sohegimages").fadeIn(2000);
        $(".videosimages").hide(1000);
        $(".programesimages").hide(1000);
        $(".allimages").hide(1000);
        $(".eventsimages").hide(1000);
        $(".photosimages").hide(1000);
        
    });
    $(".videosf").click(500, function () {
        $(".video").toggle(500);
        $(".activitie").fadeOut(500);
        $(".event").fadeOut(500);
        $(".photo").fadeOut(500);
        $(".programe").fadeOut(500);
        $(".soheg").fadeOut(500);
        $(".all").fadeOut(500);
         //turn the images
        $(".videosimages").slideDown(1000);
        $(".sohegimages").hide(1000);
        $(".programesimages").hide(1000);
        $(".allimages").hide(1000);
        $(".eventsimages").hide(1000);
        $(".photosimages").hide(1000);
    });
/*end our-gallary*/
});