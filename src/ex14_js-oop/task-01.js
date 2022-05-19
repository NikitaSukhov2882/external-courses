class Robot {
    constructor(options) {
        this.power = options.power;
        this.enabled = options.enabled;
    };

    switchPower() {
        this.enabled = !this.enabled;
        console.log(`Device status is: ${this.enabled}`);
    };
};

class CleaningDevice extends Robot {
    constructor(options) {
        super(options);
        this.cleaningMode = options.cleaningMode;
    };

    selectCleaningMode() {
        if (this.enabled) {
            if (this.cleaningMode === 'dry') {
                this.cleaningMode = 'wet';
            } else {
                this.cleaningMode = 'dry';
            }
        } else {
            console.log('Power is off');

            return;
    }
    console.log(`Cleaning mode is: ${this.cleaningMode}`);

    };
};

class VacuumCleaner extends CleaningDevice {
    deviceInfo() {
        console.log(`Device Power: ${this.power}`);
        console.log(`Cleaning mode: ${this.cleaningMode}`);
    };
};

const vacuumCleaner = new VacuumCleaner( {
        power: 100,
        enabled: false,
        cleaningMode: 'dry',
});

class RobotCleaner extends CleaningDevice {
    constructor(options) {
        super(options);
        this.localMap = options.localMap;
    };

    scanning() {
        if (this.enabled) {
            if (this.localMap) {
                console.log(`Scanning`);
            } else {
                console.log(`Local map is missing`);
            }
        } else {
            console.log(`Power is off`);
        }
    };

    deviceInfo() {
        console.log(`Device Power: ${this.power}`);
        console.log(`Cleaning mode: ${this.cleaningMode}`);
        console.log(`Local map status: ${this.localMap}`);
    }
};

const robotCleaner = new RobotCleaner( {
    power: 200,
    enabled: true,
    cleaningMode: `dry`,
    localMap: true,
});

class RobotSoldier extends Robot {
    constructor(options) {
        super(options);
        this.localMap = options.localMap;
        this.shooting = options.shooting;
    };

    scanning() {
        if (this.enabled) {
            if (this.localMap) {
                console.log(`Scanning`);
            } else {
                console.log(`Local map is missing`);
            }
        } else {
            console.log(`Power is off`);
        }
    };

    startShooting() {
        if (this.enabled) {
            this.shooting = true;
        } else {
            console.log(`power is off`);
        }
    };

    startShooting() {
        if (this.enabled) {
            this.shooting = false;
        } else {
            console.log(`power is off`);
        }
    };

    shootingStatus() {
        console.log(`Shooting status: ${this.shooting}`);
    };

    deviceInfo() {
        console.log(`Device Power: ${this.power}`);
        console.log(`Local map status: ${this.localMap}`);
        console.log(`Shooting status: ${this.shooting}`);
    };
};

const robotSoldier = new RobotSoldier({
    power: 1000,
    enabled: true,
    localMap: true,
    shooting: false,
});