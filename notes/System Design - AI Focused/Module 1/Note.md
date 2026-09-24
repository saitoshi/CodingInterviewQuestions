# Module 1 - The AI Architect Role 
## KEY CONCEPTS 
- The AI Architect does not just build the model, but rather they design systems making the investment towards AI models worth it 
- As an AI Architect, it is your responsibility to match the right deployment option to the given problem based on the given requirements and bounds. 
- Feasibility Assessment is not a roadblock, but rather it ensures where the project can proceed within the context of AI 
- The scoping document ensures the system design solves the given problem within the agreed boundaries and against the given success criteria

## What makes AI System Design Different From Regular System Designs 

- outputs are probabilistic 
- failure is soft and invisible 
- cost scales non-linearly 
- need to explain what the model is about for governance and compliance purposes 

## What is the difference between the key roles

- Solutions Architect designs the deterministic systems 
- AI Architect owns the model and fills in the system gap from ML engineers, data scientists, solutions architect

## When starting an AI Project ask the four Qs or Areas to concentrate on 
- Feasibility 
- Design 
- Governance 
- Communication: translating technical terms into business sense

## The basics of Foundational Models to know about 

As an AI Architect one should know the following about Foundational Models:

- General Purpose as in one model can do multiple tasks 
- Large and expensive - every tasks (a.k.a inference) costs money 
- Non-deterministic as in the same input does not gurantee the same output 

<b>Three Major Deployment Methods</b>

The following are three major deployment methods for foundational models the AI Architect should know the least about 
1. API First (Frontier) - fully managed but data leaves your own infrastructure 
2. Self Hosted - you own the model within your infrastructure but high operational overhead 
3.  Fine Tuned Specialist - if you require ongoing changes and updates 

## The AI Feasibility Framework 

<b>5 Feasibility Dimensions</b>

1. Data Availability 
2. Task Structure - What is the definition of successful task 
3. Error Tolerance 
4. Latency Requirements 
5. HILP Viability - Can humans be inserted where needed 

<b>4 RED FLAGS WHEN AI IS NOT APPOPRIATE ANSWER</b>

1. The problem is deterministic 
2. The data does not exist 
3. Error tolerance is close to zero 
4. A regulatory prohibition exists 

## Business Request To AI System Scope 

<b>PARTS OF THE SCOPING DOCUMENT</b>

- Problem Statement 
- AI Approach Category - what AI characteristics will be used to solve the problem s.a. RAGs, classifier, agent, etc
- System Boundary - What is the AI responsible for and not for
- Success Metrics - business KPIs with a clear bar 
- Key Unknowns 
- Stakeholder Summary - the summary for the executive position 

<b>EXAMPLE: Chatbot Breakdown</b>
<hr/>
Suppose you are developing an AI Chatbot, the following are service breakdowns you will list within your scoping document

1. Intent Classification to identify what is the purpose of the call
2. Knowledge Retrieval to use the appropriate answer 
3. Response Generation to create the answer towards user request
4. Escalation Logic to determine when or where the human will intervene 
5. Tone Guardrails - what are the legal or cultural regulations the system should follow 

## PRACTICE QUESTIONS 

1. A Solutions Architect say they can own the AI systems. What is the key reason why an AI Architect is still necessary? <br/>While traditional architect concentrates on deterministic functions, AI concentrates on the non deterministic parts. 

2. A team wants to use an LLM to validate whether a tax ID passes a fixed checksum algorithm. What's the correct assessment?  <br/> No they should not use LLM as this is a deterministic problem. 

3. A team plans to add compliance and audit logging after their AI feature ships, once they know exactly what regulators will ask for. What does the four-responsibilities framework say about this plan?<br/>It will fail as system design was build without the governance in consideration.

4. A team needs to classify support tickets into 20 fixed categories, using two years of labeled historical data, with a hard requirement for low latency and low cost per request. Per the course's decision framework, what's the right approach?<br/> A fine tuned classical ML model trained on the labeled data.

5. 