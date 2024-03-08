const qr = document.getElementById("qr");
const inp = document.getElementById("content");
const imageBox = document.getElementById("image");

const GenerateQR = () => {
    if (inp.value != '') {
        qr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inp.value;
        imageBox.classList.add("showQR");
    }
    else {
        inp.classList.add("error");
        setTimeout(() => {
            inp.classList.remove("error");
        }, 1000)
    }
}