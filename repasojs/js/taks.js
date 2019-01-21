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

// class PendingPurchase extends Task {
//     constructor(title, priority, quantity){
//         super(title, priority);
//         this.quantity = quantity;
//     }
//     show(){
//         return `${super.show()}, Quantity: ${this.quantity}`;
//     }
// }


