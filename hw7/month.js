function mothsToNumbers(obj) {
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

        const newObj = {};
        for (const [key, value] of Object.entries(obj)) {
                const monthNum = monthMap[value.toLowerCase()];
                newObj[key] = monthNum !== undefined ? monthNum : value;
        }

        return newObj;
}

const input = {
        month1: "January",
        month2: "february",
        month3: "march",
        month4: "April",
        month5: "MAY",
        month6: "JUNE"
    };
    
    console.log(mothsToNumbers(input));
    