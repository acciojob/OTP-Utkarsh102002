const codes = document.querySelectorAll(".code");

document.getElementById("code-1").focus();

// FORWARD MOVEMENT
codes.forEach((code, index) => {

    code.addEventListener("input", (e) => {
        const value = e.target.value;

        if (value.length > 1) {
            code.value = value.slice(0, 1);
        }

        if (value !== "" && index < codes.length - 1) {
            document.getElementById(`code-${index + 2}`).focus();
        }
    });

    // BACKSPACE MOVEMENT
    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (code.value === "") {
                if (index > 0) {
                    document.getElementById(`code-${index}`).focus();
                    document.getElementById(`code-${index}`).value = "";
                }
            } else {
                code.value = "";
            }
        }
    });
});
