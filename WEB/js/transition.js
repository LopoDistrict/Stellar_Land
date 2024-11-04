let num = 1; 
        
function nv_act(n) {
    const span_act = document.getElementById("act" + (n + 1)); 
    const span_anc = document.getElementById("act" + n); 

    if (span_act) { 
        $(span_anc).fadeOut(1000);  //cacher
        $(span_act).fadeIn(1000); // monter
    }
}

$(document).ready(function() {
    $("#planete_txt").hide();
    $("#planete_txt").fadeIn(7500);
    //pour le nom de la planète
    
    $("span[id^='act']").hide();
    $("#act1").show();

    $("#next").click(function(event) {
        event.preventDefault(); 
        if (num < 3) { 
            nv_act(num);
            num++; 
        }
    });

    $("#previous").click(function(event) {
        event.preventDefault();
        if (num > 1) { 
            num--;
            const span_act = document.getElementById("act" + num);
            const span_next = document.getElementById("act" + (num + 1));

            $(span_next).fadeOut(1000); 
            $(span_act).fadeIn(1000); 
        }
    });
});