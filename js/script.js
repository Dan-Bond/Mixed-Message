const Message = () => {
    const randomNumber = () => Math.floor(Math.random() * 10);

    const randomMonth = () => {
        const monthIndex = randomNumber();
        switch (monthIndex) {
            case 0: return "January";
            case 1: return "February";
            case 2: return "April";
            case 3: return "May";
            case 4: return "July";
            case 5: return "August";
            case 6: return "September";
            case 7: return "October";
            case 8: return "November";
            case 9: return "December";
            default: return "Invalid month";
        }
    };

    const randomStatement = () => {
        const statementIndex = randomNumber();
        switch (statementIndex) {
            case 0: return "To be or not to be?";
            case 1: return "We miss you bud!";
            case 2: return "You won a million dollars.";
            case 3: return "This is your month.";
            case 4: return "Run Forest! Run!";
            case 5: return "Happy Birthday to you!";
            case 6: return "Time rots everything.";
            case 7: return "The future Da Vinci!";
            case 8: return "The name's Bond. James Bond.";
            case 9: return "It's high noon!";
            default: return "Mmm... Strange this was not supposed to happen.";
        }
    };

    const randomFrom = () => {
        const fromIndex = randomNumber();
        switch (fromIndex) {
            case 0: return "The question.";
            case 1: return "From your buddy.";
            case 2: return "By who knows?";
            case 3: return "Sincerely Anonymous.";
            case 4: return "The viewer.";
            case 5: return "From a friend.";
            case 6: return "Philosopher of time.";
            case 7: return "Your greatest fan!";
            case 8: return "By double 008.";
            case 9: return "Declared by Trinity.";
            default: return "Unknown sender.";
        }
    };

    // Return a combined result
    return `
         ${randomMonth()}
         ${randomStatement()}
         ${randomFrom()}
    `;
};

function handleButtonClick() {
    const result = Message(); // Call Message to get the combined result
    const resultElement = document.getElementById('result');
    resultElement.textContent = result; // Update the text content of the result element
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myButton').addEventListener('click', handleButtonClick);
});