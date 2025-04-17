//Birthday wishes array object
const birthdayWishes = [
    {
        author: "JJ",
        message: "Happy birthday rayal ❤️ I want to use dis tym to tell u how special u ar and how wonderful u have been in our life's it a take thousand 🙃years for me to believe in luv u made me believe in a twinkle of a eye I just want to used dis opportunity🤧 to tell u happy birthday and pray for success to be in your part as  always and may favour always locate u dearling stay blessed and happy birthday ❤️ ",
    },
    {
        author: "Saidie Jalloh",
        message: "Today is a special day for me because it's your birthday. Having you as a friend is one of the greatest treasure and blessings in my life. You've been my rock through thick and thin. I hope this brings you love,encouragement, a smile on your face and happy vibes throughout your special day. I love you very much my one in all❤️",
    },
    {
        author: "Ramsal",
        message: " Happy birthday to the love of my life. Every moment with feels like a beautiful dream I never Want to wake up from. I am so lucky to call you mine. On your special day I just won't won't u to know how deeply I love you.u light up my world, and I can't wait to create more memories with u my queen 👑. To the most amazing girl in the world u smile is my sunshine, u voice is my favorite melody, and your heart is my home . Happy birthday love, my treasure 🥰 ♥️, my joy giver 🥰 ♥️, my all and all ♥️ can't love you less bby",
    },
    {
        author: "Genne",
        message: "Happy blessed birthday rayal mylo 🥰❤️ granddaughter law 🥰😍❤️ me granpikin e bestie 🫂🎂 love u load's may this birthday be as blessed as u are",
    },
    {
        author: "Ayra Starr",
        message: "Happy birthday, Rayal May your day be filled with all the wonderful things that make you happy on your special day. I wish you a lifetime of smiles, a heart full of dreams and adventures that make every moment worth living . Have a fantastic birthday and an even more incredible year. Baby girl, I love you so much, my milk eater ❤️",
    },
    {
        author: "Pato",
        message: "Happy birthday to you bby gyal I wish all the best life can offer and pray that all your wishes come to pass Birthday Bliss love",
    },
    {
        author: "Bakaar",
        message: "Happy birthday Rayal, as you celebrate you birthday tomorrow. I wanted to wish you long life , good health, and especially may the Almighty give you everything that your heart desires, save you from people that wanted to put you down and give you things that he knows is right for you, and not give you things that he know is gonna be harm to you. I hope that you are taking care of my brother❤️😂, Anyways wishing you a happy birthday 🎉 in advance.",
    },
    {
        author: "Madlen Rayal Jalloh ",
        message: "In the land  of beauty and the time of handsomeness We ar talking about all the April born in town.Am wishing Rayal a happy birthday and meny  more years to come,my all your secret prayers come true and your days be filled with joy.🥳🥳",
    },
    {
        author: "Damian John",
        message: "Happy Birthday! Wishing you a day filled with love, laughter, and everything that makes you happy",
    },
    {
        author: "Anthony",
        message: "HAPPY BIRTHDAY ANINE!!! Wishing you an amazing and blessed birthday filled with joy and laughter 🙌. Wish that yu get all you deserve in life and more as yu nw reach +1 may your life be filled with blessings and prosperity.Praying for your good health,long life and that you age with grace. Wow must know oo.You're now 18 🤩😁🥳🎂 🥳 🎉 🎈 🎁 🎊",
    },
]

//Create card
function createCard(wish) {
    const card = document.createElement("li");
    card.className = "card-item";
    card.innerHTML = `
          <p class="card-text">${wish.message}</p>
          <p class="card-author">${wish.author}</p>
      `;
    return card;
  }
  
  //Append cards to the list
  const cardList = document.querySelector(".card-list");
  cardList.innerHTML = "";
  birthdayWishes.forEach(wish => {
    const card = createCard(wish);
    cardList.appendChild(card);
  });