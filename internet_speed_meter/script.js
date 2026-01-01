const startBtn = document.getElementById("start")
const result = document.getElementById("result")

const url = "https://speed.cloudflare.com/__down?bytes=5000000&cacheBust=" + Date.now();

let checkSpeed = () => {
    let start = performance.now();
    fetch(url)
    .then(res => {
        if(!res.ok) throw new Error("Network error");
        return res.arrayBuffer();
    })
    .then(buffer => {
        const end = performance.now();
        const durationSeconds = (end - start) / 1000;
        const bitsDownloaded = buffer.byteLength * 8;
        const speedMbps = bitsDownloaded / ( durationSeconds * (1024 * 1024) );
        console.log("Download Speed:", speedMbps.toFixed(2), "Mbps");
        result.innerText = "Download Speed:" + speedMbps.toFixed(2) + "Mbps";
    })
    .catch(err => {
        result.innerText = err;
    })
    .finally(()=>{
        console.log("all done")
    })
}

startBtn.addEventListener("click", checkSpeed)