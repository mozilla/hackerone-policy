The Mozilla Bug Bounty Program is designed to encourage security research into Mozilla's websites and services and to reward those who find unique and original security bugs in our web infrastructure.

# Table of Contents
1. Program Scope
2. Test Plan
3. Program Rules
4. Appeal Process
5. Response Targets
6. Disclosure Policy
7. Safe Harbor
# Program Scope

Please check the list of sites under the Scope section, we would like testing to focus on those sites. Other sites and services are considered out of scope of the program unless the bug is critical (see above for examples of critical issues)

# Test Plan

* Whenever it is explicitly stated in our program scope, you are expected to test on the provided instances (e.g. staging) instead of production.
* We ask that hackers test the application on the staging environment instead of the production environment. This will help ensure that any potential vulnerabilities are identified and addressed before they can be exploited in the production environment. Additionally, testing on the staging environment will help minimize any potential disruption to the production environment.

# Program Rules

Please provide detailed reports with reproducible steps. If the report is not detailed enough to reproduce the issue, the issue will not be eligible for a reward.

To be eligible for a reward under this program:

* The security bug must be original and previously unreported. 
* The security bug must be a part of Mozilla's code, not the code of a third party. We will pay bounties for vulnerabilities in third-party libraries incorporated into shipped client code or third-party websites utilized by Mozilla.
* You must not have written the buggy code or otherwise been involved in contributing the buggy code to the Mozilla project.
* You must be old enough to be eligible to participate in and receive payment from this program in your jurisdiction, or otherwise qualify to receive payment, whether through consent from your parent or guardian or some other way.
* You must not be an employee, contractor, or otherwise have a business relationship with the Mozilla Foundation or any of its subsidiaries.
* You should use your best effort not to access, modify, delete, or store user data or Mozilla's data. Instead, use your own accounts or test accounts for security research purposes.
* If you inadvertently access, modify, delete, or store user data, we ask that you notify Mozilla immediately at security@mozilla.org and delete any stored data after notifying us.
* You should also use your best effort not to harm the availability or stability of our services, for example, by running aggressive scanning of those services. Instead, use a local development instance of the service that you want to test.
* Whenever it is explicitly stated in our program scope, you are expected to test on the provided instances (e.g. staging) instead of production.
* You must not be on a US sanctions list or in a country (e.g. Cuba, Iran, North Korea, Crimea region of Ukraine, Sudan, and Syria) on the US sanctions list.
* You must not exploit the security vulnerability for your own gain.
* Before sharing any part of the security issue with a third party, you must give us a reasonable amount of time to address the security issue.
* All submissions will be covered under [Mozilla's Website & Communications Terms of Use](https://www.mozilla.org/en-US/about/legal/terms/mozilla/), granting us permission to make use of all submissions.
* All submissions must also abide by [HackerOne Code of Conduct](https://www.hackerone.com/policies/code-of-conduct) and [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/).
* Bounties can be donated to charity. Please follow the [HackerOne process](https://docs.hackerone.com/hackers/payments.html#donating-bounties-to-charity) if you would like to donate your bounty money.
* Do not threaten or attempt to extort Mozilla. We will not award a bounty if you threaten to withhold the security issue from us or if you threaten to release the vulnerability or any exposed data to the public.

# Appeal Process
Hackers may appeal the decision made regarding the status of reports only once by commenting on the report and providing additional information to the report which demonstrates the impact of the reported issue on the asset. If no additional information is provided then the report status will be final.

Valid reasons for appeal:
* The H1 triager closes the report as informative or duplicate and no longer responds to the hacker.
* The report is closed as informative or duplicate and the hacker provides additional information which proves otherwise.

# Response Targets

Mozilla will make a best effort to meet the following SLAs for hackers participating in our program:

| Type of Response | SLA in business days |
| ------------- | ------------- |
| First Response | 5 days |
| Time to Triage | 10 days |
| Time to Bounty | 30 days |
| Time to Resolution | depends on severity and complexity |

We'll try to keep you informed about our progress throughout the process.

# Disclosure Policy

* Our program discloses security reports when they are fixed and rewarded. We make exceptions in case reporters have a valid reason for not using full disclosure or when they need more time in the research before the report is disclosed. We can consider partial disclosure in those cases, we can discuss and agree on the type of disclosure.
* Follow HackerOne's [disclosure guidelines](https://www.hackerone.com/disclosure-guidelines).

# Safe Harbor

Mozilla strongly supports security research into our products and wants to encourage that research.

As a result, we will not threaten or bring any legal action against anyone who makes a good faith effort to comply with this Bug Bounty Program, or for any accidental or good faith violation of this policy. This includes any claim under the DMCA for circumventing technological measures to protect the services and applications eligible under this policy.

As long as you comply with this policy:

 * We consider your security research to be "authorized" under the Computer Fraud and Abuse Act,
 * We waive any restrictions in our applicable Terms of Service and [Acceptable Use Policy]( https://www.mozilla.org/en-US/about/legal/acceptable-use/) that would prohibit your participation in this policy, for the limited purpose of your security research under this policy.

We understand that many Mozilla systems and services are interconnected with third-party systems and services. While we can authorize your research on Mozilla's systems and services, and promise that Mozilla will not bring or threaten litigation against you for your efforts under this policy, we cannot authorize efforts on third-party products or guarantee they won't pursue legal action against you. However, if a third party threatens or brings any legal action against you for your efforts under this policy, we are willing to make clear to the Court, the public, or otherwise that we authorized your efforts to test and research the security of Mozilla's eligible systems and services.

If you're not sure whether your conduct complies with this policy, please contact us first at security@mozilla.org and we will do our best to clarify.
