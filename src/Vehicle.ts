/**
 * Vehicle Class
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-10-17
 */

class Vehicle {
  private colour: string
  private licensePlate: string
  private readonly maxSpeed: number
  private readonly numDoors: number
  private speed = 0

  constructor(
    colour: string,
    licensePlate: string,
    numDoors: number,
    maxSpeed: number
  ) {
    this.colour = colour
    this.licensePlate = licensePlate
    this.maxSpeed = maxSpeed
    this.numDoors = numDoors
  }

  // getters and setters
  status(): void {
    console.log(`
        -> Speed: ${this.speed}
        -> MaxSpeed: ${this.maxSpeed}
        -> Number of doors: ${this.numDoors}
        -> License Plate: ${this.licensePlate}
        -> Color: ${this.colour}
    `)
  }

  getLicensePlate(): string {
    return this.licensePlate
  }

  setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  getColor(): string {
    return this.colour
  }

  setColor(newColour: string): void {
    this.colour = newColour
  }

  getDoors(): number {
    return this.numDoors
  }

  getSpeed(): number {
    return this.speed
  }

  // accelerate() - increases the speed over a period of time.
  accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // break() - decreases the speed over a period of time.
  break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime

    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

export = Vehicle
