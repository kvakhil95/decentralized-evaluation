[
	{
		"constant": false,
		"inputs": [
			{
				"name": "evaluatorname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkEvaluatorLogin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "evalId",
				"type": "uint256"
			}
		],
		"name": "viewEvalDetails",
		"outputs": [
			{
				"name": "evaluatorId",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "evalScores",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "task_id",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "taskId",
				"type": "uint256"
			},
			{
				"name": "e_id",
				"type": "uint256"
			},
			{
				"name": "evalOrNonEval",
				"type": "bool"
			},
			{
				"name": "evaluatorRemark",
				"type": "bool"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "taskId",
				"type": "uint256"
			},
			{
				"name": "techId",
				"type": "uint256"
			},
			{
				"name": "result",
				"type": "bool"
			}
		],
		"name": "credibilityScoreUpdate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "taskId",
				"type": "uint256"
			}
		],
		"name": "viewVoterResults",
		"outputs": [
			{
				"name": "upvoteEval",
				"type": "uint256[]"
			},
			{
				"name": "downvoteEval",
				"type": "uint256[]"
			},
			{
				"name": "upvoteNonEval",
				"type": "uint256[]"
			},
			{
				"name": "downvoteNonEval",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "student_id",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "evaluatorname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "getEvaluatorId",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Students",
		"outputs": [
			{
				"name": "s_id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "getNumberofTasks",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "techId",
				"type": "uint256"
			},
			{
				"name": "evaluatorId",
				"type": "uint256"
			}
		],
		"name": "checkEvaluatorScore",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Submissions",
		"outputs": [
			{
				"name": "t_id",
				"type": "uint256"
			},
			{
				"name": "task",
				"type": "string"
			},
			{
				"name": "technology",
				"type": "uint256"
			},
			{
				"name": "studentresult",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "task_id",
				"type": "uint256"
			}
		],
		"name": "viewStatus",
		"outputs": [
			{
				"name": "t_id",
				"type": "uint256"
			},
			{
				"name": "technology",
				"type": "uint256"
			},
			{
				"name": "task",
				"type": "string"
			},
			{
				"name": "up_count",
				"type": "uint256"
			},
			{
				"name": "down_count",
				"type": "uint256"
			},
			{
				"name": "passfail",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "studentname",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "checkStudentLogin",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "score1",
				"type": "uint256"
			},
			{
				"name": "score2",
				"type": "uint256"
			},
			{
				"name": "score3",
				"type": "uint256"
			}
		],
		"name": "addEvaluator",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "viewStudentTasklist",
		"outputs": [
			{
				"name": "tasklist",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "tech",
				"type": "uint256"
			},
			{
				"name": "studentName",
				"type": "string"
			},
			{
				"name": "studentPass",
				"type": "string"
			}
		],
		"name": "addSubmission",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "eval_id",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Evaluators",
		"outputs": [
			{
				"name": "e_id",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "taskId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "evalId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "evalOrNonEval",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "evaluatorRemark",
				"type": "bool"
			},
			{
				"indexed": false,
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"name": "recordVotes",
		"type": "event"
	}
]