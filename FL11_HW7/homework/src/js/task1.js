let email = prompt('Please enter existing Email');
let password;
let newPassword;
let checkNewPassword;
let changePassword;
const minStringLength = 6;
const MIN_PASS_LENGTH = 5;

if(email === null || email === ''){
    alert('Canceled.');
} else {
    if (email.length < minStringLength){
        alert("I don't know any emails having name length less than 6 symbols");
    } else {
        if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
            password = prompt('enter password');
            if (password === null || password === '') {
                alert('Canceled.');
            } else {
                if (email === 'user@gmail.com' && password === 'UserPass' ||
                    email === 'admin@gmail.com' && password === 'AdminPass') {
                    changePassword = confirm('Do you want to change your password?');
                    if (!changePassword) {
                        alert('You have failed the change.');
                    } else {
                        password = prompt('enter Your old password');
                        if (email === 'user@gmail.com' && password === 'UserPass' ||
                            email === 'admin@gmail.com' && password === 'AdminPass') {
                            newPassword = prompt('enter New password');
                            if (newPassword.length < MIN_PASS_LENGTH) {
                                alert(`It’s too short password. Sorry.`)
                            } else {
                                checkNewPassword = prompt('enter New password again');
                                if (checkNewPassword === newPassword) {
                                    password = checkNewPassword;
                                    alert('You have successfully changed your password.')
                                } else {
                                    alert('You wrote the wrong password.')
                                }
                            }
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else{
            alert('I don’t know you');
        }
    }
}








