
// Goal: Make a function that tests if one number is > than another

function greaterNum (x, y) {
  return x > y
}

// Goal: Make a word translater -> One arg multiple return values.]
// spanish - Hola Mundo
// german - Hallo Welt

function helloWorld(lang) {
   if (lang === "en") {
    return alert("Hello, World!");
  }

  else if (lang === "sp") {
    return alert("Hola, Mundo!");
  }

  else if (lang === "gr") {
    return alert("Hallo, Welt!");
  }

  else {
    return alert("Hello, World!");
  }

}

// Goal: Grade assigner -> EX. A = 100%
// A = 100 - 90
// B = 90 - 80
// C = 80 - 70
// D = 60 - 50
// F = 50 - 0

function assignGrade(grade) {
  if (grade > 89) {
    return alert("Congrats on your A!");
  }

  else if (grade < 90 && grade > 79) {
    return alert("Congrats on your B!");
  }

  else if (grade < 80 && grade > 69) {
    return alert("Congrats on your C!");
  }

  else if (grade < 70 && grade > 59) {
    return alert("Congrats on your D!");
  }

  else if (grade < 50) {
    return alert("Congrats on your F!");
  }

  else {
    return alert("Invalid Arg!");
  }

}

// Goal: pluralize the word if its greate than 1

function pluralize(number, noun) {
   if (number > 1) {
    var message = number + (": ") + noun;
    if (noun === "people" || noun === "children" || noun === "species" || noun === "geese" || noun === "sheep") {
      return alert(message)
    } else {
      return alert(message + "s")
    }
    return alert(message)
  }
}


// Goal : The Odd and Even
// Modulo - 2 % 2 = 0 || 5 % 2 = 2 -> Gives the sum of the number.

function OddandEven (number){
  if (number % 2 === 0) {
    return alert(number + "= Even")

  } else {
    return alert (number + "= Odd")
  }
}


// The Fizz Buzz

function TheFizzBuzz (number){
  if (number % 3 === 0){
    if (number % 5 === 0){
      return "FizzBuzz";
    } else {
      return "Fizz"
    }
  }else if (number % 5 === 0){
    return "Buzz"
  }
  return valueOf number;
}
