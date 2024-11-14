function getDates(startDate, endDate) {
    const dates = [];
    let currentDate = new Date(startDate);

    const addDays = function (days) {
        const date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    };

    while (currentDate <= new Date(endDate)) {
        dates.push(currentDate.toISOString().split('T')[0]);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

// Usage
const startDateString = "2024-11-27";  
const endDateString = "2024-11-30";    
const dates = getDates(startDateString, endDateString);
dates.forEach(function (date) {
    console.log(date);
    console.log(typeof(date));
});
