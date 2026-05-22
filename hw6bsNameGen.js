/*Business Name Generator

Adjective: 
"Innovative""Creative""Dynamic""Visionary""Cutting-edge"

Shop Name:
"Tech Solutions""Design Studio""Marketing Agency""Consulting Firm""Software Company"

Other word:
"Hub""Works""Lab""Group""Collective"*/

function adj(){
    if (Math.random() < 0.2) {
        return "Innovative";
    } else if (Math.random() < 0.4) {
        return "Creative";
    } else if (Math.random() < 0.6) {
        return "Dynamic";
    } else if (Math.random() < 0.8) {
        return "Visionary";
    } else {
        return "Cutting-edge";
    }
}
function spn(){
    if (Math.random() < 0.2) {
        return "Tech Solutions";
    } else if (Math.random() < 0.4) {
        return "Design Studio";
    } else if (Math.random() < 0.6) {
        return "Marketing Agency";
    } else if (Math.random() < 0.8) {
        return "Consulting Firm";
    } else {
        return "Software Company";
    }
}
function otw(){
    if (Math.random() < 0.2) {
        return "Hub";
    } else if (Math.random() < 0.4) {
        return "Works";
    } else if (Math.random() < 0.6) {
        return "Lab";
    } else if (Math.random() < 0.8) {
        return "Group";
    } else {
        return "Collective";
    }
}
function genName(){
    return adj() + " " + spn() + " " + otw();
}
console.log(genName());

// npm install
// npm run dev 
// npm test
// npm run build
// npx -y create-vite@latest ./ -- --template vanilla 2>&1