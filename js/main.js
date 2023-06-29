$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
};

function clearGreenClass(){
    $(".sideCategoryHref").each(function() {
        $(this).removeClass('greenUnderscore');
    })
}

$(document).ready(() => {
    $(window).on('resize scroll load', () => {
        if($('#mainContact').isInViewport()){
            clearGreenClass();
            $("#sideContact").addClass('greenUnderscore');
        }else if($('#mainEducation2').isInViewport()){
            clearGreenClass();
            $("#sideEducation").addClass('greenUnderscore');
        }else if($('#mainProjects2').isInViewport()){
            clearGreenClass();
            $("#sideProjects").addClass('greenUnderscore');
        }else if($('#mainExperience2').isInViewport()){
            clearGreenClass();
            $("#sideExperience").addClass('greenUnderscore');
        }else if($('#mainSkills2').isInViewport()){
            clearGreenClass();
            $("#sideSkills").addClass('greenUnderscore');
        }else if($('#mainHome2').isInViewport()){
            clearGreenClass();
            $("#sideHome").addClass('greenUnderscore');
        }
    })

    $('.skillsSection1').on('mouseover', () => {
        $('#htmlImg').attr('src', 'res/htmlB.png');
        $('#cssImg').attr('src', 'res/cssB.png');
        $('#javascriptImg').attr('src', 'res/javascriptB.png');
    })
    $('.skillsSection1').on('mouseout', () => {
        $('#htmlImg').attr('src', 'res/html.png');
        $('#cssImg').attr('src', 'res/css.png');
        $('#javascriptImg').attr('src', 'res/javascript.png');
    })

    $('.skillsSection2').on('mouseover', () => {
        $('#reactImg').attr('src', 'res/reactB.png');
        $('#vuejsImg').attr('src', 'res/vuejsB.png');
        $('#jqueryImg').attr('src', 'res/jqueryB.png');
    })
    $('.skillsSection2').on('mouseout', () => {
        $('#reactImg').attr('src', 'res/react.png');
        $('#vuejsImg').attr('src', 'res/vuejs.png');
        $('#jqueryImg').attr('src', 'res/jquery.png');
    })

    $('.skillsSection3').on('mouseover', () => {
        $('#nodejsImg').attr('src', 'res/nodejsB.png');
        $('#wordpressImg').attr('src', 'res/wordpressB.png');
        $('#cppImg').attr('src', 'res/cppB.png');
    })
    $('.skillsSection3').on('mouseout', () => {
        $('#nodejsImg').attr('src', 'res/nodejs.png');
        $('#wordpressImg').attr('src', 'res/wordpress.png');
        $('#cppImg').attr('src', 'res/cpp.png');
    })
});