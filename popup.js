document.addEventListener("DOMContentLoaded", function() {
  chrome.storage.local.get("fortiloginpass", function(data) {
    const { username = "", password = "" } = data.fortiloginpass || {};
    document.getElementById("username").value = username;
    document.getElementById("password").value = password;
  });

  document.getElementById("save").addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    chrome.storage.local.set({ "fortiloginpass": { username, password } }, function() {
      alert("Login credentials saved!");
    });
  });
});
