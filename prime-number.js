var prime = prompt("Enter any Number");

for (i = 2; i <= prime; i++) {
var flag =0;
    for (j = 2; j <= i / 2; j++) {
        if (i % j == 0) {
            flag=1;
            break
        }
    }
    if (flag == 0) {
        console.log("prime no");
        console.log(i);
     }
}