$(function() {
    $("#check-all").click(function () {
        $(".checkbox").prop('checked', $(this).prop('checked'));
    });
    
    $(".checkbox").change(function(){
        if (!$(this).prop("checked")){
            $("#check-all").prop("checked",false);
        }
    });
});