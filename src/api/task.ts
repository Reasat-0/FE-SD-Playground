import { Router, Request, Response } from 'express';
import { Task } from '../models/task';

const router = Router();
let tasks: Task[] = [
    {
        id: 1,
        completed: false,
        title: "Sample Task",
        description: "This is a sample task"
    }
];

// Add your CRUD API implementation here

router.get('/', (req: Request, res: Response) => {
  res.json({ data: tasks , message: "Fetched Successfully" });
});

router.get('/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if(task){
        res.status(200).json({ data : task, message: "Fetched Successfully" });
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});

router.post("/", (req: Request , res: Response) => {
    const { title, completed, description } = req.body

    const newTask: Task = {
        id: tasks.length + 1,
        title,
        description,
        completed: completed || false
    }
    tasks.push(newTask);
    res.status(200).json( { data : tasks , message : "Created Successfully"});
})

router.put("/", (req: Request , res: Response) => {
    const { title, completed, description, id } = req.body


    if(id) {
        const newTask: Task = {
            id,
            title,
            description,
            completed: completed || false
        }
        tasks = tasks.map(t => t.id === id ? newTask : t);
    }
    res.status(201).json({ message : "Updated Successfully" , data : tasks});
})


router.delete('/:id', (req: Request, res: Response) => {
    const taskId = parseInt(req.params.id);
    // const task = tasks.find(t => t.id === taskId);
    if(taskId){
        tasks.splice(taskId, 1);
        res.status(200).json({ message: "Task deleted successfully", data: tasks });  ;
    } else {
        res.status(404).json({ message: "Task not found" });
    }
});


export default router;