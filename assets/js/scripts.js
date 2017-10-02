jQuery(document).ready(function($){




/* --------------- Deleting placeholder focus --------------- */
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });
/* ------------- End Deleting placeholder focus ------------- */


});
//# sourceMappingURL=scripts.js.map
