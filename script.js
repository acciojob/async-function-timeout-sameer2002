async function showMessageWithDelay() {
            const textInput = document.getElementById('text');
            const delayInput = document.getElementById('delay');
            const outputDiv = document.getElementById('output');
            
            const text = textInput.value;
            const delay = parseInt(delayInput.value);

            if (!text || isNaN(delay)) {
                outputDiv.textContent = "Please provide valid input.";
                return;
            }

            await new Promise(resolve => setTimeout(resolve, delay));

            outputDiv.textContent = text;
        }

        const btn = document.getElementById('btn');
        btn.addEventListener('click', showMessageWithDelay);