document.addEventListener("DOMContentLoaded", function() {
    // BankAccount class definition
    class BankAccount {
        constructor(bankAccountName, initialBalance) {
            this.bankAccountName = bankAccountName;
            this.balance = initialBalance >= 0 ? initialBalance : 0;
            this.customerName = "Sankar Sai";
        }

        deposit(amount) {
            if (amount > 0) {
                this.balance += amount;
                console.log(`Deposited amount: ${amount}`);
            } else {
                console.log("Invalid amount for deposit.");
            }
        }

        withdraw(amount) {
            if (amount > 0) {
                if (this.balance >= amount) {
                    this.balance -= amount;
                    console.log(`Withdrawn amount: ${amount}`);
                } else {
                    console.log("Insufficient balance for withdrawal.");
                }
            } else {
                console.log("Invalid amount for withdrawal.");
            }
        }
    }

    // Initial bank account creation
    var account = new BankAccount("HDFC", 5000);
    displayAccountDetails(account);

    // Function to perform deposit or withdrawal
    window.performTransaction = function() {
        var amount = parseFloat(document.getElementById("amount").value);
        var transactionType = document.getElementById("transactionType").value;

        if (transactionType === "deposit") {
            account.deposit(amount);
        } else if (transactionType === "withdraw") {
            account.withdraw(amount);
        }

        // Display updated account details after performing the transaction
        displayAccountDetails(account, amount, transactionType);
        updateTransactionHistory(amount, transactionType);
    };

    // Function to display account details
    function displayAccountDetails(account, transactionAmount, transactionType) {
        var accountDetails = document.getElementById("accountDetails");
        var transactionMessage = transactionType === "deposit" ? "Deposited" : "Withdrawn";
        var updatedBalance = transactionType === "deposit" ? account.balance - transactionAmount : account.balance + transactionAmount;

        accountDetails.innerHTML = `
            <h3>Account Details</h3>
            <p>${transactionMessage} amount: ${transactionAmount}</p>
            <p>Updated Balance: ${updatedBalance}</p>
            <p>Bank account name: ${account.bankAccountName}</p>
            <p>Customer name: ${account.customerName}</p>
        `;
    }

    // Function to update transaction history
    function updateTransactionHistory(amount, transactionType) {
        var transactionHistory = document.getElementById("transactionHistory");
        var transactionEntry = document.createElement("div");
        transactionEntry.classList.add("transaction-entry");
        transactionEntry.textContent = `${transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} of ${amount}`;
        transactionHistory.appendChild(transactionEntry);
    }
});
