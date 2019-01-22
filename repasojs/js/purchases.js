import Task from './taks.js'

export default class PendingPurchase extends Task {
    constructor(title, priority, quantity){
        super(title, priority);
        this.quantity = quantity;
    }
    show(){
        return `${super.show()}, Quantity: ${this.quantity}`;
    }
}
