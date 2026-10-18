function calculateGrade(score) {
    if (typeof score !== "number" || score < 0 || score > 100) {
        return "Invalid Score";
    }

    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Function to check access based on age and ticket status
function checkAccess(age, hasTicket) {
    if (typeof age !== "number" || age < 0 || typeof hasTicket !== "boolean") {
        return false;
    }
    return age >= 18 && hasTicket === true;
}

//testing calculateGrade function
console.log("Grade for 95:", calculateGrade(95));// A
console.log("Grade for 85:", calculateGrade(85));// B
console.log("Grade for 75:", calculateGrade(75));// C
console.log("Grade for 65:", calculateGrade(65));// D
console.log("Grade for 50:", calculateGrade(50));// F
console.log("Grade for 105:", calculateGrade(105));
console.log("Grade for -5:", calculateGrade(-5));
console.log("Access (20, true):", checkAccess(20, true));
console.log("Access (16, true):", checkAccess(16, true));
console.log("Access (20, false):", checkAccess(20, false));