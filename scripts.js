leg fo

console.log(formElement);


formElement.addEventListener('submit', function(event) {
    event.preventDefault();


    let formData = new FormData(event.target);

    let name = formData.get('first_name');

    let surname = formData.get('last_name');

    let address = formData.get('address');

    let bike = formData.get('bike_model');

    let result = `${name} ${surname} замовив ${bike} на адресу ${address}`;


    console.log(result);

    alert(result);
});
