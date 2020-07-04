export class AdjustDayAndMonth{

  get day(){
    if ((new Date().getDay()) < 10){
      return `0${new Date().getDay()}`;
    }
    else{
      return `${new Date().getDay()}`;
    }
  }

  get month(){
    if ((new Date().getMonth() + 1) < 10){
      return `0${new Date().getMonth() + 1}`;
    }else{
      return `${new Date().getMonth() + 1}`;
    }
  }
}
