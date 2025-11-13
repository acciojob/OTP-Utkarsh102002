const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        const value = e.target.value;

        // Only one digit allowed
        if (value.length > 1) {
            code.value = value.slice(0, 1);
        }

        if (value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (code.value === "" && index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            }
        }
    });
});
