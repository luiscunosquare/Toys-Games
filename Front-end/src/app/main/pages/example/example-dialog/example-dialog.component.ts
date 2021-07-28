import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TOAST_TYPE } from '@components/toast/i-toast';
import { NUMBER } from '@constants/regex';
import { ToastService } from '@services/toast.service';
import { IToyGame } from '../models/i-toygame';
import { ToygameService } from '../services/toygame.service';

@Component({
  selector: 'app-example-dialog',
  templateUrl: './example-dialog.component.html',
  styleUrls: ['./example-dialog.component.scss']
})
export class ExampleDialogComponent implements OnInit {
  form!: FormGroup;
  toygame!: any;
  loading = false;
  constructor(private fb: FormBuilder,
              private toastService: ToastService,
              private toyGameSvc: ToygameService,
              private dialog: MatDialogRef<ExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IToyGame) { this.buildForm(); }

  ngOnInit(): void {
    if(this.data){
      this.form.patchValue(this.data);
    }
  }

  buildForm(): void{
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      description : ['', []],
      age_restriction : ['', [Validators.pattern(NUMBER)]],
      company: [0, [Validators.required]],
      price: ['', [Validators.required]]
    });
  }

  saveOrUpdateToyGame(): void{
    if(this.form.invalid){ return; }
    this.loading = true;
    this.setData();
    if(!this.data){
      this.toyGameSvc.saveToyGame(this.toygame).subscribe((data) => {
        this.toyGameSvc.getToysGames();
        this.dialog.close();
        this.showNotification('Item was added successfully');
      });
    }else{
      this.toyGameSvc.updateToyGame(this.toygame).subscribe((data) => {
        this.toyGameSvc.getToysGames();
        this.dialog.close();
        this.showNotification('Item was updated successfully');
      });
    }
  }

  setData(): void{
    this.toygame = {
      ...this.form.value
    };

    if(this.data){
      this.toygame.id = this.data.id;
    }
  }

  showNotification(msg: string): void{
    this.toastService.addToast({
      title: msg,
      type: TOAST_TYPE.SUCCESS,
      isShowed: true,
      timeOut: 5000,
      resource: null
    });
  }

}
