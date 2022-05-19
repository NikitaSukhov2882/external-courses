class ElectricDevice {
    constructor(options) {
        this.name = options.name;
        this.power = options.power;
        this.powerStatus = options.powerStatus;
    };
};

const lamp = new ElectricDevice ({
    name: 'lamp',
    power: 500,
    powerStatus: false,
});

const teapot = new ElectricDevice ({
    name: 'Electric teapot',
    power: 250,
    powerStatus: false,
});

const personalComputer = new ElectricDevice ({
    name: 'Computer',
    power: 1000,
    powerStatus: true,
});

class BatteryDevice extends ElectricDevice {
    constructor(options) {
        super(options);
        this.battery = options.battery;
    };
};

const smartphone = new BatteryDevice ({
    name: 'Phone',
    power: 100,
    powerStatus: false,
    battery: 2500,
});

const laptop = new BatteryDevice ({
    name: 'laptop',
    power: 500,
    powerStatus: false,
    battery: 5000,
});

const room = [lamp, teapot, personalComputer, smartphone, laptop];

function search(obj, name) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key].name === name) {
            console.log(`Yes, ${name} is in this room`);

            return;
          };
        };
      };
      console.log(`${name} is not detected`);
};

function totalPower(obj) {
    let power = 0;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key].powerStatus) {
          power += obj[key].power;
        };
      };
    };
    console.log(`Total power is: ${power}`);
  };