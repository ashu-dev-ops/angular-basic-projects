import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todo: string = '';
  // tasks:[{}]
  // var arr: {}[] = [];
  tasks: { task: string }[] = [];
  // products: { name: string; price: string }[];
  todotForm = new FormGroup({
    todo: new FormControl(''),
    // password: new FormControl(''),
  });
  onDelete(task: any) {
    let temp: { task: string }[] = [];
    temp = this.tasks.filter((i) => i.task !== task);
    this.tasks = temp;
    this.todotForm.value.todo = '';
    this.todotForm.get('todo')?.reset();
  }
  onSubmit() {
    console.log(this.todotForm.value.todo);
    this.tasks.push({ task: this.todotForm.value.todo as string });
    console.log(this.tasks[0]);
    this.todotForm.get('todo')?.reset();
    // this.todoForm.get('todo').reset();

    // console.log(this.loginForm.value);
  }
}
