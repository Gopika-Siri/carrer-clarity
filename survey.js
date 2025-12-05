document.getElementById("careerSurvey").addEventListener("submit", function(e){
    e.preventDefault();

    let subject = document.getElementById("subjects").value;
    let work = document.getElementById("workType").value;
    let stream = document.getElementById("stream").value;

    let result = "";
    let colleges = "";

    // CAREER LOGIC
    if(subject === "Computers" || work === "Problem Solving") {
        result = "Software Engineer, Data Scientist, AI Engineer";
        colleges = "IITs, NITs, IIITs, VIT, SRM";
    }
    else if(subject === "Biology" || work === "Helping People") {
        result = "Doctor, Nurse, Biotech Researcher";
        colleges = "AIIMS, JIPMER, Manipal, CMC";
    }
    else if(subject === "Arts" || work === "Designing") {
        result = "Graphic Designer, UI/UX Designer, Animator";
        colleges = "NID, NIFT, Srishti Institute";
    }
    else if(subject === "Commerce") {
        result = "Chartered Accountant, Financial Analyst, Manager";
        colleges = "IIMs, SRCC, Christ University";
    }
    else {
        result = "General Career Options: Teacher, Administrator, Researcher";
        colleges = "Various State & Private Universities";
    }

    document.getElementById("resultBox").style.display = "block";
    document.getElementById("resultBox").innerHTML =
        `<h3>Recommended Careers:</h3><p>${result}</p>
         <h3>Recommended Colleges:</h3><p>${colleges}</p>`;
});
