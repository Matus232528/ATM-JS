
let pin = '1111';
let positivAnswer = 'yes';
let negativAnswer = 'no';
let userBl = 1000;


let userPin = prompt('Enter your pin')
if(userPin === pin) {
    console.log('Correct pin')

 let userBalance = prompt( 'Do you want to check your balance?')
  if(userBalance === positivAnswer) {
    console.log('The user wants to check the balance')
    alert('Your balans:'+  userBl)
  }

  let userWithdrawal =prompt('Do you want to withdraw money?')
  if(userWithdrawal === positivAnswer) {
    console.log('The user wants to withdraw money')
    let userCashValue =prompt('How much many do you want?')
    if(parseInt(userCashValue,10) > userBl) {
        alert('Your balance is less than requested')
    }
    else {
        alert('Take your money')
        userBl= userBl-parseInt(userCashValue,10)
        alert('Your balans:'+  userBl)
    }
  }

  let userDeposit =prompt(' Do you want deposit money?')
   if(userDeposit === positivAnswer){
    console.log('User want deposit')
    let userDepositValue =prompt('Enter deposit amount:')
    userBl= userBl+parseInt(userDepositValue,10)
    alert('Your balans:'+  userBl)
   }
  
   



} else {
   alert('Your pin wrong!!!') 
   
}
alert('Have a nice day!!!')


