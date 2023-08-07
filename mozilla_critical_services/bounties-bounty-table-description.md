Our rewards are based on the severity of the issue and the criticality of the service or application. 

| Severity Rating | [Critical sites][1] | [Core sites][2] | Other Mozilla sites |
|-----------------|---------------------|-----------------|---------------------|
| Critical        | $6000 - $15000      | $3000 - $5000   | $500 - $1000        |
| High            | $3000 - $6000       | $1000 - $3000   | 0 - $500            |
| Moderate        | $1000 - $3000       | $500 - $1000    | \-                  |
| Low             | 0 - $1000           | 0 - $500        | \-                  |

Note : "Other Mozilla sites" excludes community websites

# Severity Definitions and Examples

## Critical

Critical vulnerabilities are urgent security issues that present an ongoing or immediate danger to the users of our services and our infrastructure

* Remote Code Execution
* Authentication and Session Management Flaws (which lead to account compromise)
* Disclosure of secrets in publicly accessible assets
* Hardcoded credentials for a privileged user

## High

 Typically, high severity issues are exploitable web vulnerabilities that can lead to the targeted compromise of a small number of users.

* Account takeover through Oauth misconfiguration
* IDORs that bypass authentication or authorization for significant actions
* CSRF on significant actions, such as changing email/passwords, deleting accounts, etc.
* XSS resulting in conducting significant action (i.e., not defacement, phishing, cookie injection, etc.)
* XML External Entity (XXE) attack
* Hardcoded credentials for a non-privileged user

## Moderate

 Vulnerabilities which can provide an attacker additional information or positioning that could be used in combination with other vulnerabilities. In addition to issues resulting from the lack of standard defense in depth techniques and security controls.

* XSS (minor)
* Domain takeovers supported by a proof of concept for `*.mozilla.org`, `*.mozilla.com`, `*.mozilla.net`, and `*.firefox.com` in addition to the list of critical and core sites.
* SSRF which leads to reaching **internal** network hosts
* Disclosure of sensitive information which does not expose the user or organization to immediate risk
* CSRF for minor actions.

## Low

 Minor security vulnerabilities which could lead to leaks or spoofs of non-sensitive information. Missing best practice security controls

* XSS (blocked by CSP)
* Clickjacking with demonstrated impact (Lack of clickjacking protection (XFO, CSP) is insufficient to claim a bounty)
* External SSRF
* Open Redirects for `*.mozilla.org`, `*.mozilla.com`, `*.mozilla.net`, and `*.firefox.com` in addition to the list of critical and core sites.

**Note that some low severity issues are not eligible for monetary awards based on their impact. We will recognize the reporter by thanking them on their H1 page.**

## Out of Scope

Although we still appreciate being notified about them, the following issues fall outside the scope of our bug bounty program and are not eligible for bounty awards:

* Self-XSS
* Executing scripts on sandboxed domains (such as bmoattachments or mozillademos)
* CSRF for non-significant actions (logout, forms with no sensitive actions, etc.)
* Clickjacking attacks without a documented series of clicks that produce a vulnerability
* Spam (including issues related to SPF/DKIM/DMARC)
* Denial-of-service attacks or issues related to rate limiting
* Attacks that require social engineering (phishing)
* Content injection, such as reflected text or HTML tags
* Missing HTTP headers, except as where their absence fails to mitigate an existing attack
* Authentication bypasses that require access to software/hardware tokens
* Vulnerabilities that only affect users with specific browsers (must work either in Firefox or Chrome)
* Vulnerabilities that require access to passwords, tokens, or the local system (e.g. session fixation)
* Assumed vulnerabilities based upon version numbers only
* Source code disclosures, as most of our code is open source
* Vulnerabilities discovered shortly after their public release
* Outdated TLS configurations which remain to support downloads from Windows XP systems
* **Blind** SSRF reports on services that are designed to load resources from the internet
* Software version disclosure / Banner identification issues / Descriptive error messages or headers (e.g. stack traces, application or server errors).
* Pocket MacOS application
* Information disclosure vulnerabilities. Most Mozilla projects and code are open source and content on most sites is intentionally public.
* Frequently reported issues which do not pose a security risk to users and aren't eligible for a bounty such as the ones tracked in [this tracker bug](https://bugzilla.mozilla.org/show_bug.cgi?id=1830029).
  * [Bugzilla user profile page discloses email address and lots of other info](https://bugzilla.mozilla.org/show_bug.cgi?id=1647545)
  * [2FA Bypass on https://accounts.firefox.com/](https://bugzilla.mozilla.org/show_bug.cgi?id=1652071)
  * [Verification token for 2FA authentication on accounts.firefox.com expires after 15 minutes not 5 minutes](https://bugzilla.mozilla.org/show_bug.cgi?id=1763878)
  * [Ability to create more than two collections on developer.mozilla.org due to race condition](https://bugzilla.mozilla.org/show_bug.cgi?id=1818539)
  * [Denial of Service using xmlrpc.php on Wordpress blogs like blog.mozilla.org](https://bugzilla.mozilla.org/show_bug.cgi?id=1050193)
  * [blog.mozilla.com allows access to /wp-json and /wp-admin](https://bugzilla.mozilla.org/show_bug.cgi?id=1365661)
  * [https://hubs.mozilla.com/api endpoint is publicly accessible](https://bugzilla.mozilla.org/show_bug.cgi?id=1748142)
  * [https://hg.mozilla.org/users/ shows the contents of user directories](https://bugzilla.mozilla.org/show_bug.cgi?id=1767024)
  * [contile.services.mozilla.com or other backend services have permissive CORS configurations](https://bugzilla.mozilla.org/show_bug.cgi?id=1782395)
  * [The site https://ftp.mozilla.org/pub/](https://bugzilla.mozilla.org/show_bug.cgi?id=1783721) and [the site https://archive.mozilla.org/pub/](https://bugzilla.mozilla.org/show_bug.cgi?id=1810203) allow directory listing
  * [Link from accounts.firefox.com to manage email preferences is missing authentication](https://bugzilla.mozilla.org/show_bug.cgi?id=1794310)
  * [Blind SSRF using the pocket save URL feature](https://bugzilla.mozilla.org/show_bug.cgi?id=1810997)
  * [https://people.mozilla.org/whoami/github/username/user_id exposes user's GitHub profile information](https://bugzilla.mozilla.org/show_bug.cgi?id=1811757)
  * [The sites https://community-tc.services.mozilla.com/ and https://firefox-ci-tc.services.mozilla.com/](https://bugzilla.mozilla.org/show_bug.cgi?id=1819389) as well as the site [normandy-devtools](https://normandy-devtools.services.mozilla.com/) are publicly accessible

## Misc Notes
We have a bug bounty panel whose members decide whether a report is eligible for bounty and the bounty amount for eligible reports. The panel meets on a weekly basis, except for holidays and vacations, to discuss bounty decisions.

Please note these are general guidelines, and reward decisions are up to the discretion of Mozilla.

[1]: https://hackerone.com/mozilla_critical_services/policy_scopes
[2]: https://hackerone.com/mozilla_core_services/policy_scopes
