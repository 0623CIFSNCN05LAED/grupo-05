const validations = [
    {
      field: "art",
      check: (input) => ( input.value.length >= 5 && input.value.length <= 100 ),
      message: "Debe contener al menos 5 caracteres y como máximo 100",
    },
    {
      field: "name",
      check: (input) => ( input.value.length >= 5 && input.value.length <= 100 ),
      message: "Debe contener al menos 5 caracteres y como máximo 100",
    },
    {
      field: "description",
      check: (input) => ( input.value.length >= 20 && input.value.length <= 500 ),
      message: "Debe contener al menos 20 caracteres y como máximo 500",
    },
    {
      field: "brand",
      check: (input) => input.value.length > 0,
      message: "Debe especificar una marca",
    },
    {
      field: "collection",
      check: (input) => input.value.length <= 100,
      message: "Debe contener como máximo 100 caracteres",
    },
    {
      field: "model",
      check: (input) => input.value.length <= 100,
      message: "Debe contener como máximo 100 caracteres",
    },    
    {
      field: "gender",
      check: (input) => input.value.length > 0,
      message: "Debe especificar un género",
    },
    {
      field: "year",
      check: (input) => ( input.value.length >= 1900 && input.value.length <= 2099 ),
      message: "Debe ser un año entre 1900 y 2099",
    },
    {
      field: "price",
      check: (input) => input.value.length > 0,
      message: "Debe especificar un precio superior a 0",
    }
  ];
  
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
      inputErrorMsg.innerText = "Debe completar este campo";
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
  