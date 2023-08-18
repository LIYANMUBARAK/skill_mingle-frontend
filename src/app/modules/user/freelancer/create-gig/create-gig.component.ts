import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-gig',
  templateUrl: './create-gig.component.html',
  styleUrls: ['./create-gig.component.css'],


})
export class CreateGigComponent {

  file: any
  video: any
  videoError: Boolean = false
  thumbnail:any
  selectedImages:any[]=[]
  categories!:any[]
  subcategories!:any[]
  
  constructor(private _formBuilder: FormBuilder,
    private storage: AngularFireStorage,
    private service:FrontendService,
    private router:Router
  ) { }


  ngOnInit(){
    this.getAllCategories()
  }

  getAllCategories(){
    this.service.getAllCategories().subscribe((response:any)=>{
     this.categories=response.categoryData
   
    })
  }

  getSubcategoriesofCategory(event:any){
    this.service.getSubcategoriesofCategory(event.value).subscribe((response)=>{
     this.subcategories=response.subcategoryData
      console.log(this.subcategories)
    })
  }

  firstFormGroup = this._formBuilder.group({
    
    title:['',Validators.required],
    categorySelect:['',Validators.required],
    subCategorySelect:['',Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
   
    basicPrice:['', Validators.required],
    basicDeliveryTime:['', Validators.required],
    basicRevisions:['', Validators.required],
    standardPrice:['', Validators.required],
    standardDeliveryTime:['', Validators.required],
    standardRevisions:['', Validators.required],
    premiumPrice:['', Validators.required],
    premiumDeliveryTime:['', Validators.required],
    premiumRevisions:['', Validators.required],
    
  });
  thirdFormGroup = this._formBuilder.group({
  
    description:['',Validators.required],
    
  });
  isLinear = false;



  async gigUpload(){
let url:string=''
if(this.video){
  const path=`gig/video/${this.video.name}`
  const uploadGigVideo=await this.storage.upload(path,this.video)
  url =<string>await uploadGigVideo.ref.getDownloadURL()
  console.log(url)
}

const userId=localStorage.getItem('userId')

    const formData={
      ...this.firstFormGroup.value,
      ...this.secondFormGroup.value,
      ...this.thirdFormGroup.value,
      video:url,
      images:this.selectedImages,
      userId
    }

    this.service.gigUpload(formData).subscribe((response)=>{
     console.log(response)
      if(response.gigSave===true){
        this.router.navigate(['gigManagement'])
      }
    })
    
  }

  onVideoSelected(event: Event): void {
    this.video = <File>(event.target as HTMLInputElement)?.files?.[0]
    if (this.video.name.split('.').includes('mp4')) {
      this.videoError = false
    }
    else {
      this.videoError = true
    }


  }

  async onImagesSelected(event:Event){
    this.thumbnail = <File>(event.target as HTMLInputElement)?.files?.[0]
    
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const files=inputElement.files
      for(let i=0;i<files.length;i++){
        const imagePath=`gig/image/${files[i].name}`
        const uploadImage=await this.storage.upload(imagePath,this.video)
        const imageUrl =<string>await uploadImage.ref.getDownloadURL()
        this.selectedImages.push(imageUrl)
        console.log(this.selectedImages)
      }
      
    }
  }

  // fileTypeValidator(control:FormControl):{[key:string]:boolean}|null{
  //   const allowedFileTypes=['png','jpg','jpeg']
  //   if(control.value){
  //     const fileExtension = control.value.split('.').pop().toLowerCase()
  //     if(!allowedFileTypes.includes(fileExtension)){
  //       return {invalideFileType:true}

  //     }
  //   }
  //   return null
  // }




}



