const mongoose = require('mongoose');
require('dotenv').config();
const Quote = require('./models/Quote.js');
const User = require('./models/User.js');
const UserQuotes = require('./models/UserQuotes.js');
let fakeUserId = '';
let fakeUserQuotesId = '';

// DB Config
const db = process.env.MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

const quotesToCreate = [
	{
		content: 'Esta es una cita creada para probar la aplicación',
		author: 'Andrés Siri',
		custom: true,
		favorite: false
	}, {
		content: 'Keep yourself to the sunshine and you cannot see the shadow.',
		author: 'Helen Keller',
		custom: false,
		favorite: false
	}, {
		content: 'Change is the law of life. And those who look only to the past or present are certain to miss the future.',
		author: 'John F. Kennedy',
		custom: false,
		favorite: true
	}, {
		content: 'Never mistake motion for action.',
		author: 'Ernest Hemingway',
		custom: false,
		favorite: false
	}, {
		content: 'The greater danger for most of us lies not in setting our aim too high and falling short; but in setting our aim too low and achieving our mark.',
		author: 'Michelangelo',
		custom: false,
		favorite: true
	}, {
		content: 'Be great in act, as you have been in thought.',
		author: 'William Shakespeare',
		custom: false,
		favorite: false
	}, {
		content: 'Logic will get you from A to B. Imagination will take you everywhere.',
		author: 'Albert Einstein',
		custom: true,
		favorite: false
	}, {
		content: 'It is only with the heart that one can see rightly, what is essential is invisible to the eye.',
		author: 'Antoine de Saint-Exupéry',
		custom: false,
		favorite: true
	}, {
		content: 'A leader or a man of action in a crisis almost always acts subconsciously and then thinks of the reasons for his action.',
		author: 'Jawaharlal Nehru',
		custom: false,
		favorite: true
	}, {
		content: 'Mistakes are the usual bridge between inexperience and wisdom.',
		author: 'Phyllis Grissim-Theroux',
		custom: false,
		favorite: false
	}, 
]

const fakeUserQuotesArray = quotesToCreate.map((quote) => {
	return {
		content: quote.content,
		author: quote.author,
		custom: quote.custom,
		favorite: quote.favorite,
		colorNum: 0,
		imgBG: 7,
		fontF: 'Arial, Helvetica, sans-serif',
		boldF: 'normal',
		italicF: 'normal',
		upperF: 'none',
		fontS: 35
	}
});

const fakeUserQuotes = [
	{
		content: 'Esta es una cita creada para probar la aplicación',
		author: 'Andrés Siri'
	}
]

const createQuotes = async () => {
	for (i = 0; i < quotesToCreate.length; i++) {
		const content = quotesToCreate[i].content
		const author = quotesToCreate[i].author
		const newQuote = new Quote ({
			content,
			author
		})
		await newQuote.save()
			.then(() => console.log(`${i + 1} quotes created`))
			.catch(err => console.log(err));
	};
};

const createFakeUser = async () => {
	const fakeUser = new User ({
		name: 'Fake User',
		email: 'fakeuser@mail.com',
		verifiedEmail: true,
		password: '$2a$10$P2240Y0nqqyfkt6lRJjJ0eZDQBYRO1zv3w2ujkN46vQk9aQ/2qW2S',
		userQuotesId: 'placeholder',
		userOptions: {
			restartAfterShare: true,
			automaticColor: true,
			quoteConfig: {
				colorNum: 0,
				imgBG: 7,
				fontF: 'Arial, Helvetica, sans-serif',
				boldF: 'normal',
				italicF: 'normal',
				upperF: 'none',
				fontS: 35
			}
		}
	})

	await fakeUser.save()
		.then((user) => {
			console.log('Fake user created - email: fakeuser@mail.com - password: 123456');
			fakeUserId = user._id;
		})
		.catch(err => console.log(err));
};

const createFakeUserQuotes = async () => {
	const fakeUserQuotes = new UserQuotes({
		userId: fakeUserId,
		quotesArray: fakeUserQuotesArray
	});
	await fakeUserQuotes.save()
		.then((userQuotes) => {
			console.log('Fake user quotes created');
			fakeUserQuotesId = userQuotes._id
		})
		.catch(err => console.log(err));
};

const updateUserQuotesId = async () => {
	User.findByIdAndUpdate(fakeUserId, {userQuotesId: fakeUserQuotesId})
		.then(() => console.log('userQuotesId updated'))
		.catch(err => console.log(err));
}

createQuotes()
	.then(() => {
		createFakeUser()
			.then(() => {
				createFakeUserQuotes()
					.then(() => updateUserQuotesId())
			})
	})
	.catch(err => console.log(err));
