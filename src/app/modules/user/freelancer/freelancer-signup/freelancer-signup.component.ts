import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { skills } from 'src/app/helpers/interfaces/skill.interface';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { languages } from 'src/app/helpers/interfaces/language.interface';
import { occupation } from 'src/app/helpers/interfaces/occupation.interface';
import { certifiction } from 'src/app/helpers/interfaces/certification.interface';
import { FrontendService } from 'src/app/services/frontend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-freelancer-signup',
  templateUrl: './freelancer-signup.component.html',
  styleUrls: ['./freelancer-signup.component.css']
})
export class FreelancerSignupComponent {

  faXmarkCircle = faXmarkCircle
  skill: any
  selectSkillLevel: any
  skillError: boolean = false
  selectSkillLevelError: boolean = false


  selectLanguage!: string
  selectLanguageLevel!: string
  selectLanguageError: boolean = false
  selectLanguageLevelError: boolean = false


  selectOccupation!: string
  selectOccupationError: boolean = false
 
  selectEducation!: string;
  selectEducationError:boolean=false
  
  
  certificationName!: string;
  certifiedFrom!:string
  certifiedYear!:string
  certificationNameError:boolean=false
  certifiedFromError:boolean=false
  certifiedYearError:boolean=false

  userId!:string|null
  freelancerApplyData!:object

  constructor(private fb: FormBuilder, private service:FrontendService,private router:Router) { }

  ngOnInit() { 
    this.userId=localStorage.getItem('userId') 
  }

  freelancerForm = this.fb.group({
    skills: this.fb.array([]),
    languages: this.fb.array([]),
    occupation:[''],
    education:this.fb.array([]),
    certification:this.fb.array([]),
    description:[''],
    personalWebsite:[''],
    instagram:[''],
    facebook:[''],
    twitter:['']

  })

  //skill
  
  get skills() {
    return this.freelancerForm.get("skills") as FormArray
  }


  onType(e: any) {
    this.skill = e.value
  }

  onSkillLevelSelect(e: any) {
    this.selectSkillLevel = e.value

  }

  skillAdd() {
    if (this.skill && this.selectSkillLevel) {
      this.skills.push(new FormControl({ skill: this.skill, level: this.selectSkillLevel }))
    }
    else if (!this.skill) {
      this.skillError = true
    }
    else if (!this.selectSkillLevel) {
      this.selectSkillLevelError = true
    }

  }


  getSkillAndValue(index: number) {
    let skills: skills = this.freelancerForm.value.skills?.[index] as skills
    return `${skills?.skill} - ${skills?.level}`
  }
  deleteSkill(index: number) {

    this.skills.removeAt(index)

  }

  // language

  onLanguageSelect(e: any) {
    this.selectLanguage = e.value
    console.log(this.selectLanguage)
  }

  onLanguageLevelSelect(e: any) {
    this.selectLanguageLevel = e.value
    console.log(this.selectLanguageLevel)
  }

  languageAdd() {
    if (this.selectLanguage && this.selectLanguageLevel) {
      this.languages.push(new FormControl({ language: this.selectLanguage, level: this.selectLanguageLevel }))
      this.selectLanguage = "null"
      this.selectLanguageLevel = ""
    }
    else if (!this.selectLanguage) {
      this.selectLanguageError = true
    }
    else if (!this.selectLanguageLevel) {
      this.selectLanguageLevelError = true
    }

  }

  get languages() {
    return this.freelancerForm.get("languages") as FormArray
  }

  getLanguageAndLevel(index: number) {
    let languages: languages = this.freelancerForm.value.languages?.[index] as languages
    return `${languages?.language} - ${languages?.level}`
  }
  deleteLanguage(index: number) {

    this.languages.removeAt(index)

  }

  

 

//  education

onEducationSelect(e: any) {
  this.selectEducation = e.value
  
}

get education() {
  return this.freelancerForm.get("education") as FormArray
}

educationAdd() {
  if (this.selectEducation) {
    this.education.push(new FormControl( this.selectEducation))
    
  }
  else if (!this.selectEducation) {
    this.selectEducationError = true
  }
 

}


getEducation(index: number) {
  let education = this.freelancerForm.value.education?.[index]
  return `${education} `
}
deleteEducation(index: number) {

  this.education.removeAt(index)

}
    
  
// certification

onTypeCertificationName(e: any) {
  this.certificationName = e.value
}

onTypeCertifiedFrom(e: any) {
  this.certifiedFrom = e.value
}

onCertifiedYearSelect(e: any){
  this.certifiedYear = e.value
}


get certification() {
  return this.freelancerForm.get("certification") as FormArray
}


certificationAdd(){
      if(this.certificationName&&this.certifiedFrom&&this.certifiedYear){
        this.certification.push(new FormControl({ certificationName: this.certificationName, certifiedFrom: this.certifiedFrom, certifiedYear:this.certifiedYear}))
      }
      else if(!this.certificationName)
      {
        this.certificationNameError=true
      }
      else if(!this.certifiedFrom)
      {
        this.certifiedFromError=true
      }
      else if(!this.certifiedYear)
      {
        this.certifiedYearError=true
      }
}

getCertification(index: number) {
  let certification : certifiction = this.freelancerForm.value.certification?.[index] as certifiction
  return `${certification?.certificationName} - ${certification?.certifiedFrom }-${certification?.certifiedYear}`
}

deleteCertification(index: number) {

  this.certification.removeAt(index)

}
 
//

onSubmit(){
  this.freelancerApplyData={userId:this.userId,...this.freelancerForm.value}
  console.log(this.freelancerApplyData)
  this.service.freelancerApply(this.freelancerApplyData).subscribe((response)=>{
    if(response.freelancerApply===true){
      console.log(response)
    }
  })
}


}

