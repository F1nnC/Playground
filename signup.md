---
title: Python Signin
layout: default
description: A signin screen 
permalink: /signin
---

<p><h2 style="text-align: center">Log In</h2></p>
<form id="form">
    <p><label>
        Username:
        <input type="text" name="name" id="loginName" required="" />
    </label></p>
    <p><label>
        Password:
        <input type="password" name="password" id="loginPassword" required="" />
    </label></p>
    <p><button class="btn btn-dark button" type="submit">Login</button></p>
    <p id="message"></p>
</form>
<p><h2 style="text-align: center">
    Sign Up
</h2></p>
<p><label>
    Username:
    <input type="text" name="name" id="name" required="" />
</label></p>
<p><label>
    Password:
    <input type="password" name="password" id="password" required="" />
</label></p>
<p><label>
    Confirm Password:
    <input type="password" name="password" id="passwordConfirm" required="" />
</label></p>
<p><button class="btn btn-dark button" type="submit" id="signUp">Sign Up</button></p>
<p id="message2"></p>
<script src="assets/js/loginjs"></script>
<script>
    //working script for the signup/login/whatever this monstrosity is page
    document.getElementById("form").addEventListener("submit", (event) => {
        event.preventDefault();
        //link should work now
        const url = "https://tngc.nighthawkcodescrums.gq/api/names/";
        //temporary localhost server, for your's truly
        //const url = "http://127.0.0.1:8087/api/names/"
        const body = {
            name: document.getElementById("loginName").value,
            password: document.getElementById("loginPassword").value,
        };
        const requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        };
        fetch(url, requestOptions)
            .then(response => {
                //differentiate numbers
                console.log(response)
                if (response.status === 200){
                    return response.json()
                }
                else if (response.status === 210) {
                    document.getElementById("message").innerHTML = "Username must be more than 2 characters";
                    return
                //two character thing really necesarry? 
                }
                else if (response.status === 211) {
                    document.getElementById("message").innerHTML = "Username not found :(";
                    return
                }
                else if (response.status === 212) {
                    document.getElementById("message").innerHTML = "Password incorrect :(";
                    return
                }
                else {
                    document.getElementById("message").innerHTML = "Error " + response.status;
                    return
                }
            })
            //the code has a three way thing going on, a bit complex but it works :D
            //maybe simplify it later
            .then(data => {
                if (data.message == "name is missing") {
                    document.getElementById("message").innerHTML = "Username must be more than 2 characters :(";
                    return
                //maybe works? dunno, fix again 
                }
                else if (data.message == "invalid username") {
                    document.getElementById("message").innerHTML = "Username not found :(";
                    return
                }
                else if (data.message == "wrong password") {
                    document.getElementById("message").innerHTML = "Password incorrect :(";
                    return
                }
                const message = 'Login success: ' + data.name;
                document.getElementById("message").innerHTML = message;
                if (data.message != undefined)
                return document.getElementById("message").innerHTML ="Error: " +  data.message;
                localStorage.setItem("name", data.name);
            })
            .catch(response => {
                const message = response.message;
                
                document.getElementById("message").innerHTML = "Error: " + message;
                localStorage.removeItem("name");
            });
    });
</script>