import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-reportcars',
  templateUrl: './reportcars.component.html',
  styleUrls: ['./reportcars.component.css']
})
export class ReportcarsComponent implements OnInit {
  cars: Car[]=[];
  filterregistrationplate="";
  
    constructor(private carService: CarService) { 
      // this.downloadPDF();
    }
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
        docResult.save(`Lista_de_Carros.pdf`);
      });
    }

  ngOnInit(): void {
    this.cargarCars();
    
  }
  cargarCars():void{
    this.carService.lista().subscribe(
      data=>{
        this.cars=data;
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

  // generarQr():void{
  //   this.qr= this.commonUrl 
  // }

}
