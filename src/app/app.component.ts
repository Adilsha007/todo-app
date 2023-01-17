import { Component } from '@angular/core';
import { Item } from './item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'todo';

  filter : 'all' | 'active' | 'done' = 'all';

  allItems  = [
    { description: 'eat', done: false },
    { description: 'sleep', done: false },
    { description: 'play', done: false },
    { description : 'laugh', done: false }
  ];

  get items(){
    if (this.filter === 'all'){
      return this.allItems
    }

    return this.allItems.filter((item)=> this.filter === 'done' ? item.done : !item.done )

  }

  addItem(description: string){

    Swal.fire('You just added an item to your List')
    .then(()=>{
      this.allItems.unshift({
      description,
      done:false
    })
    })

  }

  removeItem(item: Item) {

    Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }
})
 
}

}
