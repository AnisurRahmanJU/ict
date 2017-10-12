$(document).ready(function() {
    /**
     * For disable buttons which have href="#"
     * All links implemented.. :)
     */
    // $("a[href='#']:not(.prev)").click(function(event) {
    //     event.preventDefault();
    //     Android.showToast("Coming Soon...");
    // });

    /**
     * Go to previous url from history
     * Prev and Next button added completed.. :)
     */
    // $("a.prev[href='#']").click(function(event) {
    //     event.preventDefault();
    //     window.history.back();
    // });

    /**
     * SVG line animation with Vivus
     */
    $("svg.line-anim").each(function(index, element) {
        new Vivus(element, {
            duration: 200,
            type: 'oneByOne',
            delay: 50
        }, null);
    });

    /**
     * SVG line animation with Vivus on Click event
     */
    $("svg.line-anim").click(function() {
        var id = $(this).attr("id");
        new Vivus(id, {
            duration: 200,
            type: 'oneByOne',
            delay: 50
        }, null);
    });

    /**
     * Add ask question to all page
     * http://ask.imaginativeworld.org/askques.php
     */
    $("div.body-content").append(" \
<div class='card'> \
<p>কোনো প্রশ্ন থাকলে তা <a href='http://ask.imaginativeworld.org/askques.php'>এখানে</a> করতে পার।</p> \
</div> \
    ");

});
