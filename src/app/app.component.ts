
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quizForm: FormGroup;
  selectedOption: any;
  ngOnInit(): void { }

  constructor(private fb: FormBuilder) {

    this.quizForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(3)],
     
      quiz: this.fb.array([
        this.fb.group({
          ques: ['', Validators.required],
          ans: ['', Validators.required],
          option1: [''],
          option2: [''],
          option3: [''],
          radio:['']

        })
      ]),
    });
  }


  get quiz(): FormArray {
    return this.quizForm.get("quiz") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      ques: ['', Validators.required],
      ans: ['', Validators.required],
      option1: [''],
      option2: [''],
      option3: [''],
      radio:['']
    })
  }
  
//To add new Question
  addquiz() {
    this.quiz.push(this.newSkill());
  }

  //To remove questiion
  removeSkill(i: number) {
    this.quiz.removeAt(i);
  }

  //For selecting correct option
  // radioChangeHandler(event:any)
  // {
  //     this.selectedOption = event.target.value;
  //     console.log(this.selectedOption);
  //     console.log(event.target.value);
    
      
  // }

  onSubmit() {
    console.log(this.quiz.value);

    (<HTMLInputElement>document.getElementById("quizform")).style.display = "none";
    (<HTMLInputElement>document.getElementById("output")).style.display = "block";
  }

}
