const is_release = true;

function debug_msg(message){
  if(is_release){
    return;
  }
  console.debug("GitHub-Tab: " + message);
}

debug_msg("Loading");

function openNewTab(tab_url){
  debug_msg(`Opening tab with url: ${tab_url}`);
  browser.tabs.create({ url: tab_url });
}

if ("browserAction" in browser) {
  debug_msg("Has permision for browserAction");

  browser.browserAction.onClicked.addListener(async () => {
    openNewTab("https://github.com");
  });
} else {
  openNewTab("https://github.com");
}

debug_msg("Loaded");
