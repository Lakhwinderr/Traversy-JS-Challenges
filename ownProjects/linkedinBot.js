var el = document.querySelectorAll(".artdeco-button")
var arr = []
el.forEach(btn => {
    if(btn.textContent.trim() === "Connect"){
        arr.push(btn)
    }
})

function clickConnect(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            arr[i].click();
            console.log("Clicked connect");

            setTimeout(() => {
                var send = document.querySelector('[aria-label="Send now"]');
                send.click();
                console.log("Clicked send");
            }, 2000); // Delay for sending after clicking connect
        }, i * 2000); // Delay for clicking connect
    }
}

// Assuming arr is an array of elements
clickConnect(arr);


