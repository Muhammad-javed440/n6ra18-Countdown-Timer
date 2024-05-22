import * as readline from 'readline';
import { setInterval, clearInterval } from 'timers';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getTargetDateTime(): Promise<Date> {
    return new Promise((resolve) => {
        rl.question("Enter the target date and time (YYYY-MM-DD HH:MM:SS): ", (input) => {
            const targetDate = new Date(input);
            resolve(targetDate);
            rl.close();
        });
    });
}

function calculateRemainingTime(targetDate: Date): string {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    if (diff <= 0) {
        return "Countdown finished!";
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

async function startCountdown() {
    const targetDate = await getTargetDateTime();
    console.log("Countdown started!");

    const timerId = setInterval(() => {
        const remainingTime = calculateRemainingTime(targetDate);
        process.stdout.write(`\rTime left: ${remainingTime}`);

        if (remainingTime === "Countdown finished!") {
            clearInterval(timerId);
            console.log(`\n${remainingTime}`);
        }
    }, 1000);
}

startCountdown();
