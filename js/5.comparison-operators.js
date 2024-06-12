// ==, !=, <, <=, >, >=
// ===, !==

3 == 3; // T
3 == 4; // F
5 == 3; // F
"a" == "a"; // T
0 == "a"; // F
0 == ""; // T
false == ""; // T
5 == "true"; // F
5 == true; // F
5 == "5"; // T
5 === "5"; // F
0 === ""; // F
1 == true; // T
[] == false; // T
[] == ""; // T
[] == {}; // F
[] == []; // F
{} == {}; // F
[] === []; //F
{} === {}; // F

3 != 3; // F
3 != 4; // T
5 != 3; // T
"a" != "a"; // F
0 != "a"; // T
0 != ""; // F
false != ""; // F
5 != "true"; // T
5 != true; // T
5 != "5"; // F
5 !== "5"; // T
0 !== ""; // T
1 != true; // F
[] != false; // F
[] != ""; // F
[] != {}; // T
[] != []; // T
{} != {}; // T
[] !== []; //T
{} !== {}; // T


0 < 1; // T
0 < "a"; // F
"" < 0; // F
false < 5; // T
true < 0; // F
"a" < 1000; // F
"a" < "b"; // T


0 <= 1; // T
0 <= "a"; // F
"" <= 0; // T
false <= 5; // T
true <= 0; // F
"a" <= 1000; // F
"a" <= "b"; // T




