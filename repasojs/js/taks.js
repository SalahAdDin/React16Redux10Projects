// Class
export default class Task{
    constructor(title, priority){
        this.title = title;
        this.priority = priority
    }
    show(){
        return `Task: ${this.title}, Priority: ${this.priority}`;        
    }
}

