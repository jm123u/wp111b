function monthToIndex(monthName) {
        const monthMap = {
                january: 1,
                february: 2,
                march: 3,
                april: 4,
                may: 5,
                june: 6,
                july: 7,
                august: 8,
                september: 9,
                october: 10,
                november: 11,
                december: 12,
        };

        const LowerCaseMonthName = monthName.toLowerCase();
        return monthMap[LowerCaseMonthName] || -1;
}

console.log(monthToIndex('October'));
console.log(monthToIndex('InvalidMonth'));