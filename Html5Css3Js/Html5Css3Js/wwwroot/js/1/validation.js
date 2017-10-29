function validateForm() {
    var cars = document.myForm.cars.value;

    if (cars < 6) {
        return false;
    }
    return true;
}