import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reportbyday',
  templateUrl: './reportbyday.component.html',
  styleUrls: ['./reportbyday.component.css']
})
export class ReportbydayComponent implements OnInit {
  registers: Register[] = [];
  
  filtername="";

  constructor(private registerService: RegisterService) { }
  public downloadPDF() {
    // Extraemos el
    const DATA = document.getElementById('htmlData');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3,
      logging: true, letterRendering: true, useCORS: true 
    };
    
    html2canvas(DATA, options).then((canvas) => {

      const img = canvas.toDataURL('image/PNG');

      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save(`RegistroXdia.pdf`);
    });
  }

  ngOnInit(): void {
    this.getdate();
        this.cargarRegisters();
  }
  public  fullday:any="";


  cargarRegisters(): void {
    this.registerService.lista(this.fullday).subscribe(
      data => {
        this.registers = data;
        
      },
      err => {
        console.log(err);
      }
    )
  }

  getRegisters(): void {
     var chooseDay:any= (document.getElementById("date") as HTMLInputElement).value;
     console.log(chooseDay);
    this.registerService.lista(chooseDay).subscribe(
      data => {
        this.registers = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  getdate(){     
var today = new Date();
var day: any = new Date().getDate();
if (day < 10) {day = '0' + day;}
var month: any = today.getMonth() + 1;
if (month < 10) {month = '0' + month;}
var year = today.getFullYear();
this.fullday  =year  + "-" + month + "-" + day ;
console.log(today);
console.log(day);
console.log(this.fullday);


}
  

}
