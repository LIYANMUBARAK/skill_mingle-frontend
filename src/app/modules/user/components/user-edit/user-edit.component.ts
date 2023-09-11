import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { fetchUserAPI } from '../user-store/user.action';

import { Observable } from 'rxjs';
import { userSelectorData } from '../user-store/user.selector';
import { User } from '../user-store/user';

import { user } from 'src/app/helpers/interfaces/user.interface';
import { FormGroup, FormsModule } from '@angular/forms'; // Import FormsModule
import { FormBuilder } from '@angular/forms';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AngularFireStorage } from '@angular/fire/compat/storage';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {

  user$!:Observable<User|null>
  userEdit!:FormGroup
  nameExistError:boolean=false
  userNameExistError:boolean=false
previewUrl!:string|ArrayBuffer|null
  imagePath!:string
  profileImage!:File

  constructor(private store:Store,
              private fb:FormBuilder,
              private service:FrontendService,
              private router:Router,
              private storage:AngularFireStorage)
              {
                this.userEdit = this.fb.group({
                  profilePic:[''],
                  name: [''], 
                  userName: [''],
                  city: ['']
                });
              }

  ngOnInit(): void {
    this.store.dispatch(fetchUserAPI())
    this.user$ = this.store.pipe(select(userSelectorData))
    this.user$.subscribe((data:User|null) => {
      if(data){
        this.userEdit.patchValue({
          imageUrl:data.profilePic,
          name: data.name,
          userName: data.userName,
          city: data.city
        });
      }
      
    
    })
  }

  async onImageSelected(event:Event){
    // this.thumbnail = <File>(event.target as HTMLInputElement)?.files?.[0]
    
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.profileImage=inputElement.files[0]
    
         this.imagePath=`user/profilePic/${this.profileImage.name}`
         const uploadImage=await this.storage.upload(this.imagePath,this.profileImage)
         const imageUrl =<string>await uploadImage.ref.getDownloadURL()
        this.userEdit.patchValue({
          profilePic:imageUrl
        })
    }

    this.previewImage() 
  }

  async patchForm() {
    const formData = this.userEdit.value;
   console.log(formData)
   this.service.editUser(formData).subscribe((response)=>{
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'User edited'
    })
    this.router.navigate(['/userProfile'])
   })
    // Do something with formData
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result;
    };
    reader.readAsDataURL(this.profileImage!);
  }

    
}
