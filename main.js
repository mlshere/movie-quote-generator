// Arrays fot quotes, movies and years

const quotes = [
    "How can I be a fascist? I don't control the railways or the flow of commerce!",
    "Is that your gun in your pocket or are you just glad to see me?",
    "When life gives you lemons, just say ‘fuck the lemons’, and bail." ,
    "I don’t want to be rude, but may I have a drink? I had three or four before I got here, but they’re beginning to wear off. And you know how that is.",
    "Gentlemen, you can't fight in here. This is the war room!",
    "Did you just look at me? Did you? Look at me! Look at me! How dare you? Close your eyes!",
    "I don’t want to talk to you no more, you empty-headed animal food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.",
    "You read my diary? At first I did not know it was your diary, I thought it was a very sad handwritten book.",
    "That's it, dishonor! Dishonor on your whole family! Dishonor on you, dishonor on your cow!",
    "Someday, you gonna get bitch-slapped, and I'm not gonna do a thing to stop it.",
    "Pardon my French, but Cameron is so tight that if you stuck a lump of coal up his ass, in two weeks you'd have a diamond.",
    "You're a virgin who can't drive.",
    "I'm in a glass case of emotion!",
    "Will you marry me? Did he leave you any money? Answer the second question first.",
    "What is this? A center for ants?",
    "Oh, right, to call you stupid would be an insult to stupid people. … I’ve worn dresses with higher IQs.",
    "Don't point that gun at him. He's an unpaid intern.",
    "Leave the gun. Take the cannoli.",
    "If I had a dick, this is the part where I'd tell you to suck it." ,
    "Americans really have shown themselves to be a nation of ingrates; only by having children can we begin to understand such dynamic.",
    "Look up idiot in the dictionary, you know what you'll find? A picture of me?  No! The definition of the word idiot, which you fucking are!",
    "This job would be great if it wasn’t for the fucking customers.",
    "Don't give me that tone! That sarcastic, contemptuous tone that means you know everything because you're a man, and I know nothing because I'm a woman.",
    "I think we drink virgin blood because it sounds cool. I think of it like this. If you are going to eat a sandwich, you would just enjoy it more if you knew no one had fucked it.",
    "You're dizzy because you played Russian roulette with your vagina.",
]

const movies = [
    "Barbie",
    "Sextette",
    "Forgetting Sarah Marshall",
    "The Awful Truth",
    "Doctor Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    "The favourite",
    "Monthy Python and the Holly Grail",
    "Bridesmaids",
    "Mulan",
    "10 Things I Hate About You",
    "Ferris Bueller's Day Off",
    "Clueless",
    "Anchorman: The Legend of Ron Burgundy",
    "Duck Soup",
    "Zoolander",
    "A fish called Wanda",
    "The Life Aquatic with Steve Zissou",
    "The Godfather",
    "Lake Placid",
    "Love & Friendship",
    "Kiss Kiss Bang Bang",
    "Clerks",
    "The Birdcage",
    "What we do in the shadows",
    "Obvious Child",
]

const years = [
    2023,
    1977,
    2008,
    1937,
    1964,
    2018,
    1975,
    2011,
    1998,
    1999,
    1986,
    1995,
    2004,
    1933,
    2001,
    1988,
    2004,
    1972,
    1999,
    2016,
    2005,
    1994,
    1996,
    2014,
    2014,
]

// Function to generate a random quote
const generateRandomQuote = () => {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    const movie = movies[randomIndex];
    const year = years[randomIndex];
    return `"${quote}" - ${movie} (${year})`
}

// Function to display the quote
const displayQuote = () => {
    const quoteElement = document.getElementById('quote');
    const movieElement = document.getElementById('movie');
    const yearElement = document.getElementById('year');
    const generatedQuote = generateRandomQuote();
    quoteElement.textContent = generatedQuote;
    movieElement.textContent = "";
    yearElement.textContent = "";
}

// Display the quote when the button is clicked
const generateQuoteButton = document.getElementById('generate-quote');

generateQuoteButton.addEventListener('click', displayQuote);
