import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Receipt } from '../models/receipt.model';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {
  private apiUrl = 'http://localhost:5000/api/receipts'; // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  createReceipt(receipt: Receipt): Observable<Receipt> {
    const formData = new FormData();
    formData.append('date', receipt.date);
    formData.append('amount', receipt.amount.toString());
    formData.append('description', receipt.description);
    formData.append('file', receipt.file); // Assuming 'file' is a File object

    return this.http.post<Receipt>(this.apiUrl, formData);
  }

  getReceipts(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(this.apiUrl);
  }
}