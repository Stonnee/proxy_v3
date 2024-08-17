let settings = {
  host: null,
  port: null,
  bypass_list: [],
}

function shExpMatch(url, pattern) {
   pattern = pattern.replace(/\./g, '\\.');
   pattern = pattern.replace(/\*/g, '.*');
   pattern = pattern.replace(/\?/g, '.');
   var newRe = new RegExp('^'+pattern+'$');
   return newRe.test(url);
}

function FindProxyForURL(url, host) {
  if (shExpMatch(host, settings.bypass_list.join('|'))) return "DIRECT";
  if (settings.host !== null && settings.port !== null)
    return (settings.host.indexOf('best-proxy.com') > 0 ? 'HTTPS' : 'PROXY')+' '+settings.host+":"+settings.port;
  return "DIRECT";
}

browser.runtime.onMessage.addListener(msg => {
  settings.host = msg.host;
  settings.port = msg.port;
  settings.bypass_list = msg.bypass_list;
});