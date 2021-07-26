class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, status) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.status = status
    }

    openAccount(amount) {
        if (amount >= 100) {
            this.balance += amount
        }
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {

        this.balance -= amount
        this.chargeFee()

    }

    transfer(amount, destination) {

        this.withdraw(amount)
        destination.deposit(amount)

    }

    chargeFee() {
        if (this.balance < 0) {
            this.balance -= 35
        }
    }
}

let firstAccount = new BankAccount("Jenifer", "Ine", "Middle", "Checking", 0, "Opened")
let secondAccount = new BankAccount("Jenifer", "Ine", "Middle", "Savings", 400, "Opened")

firstAccount.openAccount(500)
firstAccount.deposit(50)
firstAccount.withdraw(350)
firstAccount.transfer(201, secondAccount)

console.log(firstAccount.balance)
console.log(secondAccount.balance)
