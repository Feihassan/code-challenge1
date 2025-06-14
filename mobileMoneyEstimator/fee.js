function estimateTransactionFee(amountToSend) {
  let fee = amountToSend * 0.015;


  if (fee < 10) {
    fee = 10;
  } else if (fee > 70) {
    fee = 70;
  }

  
  const totalDebited = amountToSend + fee;

  
  console.log(`Amount to Send: KES ${amountToSend}`);
  console.log(`Transaction Fee: KES ${fee}`);
  console.log(`Total Debited: KES ${totalDebited}`);
}


const input = prompt("Enter the amount you wish to send:");
const amount = Number(input);
estimateTransactionFee(amount);