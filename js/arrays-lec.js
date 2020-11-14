
function myFamily(family) {

var family = ['aj3', 'edward', 'jennifer', 'john', 'pam', 'lola', 'kitty']

for (var i = 0; i < family.length; i++) {
    console.log(family[i]);
    }
}

// ****************************************************************** //

function studentBody(kalypso) {

    var kalypso = ['john', 'jane', 'david', 'dan', 'leroy', 'ricky', 'michelle', 'lola', 'travis', 'ronald']

    for (var i = 0; i < kalypso.length; i++) {
        console.log("Student: " + kalypso[i]);
        console.log("Index: " + i);
        console.log("");
    }

    kalypso.forEach(function(student) {

        console.log(student + " is in my class.");
    })
}

// ****************************************************************** //

