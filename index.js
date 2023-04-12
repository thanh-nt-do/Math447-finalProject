class quadraticFunction {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    solveEquation() {
        const partDelta = this.a.mul(this.c).mul(4);
        const delta = this.b.mul(this.b).sub(partDelta);
        if (delta == 0) {
            var sol = this.b.mul(-1).div(this.a).div(2);
            return [sol];
        }

        const r = delta.abs();
        const degree = delta.arg();
        const del_sqrt1 = Complex(Math.sqrt(r) * Math.cos(degree/2), Math.sqrt(r) * Math.sin(degree/2));
        const del_sqrt2 = Complex(Math.sqrt(r) * Math.cos(degree/2 + Complex.PI), Math.sqrt(r) * Math.sin(degree/2 + Complex.PI));
        const sol1 = this.b.mul(-1).add(del_sqrt1).div(2).div(this.a);
        const sol2 = this.b.mul(-1).add(del_sqrt2).div(2).div(this.a);

        return [sol1, sol2];
    }
}

$(".btn").on("click", function () {
    $(".result").remove();
    const aCoef = $("input[name='aCoefficient']").val();
    const bCoef = $("input[name='bCoefficient']").val();
    const cCoef = $("input[name='cCoefficient']").val();
    var a,b,c;
    try {
        a = Complex(aCoef);
        b = Complex(bCoef);
        c = Complex(cCoef);
    } catch (error) {
        alert("Coefficient not valid!");
        return;
    } 

    if (a.abs() == 0 && b.abs() == 0 && c.abs() == 0) {
        $("#button").after("<h3 class='result'>There are infinitely many solutions.</h3>");
        // alert("There are infinitely many solutions.");
    } else if (a.abs() == 0 && b.abs() == 0) {
        $("#button").after("<h3 class='result'>There is no soluion.</h3>");
        // alert("There is no soluion.");
    } else if (a.abs() == 0) {
        const sol = c.mul(-1).div(b).round(3);
        $("#button").after("<h3 class='result' id='result'>" + "The solution to the function: " + "</h3>");
        $("#result").after("<p class='result'>" + sol.toString() + "</p>");
        // $("#button").after("<h3 class='result'>" + "The solution is: " + sol.toString() + "</h3>");
    } else {
        const quadFuction = new quadraticFunction(a,b,c);
        const solutions = quadFuction.solveEquation();  
        $("#button").after("<h3 class='result' id='result'>" + "The solution to the function: " + "</h3>");
        for (let i = 0; i < solutions.length; i++) {
            const sol = solutions[i].round(3);
            $("#result").after("<p class='result'>" + sol.toString() + "</p>");
        }      
    }
})