//Business logic
function BankAccount (userName, balance) {
  this.userName = userName;
  this.balance = balance;
}

BankAccount.prototype.deposit = function() {
}

BankAccount.prototype.withdrawal = function() {
}

//UI logic
$(document).ready(function() {
  $("#register-form").submit(function(event) {
    event.preventDefault();
    var userName = $("input#account-name").val();
    var initialDeposit = $("input#initial-deposit").val();

    // $(".show-balance").append("<p>" + userName + "</p>");
    // $(".show-balance").append("<p>" + initialDeposit + "</p>");

  });


  $("#change-balance").submit(function(event) {
    event.preventDefault();
  });



});
