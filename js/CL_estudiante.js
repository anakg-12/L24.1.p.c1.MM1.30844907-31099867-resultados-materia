export default class CL_estudiante{
    constructor(c,nF){
        this.cedula=c;
        this.notaf=nF;
    }
    setcedula (c){
        this.cedula = c; }
        getcedula (){
            return this.cedula;
        }
    setnotaf(nF){
        this.notaf=nF;
    }
    getnotaf(){
        return this.notaf;
    }
    }
