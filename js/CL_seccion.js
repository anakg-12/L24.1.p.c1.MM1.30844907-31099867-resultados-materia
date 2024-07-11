export default class CL_seccion{
    constructor(){
        this.acumnotaf=0;
        this.contrepro=0;
        this.contapro=0;
    }
    procesar(e){
        this.acumnotaf+=e.getnotaf();
        if(e.notaf>= 48)
            this.contapro++;
        else
        this.contrepro++;
    }
    promedio(){
        return this.acumnotaf/(this.contapro+this.contrepro);
    }
}