pragma solidity ^0.4.20;

contract EvaluationOriginal
{
        //Model of an evaluator    
        struct Evaluator 
        {
            uint e_id;
            string name;
            string password;
            uint[] scores;
            
        }
        
        //Model of a student 
        struct Student
        {
            uint s_id;
            string name;
            string password;
        }
        
        //Model of every submission
        struct Submission
        {
            uint t_id;
            string task;
            uint technology;
            uint[] upvoteEvalId;
            uint[] downvoteEvalId;
            uint[] upvoteNonEvaluators;
            uint[] downvoteNonEvaluators;
        }
        
        mapping(uint => Evaluator) public Evaluators;
        mapping(uint => Student) public Students;
        mapping(uint => Submission) public Submissions;
        
        uint public student_id = 0;
        uint public eval_id = 0;
        uint public task_id = 0;
        
        //To onboard a student
        function addStudent (string name,string password) public 
        {
            student_id ++;
            Students[student_id] = Student(student_id,name,password);
            Students[student_id].s_id = student_id;
            Students[student_id].name = name;
            Students[student_id].password = password;
        }
        
        //To onboard an Evaluator
        function addEvaluator (string name, string password, uint score1, uint score2, uint score3) public 
        {
            eval_id++;
            Evaluators[eval_id].scores.push(score1);
            Evaluators[eval_id].scores.push(score2);
            Evaluators[eval_id].scores.push(score3);
            Evaluators[eval_id].e_id = eval_id;
            Evaluators[eval_id].name= name;
            Evaluators[eval_id].password=password;
        }
        
        //Pre-add a set of Evaluators
        /*function Test1 () public 
        {
            addEvaluator("Ram",900,1100,1050);
            //add 9 more values like this
        } */
        
        //For a student to add a submission
        function addSubmission (string name, uint tech)
        {
            task_id++;
            Submissions[task_id].t_id=task_id;
            Submissions[task_id].task=name;
            Submissions[task_id].technology=tech;
   
        }
        
        //To check if the evaluator's score is >1000 so that he can vote
        function checkEvaluatorScore(uint techId, uint evaluatorId) returns (bool)
        {
            if (techId == 1)
            {
                if(Evaluators[evaluatorId].scores[0] > 1000)
                return true;
            }
            if (techId == 2)
            {
                if(Evaluators[evaluatorId].scores[1] > 1000)
                return true;
            }
            if (techId == 3)
            {
                if(Evaluators[evaluatorId].scores[2] > 1000)
                return true;
            }
            return false;
        }
        
        //For a student to fetch the status of a particular submission
        function viewStatus(uint task_id) returns (uint t_id, string task, uint technology, uint up_count, uint down_count)
        {
             t_id=Submissions[task_id].t_id;
             task=Submissions[task_id].task;
             technology=Submissions[task_id].technology;
             up_count=Submissions[task_id].upvoteEvalId.length;
             down_count=Submissions[task_id].downvoteEvalId.length;
             return;
        }
        
        //For an Evaluator to upvote/downvote the task 
        function vote (uint taskId, uint e_id, bool evalOrNonEval, bool evaluatorRemark) public 
        {
            if(evalOrNonEval)
            {
                if(evaluatorRemark)
                {
                    Submissions[taskId].upvoteEvalId.push(e_id);
                }
                else 
                {
                    Submissions[taskId].downvoteEvalId.push(e_id);
                }
            }
            else
            {
                if(evaluatorRemark)
                {
                    Submissions[taskId].upvoteNonEvaluators.push(e_id);
                }
                else 
                {
                    Submissions[taskId].downvoteNonEvaluators.push(e_id);
                }
            }
                
        }   
        
        //To check the details of upvoters and downvoters
        function viewVoterResults(uint taskId) returns (uint[] upvoteEval, uint[] downvoteEval, uint[] upvoteNonEval, uint[] downvoteNonEval)
        {
            return(Submissions[taskId].upvoteEvalId, Submissions[taskId].downvoteEvalId, Submissions[taskId].upvoteNonEvaluators, Submissions[taskId].downvoteNonEvaluators);
        }
        
        //To update the credibility score of the voters. Evaluator by 20 and non-evaluator by 4    
        function credibilityScoreUpdate(uint taskId, uint techId, bool result) public 
        {
            for (uint i = 1; i<=eval_id; i++)
            {
            if(result)
            {
                for(uint j=0; j<Submissions[taskId].upvoteEvalId.length; j++) 
                {
                    if (Submissions[taskId].upvoteEvalId[j]==i) 
                    {
                        Evaluators[i].scores[techId-1]=Evaluators[i].scores[techId-1]+20;
                    }
                }
                for(uint k=0; k<Submissions[taskId].upvoteNonEvaluators.length; k++) 
                {
                    if (Submissions[taskId].upvoteNonEvaluators[k]==i) {
                        Evaluators[i].scores[techId-1]=Evaluators[i].scores[techId-1]+4;
                    }
                }    
                
            }
            if(!result)
            {
                for(uint l=0; l<Submissions[taskId].downvoteEvalId.length; l++) 
                {
                    if (Submissions[taskId].downvoteEvalId[l]==i) 
                    {
                        Evaluators[i].scores[techId-1]=Evaluators[i].scores[techId-1]+20;
                    }
                }
                for (uint m=0; m<Submissions[taskId].downvoteNonEvaluators.length; m++) 
                {
                    if (Submissions[taskId].downvoteNonEvaluators[m]==i) 
                    {
                        Evaluators[i].scores[techId-1]=Evaluators[i].scores[techId-1]+4;
                    }
                    
                }
            }
            }
            
        }
        
        function viewEvalDetails(uint evalId) returns(uint evaluatorId, string name, uint[] evalScores)
        {
            return(Evaluators[evalId].e_id,Evaluators[evalId].name,Evaluators[evalId].scores);
        }
        
        //Login function for student
        function checkStudentLogin(string studentname, string password) returns (bool)
        {
            for (uint i=1; i<=student_id; i++)
            {
                if(keccak256(Students[i].name)==keccak256(studentname) && keccak256(Students[i].password)==keccak256(password))
                return true;
            }
            return false;
        }
        
        //Login function for evaluator
        function checkEvaluatorLogin(string evaluatorname, string password) returns (bool)
        {
            for (uint i=1; i<=eval_id; i++){
                if(keccak256(Evaluators[i].name)==keccak256(evaluatorname) && keccak256(Evaluators[i].password)==keccak256(password))
                return true;
            }
            return false;
        }
        
        function removeThisFunction() public returns (uint arraylength, uint eval) {
            addEvaluator("eval1","pass",1001,200,300);
            addEvaluator("eval2","pass",1001,200,300);
            addEvaluator("eval3","pass",1001,200,300);
            addStudent("s1","pass");
            addSubmission("android",1,"s1","pass");
            vote(1,1,true,true);
            vote(1,2,true,true);
            vote(1,3,true,true);
            viewVoterResults(1);
            return (Submissions[1].upvoteEvalId.length, Evaluators[2].scores[1-1]);
        }
        
        function removeThisFunction2() public {
            credibilityScoreUpdate(1,1,true);
        }
        
        
}