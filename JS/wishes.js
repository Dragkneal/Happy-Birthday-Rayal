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
        author: "Barrie",
        message: "Happy birthday Rayal. Can't wait to celebrate with you . 🤘🎉🎂🎂🎂",
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