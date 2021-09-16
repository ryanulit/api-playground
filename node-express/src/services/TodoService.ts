import { Todo } from '../models/Todo'

interface TodoService {
    find: (id: number) => Todo | null
    add: (todo: Todo) => Todo
}

class InMemoryTodoService implements TodoService {
    todos: Todo[] = []
    
    find(id: number) {
        const todo = this.todos.find(t => t.id === id)
        if (!todo) return null
        return todo
    }

    add(todo: Todo) {
        this.todos.push(todo)
        return todo
    }
}

export const todoService = new InMemoryTodoService()