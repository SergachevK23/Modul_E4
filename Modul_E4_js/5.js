class ElectricalAppliance
{
    constructor(name, power)
    {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn()
    {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    }

    getPowerUsed()
    {
        return this.isPlugged ? this.power : 0;
    }
}

const fridge = new ElectricalAppliance('fridge', 45);
const fan = new ElectricalAppliance('fan', 1000);

console.log(fridge.getPowerUsed() + fan.getPowerUsed());

fridge.plugIn();
console.log(fridge.getPowerUsed() + fan.getPowerUsed());

fan.plugIn();
console.log(fridge.getPowerUsed() + fan.getPowerUsed());
