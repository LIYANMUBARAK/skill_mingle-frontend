import { Component, Inject } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { orderFiles } from 'src/app/helpers/interfaces/selectedFiles.interface';
import { FrontendService } from 'src/app/services/frontend.service';


@Component({
  selector: 'app-deliver-work',
  templateUrl: './deliver-work.component.html',
  styleUrls: ['./deliver-work.component.css']
})
export class DeliverWorkComponent {

  selectedFiles:orderFiles[]=[]
  workDescription!:string
  formError:Boolean=false

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  private router:Router,
  private dialogRef:MatDialogRef<DeliverWorkComponent>,
  private service:FrontendService,
  private storage: AngularFireStorage,
  ){}

  ngOnInit(){
 
  }

 async filesSelected(event:Event){
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files?.length) {
      const files=inputElement.files
      for(let i=0;i<files.length;i++){
        this.selectedFiles.push({fileName:files[i].name,file:files[i]})
      }
      console.log(this.selectedFiles)
    }
               }

  closeModal(){
    this.dialogRef.close()
  }

  async onSubmit() {
    if (this.selectedFiles.length && this.workDescription) {
      let filesUrls: string[] = [];
  
      for (const file of this.selectedFiles) {
        const imagePath = `order/revision/${file.fileName}`;
        const uploadImage = await this.storage.upload(imagePath, file.file);
        const imageUrl = await uploadImage.ref.getDownloadURL();
        filesUrls.push(imageUrl);
      }
  
      const workDetails = {
        files: filesUrls,
        description: this.workDescription,
        gigId: this.data,
      };
  
      this.service.sendRevision(workDetails).subscribe(
        (response) => {
          this.closeModal()
        }
      );
    } else {
      this.formError = true;
    }
  }
  
}
