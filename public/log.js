let my_account = document.getElementById(`my_account`);
let login_section = document.getElementById(`login_section`);
let reg_section = document.getElementById(`reg_section`);
let exit1 = document.getElementById(`exit1`);
let exit2 = document.getElementById(`exit2`);
let create = document.getElementById(`create`);
let container = document.getElementById(`container`);
let login1 = document.getElementById(`login1`);
let username = document.getElementById(`username`);
let password = document.getElementById(`password`);
let login = document.getElementById(`login`);
let log_out = document.getElementById(`log_out`);
let iffalse = document.getElementById(`iffalse`);
let iftrue = document.getElementById(`iftrue`);



let saved_user_name = localStorage.getItem("user_name");
if(saved_user_name) {
   my_account.innerText = saved_user_name;
}

log_out.addEventListener("click", () => {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("basket");
    my_account.innerText = 'MY ACCOUNT';
    // localStorage.clear
    
})

function my_account_click () {
    my_account.addEventListener(`click`, () => {
        container.style.display = `block`;
        login_section.style.display = `block`;
        document.body.style.overflow = `hidden`
        document.getElementById(`blur`).style.filter = `blur(5px)`
    });

    exit1.addEventListener(`click`, () => {
        container.style.display = `none`;
        login_section.style.display = `none`;
        document.body.style.overflow = `scroll`;
        document.getElementById(`blur`).style.filter = `none`;
        username.value = ``;
        password.value = '';
    }); 

    exit2.addEventListener(`click`, () => {
        container.style.display = `none`;
        reg_section.style.display = `none`;
        document.body.style.overflow = `scroll`;
        document.getElementById(`blur`).style.filter = `none`;
        first_name.value = ``;
        last_name.value = '';
        email.value = '';
        repeat_pass.value ='';
        password1.value = '';
    }) 

    create.addEventListener (`click`,(event) => {
        event.preventDefault();
        login_section.style.display = `none`;
        reg_section.style.display = `block`;
        document.body.style.overflow = `hidden`;
        document.getElementById(`blur`).style.filter = `blur(5px)`;

    })

    login1.addEventListener(`click`,(event) => {
        event.preventDefault()
        login_section.style.display = `block`
        reg_section.style.display = `none`
        document.body.style.overflow = `hidden`
        document.getElementById(`blur`).style.filter = `blur(5px)`
        first_name.value = ``;
        last_name.value = '';
        email.value = '';
        repeat_pass.value ='';
        password1.value = '';
    })

    let first_name = document.getElementById(`first_name`);
    let last_name = document.getElementById(`last_name`);
    let email = document.getElementById(`email`);
    let password1 = document.getElementById(`password1`);
    let repeat_pass = document.getElementById(`repeat_pass`);
    let create1 = document.getElementById(`create1`);
    
    let first_name_regex = /^[a-zA-Z\-]+$/;
    let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let password_validation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/;
    
    create1.addEventListener(`click`, (event) => {
        event.preventDefault()

        if (first_name_regex.test(first_name.value) && first_name_regex.test(last_name.value) && email_regex.test(email.value) && password_validation.test(password1.value) && repeat_pass.value === password1.value ) {
            fetch('/user/create',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: email.value,
                        password: password1.value,
                        name: first_name.value,
                        surname: last_name.value
                    }
                ),
            })
            .then(response => {
                alert("You create your account");
                first_name.value = ``;
                last_name.value = '';
                email.value = '';
                repeat_pass.value ='';
                password1.value = '';
            })
            .catch( error => {
                console.log(error)
                alert("Something went wrong");
            })

        }
    
    })

    login.addEventListener(`click`, (event) => {
        event.preventDefault()
            fetch('/user/login',{
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        email: username.value,
                        password: password.value,
                    }
                ),
            })
            .then(response => response.json())
            .then(result =>{
                localStorage.setItem("user_id",result.id);
                localStorage.setItem("user_name",result.name);
                my_account.innerText = result.name;
                username.value ='';
                password.value = '';
                container.style.display = `none`;
                login_section.style.display = `none`;
                document.body.style.overflow = `scroll`;
                document.getElementById(`blur`).style.filter = `none`;

                if (result.name === 'admin') {
                    window.location = './admin.html'
                }

            })
            .catch( error => {
                console.log(error)
                alert("Something went wrong");
            })
    })
    
    let eye = document.getElementById`eye`
    eye.addEventListener(`mousedown`,()=>{
        password1.type = `text`;
    })
    
    eye.addEventListener(`mouseup`,()=>{
        password1.type = `password`;
    })
    
    repeat_pass.addEventListener(`keyup`,() => {

        iffalse.style.display = `block`;
        if (password1.value === repeat_pass.value ) {
            iffalse.style.display = `none`;
            iftrue.style.display = `block`;
        } else {
            iftrue.style.display = `none`;
        }
        password1.addEventListener(`keyup`,() => {
            iffalse.style.display = `block`;
            if (password1.value === repeat_pass.value ) {
                iffalse.style.display = `none`;
                iftrue.style.display = `block`;
            } else {
                iftrue.style.display = `none`;
            }
        });
    })

};

export default my_account_click;