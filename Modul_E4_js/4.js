function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
} 

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function() {
    return this.isPlugged ? this.power : 0;
}

const fridge = new ElectricalAppliance('fridge', 1500);
const fan = new ElectricalAppliance('fan', 500);

console.log(fridge.getPowerUsed() + fan.getPowerUsed());

fridge.plugIn();
console.log(fridge.getPowerUsed() + fan.getPowerUsed());

fan.plugIn();
console.log(fridge.getPowerUsed() + fan.getPowerUsed());
