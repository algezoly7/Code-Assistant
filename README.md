<p align="center">
  <img width="449" height="250" alt="code_assistant" src="https://github.com/user-attachments/assets/42bdcd92-3329-412d-812f-53ab2827997d" />
</p>

<h1>Singularitynet Code Assistant Project</h1>
<p>This repo includes the code and the steps for the onboarding process of the code assistant project in <a href="https://agix-marketplace.singularitynet.io/">SingularityNet Marketplace</a> platform.
SingularityNET is a decentralized, blockchain-based platform that allows anyone to create, share, and monetize AI services at scale. It provides a marketplace where developers can deploy AI agents and users can access these services in a transparent and secure environment, using the native AGIX token for transactions.</p>
<h1>OnBoarding Process</h1>
<p>The OnBoarding process happens by the integration of three components: <b>a server in a cloud service</b>, <b>a client in the singularity net market place</b>, <b>Information about the service in the block-chain</b>. 
We begin by defining a <b>.proto</b> file, which specifies the structure of the data and facilitates communication between servers and clients across different programming languages. 
The server is implemented in Google-Cloud it's coded in python, it listens at a specific address and its job is to connect the client to our code completion service in AWS. The client is coded as a part of the marketplace code. 
We use JavaScript for its coding, and you can see the code in the component directory. The OnBoarding process also involves posting the service metadata to the block chain including the address where of the server.</p>
<p>You can check the service publication here <a href="https://agix-marketplace.singularitynet.io/servicedetails/org/EnigmaAi/service/CodeAssistantID/tab/0">here</a></p>
