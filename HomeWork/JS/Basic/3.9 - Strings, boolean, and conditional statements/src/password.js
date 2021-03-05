let password = "zxdd_-";

if (password.length >= 4 && (password.includes('_') || password.includes('-'))) {
    console.log("The password is strong ");
} else {
    console.log("The password is not strong enough");
}