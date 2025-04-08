import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReceiptService } from '../services/receipt.service';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent {
  receiptForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private receiptService: ReceiptService) {
    this.receiptForm = this.formBuilder.group({
      date: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.receiptForm.patchValue({
      file: file
    });
  }

  onSubmit() {
    if (this.receiptForm.valid) {
      const formData = new FormData();
      formData.append('date', this.receiptForm.get('date')?.value);
      formData.append('amount', this.receiptForm.get('amount')?.value);
      formData.append('description', this.receiptForm.get('description')?.value);
      formData.append('file', this.receiptForm.get('file')?.value);

      this.receiptService.submitReceipt(formData).subscribe(response => {
        console.log('Receipt submitted successfully', response);
        this.receiptForm.reset();
      }, error => {
        console.error('Error submitting receipt', error);
      });
    }
  }
}