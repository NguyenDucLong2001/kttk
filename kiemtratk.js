function kt(str) {
    b = /^[_a-z0-9]{6,}$/;
    if (b.test(str)){
        document.write("Hợp lệ" );
    }
    else {
        document.write("Không hợp lệ" );
    }
}
function xyz() {
    var input = document.getElementById("input").value;
    var boy = kt(input);
    document.getElementById("boy").innerHTML = boy;
}