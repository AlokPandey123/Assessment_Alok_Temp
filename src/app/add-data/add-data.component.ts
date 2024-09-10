import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.scss']
})
export class AddDataComponent implements OnInit {
  dataForm: FormGroup;
  dataEntries: { datetime: Date; temperature: number }[] = [];

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.dataForm = this.fb.group({
      datetime: [null, [Validators.required, this.pastDateValidator.bind(this)]],
      temperature: [null, [Validators.required, Validators.min(-50), Validators.max(50)]]
    });
  }

  ngOnInit(): void {
    this.dataEntries = this.dataService.getData();
  }

  onSubmit() {
    if (this.dataForm.valid) {
      const newEntry = this.dataForm.value;
      this.dataEntries.push(newEntry);
      this.dataService.setData(this.dataEntries);
      this.dataForm.reset();
    }
  }

  removeEntry(index: number) {
    this.dataEntries.splice(index, 1);
    this.dataService.setData(this.dataEntries);
  }

  pastDateValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value && new Date(control.value) > new Date()) {
      return { 'futureDate': true };
    }
    return null;
  }
}