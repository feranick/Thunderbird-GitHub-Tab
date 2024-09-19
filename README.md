# GitHub Tab
Unofficial GitHub add-on for Thunderbird, it adds a button that opens a GitHUb tab in Thunderbird.
The [home page](https://addons.mozilla.org/thunderbird/addon/thunderchat/) of the extension contains some pictures and reviews.

#### Installing 
A new GitHub icon should appear in the top-right corner of Thunderbird. Click to open.

#### Installing from sources
Download the repository, zip it, rename it to GitHub-Tab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/feranick/Thunderbird-GitHub-Tab`
* `cd ./Thunderbird-GitHub-Tab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../GitHub-Tab-${VERSION}-tb.xpi" *`
