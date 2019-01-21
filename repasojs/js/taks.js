// Class
class Task{
    constructor(title, priority){
        this.title = title;
        this.priority = priority
    }
    show(){
        return `Task: ${this.title}, Priority: ${this.priority}`;        
    }
}

class PendingPurchase extends Task {
    constructor(title, priority, quantity){
        super(title, priority);
        this.quantity = quantity;
    }
    show(){
        return `${super.show()}, Quantity: ${this.quantity}`;
    }
}

// creating objects
export const task1 = new Task('Learning JavaScript', 'High');
export const task2 = new Task('Make Tea', 'Low');
export const purchase1 = new PendingPurchase('Soap', 'Urgent', 3);
