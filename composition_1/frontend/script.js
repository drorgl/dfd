$(function () { 
    $('.update').click(function () {
        var a_href = $(this).attr('href');

        $.ajax({
            type: "POST",
            url: "/api/is_ok",
            success: function (server_response) {
                $(".result").html(server_response);
            },
            error:function(err){
                $('.result').html(`ERROR: ${err.status} ${err.statusText}`);
            }
        });

        return false
    });
});