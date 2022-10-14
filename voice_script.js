const time = document.querySelector("#time");
const sound = document.querySelector("#sound");
const chargeLevel = document.querySelector("#charge-level");
const charge = document.querySelector("#charging");
const chargingTimeRef = document.querySelector("#charging-time");

window.onload = ()=> {
    setInterval(()=> {
        let date = new Date();
        let text = date.toLocaleString();
        time.textContent = "\n"+text;
    }, 1000)
    /*  Background System Sounds   */
    sound.play();
    sound.addEventListener("onend",
        ()=> {
            alert("Welcome !");
        });






    /*Get Battery Status*/
    navigator.getBattery().then((battery) => {
        function updateAllBatteryInfo() {
            updateChargingInfo();
            updateLevelInfo();
        }
        updateAllBatteryInfo();

        //When the charging status changes
        battery.addEventListener("chargingchange", () => {
            updateAllBatteryInfo();
        });

        //When the Battery Levvel Changes
        battery.addEventListener("levelchange", () => {
            updateAllBatteryInfo();
        });

        function updateChargingInfo() {
            if (battery.charging) {
                charge.classList.add("active");
                chargingTimeRef.textContent = 1;
            } else {
                charge.classList.remove("active");
                if (parseInt(battery.dischargingTime)) {
                    let hr = parseInt(battery.dischargingTime / 3600);
                    let min = parseInt(battery.dischargingTime / 60 - hr * 60);
                    chargingTimeRef.innerText = `System Will Be Close After ${hr} Hours ${min} Minutes...`;
                }
            }
        }

        //Updating battery level
        function updateLevelInfo() {
            let batteryLevel = `${parseInt(battery.level * 100)}%`;
            charge.style.width = batteryLevel;
            chargeLevel.textContent = batteryLevel;
        }
    });
};