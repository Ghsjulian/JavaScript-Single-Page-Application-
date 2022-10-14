$(document).ready(function () {
    setInterval(()=> {
        // ONLINE ACTIVATION STATUS
        if (navigator.onLine == true) {
            $(".online_stat").attr("src", "/asset/online.gif");
        } else {
            $(".online_stat").attr("src", "/asset/offline.png");
        }
        let battery_st = $("#charging-time").text();
        if (battery_st == "1") {
            $(".btr_sta").attr("src", "/asset/charging.gif");
        } else {
            $(".btr_sta").attr("src", "/asset/battery.png");
        }
    },
        1000);
});