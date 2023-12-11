const validations = [
    {
        field: 'email',
        check: (input) => input.value.length >= 2 ,
        message: "Debe contener como mínimo 2 caracteres",
    },
    {
        field: 'password',
        check: (input) => input.value.length >= 2 ,
        message: "Debe contener como mínimo 2 caracteres",
    },
    {
        field: 'name',
        check: (input) => input.value.length >= 2 ,
        message: "Debe contener como mínimo 2 caracteres",
    },
    {
      field: 'surname',
      check: (input) => input.value.length >= 2 ,
      message: "Debe contener como mínimo 2 caracteres",
  },
  {
    field: 'address',
    check: (input) => input.value.length >= 3 ,
    message: "Debe contener como mínimo 4 caracteres",
  },
  {
    field: 'zipcode',
    check: (input) => input.value.length >= 3 ,
    message: "Debe contener como mínimo 4 caracteres",
  },
  {
    field: 'password',
    check: (input) => input.value.length >= 8 ,
    message: "Debe contener como mínimo 8 caracteres",
  },
  {
    field: 'confirmPassword',
    check: (input) => {
      const password = document.getElementById('password')
      return (password.value === input.value)
    }
       ,
    message: "Debe ser igual a la contrasena",
  },

]

validations.forEach((validation) => {
    const inputId = validation.field;
    const input = document.getElementById(inputId);
    const inputErrorMsg = document.getElementById(inputId + "Error");
  
    function validate() {
      console.log("input.value", input.value);
      inputValidation(validation, input, inputErrorMsg);
    }
  
    input.addEventListener("blur", validate);
    input.addEventListener("input", validate);
  });
  
  const form = document.getElementById("form");
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const validationsResult = [];
  
    validations.forEach((validation) => { 
      const inputId = validation.field;
      const input = document.getElementById(inputId);
      const inputErrorMsg = document.getElementById(inputId + "Error");
      const result = inputValidation(validation, input, inputErrorMsg);
      validationsResult.push(result);
    });
  
    if (validationsResult.every((val) => val == true)) {
      form.submit();
    }
  });
  
  function inputValidation(validation, input, inputErrorMsg) {

    if (!input.value) {
      inputErrorMsg.innerText = "El campo no debe estar vacío";
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    if (!validation.check(input)) {
      inputErrorMsg.innerText = validation.message;
      inputErrorMsg.classList.add("display");
      return false;
    }
  
    inputErrorMsg.innerText = "";
    inputErrorMsg.classList.remove("display");
    return true;
  }
  