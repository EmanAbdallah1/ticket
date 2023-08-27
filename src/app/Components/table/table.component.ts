import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  clients = [
    { id: 1, name: 'أحمد محمود',tel:'0123456789', ticketNo: 'C-101',price:'$40',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , صيدناوي مول , برج العرب', imageUrl: '../../../assets/images/1.png',personNo:1,sellNo:'مرة واحدة',img:'../../../assets/images/ticket-2.png',ticketname:'تذكره رقم pdf.45' },
    { id: 1, name: 'أحمد محمود',tel:'0123456789', ticketNo: 'C-101',price:'$40',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ', imageUrl: '../../../assets/images/3.png',personNo:1,sellNo:'مرة واحدة',img:'../../../assets/images/ticket-2.png',ticketname:'تذكره رقم pdf.45' },
    { id: 1, name: 'أحمد محمود',tel:'0123456789', ticketNo: 'C-101',price:'$40',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ', imageUrl: '../../../assets/images/2.png',personNo:1,sellNo:'مرة واحدة',img:'../../../assets/images/ticket-2.png',ticketname:'تذكره رقم pdf.45' },
    { id: 1, name: 'أحمد محمود',tel:'0123456789', ticketNo: 'C-101',price:'$40',cinema:'سينما مصر , مول العرب , برج الأطنان , سرايا القبة ', imageUrl: '../../../assets/images/4.png',personNo:1,sellNo:'مرة واحدة',img:'../../../assets/images/ticket-2.png',ticketname:'تذكره رقم pdf.45' },
    // Add more data as needed
  ];

  constructor() {}

  ngOnInit(): void {}
}
