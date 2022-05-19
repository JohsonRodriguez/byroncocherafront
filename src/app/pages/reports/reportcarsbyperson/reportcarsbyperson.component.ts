import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Person } from 'src/app/models/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-reportcarsbyperson',
  templateUrl: './reportcarsbyperson.component.html',
  styleUrls: ['./reportcarsbyperson.component.css'],
  styles: [
    `
      .greenClass { background-color: green }
      .redClass { background-color: red }
    `
  ]
})
export class ReportcarsbypersonComponent implements OnInit { 

  persons: Person[]=[];
  estate="";
  filtername="";
  
  constructor(private personService: PersonService) { }
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
      docResult.save(`Lista_VehiculosxPersona.pdf`);
    });
  }

  ngOnInit(): void {
    
    this.cargarPersons();
    

  }

  cargarPersons():void{
    this.personService.lista().subscribe(
      data=>{
        this.persons=data;
        
       
      },
      err=>{
        console.log(err);
      }
    )
   
  }

 

}
