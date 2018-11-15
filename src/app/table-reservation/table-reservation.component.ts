import { Component, OnInit, ViewChild } from '@angular/core';
import { FunctionMinService } from '../function-min.service';

@Component({
  selector: 'app-table-reservation',
  templateUrl: './table-reservation.component.html',
  styleUrls: ['./table-reservation.component.scss']
})
export class TableReservationComponent implements OnInit {

  @ViewChild('chooDate') chooDate;
  @ViewChild('chooTime') chooTime;



  newDate=new Date;
  newYear=this.newDate.getFullYear();
  newMonth=this.newDate.getMonth();
  newDay=this.newDate.getDay();
  date=this.getDate();
  
  constructor(private FunctionMin:FunctionMinService) { }
  savedReservations=this.FunctionMin.getFromLocalStorage("savedReservations");
  

  ngOnInit() {
  
  }

getDate(){
 if (this.newMonth<10 && this.newDay<10) {
   return this.newYear+"-"+"0"+this.newMonth+"-"+"0"+this.newDay
 } 
 if (this.newDay<10) {
  return this.newYear+"-"+this.newMonth+"-"+"0"+this.newDay
 }
 if(this.newMonth<10)
 return this.newYear+"-"+"0"+this.newMonth+"-"+this.newDay

}

clickOnTable(event,modalTable,dateTime){
  modalTable.style.display="block";
  modalTable.children[0].children[0].children[0].firstChild.textContent=event.target.textContent;
  dateTime.value=this.chooDate.nativeElement.value+"/"+this.chooTime.nativeElement.value;
}
closeModal(element){
  element.style.display="none"
}
saveReservation(event,modalTable,alertSuccess,alertDanger){
event.preventDefault();
let dateAndTime=event.target[0].value,
    name=event.target[1].value,
    lastName=event.target[2].value,
    phoneNumber=event.target[3].value,
    tableNum=event.target.parentElement.previousSibling.textContent;

if (this.savedReservations[dateAndTime+"/"+tableNum]!==undefined) {
  modalTable.style.display="none";
  alertDanger.style.display="block";
  return;
}
    
let newSaveReservation={
  tableNum:tableNum,
  dateAndTime:dateAndTime,
  name:name,
  lastName:lastName,
  phoneNumber:phoneNumber
}
this.savedReservations[dateAndTime+"/"+tableNum]=newSaveReservation;
this.FunctionMin.setToLocalStorage('savedReservations',this.savedReservations);
modalTable.style.display="none";
alertSuccess.style.display="block"
}
checkTables(event){
  event.preventDefault();
 let checkDate=event.target[0].value,
     checkTime=event.target[1].value,
     checkLocal=this.FunctionMin.getFromLocalStorage('savedReservations');
for (let index = 1; index <=15; index++) {
  if (checkLocal[checkDate+"/"+checkTime+"/"+"Table"+index+"×"]==undefined) {
    checkLocal[checkDate+"/"+checkTime+"/"+"Table"+index+"×"]==null;
  }else{
    document.getElementById(checkLocal[checkDate+"/"+checkTime+"/"+"Table"+index+"×"].tableNum.slice(0,-1)).style.backgroundColor="red"
    
  }
  
}
     
    
   
}
}
