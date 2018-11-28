import { Component, OnInit, OnChanges, Input, ViewChild, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-simple',
  templateUrl: './data-table-simple.component.html',
  styleUrls: ['./data-table-simple.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DataTableSimpleComponent implements OnInit, OnChanges {
  editing = {};
  rowsExp = [];
  rowsSort = [];
  expanded: any = {};
  timeout: any;
  tableOffSet= 0;
  rowsSel = [];
  selected = [];
  temp = [];
  id: any;

 @Input() columns: any[];
 @Input() rows: any[];
 @Input() filterProp: any;
 @Input() open: () => any;
 @Input() edit: () => any;
 @Input() delete: () => any;
 @Output() selectedItem = new EventEmitter<any>();

  @ViewChild(DataTableSimpleComponent) table: DataTableSimpleComponent;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(){
    this.temp = this.rows;
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
        console.log('paged!', event);
    }, 100);
  }

  toggleExpandRow(row) {
    console.log('Toggled Expand Row!', row);
  }

  onDetailToggle(event) {
    console.log('Detail Toggled', event);
  }



  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
  }



  updateFilter(event) {
    const filter = this.filterProp;
    const val = event.target.value.toLowerCase();

    if(val == "")
    {
      this.rows = this.temp;
    }

    // filter our data
    const rowsFilter =
        this.rows.filter(function(d){
          return d[filter].toLowerCase().indexOf(val) !== -1 || !val;
      });

      // update the rows
      this.rows = rowsFilter;

      this.tableOffSet = 0;
  }


  onSelect({ selected }) {
    this.selectedItem.emit(selected[0]);
  }

  onActivate(event) {
      console.log('Activate Event', event);
  }

  onChange(event: any): void {
    this.tableOffSet = event.offset;
  }
}
