import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-add-skills',
  templateUrl: './add-skills.component.html',
  styleUrls: ['./add-skills.component.css'],
})
export class AddSkillsComponent implements OnInit {
  constructor(
    private router: Router,
    private data: DataService,
    private formBuilder: FormBuilder
  ) {}
  skillsForm = this.formBuilder.group({
    skills: [''],
    newSkill: [''],
  });
  skills: String[] = [];
  ngOnInit(): void {
    this.skills = this.data.skills;
    this.skillsForm = this.formBuilder.group({
      skills: [this.skills],
      newSkill: ['', [Validators.required]],
    });
  }
  onSubmit() {
    if (this.skillsForm.status === 'VALID') {
      const a: String = this.skillsForm.value.newSkill;
      this.data.skills.push(a);
      this.skillsForm = this.formBuilder.group({
        skills: [this.skills],
        newSkill: ['', [Validators.required]],
      });
    }
  }
}
