class Phone {
  constructor(
    serialNum,
    model = 'Generic',
    processor = 'Generic',
    RAM = '2 Gb',
    width = 67.3,
    height = 138.4,
    depth = 7.3,
    resolution = '750 x 1334'
  ) {
    this.serialNum = serialNum;
    this.configuration = {
      model,
      processor,
      RAM,
      width,
      height,
      depth,
      resolution
    }
  }
  dial(num) {
    console.log(`Now dialing ${num}...`);
  }
  displayConfig() {
    console.log(this.configuration);
  }
}

module.exports = Phone;