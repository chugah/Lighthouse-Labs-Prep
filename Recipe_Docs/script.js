
$(document).ready(function() {
    // create the image rotator
    setInterval("rotateImages()", 3000);
    });

    function rotateImages() {
        var CurPhoto = $('#banner-images div.current');
        var NxtPhoto = CurPhoto.next();
        if (NxtPhoto.length == 0)
            NxtPhoto = $('#banner-images div:first');
            CurPhoto.removeClass('current').addClass('previous');
            NxtPhoto.css({ opacity: 0.0 }).addClass('current')
                    .animate({ opacity: 1.0 }, 1000,
                                function() {
                                    CurPhoto.removeClass('previous');
                                });
        }

$("document").ready(function() {
    $('.item').one("click", function(){
    var pic = '<img class="add-on" data-type="selector" src="https://www.wpclipart.com/signs_symbol/checkmarks/checkmarks_3/.cache/check_mark.png" height="14px" width="14px" />';
        $(this).append(pic);
    });
});

function toggleDiv(divId) {
   $("#"+divId).toggle("slow");
}

function toggleAllDiv (divId) {
	if ($('div[id^=Div]').is(':hidden')) {
		$('div[id^=Div]').show();
	}
	else if ($('div[id^=Div]').is(':visible')) {
		$('div[id^=Div]').hide();
	}
	else
		return 0;
}

(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
            //form validation rules
            $("#register-form").validate({
                rules: {
                    firstname: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5
                    },
                    agree: "required"
                },
                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    email: "Please enter a valid email address",
                    agree: "Please accept our policy"
                },
                submitHandler: function(form) {
                    form.submit();
                }
            });
        }
	}

    //when the dom has loaded setup form validation rules
    $(document).ready(function($) {
        JQUERY4U.UTIL.setupFormValidation();
    });

})(jQuery, window, document);

	