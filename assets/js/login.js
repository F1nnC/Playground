var sessionData = "uid"
function login() {
    const login_url = "https://dolphins3.duckdns.org/api/users/username";
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;
    fetch(login_url)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                var i = 0;
                while (true) {
                    if (i >= data.length) {
                        alert("username or password is incorrect");
                        break;
                    }
                    if (data[i]["username"] === username && data[i]["password"]===password) {
                        if (sessionStorage.getItem("uid") == null) {
                            sessionStorage.setItem("uid", data[i]["username"]);
                        }
                        location.href = "/";
                        break;
                    }
                    else {
                        i += 1;
                    }
                }
            })
}