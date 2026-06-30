# CLAUDE.md - Project-Specific Instructions

### Screenshot Workflow
Whenever building or updating a front-end component:

Capture: After implementing a change, use Puppeteer to take a full-page or component-level screenshot.
Analyze: Compare the current screenshot against the target design or the previous version.
Iterate: If there are visual discrepancies, styling issues, or layout mismatches, explain the correction needed and re-run the code.
Polish: Perform at least two rounds of 'Screenshot Review and Polish' to ensure the final output matches the desired aesthetic.
Cleanup: Store screenshots in a /temporary_screenshots folder. After a successful build session, delete old files to maintain project cleanliness.
Pro-Tips for Implementation:
Handling Animations: As noted in the video (19:02), if you are working with dynamic or animated backgrounds, the screenshot tool can sometimes misinterpret the animation as a rendering error. If this happens, explicitly tell the agent: "This is an animated element; do not use the screenshot loop to compare for this specific task."
Manual Oversight: While this loop automates the 'correction' phase, remember that you can (and should) monitor the /temporary_screenshots folder to see exactly how the design is evolving through the iterations (8:42).
