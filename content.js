chrome.storage.local.get("fortiloginpass", function(data) {
  const { username = "", password = "" } = data.fortiloginpass || {};
  if (!document.querySelector("#ft_un").value && !document.querySelector("#ft_pd").value) {
    document.querySelector("#ft_un").value = username;
    document.querySelector("#ft_pd").value = password;
    document.querySelector("form").submit();
  }
});
