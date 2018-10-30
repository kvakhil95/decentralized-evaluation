                                          Decentralized University System 


Functionalities: 

--> Student Register: A student can register himself to access the portal. 

--> Student Login: A student can login to the website to access see all the set of submitted tasks and he himself can submit a task. 

--> Evaluator Register: An evaluator can register himself to access the portal. 

--> Evaluator Login: The evaluator can see all the set of submitted tasks and can upvote/downvote the tasks pertaining to him. 

--> View Certificate: The student can view the Technology Certificate of every task in which he gets more than 5 upvotes. 


 

Assumptions: 

--> The number of Technologies is fixed (3 in this case). 

 

How the voting system works: 

--> The student submits a task for approval. 

--> Each Evaluator is good at one Technology compared to the other two Technologies during the time of registration. In the Technology in which he thinks he is good at, he is awarded 1050 points (>1000) so he can vote in this category. The Technology in which he is not good at, he is awarded 750 points (<1000) so can’t vote. 

--> The scores of the Evaluator for each Technology is a dynamic value and keeps increasing as he participates. 

--> Even if the Evaluator is not eligible to vote (<1000), he still gets to vote and his scores are recorded. If his vote matches with majority of the votes for the submitted task, he gets a minor increment in his score. 

--> This minor increment may help him cross the 1000 mark and hence he can be eligible to vote in future. 

--> Once, the number of upvotes reaches 5, he can view the certificate. 





Tools/Languages used: 

--> Ethereum: Ethereum has been used as the blockchain technology for this project.

--> Metamask: As a wallet for Ether. 

--> Remix IDE: For compiling the code and generating the ABI.

--> Solidity: The smart contract has been written using Solidity. 

--> Javascript: Javascript has been used along with Web3 for connecting interacting with the Ethereum node. 

--> HTML/CSS: For the User Interface. 

--> Heroku: To deploy the code.


Access the project on: https://decentralized-learning.herokuapp.com/index.html
