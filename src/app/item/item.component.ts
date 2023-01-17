import { Component, Input, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Item } from "../item";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent {

  editable = false;

  @Input() item!: Item;
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description: string) {

    Swal.fire({
  title: 'Do you want to save the changes?',
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: 'Save',
  denyButtonText: `Don't save`,
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
    if (!description){
     Swal.fire('Please add Something')
     return
    } 
    this.editable = false;
    this.item.description = description;
    Swal.fire('Saved!', '', 'success')
  } else if (result.isDenied) {
    Swal.fire('Changes are not saved', '', 'info')
  }
})
  }
}

