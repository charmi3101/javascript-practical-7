 $(document).ready(function() {
            var html="";
   
            });
function get_speaker(speak)
    {
        var html="";
        $.ajax({
type: "get",
url: "json_files/"+speak+".json",

dataType: "json",
success: function(data) {

                   html+='<h1>'+data.speakers[0].title+'</h1><img src="'+data.speakers[0].image+'"><h2>'+data.speakers[0].month+'<br>'+data.speakers[0].speaker+'</h2><p>'+data.speakers[0].text+'</p>';
                   $('#container').html(html);
}
           
});
    }
