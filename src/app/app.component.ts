import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoItem } from './shared/models/todo-item.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title(title: any) {
        throw new Error('Method not implemented.');
    }
    public todoinput = new FormControl();
    public todos: TodoItem[] = [];

    public todoProgress = 0;
    private calcProgress() {
        const all = this.todos.filter((todo) => !todo.removed);
        const actives = all.filter((todo) => todo.completed).length;
        if (all.length > 0) {
            this.todoProgress = Math.round((actives / all.length) * 100);
        } else {
            this.todoProgress = 0;
        }
    }
    handleAddTodo() {
        if (this.todoinput.value != '') {
            var todo = new TodoItem();
            todo.title = this.todoinput.value;
            this.todos.push(todo);
            this.todoinput.setValue('');
            this.calcProgress();
        }
    }
    handleRemoveTodo(todo: TodoItem) {
        todo.removed = true;
        this.calcProgress();
    }

    handleItemChecked(item: TodoItem) {
        item.completed = !item.completed;
        const itemIndex = this.todos.indexOf(item);
        this.todos.splice(itemIndex, 1);

        if (item.completed === true) {
            this.todos.push(item);
        } else {
            this.todos.unshift(item);
        }

        this.calcProgress();
    }
}
