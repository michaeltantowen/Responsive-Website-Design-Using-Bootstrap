function createAcc() {
  var check = confirm("Confirm that the information you've filled is true ?");
  if(check) {
    alert("Account Created");
  } else {
    alert("Failed to create account, please filled the form with true information");
  }
}