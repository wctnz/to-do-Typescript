
type Task = {
    id: number
    title: string
    desc: string
    isComplete: boolean
    } 
    
const tasks: Task[] = []

const createTask = (title: string, desc: string): Task => {
const task = { 
id: Date.now(), 
title,
desc,
isComplete: false
}

tasks.push(task)
return task
}

const getTaskById = (id: number) => {
return tasks.find(t => t.id === id)
}

const removeTask = (id: number) => {
    const taskIndex = tasks.findIndex(t => t.id === id)
    const condidateTask = tasks[taskIndex]
    if (!condidateTask) throw new Error("Задача не найдена")
    tasks.splice(taskIndex, 1)    
} 


const updateTask = (id: number, newFields: Omit<Partial<Task>, "id">) => {
const taskIndex = tasks.findIndex(t => t.id === id)
const condidateTask = tasks[taskIndex]
if (!condidateTask) throw new Error("Задача не найдена")

const editedTask = {
    ...condidateTask, 
    ...newFields,
    ...getFieldsForUpdate(condidateTask, newFields)
}

tasks[taskIndex] = editedTask
} 

const toggleIsCompleteTask = (id: number, isComplete: boolean) => {
    updateTask(id, { isComplete })
} 

const getFieldsForUpdate = <T>(prev:Partial<T>, next:Partial<T>): Partial<T> => {
return Object.entries(next).reduce<Partial<T>>((acc, [key, value]) => {
    if (next[key] !== undefined && prev) {
        acc[key] = value
    }
return acc
}, prev)    
} 

const task1 = createTask("Новая задача", "Тест")
console.log("create: ", tasks)
updateTask(task1.id, { title: "new Title" })
console.log("update: ", tasks )
toggleIsCompleteTask(task1.id, false)
console.log("completed: ", tasks)
removeTask(task1.id)
console.log("delete: ", tasks)
