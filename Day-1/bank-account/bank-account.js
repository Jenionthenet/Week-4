class BankAccount {
    constructor(balance, accountType) {
        this.balance = balance
        this.accountType = accountType
    }

    deposit(amount) {
        this.balance += amount
    }

    withdraw(amount) {
        if (amount < this.balance) {
            this.balance -= amount
        }

    }

}

let checkingAccount = new BankAccount(300, "checking account")
checkingAccount.deposit(100)
checkingAccount.withdraw(50)

console.log(checkingAccount.balance)