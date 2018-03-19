import { Component } from '@angular/core';
import {FileService} from './services/file.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fileService:FileService){}
  title = 'app';
  formData = new FormData();

  onSubmit(form){
    const keys = Object.keys(form.value);
    for(let key of keys){
      this.formData.append(key, form.value[key]);
    }

    this.fileService.multipleFiles(this.formData)
    .subscribe(res=>console.log(res));

  }

  manageFile(e){
    for(let file of e.target.files){
      this.formData.append(e.target.name, file);
    }
  }

}
