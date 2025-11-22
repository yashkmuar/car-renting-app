export class CarModel {
    carId: number;
    carImage: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    dailyRate: number;
    regNo: string;

    constructor(){
        this.brand='';
        this.carId=0;
        this.carImage='';
        this.model='';
        this.year=0;
        this.color='';
        this.dailyRate=0;
        this.regNo='';
    }
}