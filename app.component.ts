import { Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import 'rxjs/add/observable/of';
//import { Angular5Csv } from 'angular5-csv/Angular5-csv';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [Angular5Csv],

})
export class AppComponent implements OnInit{
  title = 'app';
   selected: string;
   //title = 'csvTOjson works!';
   text: any ;
  JSONData : any;
  csvJSON(csvText) {
   var lines = csvText.split("\n");

   var result = [];

   var headers = lines[0].split(",");
   console.log(headers);
   for (var i = 1; i < lines.length-1; i++) {

       var obj = {};
       var currentline = lines[i].split(",");

       for (var j = 0; j < headers.length; j++) {
           obj[headers[j]] = currentline[j];
       }

       result.push(obj);

   }

   //return result; //JavaScript object
   console.log(JSON.stringify(result)); //JSON
   this.JSONData = JSON.stringify(result);
}

 convertFile(input) {

 const reader = new FileReader();
 reader.readAsText(input.files[0]);
 reader.onload = () => {
   let text = reader.result;
   this.text = text;
   console.log(text);
   this.csvJSON(text);
 };

}
    dataa = [
  {
    name: "Test 1",
    age: 13,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 2',
    age: 11,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
  {
    name: 'Test 4',
    age: 10,
    average: 8.2,
    approved: true,
    description: "using 'Content here, content here' "
  },
];

   data :any=[];
   continents = [{
      id: 1,
      name: 'Asia',
      population: '4,157,300,000'
    }, {
      id: 2,
      name: 'Africa',
      population: '1,030,400,000'
    }, {
      id: 3,
      name: 'Europe',
      population: '738,600, 000'
    }, {
      id: 4,
      name: 'North America',
      population: "461114000"
    }, {
      id: 5,
      name: 'South America',
      population: '390,700,000'
    }, {
      id: 6,
      name: 'Australia',
      population: '36,700,000'
    }, {
      id: 7,
      name: 'Antartica',
      population: 0
    }
    ];

    downloadButtonPush() {
  var csvData = this.ConvertToCSV(this.dataa);
  var blob = new Blob([csvData], { type: 'text/csv' });
  var url = window.URL.createObjectURL(blob);

  if(navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, 'harsh');
  } else {
    var a = document.createElement("a");
    a.href = url;
    a.download = 'ETPHoldReview.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  window.URL.revokeObjectURL(url);
}

    ConvertToCSV(objArray: any): string {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';
    var row = "";

    for (var index in objArray[0]) {
        //Now convert each value to string and comma-separated
        row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
}
I
    autocompleListFormatter = (data: any) : SafeHtml => {
       let html = `<span>${data.name}</span>`;
       return this._sanitizer.bypassSecurityTrustHtml(html);
     }
  constructor(public http: Http,private _sanitizer: DomSanitizer,) {


  }
/*  down()
  {
    new Angular5Csv(this.dataa, 'MyFileName');

  }*/
    ngOnInit() {

        this.getdata();
      //  this.downloadButtonPush();


    }
getdata()
{
  let url: string = './assets/data.json'
  this.http.get(url)
    .map(res => {
      let json = res.json();
      console.log(json);
      this.data=json;
      return json;
    })

}
  observableSource = (keyword: any): Observable<any[]> => {



      return Observable.of(this.data);

  }

}
