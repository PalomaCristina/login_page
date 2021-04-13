const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password]');
    const submitButton = document.querySelector('.login_submit');

    if (submitButton) { //if submitButton exist 
        submitButton.addEventListener('click', (event) => { 
            event.preventDefault();
            
            fetch('https://reqres.in/api/login', { 
                method: 'POST', 
                headers: {
                    'Conten-Type': 'application/json'
                },
                body: JSON.stringfy({
                    email: inputEmail.value,
                    password: inputPassword.value,

                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
            
        })
    }
}

window.onload = init;

