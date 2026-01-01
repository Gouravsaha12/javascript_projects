let info = {name:"Gourav", roll:95}

let showInfo = function(city, country) {
    console.log(`my name is ${this.name} roll ${this.roll}, from ${city}, ${country}`)
}

Function.prototype.mybind = (...args) => {
    let nowThis = args[0];
    let params = args.slice(1);
    return (...args2) => {
        showInfo.apply(nowThis, [...params, ...args2])
    }
}

let showMyInfo = showInfo.mybind(info, "barasat")
showMyInfo("india")