const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        const value = e.target.value;

        // Only keep 1 digit
        if (value.length > 1) {
            e.target.value = value.slice(0, 1);
        }

        // Move forward if not last input
        if (value !== "" && index < codes.length - 1) {
            codes[index + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (codes[index].value === "") {
                if (index > 0) {
                    codes[index - 1].value = "";
                    codes[index - 1].focus();
                }
            } else {
                codes[index].value = "";
            }
        }
    });
});
