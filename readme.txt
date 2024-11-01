=== Snippet Vault ===
Contributors: TigrouMeow
Tags: code, snippet, ai, php, rest
Donate link: https://www.patreon.com/meowapps
Requires at least: 6.0
Tested up to: 6.6
Stable tag: 0.2.5
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Versatile plugin that not only manages PHP code snippets but also acts as a powerful bridge connecting WordPress, AI, and external digital platforms.

== Description ==

Snippet Vault is a versatile plugin that not only manages PHP code snippets but also acts as a powerful bridge connecting WordPress, AI, and external digital platforms. It has three main features:

- PHP Code Snippets Management
- Automation via External Access
- Integration with AI

Think out of the box, and let your creativity flow, because the possibilities are endless! 🤟

=== PHP Code Snippets Management ===

With its intuitive interface, Snippet Vault unlocks a world of possibilities by allowing you to dynamically modify and extend your site's functionality without the need for extensive coding knowledge. Code snippets can be created and enhanced by AI, making the process even more efficient and user-friendly.

=== Automation via External Access ===

Snippet Vault offers seamless integration with the REST API, allowing you to execute runnable code snippets through external processes. This opens up a realm of automation opportunities, enabling you to streamline your tasks and save valuable time. By leveraging tools like Make.com, you can create sophisticated workflows that interact with your site via the REST API.

=== Integration with AI ===

Take your site to the next level with Snippet Vault's cutting-edge AI Engine integration. This powerful feature allows you to collaborate seamlessly with AI models, enabling them to run actions and enrich their responses by accessing your code snippets. By incorporating actionable snippets, you can provide your AI models with the ability to perform tasks and deliver more comprehensive and dynamic answers to user queries.

== Installation ==

1. Upload `snippet-vault` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress

== Upgrade Notice ==

Replace all the files. Nothing else to do.

== Frequently Asked Questions ==

Nothing yet.

== Changelog ==

= 0.2.5 (2024/10/17) =
* Update: Better code editor. Decoration for tags.
* Update: Added "Function Calling" next to Callable.
* Fix: Whitelist for REST to avoid issues.
* Fix: Many fixed and enhancements for AI Suggestions.
* Fix: Minor issues.
* 💕 Discuss with others about it on [Discord](https://discord.gg/bHDGh38).
* 🌴 Keep us motivated with [a little review here](https://wordpress.org/support/plugin/snippet-vault/reviews/). Thank you!

= 0.2.4 =
* Fix: Jumpy cursor and functions not available via API (0.2.3 specific issues).
* Add: Check the function name, and Sanitize.
* Fix: Lot of minor issues.

= 0.2.2 = 
* Update: Better error handling.
* Update: Better logger.

= 0.2.1 =
* Update: Better AI suggestions and improved UI.
* Fix: Avoid the Code Editor to be suddently updated by external factors.

= 0.2.0 =
* Fix: Settings display.
* Update: JS functions are now also available in the admin.

= 0.1.9 =
* Update: A bunch of improvements to make Snippet Vault even more awesome! Basically, the UI became slighlty better to use, and the features are more stable.

= 0.1.8 (2024/07/16) =
* Update: UI overhaul, with a new design, icons, and more. 
* Add: Types for arguments.
* Fix: Got rid of some warnings and errors.

= 0.1.6 (2024/07/07) =
* Add: Scheduling via WP events.
* Fix: Exclude disabled functions from functions list in the API.
* Update: Disabled Safe Mode for frontend snippets.
* Update: Various fixes and optimizations.

= 0.1.5 (2024/06/23) =
* Update: Lots of little UI improvements.
* Fix: Escape value in sanitize function and correct import snippet primary key and tag validation.
* Fix: Ensure arrays are displayed in test logs and sanitize functions when saving.

= 0.1.4 (2024/06/15) =
* Fix: If functions already exist, to avoid conflicts, the snippet will be disabled.
* Update: Scopes are now Backend, Frontend, Function, Persistent, and Scheduled.
* Update: Improved the styles.

= 0.1.3 =
* Fix: Resolved issue with Common Dashboard visibility when only Snippet Vault is used.
* Update: Enhanced UI with multiple component refactors and minor changes.
* Fix: Improved API functionality with secure query args decoding and request body support.

= 0.1.2 =
* Update: Disable Safe Mode for Admin (which is enabled by default).
* Update: Improved flow with AI Engine.

= 0.1.1 =
* Add: Import/Export Snippets & Settings.

= 0.1.0 =
* Update: Implemented version control for database updates with optimized queries.
* Update: Simplified database column declarations and improved compatibility by removing default values from 'created' and 'updated' fields.

= 0.0.9 =
* Update: Many enhancements around error handling and UI.

= 0.0.8 =
* Fix: Secondary way of checking the database if needed.
* Fix: Automatically disable snippets if they trigger a fatal error.

= 0.0.7 =
* Fix: Corrected UI behaviors including Test window size and wrapping, default tab selection in Edit modal, and default snippet name setting for Functions.
* Update: Enhanced error handling in "Test" mode to display errors instead of throwing them.
* Update: Eliminated "All" option from the Type Select dropdown.

= 0.0.6 =
* Add: Settings for developers.
* Fix: Minor issues.

= 0.0.5 =
* Update: Arguments with no default value are automatically marked as required.

= 0.0.2 =
* Info: Revamped release.

= 0.0.1 =
* Info: Old release.
