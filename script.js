//your JS code here. If required.
   document.getElementById("btn").addEventListener("click", async function () {
        const textInput = document.getElementById("text").value;
        const delayInput = document.getElementById("delay").value;

        if (textInput && delayInput) {
          await showMessageWithDelay(textInput, delayInput);
        }
      });

      // Async function with timeout
      async function showMessageWithDelay(message, delay) {
        const outputElement = document.getElementById("output");
        outputElement.textContent = "Waiting...";

        try {
          // Parse delay as an integer
          const delayMs = parseInt(delay);
          if (isNaN(delayMs) || delayMs < 0) {
            throw new Error("Invalid delay value.");
          }

          // Wait for the specified delay
          await new Promise((resolve) => setTimeout(resolve, delayMs));

          // Display the message after the delay
          outputElement.textContent = message;
        } catch (error) {
          console.error("An error occurred:", error);
          outputElement.textContent = "Error: " + error.message;
        }
      }