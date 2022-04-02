#Code review process

| Abbreviations and concepts | Description                                                                                                 |
|----------------------------|-------------------------------------------------------------------------------------------------------------|
| PR (MR)                    | pull request (merge request) - code which should be reviewed before merge                                   |
| Developer                  | The author, who is responsible for creating the code being reviewed                                         |
| Reviewer                   | The reviewer, who is the person responsible for examining the code and reporting the results to the author. |

PR (pull request)

## The main code review rules

- We are the team, and it means that we have the same aim - a successful project. That's why a code review is a place for dialog
  and cooperation, not for arguing.
- We have to be polite and calm during the review. And we have to remember always, that we are assessing only code, not a person
  who has provided this code for review. That means we have to avoid different personal judgments and biases during the review.
- If there is still a conflict, you have to remember that sometimes giving up and accepting mistakes are not a failure and
  will make you and the project better.

## Why should I make the code review? 

- It helps our codebase to be cleaner, more stable, and more maintainable
- It helps to support code standards that are applied to project
- it helps developers share their knowledge about the project with each other
- It makes the style of writing different parts of the system more common and consistent
- It is a good self-development approach for developers
- It facilitates new developers' onboarding process
- It helps to avoid some bugs before it affects somebody

## When should I take PR for review?

- It is good practice taking reviews at a particular time every working day. For example, the reviewer can take PR for review every morning before the main part of work starts. Some tasks need to be reviewed urgently. It is ok to ask teammates to make such a review ASAP
- It strongly requires every developer to be involved in the code review process
- If the reviewer were assigned on review he has to make it. No exceptions to it
- Reviewer shouldn't spend more than 60 minutes per day on the review

## Responsibilities of maintainers of process

### Developer have to:

- The main responsibility of a Developer is provisioning an implementation according to the DoD items list
- Follow code styles and accepted approaches
- Follow the requirements for PR
- Be polite to the reviewer
- Try to understand comments and fix issues, or provide strongly reasoned objections why they shouldn't be fixed

### Reviewer have to:

- Briefly check and validate if provided code matches with DoD
- Check if provided code matches with project Code Style and accepted project practice. Even better if the reviewer has a code review checklist (Provided bellow)
- Be polite to a developer
- Remember that reviewer evaluates the code, not the person who wrote this code
- Add sensibly and reasoned comments about some issues in the code. It will be best if the reviewer provides some decisions for noticed issues
- Check fixes when the developer will make them
- Switch to reviewing branch and make a short smoke test (recommended)
- Approve PR if it looks good to you

## Requirements for PR

- PR must have an understandable head (it is better if it creates from a commit message) and a description
- Description must contain: Problem description, solution description, affected parts of the system, potential concerns
- PR must be as short as possible for the solution. The more code in one PR, the more risks during the merge
- One PR should provide the solution for one problem. If it consists of solutions for many problems it's better to divide such PR into different commits and PRs.

## The Code of Conduct

- Be kind
- Accept that many programming decisions are optional. Discuss tradeoffs, which you prefer, and reach a solution quickly
- Ask questions; don't make demands
- Ask for clarification
- Avoid selective ownership of code. ("mine", "yours")
- Avoid using terms that could be seen as referring to personal traits. ("dump", "stupid")
- Be explicit
- Be humble
- Don't use hyperbole. ("always", "never", "nothing", etc)
- Be careful about the use of sarcasm
- Consider one-on-one chats or video calls if there are too many "I didn't understand" or "Alternative solution" comments. Post a follow-up comment summarizing a one-on-one discussion
- If you ask a question to a specific person, always start the comment by mentioning them. This ensures they see it if their notification level is set to "mentioned" and other people understand they don't have to respond
- Don't take it personally. The review is of the code, not of you
- Try to respond to every comment

## What should I pay attention to on the review?

- Description for PR added
- One feature - one commit rules are followed
- Commit message and branching strategies rules have complied
- Code works(!)
- Build for PR is successful (no linters errors, no type errors, tests are passed)
- Code resolves task and follows DoD
- Code follows [Code Style](https://kb.epam.com/display/MAHE/Code+Style) and approaches accepted on the project
- Code follows best practices and rules of clean code (DRY, KISS, SOLID, YAGNI)
- No unnecessary dependencies from other part of application are in the code 
- Code is understandable and readable
- Cyclomatic complexity of code is acceptable
- All unnecessary comments and code were removed (logs, unused methods, etc)
- Size of function, components, methods are reasonably small and laconic
- Error cases are considered and handled
- No unnecessary packages added
- No hardcode, no "magic" strings and numbers in components
- SVGO is used for *.svg pictures, TinyPNG is used for *.png and other pictures




