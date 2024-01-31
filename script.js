//create current date
const currentDate = document.getElementById('todayDate');

let today = new Date();
let date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
currentDate.innerHTML = date;

const bibleChapters = [
  {
    chapter: ["Exodus: 1 - 3", "Exodus: 4 - 6", "Exodus: 7 - 9", "Exodus: 10 - 12", "Exodus: 13 - 15", "Exodus: 16 - 18", "Exodus: 19 - 21", "Exodus: 22 - 24", "Exodus: 25 - 27", "Exodus: 28 - 30", "Exodus: 31 - 33", "Exodus: 34 - 36", "Exodus: 37 - 39", "Exodus: 40"],
    verses: [
      '1 Now these are the names of the children of Israel, which came into Egypt; every man and his household came with Jacob.',

      '2 Reuben, Simeon, Levi, and Judah',

      '3 Issachar, Zebulun, and Benjamin',

      '4 Dan, and Naphtali, Gad, and Asher.',

      '5 And all the souls that came out of the loins of Jacob were seventy souls: for Joseph was in Egypt already.',

      '6 And Joseph died, and all his brethren, and all that generation.',

      '7 And the children of Israel were fruitful, and increased abundantly, and multiplied, and waxed exceeding mighty; and the land was filled with them.',

      '8 Now there arose up a new king over Egypt, which knew not Joseph.',

      '9 And he said unto his people, Behold, the people of the children of Israel are more and mightier than we:',

      '10 Come on, let us deal wisely with them; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land.',

      '11 Therefore they did set over them taskmasters to afflict them with their burdens. And they built for Pharaoh treasure cities, Pithom and Raamses.',

      '12 But the more they afflicted them, the more they multiplied and grew. And they were grieved because of the children of Israel.',

      '13 And the Egyptians made the children of Israel to serve with rigour:',

      '14 And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour.',

      '15 And the king of Egypt spake to the Hebrew midwives, of which the name of the one was Shiphrah, and the name of the other Puah:',

      '16 And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a son, then ye shall kill him: but if it be a daughter, then she shall live.',

      '17 But the midwives feared God, and did not as the king of Egypt commanded them, but saved the men children alive.',

      '18 And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have saved the men children alive?',

      '19 And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are lively, and are delivered ere the midwives come in unto them.',

      '20 Therefore God dealt well with the midwives: and the people multiplied, and waxed very mighty.',

      '21 And it came to pass, because the midwives feared God, that he made them houses.',

      '22 And Pharaoh charged all his people, saying, Every son that is born ye shall cast into the river, and every daughter ye shall save alive.',
    ]
  }
]

if (date == "2024/1/31") {
  const bookChapters = document.getElementById('bibleBook');
  const todaChapters = document.getElementById('todayReading');

  bookChapters.innerHTML = bibleChapters[0].chapter[0];
  todaChapters.innerHTML = bibleChapters[0].verses.slice(0, 23);
} 