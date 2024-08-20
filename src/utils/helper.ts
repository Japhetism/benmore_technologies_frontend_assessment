export const getGreetingBasedOnTime = (): string => {
    const date = new Date();
    const hours = date.getHours();

    if (hours >= 5 && hours < 12) {
        return "Good Morning";
    } else if (hours >= 12 && hours < 16) {
        return "Good Afternoon"
    } else if (hours >= 16 && hours < 22) {
        return "Good Evening";
    } else {
        return "Good Night";
    }
}