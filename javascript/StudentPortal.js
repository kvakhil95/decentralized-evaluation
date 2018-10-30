window.addEventListener("load", function() {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    var web3 = window.web3;
    console.log(web3);
    if (typeof web3 !== "undefined") {
      // Use Mist/MetaMask's provide
      window.web3 = new Web3(web3.currentProvider);
      console.log("Using MetaMask");
    } else {
      console.log("No web3? You should consider trying MetaMask");
       web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    if (web3.version.network != 3) {
     // alert("Wrong network detected. Please switch to the Ropsten test network.");
    } else {
      console.log("Connected to the Ropsten test network.");
      //alert("Network detected. Connected!");
    }
  
  });
  //original one..use this
 var evaluationContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"evaluatorname","type":"string"},{"name":"password","type":"string"}],"name":"checkEvaluatorLogin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"evalId","type":"uint256"}],"name":"viewEvalDetails","outputs":[{"name":"evaluatorId","type":"uint256"},{"name":"name","type":"string"},{"name":"evalScores","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"task_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"e_id","type":"uint256"},{"name":"evalOrNonEval","type":"bool"},{"name":"evaluatorRemark","type":"bool"}],"name":"vote","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"},{"name":"techId","type":"uint256"},{"name":"result","type":"bool"}],"name":"credibilityScoreUpdate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"taskId","type":"uint256"}],"name":"viewVoterResults","outputs":[{"name":"upvoteEval","type":"uint256[]"},{"name":"downvoteEval","type":"uint256[]"},{"name":"upvoteNonEval","type":"uint256[]"},{"name":"downvoteNonEval","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"student_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"evaluatorname","type":"string"},{"name":"password","type":"string"}],"name":"getEvaluatorId","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Students","outputs":[{"name":"s_id","type":"uint256"},{"name":"name","type":"string"},{"name":"password","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getNumberofTasks","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"techId","type":"uint256"},{"name":"evaluatorId","type":"uint256"}],"name":"checkEvaluatorScore","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Submissions","outputs":[{"name":"t_id","type":"uint256"},{"name":"task","type":"string"},{"name":"technology","type":"uint256"},{"name":"studentresult","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"task_id","type":"uint256"}],"name":"viewStatus","outputs":[{"name":"t_id","type":"uint256"},{"name":"technology","type":"uint256"},{"name":"task","type":"string"},{"name":"up_count","type":"uint256"},{"name":"down_count","type":"uint256"},{"name":"passfail","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"studentname","type":"string"},{"name":"password","type":"string"}],"name":"checkStudentLogin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"},{"name":"score1","type":"uint256"},{"name":"score2","type":"uint256"},{"name":"score3","type":"uint256"}],"name":"addEvaluator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"name":"viewStudentTasklist","outputs":[{"name":"tasklist","type":"uint256[]"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"tech","type":"uint256"},{"name":"studentName","type":"string"},{"name":"studentPass","type":"string"}],"name":"addSubmission","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"name","type":"string"},{"name":"password","type":"string"}],"name":"addStudent","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"eval_id","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"Evaluators","outputs":[{"name":"e_id","type":"uint256"},{"name":"name","type":"string"},{"name":"password","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"taskId","type":"uint256"},{"indexed":false,"name":"evalId","type":"uint256"},{"indexed":false,"name":"evalOrNonEval","type":"bool"},{"indexed":false,"name":"evaluatorRemark","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"}],"name":"recordVotes","type":"event"}]);

  //Ropsten address
  var evaluationContractAt = evaluationContract.at("0xd8d6a626e42a9dcf1c56a2fa8fbcb639f6a8f5a1");

  console.log(web3);
  
  function Register(stuOrEval)
  {
  var userName=document.getElementById("uname").value;
  var passWord=document.getElementById("pass").value; 
  if(stuOrEval == 1) {
  evaluationContractAt.addStudent(userName,passWord,
    { gas: 4000000,from: web3.eth.accounts[0]},
    function(error, result){
    if(!error){
        console.log("Successfully called");
        window.location.href="stu_login.html";
      }
    else
        console.log(error);
  })
  }
  if(stuOrEval == 2)
  {
    let score1=1001;
    let score2=200;
    let score3=300;
    console.log(userName,passWord,score1,score2,score3);
    evaluationContractAt.addEvaluator(userName,passWord,score1,score2,score3,
      { gas: 4000000,from: web3.eth.accounts[0]},
      function(error, result){
      if(!error){
          console.log("Successfully called");
          window.location.href="eval_login.html";
        }
      else
          console.log(error);
    }) 
  }
  } 
  
  var userName;
  var passWord;
  function checkLogin(stuOrEval) {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;
  if(stuOrEval == 1){
    evaluationContractAt.checkStudentLogin.call(username, password,
    { gas: 4000000, from: web3.eth.accounts[0] },
    function (error, result) {
      if (!error) {
        console.log("no error")
        if(result){
        window.location.href = "stu_page.html";
        localStorage.setItem("userName",username);
        localStorage.setItem("passWord",password);
        }
        else{
          document.getElementById("status").innerHTML = "Sorry! User not registered.";
        }
      }
      else {
        console.log(error);
        document.getElementById("status").innerHTML = "Sorry! Wrong Username or Password.";
      }
    })
  }
  else {
    console.log(username,password)
    localStorage.setItem("userName",username);
    localStorage.setItem("passWord",password);
    evaluationContractAt.checkEvaluatorLogin.call(username, password,
      { gas: 4000000, from: web3.eth.accounts[0] },
      function (error, result) {
        if (!error) {
          console.log("no error")
          if(result){
          window.location.href = "eval_page.html";
          localStorage.setItem("userName",username);
          localStorage.setItem("passWord",password);
          }
          else{
            document.getElementById("status").innerHTML = "Sorry! User not registered.";
          }
        }
        else {
          console.log(error);
          document.getElementById("status").innerHTML = "Sorry! Wrong Username or Password.";
        }
      })
  }
  }
  
  
  function submitTask(){
  var taskName=document.getElementById("0").value;
  var taskType=parseInt(document.getElementById("cardtype").value);
  evaluationContractAt.addSubmission(taskName,taskType,localStorage.getItem("userName"),localStorage.getItem("passWord"),
    { gas: 4000000, from: web3.eth.accounts[0]},
    function (error, result) {
      if (!error) {
        document.getElementById("taskStatus").innerHTML="Task submitted successfully."
      }
      else {
        document.getElementById("taskStatus").innerHTML = "Sorry! Error submitting the task.";
      }
    })
  }
  
  function displayTasks(){
  let tasks={}
  evaluationContractAt.viewStudentTasklist.call(localStorage.getItem("userName"),localStorage.getItem("passWord"),
  { gas: 4000000, from: web3.eth.accounts[0]},
    function (error, result) {
      if (!error) {
        if(result !=0 ){
        let taskdetails=0;
        for(let i=0; i<result.length; i++) {
          evaluationContractAt.viewStatus.call(result[i].c,
            { gas: 4000000, from: web3.eth.accounts[0] },
            function (error, taskDetailsResult) {
              if (!error) {
                for (resultlength = 0; taskdetails < ((i + 1) * 6), resultlength < taskDetailsResult.length; taskdetails++ , resultlength++) {
                  if (typeof (taskDetailsResult[resultlength]) == "string") {
                    document.getElementsByName("tasks")[taskdetails].innerHTML = taskDetailsResult[resultlength];
                  }
                  else {
                    if (resultlength == 2) {
                      if (taskDetailsResult[resultlength] == 1)
                        document.getElementsByName("tasks")[taskdetails].innerHTML = "Machine Learning";
                      if (taskDetailsResult[resultlength] == 2)
                        document.getElementsByName("tasks")[taskdetails].innerHTML = "Artificial Intelligence";
                      if (taskDetailsResult[resultlength] == 3)
                        document.getElementsByName("tasks")[taskdetails].innerHTML = "Blockchain";
                    }
                    else
                    {
                      document.getElementsByName("tasks")[taskdetails].innerHTML = taskDetailsResult[resultlength].c;
                    }
                  }
  
                }
              }
            
              else {
                console.log(error);
                document.getElementById("status").innerHTML = "Sorry! No data.";
              }
            })
          }
      }
      else {
        console.log(error);
        document.getElementById("status").innerHTML = "Sorry! No tasks submitted.";
      }
    }
      else {
        console.log(error);
        document.getElementById("status").innerHTML = "Sorry! No tasks submitted.";
      }
    })
  }
  
  function displayEvaluatorTasks() {
    let tasks;
    evaluationContractAt.getNumberofTasks.call({ gas: 4000000, from: web3.eth.accounts[0] },
      function (error, result) {
        if (!error) {
          if (result >= 1) {
            tasks = result;
            let cellnumber=0;
            for (let i = 1; i <= tasks; i++) {
              evaluationContractAt.viewStatus.call(i, { gas: 4000000, from: web3.eth.accounts[0] },
                function (error, result) {
                  if (!error) {
                    if (result[5] != "PASSED" && result[5] != "FAILED") {
                      for (j = 0; j <= 2, cellnumber < (i * 3); j++ , cellnumber++) {
                        if (typeof (result[j]) == "object"){
                          if (j == 1) {
                            if (result[j].c == 1)
                            document.getElementsByName("tasks")[cellnumber].innerHTML = "Machine Learning";
                            if (result[j].c == 2)
                            document.getElementsByName("tasks")[cellnumber].innerHTML = "Artificial Intelligence";
                            if (result[j].c == 3)
                            document.getElementsByName("tasks")[cellnumber].innerHTML = "Blockchain";
                          }
                          else
                          document.getElementsByName("tasks")[cellnumber].innerHTML = result[j].c;
                        }
                        else
                          document.getElementsByName("tasks")[cellnumber].innerHTML = result[j];
                      }
                    }
                    else
                      document.getElementById("taskStatus").innerHTML = "No tasks to evaluate.";
                  }
                  else {
                    document.getElementById("taskStatus").innerHTML = "Sorry. Some error has occurred.";
                  }
                })
            }
          }
          else
            document.getElementById("taskStatus").innerHTML = "No tasks to evaluate.";
        }
        else {
          document.getElementById("taskStatus").innerHTML = "Sorry. Some error has occurred.";
        }
      })
  }

function vote(rowNumber, upOrDown) {
  let taskId = document.getElementById("myTable1").rows[rowNumber + 1].cells[1].innerText;
  let evaluatorId;
  let techId;
  let evalOrNonEval;
  evaluationContractAt.getEvaluatorId.call(localStorage.getItem("userName"), localStorage.getItem("passWord"),
    { gas: 4000000, from: web3.eth.accounts[0] },
    function (error, result) {
      console.log("result", result.c[0])
      if (!error) {
        if (result.c[0] != 0) {
          evaluatorId = result.c[0];
          let techName = document.getElementById("myTable1").rows[rowNumber + 1].cells[2].innerText;
          if (techName.trim() == "Machine Learning") techId = 1;
          if (techName.trim() == "Artificial Intelligence") techId = 2;
          if (techName.trim() == "Blockchain") techId = 3;
          console.log(techId, evaluatorId)
          evaluationContractAt.checkEvaluatorScore.call(techId, evaluatorId,
            { gas: 4000000, from: web3.eth.accounts[0] },
            function (error, result) {
              if (!error) {
                if (result) {
                  evalOrNonEval = true;
                }
                else {
                  evalOrNonEval = false;
                }
                let evalVote;
                if (upOrDown) evalVote = true;
                else evalVote = false;
                evaluationContractAt.vote(taskId, evaluatorId, evalOrNonEval, evalVote,
                  { gas: 4000000, from: web3.eth.accounts[0] },
                  function (error, result) {
                    if (!error) {
                      document.getElementById("taskStatus").innerHTML = "Vote submitted successfully.";
                    }
                    else {
                      console.log(error);
                      document.getElementById("taskStatus").innerHTML = "Sorry! Some error has occurred.";
                    }
                  })
              }
              else {
                console.log(error);
                document.getElementById("taskStatus").innerHTML = "Sorry! Some error has occurred.";
              }
            })

        }
        else {
          document.getElementById("taskStatus").innerHTML = "Sorry! User not registered.";
        }
      }
      else {
        console.log(error);
        document.getElementById("taskStatus").innerHTML = "Sorry! Some error has occurred.";
      }
    })


}
