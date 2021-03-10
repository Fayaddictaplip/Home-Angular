import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {FormControl, Validators} from '@angular/forms';
import { Job } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';
import { max } from 'rxjs/operators';

@Component({
  selector: 'app-add-job-modal',
  templateUrl: './add-job-modal.component.html',
  styleUrls: ['./add-job-modal.component.css']
})
export class AddJobModalComponent implements OnInit {

  jobForm: FormGroup;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private jobService: JobsService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.jobForm = this.formBuilder.group( {
      title: ['', [Validators.required]],
      employer: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      status: ['', [Validators.required]],
      minSalary: [''],
      maxSalary: ['']
    });
  }

  onSubmitForm() {
    const formValue = this.jobForm.value;
    const newJob = new Job();
    newJob.jobTitle = formValue['title'];
    newJob.employer = formValue['employer'];
    newJob.city = formValue['city'];
    newJob.state = formValue['state'];
    newJob.status = formValue['status'];
    var minSalary = formValue['minSalary'];
    var maxSalary = formValue['maxSalary'];
    newJob.dateLastUpdated = new Date().toDateString();
    this.jobService.postJobs(newJob, minSalary, maxSalary);
  }

  close() {
    this.activeModal.close();
  }

}
