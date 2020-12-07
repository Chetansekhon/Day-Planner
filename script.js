$(document).ready(function () {

    $("#currentDay").text(moment().format('MMMM Do YYYY'));
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).siblings(".description").attr("id")

        console.log(text, time)
        console.log(this)
        localStorage.setItem(time, text);

    });

    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
    $("#18").val(localStorage.getItem("18"));

    function color(){
        var timeNow =moment().hour(); // Number
        // console.log(timeNow)
        $(".time-block").each(function(){
            var timeBlock = $(this).children(".description").attr("id");
            timeBlock = parseInt(timeBlock);
            // console.log(timeBlock)
            if(timeBlock === timeNow){
               $(this).addClass("present")
            }
            else if(timeBlock < timeNow){
                $(this).addClass("past")
                $(this).removeClass("present")
            }
            else{
                $(this).addClass("future")
                $(this).removeClass("past")
                $(this).removeClass("present")
            }
        })
    };
    color();
    setInterval(color,1000);

});