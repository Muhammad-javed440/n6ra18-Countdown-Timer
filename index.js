#! /user/bin/enu node
import inquirer from 'inquirer';
let { userAns } = await inquirer.prompt([
    {
        name: "userAns",
        type: "input",
        message: "Choose your countdown unit timer : ",
    }
]);
userAns.userAns;
class CountdownTimer {
    targetDate;
    intervalId;
    constructor(targetDate) {
        this.targetDate = targetDate;
        this.intervalId = null;
    }
    start() {
        this.intervalId = setInterval(() => {
            const currentDate = new Date();
            const timeDifference = this.targetDate.getTime() - currentDate.getTime();
            if (timeDifference <= 0) {
                this.stop();
                console.log("Countdown completed!");
            }
            else {
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
                console.log(`Time left: ${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}
// Example usage:
const targetDate = userAns.userAns;
const timer = new CountdownTimer(targetDate);
timer.start();
