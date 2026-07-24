// year

const year = document.getElementById("year");
const currentYear = new Date().getFullYear();

for (let i = currentYear; i >= 1900; i--) {
    year.innerHTML += `<option value="${i}">${i}</option>`;
}

// Month

const month = document.getElementById("month");

const monthNames = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
];

monthNames.forEach((m, index) => {
    month.innerHTML += `<option value="${index + 1}">${m}</option>`;
});

// Date

const date = document.getElementById("date");

for (let i = 1; i <= 31; i++) {
    date.innerHTML += `<option value="${i}">${i}</option>`;
}

// hour

const hour = document.getElementById("hour");

for (let i = 0; i <= 23; i++) {
    hour.innerHTML += `<option value="${i}">${i}</option>`;
}

// Minute

const minute = document.getElementById("minute");

for (let i = 0; i <= 59; i++) {
    minute.innerHTML += `<option value="${i}">${i}</option>`;
}

// =====================


function calculateAge() {

    let birthYear = document.getElementById("year").value;
    let birthMonth = document.getElementById("month").value;
    let birthDate = document.getElementById("date").value;
    let birthHour = document.getElementById("hour").value;
    let birthMinute = document.getElementById("minute").value;

    if (
        birthYear === "" ||
        birthMonth === "" ||
        birthDate === "" ||
        birthHour === "" ||
        birthMinute === ""
    ) {
        document.getElementById("result").innerHTML =
            "⚠ Please Select All Fields";
        return;
    }

    // Birth Date
    let birth = new Date(
        birthYear,
        birthMonth - 1,
        birthDate,
        birthHour,
        birthMinute
    );

    let now = new Date();

    if (birth > now) {
        document.getElementById("result").innerHTML =
            "⚠ Birth Date cannot be in the Future";
        return;
    }

    // Exact Age
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();

    if (days < 0) {
        const previousMonth = new Date(
            now.getFullYear(),
            now.getMonth(),
            0
        );

        days += previousMonth.getDate();
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    // Total Difference
    let diff = now - birth;

    let totalHours = Math.floor(diff / (1000 * 60 * 60));
    let totalMinutes = Math.floor(diff / (1000 * 60));

    // Result
    document.getElementById("result").innerHTML = `

        <h3>Your Age</h3>

        <br>

        <strong>${years}</strong> Years <br>
        <strong>${months}</strong> Months <br>
        <strong>${days}</strong> Days <br><br>

        <strong>Total Hours :</strong> ${totalHours.toLocaleString()} Hours <br>

        <strong>Total Minutes :</strong> ${totalMinutes.toLocaleString()} Minutes

    `;
}