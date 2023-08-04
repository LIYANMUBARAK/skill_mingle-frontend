import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { skills } from 'src/app/helpers/interfaces/skill.interface';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
 

@Component({
  selector: 'app-freelancer-signup',
  templateUrl: './freelancer-signup.component.html',
  styleUrls: ['./freelancer-signup.component.css']
})
export class FreelancerSignupComponent {

  faXmarkCircle=faXmarkCircle
  skill:any
  selectLevel:any
  skillError:boolean=false
  selectLevelError:boolean=false
  
  constructor(private fb:FormBuilder){}

  ngOninit(){}

  freelancerForm=this.fb.group({
    skills:this.fb.array([]),
  })

  skillAdd(){
    if(this.skill&&this.selectLevel){
      this.skills.push(new FormControl({skill:this.skill,level:this.selectLevel}))
    }
    else if(!this.skill){
      this.skillError=true
    }
    else if(!this.selectLevel){
      this.selectLevelError=true
    }
    console.log(this.freelancerForm.value)
  }

  get skills(){
    return this.freelancerForm.get("skills") as FormArray
  }

  onSelect(e:any){
    this.selectLevel=e.value
  
  }

  onType(e:any){
    this.skill=e.value
  }

  getSkillAndValue(index:number){
    let skills:skills=this.freelancerForm.value.skills?.[index] as skills
    return `${skills?.skill} - ${skills?.level}`
  }
  deleteSkill(index:number){
    
    this.skills.removeAt(index)
    
  }
  
}
