const redBtn = document.getElementById('redBtn');
        const greenBtn = document.getElementById('greenBtn');
        const yellowBtn = document.getElementById('yellowBtn');
        const rotateBtn = document.getElementById('rotateBtn');
        const resetBtn = document.getElementById('resetBtn');

        redBtn.addEventListener('click', () => changeColor('red'));
        greenBtn.addEventListener('click', () => changeColor('green'));
        yellowBtn.addEventListener('click', () => changeColor('yellow'));

        function changeColor(color) {
            redBtn.style.backgroundColor = color;
            greenBtn.style.backgroundColor = color;
            yellowBtn.style.backgroundColor = color;
        }

        rotateBtn.addEventListener('click', rotateColors);
        resetBtn.addEventListener('click', resetColors);

        function rotateColors() {
            const redColor = redBtn.style.backgroundColor;
            const greenColor = greenBtn.style.backgroundColor;
            const yellowColor = yellowBtn.style.backgroundColor;

            const redText = redBtn.textContent;
            const greenText = greenBtn.textContent;
            const yellowText = yellowBtn.textContent;

            redBtn.style.backgroundColor = yellowColor; 
            greenBtn.style.backgroundColor = redColor;  
            yellowBtn.style.backgroundColor = greenColor; 

            redBtn.textContent = yellowText; 
            greenBtn.textContent = redText;   
            yellowBtn.textContent = greenText; 
        }

        function resetColors() {
            redBtn.style.backgroundColor = 'red';
            greenBtn.style.backgroundColor = 'green';
            yellowBtn.style.backgroundColor = 'yellow';

            redBtn.textContent = 'Red';
            greenBtn.textContent = 'Green';
            yellowBtn.textContent = 'Yellow';
        }