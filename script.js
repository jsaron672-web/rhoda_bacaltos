/* Lila Reads — standalone library interactions (plain JavaScript, no framework). */
"use strict";

const books = [
  {
    id: "harry-potter", title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling",
    genre: "Fantasy", category: "Fantasy", cover: "images/HARRY_POTTER_1792598517484.jpeg",
    synopsis: "A young boy discovers that he is a wizard and begins studying magic at Hogwarts School of Witchcraft and Wizardry.",
    chapterTitle: "The Unexpected Letter",
    chapter: [
      "Some days seem entirely ordinary: the same breakfast, the same staircase, and the same quiet corner that always feels a little mysterious. Sometimes, though, one small surprise is enough to change everything.",
      "That morning, a letter arrived bearing a name no one should have known. Its paper was thick, its handwriting unfamiliar, and its invitation pointed toward a life the young recipient had never imagined.",
      "The boy did not yet know what waited beyond the door. He only knew that, for the first time, a place seemed to be waiting for him."
    ]
  },
  {
    id: "hunger-games", title: "The Hunger Games", author: "Suzanne Collins", genre: "Dystopian / Science Fiction", category: "Sci-Fi",
    cover: "images/HUNGER_GAMES_1792598517483.jpeg",
    synopsis: "Katniss Everdeen volunteers for a dangerous televised competition to save her younger sister.",
    chapterTitle: "A Promise to Keep",
    chapter: [
      "Mara woke early to the wind rattling the window. In their small home, everyone knew the day of the selection was coming; no one asked whether they were ready.",
      "When she heard her sister's name, the world seemed to stop. Then her feet moved before she could think: one step forward, one promise she could not take back.",
      "Cameras were already trained on the distant stage. One thought stayed clear in her mind: she had to find a way home with her sister."
    ]
  },
  {
    id: "fault-in-our-stars", title: "The Fault in Our Stars", author: "John Green", genre: "Romance / Young Adult", category: "Romance",
    cover: "images/THE_FAULT_IN_OUR_STARS_1792598517481.jpeg",
    synopsis: "Two teenagers meet at a support group and form a meaningful connection while facing difficult circumstances.",
    chapterTitle: "A Room Full of Stories",
    chapter: [
      "Lia never liked circles of chairs. Each week, the room looked the same and the stories sounded familiar, but this time a new face sat beside the window.",
      "They exchanged a glance and a careful smile. There were no grand promises or movie-like moments—just a joke about cold coffee and the book he had brought.",
      "On her way home, Lia thought that some people do not arrive to fix everything. They simply help you notice what is still good."
    ]
  },
  {
    id: "the-hobbit", title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy / Adventure", category: "Fantasy",
    cover: "images/HOBBIT_1792598517480.jpg",
    synopsis: "Bilbo Baggins joins a group of dwarves on a quest to reclaim their homeland and treasure from a dragon.",
    chapterTitle: "An Invitation at the Door",
    chapter: [
      "Berto liked mornings without surprises: hot tea, a quiet garden, and a favorite chair all to himself. So when someone knocked, he tried to ignore it.",
      "The knock came again. Outside stood a stranger with a map and a question about a road long forgotten. Beyond it waited the promise of a journey far too large for the sitting room.",
      "Berto closed the door, looked at his tidy home, and wondered how long it had been since he asked himself what lay beyond the hill."
    ]
  },
  {
    id: "sherlock-holmes", title: "Sherlock Holmes: The Hound of the Baskervilles", author: "Arthur Conan Doyle", genre: "Mystery / Detective", category: "Mystery",
    cover: "images/SHERLOCK_HOLMES_1792598517478.jpeg",
    synopsis: "Sherlock Holmes investigates a mysterious legend about a terrifying hound and a wealthy family.",
    chapterTitle: "Footprints in the Fog",
    chapter: [
      "The visitor arrived on Baker Street carrying an old walking stick and an even older fear. Fog covered the city outside; indoors, the detective quietly studied every mark on the wood.",
      "There was a story about a stretch of moor, a family, and an unexplained howl. The visitor asked for help, but the detective was more interested in what had been left unsaid.",
      "When the conversation ended, he placed a map on the table. The legend might be true or false—but footprints, he said, always came from somewhere."
    ]
  },
  {
    id: "pride-and-prejudice", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance / Classic", category: "Romance",
    cover: "images/PRIDE_1792598517476.webp",
    synopsis: "Elizabeth Bennet navigates love, family expectations, and social class while learning to question her first impressions.",
    chapterTitle: "First Impressions",
    chapter: [
      "At the dinner table, news of the new neighbor spread faster than the smell of fresh bread. One person called him wealthy, another called him rude, and everyone seemed certain they understood his whole character.",
      "Elise listened, then asked who had actually spoken with him. No one answered right away. She laughed—not because she knew a secret, but because assumptions filled empty spaces so easily.",
      "The next day, their eyes met at a gathering. It lasted only a moment, but it was enough for Elise to wonder whether the first story was always the right one."
    ]
  },
  {
    id: "little-prince", title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Fantasy / Philosophical Fiction", category: "Fantasy",
    cover: "images/LITTLE_PRINCE_1792598517474.webp",
    synopsis: "A young prince travels between planets and discovers lessons about friendship, love, responsibility, and life.",
    chapterTitle: "A Visitor Beneath the Stars",
    chapter: [
      "On a small planet with three volcanoes and one solitary tree, the child carefully counted the stars. Not because they might disappear, but because he wondered whether anyone far away was looking back.",
      "One night, a light appeared in the sky and moved unlike the others. Instead of being afraid, he asked who was there and whether the visitor had a story to share.",
      "An answer came from a distant world: some things are not obvious at first, but become precious when someone cares for them."
    ]
  },
  {
    id: "the-alchemist", title: "The Alchemist", author: "Paulo Coelho", genre: "Adventure / Philosophical Fiction", category: "Fantasy",
    cover: "images/ALCHEMIST_1792598517452.jpg",
    synopsis: "A shepherd travels in search of treasure and learns about following his dreams and discovering his purpose.",
    chapterTitle: "A Dream Beneath the Tree",
    chapter: [
      "Every night, the same dream returned to Tomas: an unfamiliar tree and a light at the edge of a wide plain. Each morning, he told it to an old shepherd.",
      "The old man did not explain the dream. Instead, he asked what first step Tomas could take today. Sometimes the question was harder than any answer.",
      "So Tomas packed bread, water, and courage. He did not know where the road would lead, but he knew it began when he set out."
    ]
  },
  {
    id: "1984", title: "1984", author: "George Orwell", genre: "Dystopian / Political Fiction", category: "Sci-Fi",
    cover: "images/1984_1792598517448.jpeg",
    synopsis: "A man struggles to preserve his individuality in a society controlled by an oppressive government that monitors its citizens.",
    chapterTitle: "A Note in the Margin",
    chapter: [
      "In a city with no truly quiet corner, Nilo learned to speak in sentences that sounded safe. Public walls repeated the same message: the government forgot nothing.",
      "He kept a small notebook hidden beneath a floorboard. In it, he wrote the date, the sound of rain, and the name of a friend he had not seen in a long time.",
      "He did not know whether anyone would ever read it. Still, every word reminded him that his thoughts were his own."
    ]
  },
  {
    id: "to-kill-a-mockingbird", title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Classic / Social Fiction", category: "Classic",
    cover: "images/MOCKINGBIRD_1792598517446.jpeg",
    synopsis: "A young girl witnesses racial injustice and moral courage in her Southern American community.",
    chapterTitle: "A Question Beneath the Tree",
    chapter: [
      "On the dusty road, children heard many stories they did not yet fully understand. Mina watched the adults talk at the store and noticed that some people were ignored even when they spoke clearly.",
      "When she asked her father why, he did not offer an easy answer. Instead, he asked her to think about what was fair when no one was watching.",
      "That evening, Mina wrote the question on a piece of paper. She did not know all the answers yet, but she knew it mattered to keep asking."
    ]
  },
  {
    id: "great-gatsby", title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic / Tragedy", category: "Classic",
    cover: "images/GATSBY_1792598475234.webp",
    synopsis: "A mysterious millionaire pursues a lost romance as the story examines wealth, ambition, and the American Dream.",
    chapterTitle: "Lights Across the Water",
    chapter: [
      "Each night, the mansion across the bay glowed with light. Cars arrived, music played, and voices drifted over the water from people who never introduced themselves.",
      "On the opposite shore, a man always stood beneath a tree. He never joined the celebration. He watched a small light in the distance as if it were the only thing that mattered.",
      "Some dreams shine brightest from far away. Only when you come closer can you see what they are really made of."
    ]
  },
  {
    id: "narnia", title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", author: "C.S. Lewis", genre: "Fantasy / Adventure", category: "Fantasy",
    cover: "images/NARNIA_1792598475235.jpg",
    synopsis: "Four siblings enter a magical world and help fight a powerful witch who has trapped the land in endless winter.",
    chapterTitle: "The Door Behind the Coats",
    chapter: [
      "While hiding during a noisy game, Lina opened the door of an old wardrobe. She expected coats and dust, but a cold breeze touched her face.",
      "She stepped between the clothes and felt snow beneath her shoes. Ahead stood ice-covered trees and a lamppost that seemed to be the forest's only guard.",
      "Behind her was a familiar room; in front of her was a world she had never seen. She hesitated for a moment, then walked on."
    ]
  },
  {
    id: "percy-jackson", title: "Percy Jackson and the Lightning Thief", author: "Rick Riordan", genre: "Fantasy / Mythology", category: "Fantasy",
    cover: "images/PERCY_1792598475230.jpeg",
    synopsis: "Percy Jackson discovers that he is a demigod and begins a quest involving the Greek gods and a stolen lightning bolt.",
    chapterTitle: "A Field Trip Like No Other",
    chapter: [
      "Pio's day began with the usual reminders: do not be late, do not argue, and do not touch the exhibits. By noon, all three rules seemed to have failed at once.",
      "He heard a strange rumble inside the museum even though the sky outside was clear. A teacher asked whether he had seen anything, but before he could answer, the light in the hall changed.",
      "That night, a friend told him that some myths were more than stories. If that was true, the gods might have been watching him for a long time."
    ]
  },
  {
    id: "maze-runner", title: "The Maze Runner", author: "James Dashner", genre: "Science Fiction / Thriller", category: "Sci-Fi",
    cover: "images/MAZE_RUNNER_1792598475232.webp",
    synopsis: "A teenager wakes in a mysterious walled place and works with others to uncover the secrets of a dangerous maze.",
    chapterTitle: "Awakening Among the Walls",
    chapter: [
      "Ren woke to the sound of moving metal. He could not remember his name, his home, or how he had ended up inside the dark elevator.",
      "When the doors opened, a group of young people seemed to have been waiting for him. Massive walls surrounded them, and beyond those walls lay passages that shifted each night.",
      "No one had a complete answer. But there were marks in the stone and people willing to help. He only needed to decide what to ask first."
    ]
  },
  {
    id: "divergent", title: "Divergent", author: "Veronica Roth", genre: "Dystopian / Science Fiction", category: "Sci-Fi",
    cover: "images/DIVERGENT_1792598475229.jpeg",
    synopsis: "In a society divided into factions by personality, a young woman discovers that she does not fit into just one group.",
    chapterTitle: "The Day of Choosing",
    chapter: [
      "In Talia's city, everyone chose early what kind of person they were expected to become. Tests, ceremonies, and family advice all pointed toward the familiar path.",
      "In the testing room, some of her answers refused to fit the boxes. The examiner looked at her and told her to keep the result secret.",
      "On her way home, the secret felt heavier than the fear. If she did not belong to only one group, perhaps she needed to choose her own direction."
    ]
  },
  {
    id: "book-thief", title: "The Book Thief", author: "Markus Zusak", genre: "Historical Fiction / Drama", category: "History",
    cover: "images/BOOK_THIEF_1792598475228.jpeg",
    synopsis: "A young girl finds comfort in stealing and sharing books amid war and persecution in Nazi Germany.",
    chapterTitle: "Words Found Along the Road",
    chapter: [
      "In a town where someone always seemed to be watching, Leni learned to hide things that should never have been stolen: a page, a sentence, a name she refused to forget.",
      "One day, she found a book left beside the road. She picked it up carefully, not to gain anything, but to discover what kind of world waited inside.",
      "That night, she read a few lines in a dark room. Fear continued outside; inside, the words gave her strength to keep going."
    ]
  },
  {
    id: "frankenstein", title: "Frankenstein", author: "Mary Shelley", genre: "Gothic Horror / Science Fiction", category: "Horror",
    cover: "images/FRANKENSTEIN_1792598475226.jpeg",
    synopsis: "A scientist creates a living being, leading to tragedy and questions about responsibility and what it means to be human.",
    chapterTitle: "The Machine That Should Not Work",
    chapter: [
      "Above the town stood a workshop that never slept. Inside, Elias collected notes, tools, and questions his colleagues could not answer.",
      "That night, the needle on the meter moved. The lights flickered, thunder echoed outside, and a faint breath came from the far end of the room.",
      "Elias froze. First came triumph, then fear. Somewhere between the two, he understood that some things do not end when you create them."
    ]
  },
  {
    id: "dracula", title: "Dracula", author: "Bram Stoker", genre: "Gothic Horror", category: "Horror",
    cover: "images/DRACULA_1792598475225.jpeg",
    synopsis: "A group confronts Count Dracula, a mysterious nobleman with a terrifying supernatural secret.",
    chapterTitle: "A Guest at the Old House",
    chapter: [
      "Adrian reached the mountains before sunset. With every mile, houses became fewer and warnings against traveling alone became more frequent.",
      "At the summit stood an old house with its gate already open. The owner welcomed him politely, but no mirrors hung in the broad hall.",
      "At midnight, Adrian woke to the sound of slow footsteps. Outside, the air was still. Inside, a door stood slightly open."
    ]
  },
  {
    id: "the-shining", title: "The Shining", author: "Stephen King", genre: "Horror / Psychological Thriller", category: "Horror",
    cover: "images/SHINING_1792598475224.jpeg",
    synopsis: "A family staying at an isolated hotel experiences increasingly disturbing events that seem supernatural.",
    chapterTitle: "The Quiet Hallway",
    chapter: [
      "In winter, the hotel became an island surrounded by snow. Mara brought her family there for a new job and a fresh start, though almost no cars passed by.",
      "The first night was quiet. On the second, she heard the elevator even though the power was off in that wing of the building.",
      "She told herself it was only the wind. But when the hallway door opened, fresh snow covered the floor, and a trail of footprints stopped outside their room."
    ]
  },
  {
    id: "murder-orient-express", title: "Murder on the Orient Express", author: "Agatha Christie", genre: "Mystery / Crime", category: "Mystery",
    cover: "images/MURDER_1792598475222.avif",
    synopsis: "Detective Hercule Poirot investigates a murder aboard a luxury train trapped by snow.",
    chapterTitle: "A Night on the Train",
    chapter: [
      "The train was full of passengers, each carrying a reason for traveling. In the dining car, a detective ate quietly while studying everyone's hands, voices, and silences.",
      "At midnight, the train stopped in the snow. There was no station nearby and no sign of another vehicle outside.",
      "When news arrived that a passenger would not wake again, every conversation changed. All the possible answers—and all the possible questions—were in the same carriage."
    ]
  },
  {
    id: "da-vinci-code", title: "The Da Vinci Code", author: "Dan Brown", genre: "Mystery / Thriller", category: "Mystery",
    cover: "images/DAVINCI_1792598475221.webp",
    synopsis: "A symbologist investigates a murder and follows a trail of historical clues, secret societies, and hidden messages.",
    chapterTitle: "The Symbol Left Behind",
    chapter: [
      "Mira received a call from a museum after its doors had closed. A line on the floor appeared in none of the records, and a message beside it was written in a language she did not recognize.",
      "Under the lights, she realized the shapes were more than marks. They connected like pieces of a map scattered across different eras.",
      "She opened her notebook and wrote the first question: who wanted this to be found? The answer, she knew, would lead to a deeper puzzle."
    ]
  },
  {
    id: "the-martian", title: "The Martian", author: "Andy Weir", genre: "Science Fiction / Survival", category: "Sci-Fi",
    cover: "images/MARTIAN_1792598475220.jpg",
    synopsis: "An astronaut stranded on Mars uses scientific knowledge and ingenuity to survive while waiting for rescue.",
    chapterTitle: "Notes for Tomorrow",
    chapter: [
      "Alex woke to red dust and an unfamiliar silence. Communications were down and the rest of the crew was nowhere in sight. One thing was clear: he had to find out what still worked.",
      "He checked the air, water, and remaining food. Each measurement went into a log; a problem felt more manageable when it was divided into smaller steps.",
      "Outside the dome, the planet was vast and indifferent. Inside, one person decided to try again tomorrow."
    ]
  },
  {
    id: "dune", title: "Dune", author: "Frank Herbert", genre: "Science Fiction / Political Adventure", category: "Sci-Fi",
    cover: "images/DUNE_1792598475219.webp",
    synopsis: "A young noble becomes entangled in a struggle over a desert planet whose precious resource is vital to the universe.",
    chapterTitle: "Beneath the Vast Desert",
    chapter: [
      "Before Arin ever saw the desert, he felt its weight in every conversation. Each agreement, journey, and palace secret seemed tied to the sand and the resource hidden beneath it.",
      "On his first night in the new home, he stood on a balcony facing the immense plain. No lights marked the horizon, but the deep silence felt as if it guarded a secret.",
      "His teacher told him that power was not only something to possess; it was also a responsibility that affected everyone who depended on the land."
    ]
  },
  {
    id: "the-giver", title: "The Giver", author: "Lois Lowry", genre: "Dystopian / Young Adult", category: "Sci-Fi",
    cover: "images/GIVER_1792598475202.jpeg",
    synopsis: "A boy is chosen to inherit his community's memories and discovers the hidden cost of living in a seemingly perfect society.",
    chapterTitle: "The Day Before the Assignment",
    chapter: [
      "In Niko's community, everything had a scheduled time: meals, work, rest, even the words people used to apologize. Surprises were rare, and that was considered a kind of safety.",
      "The next day, the young people's assignments would be announced. Niko tried to guess where he would be placed, but an unfamiliar feeling kept interrupting his predictions.",
      "When his name was called, the hall fell silent. For the first time, he felt he did not yet understand everything about the place he called home."
    ]
  },
  {
    id: "atomic-habits", title: "Atomic Habits", author: "James Clear", genre: "Self-Help / Personal Development", category: "Self-Help",
    cover: "images/ATOMIC_HABITS_1792598475217.webp",
    synopsis: "This book explains how small, consistent changes can help people build better habits and improve over time.",
    chapterTitle: "The First Small Step",
    chapter: [
      "Lira decided to change her routine. On the first day, she listed ten goals and tried to begin them all. By the third day, she was exhausted and had finished almost nothing.",
      "The next morning, she chose one task that took less than two minutes: putting her shoes beside the door. It was small, but it made the next step obvious.",
      "Weeks later, her schedule was still imperfect. But starting had become easier, and that small change was one she wanted to keep."
    ]
  },
  {
    id: "seven-habits", title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", genre: "Self-Help / Leadership", category: "Self-Help",
    cover: "images/7_habits_1792598475201.jpeg",
    synopsis: "A guide to personal effectiveness built around principles such as responsibility, prioritization, and cooperation.",
    chapterTitle: "From Intention to Action",
    chapter: [
      "At the start of the week, Ben tried to answer every message and finish every task that came his way. By Friday, he had been busy all week but had not completed his most important project.",
      "He made a new list: not just what needed doing, but why each task mattered. He chose two priorities and gave them time before the day filled up.",
      "The interruptions did not disappear. But he learned that being busy was different from making progress on the things he truly valued."
    ]
  },
  {
    id: "win-friends", title: "How to Win Friends and Influence People", author: "Dale Carnegie", genre: "Self-Help / Communication", category: "Self-Help",
    cover: "images/WIN_FRIENDS_1792598475199.webp",
    synopsis: "Practical principles for improving communication, building relationships, and working effectively with others.",
    chapterTitle: "Listening with Purpose",
    chapter: [
      "At the team meeting, Ana prepared answers before anyone else had spoken. She noticed that the time was disappearing into arguments, and no one remembered the original question.",
      "At the next meeting, she decided to listen first. She asked what mattered most to each teammate, then repeated what she had heard to make sure she understood.",
      "The tone of the conversation changed—not because everyone agreed, but because people felt their ideas had room to be heard."
    ]
  },
  {
    id: "rich-dad-poor-dad", title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", genre: "Personal Finance / Education", category: "Finance",
    cover: "images/RICH_DAD_1792598475197.jpg",
    synopsis: "The author shares lessons about financial literacy, assets, liabilities, and different approaches to managing money.",
    chapterTitle: "Questions About Money",
    chapter: [
      "When Noel received his first paycheck, he immediately thought about what to buy. Then his aunt asked how he wanted that money to help him over the next year.",
      "He did not know the answer. Together, they wrote down expenses, savings, and things that could support his goals. The picture became clearer once it was on paper.",
      "Not every decision was easy, but Noel learned that it was better to ask questions about money before spending it than to regret the choice afterward."
    ]
  },
  {
    id: "diary-young-girl", title: "The Diary of a Young Girl", author: "Anne Frank", genre: "Biography / Historical Nonfiction", category: "History",
    cover: "images/YOUNG_GIRL_1792598475195.jpg",
    synopsis: "Anne Frank's diary records her thoughts, experiences, and hopes while she and her family hide during World War II.",
    chapterTitle: "Memory and Hope",
    chapter: [
      "Sometimes a notebook becomes a quiet companion. Amid war and danger, a young girl recorded feelings she could not always say aloud: loneliness, impatience, disagreement, and hope.",
      "Her pages are more than a record of events. They also reveal a young person trying to understand herself and a world that had suddenly become narrow and dangerous.",
      "This chapter is a brief guide to the diary's historical context. It is not a quotation or a newly invented page attributed to Anne Frank."
    ]
  },
  {
    id: "brief-history-time", title: "A Brief History of Time", author: "Stephen Hawking", genre: "Science / Nonfiction", category: "Science",
    cover: "images/TIME_1792598475193.jpeg",
    synopsis: "Stephen Hawking introduces major ideas about the universe, including black holes, space, time, and the origins of everything.",
    chapterTitle: "Questions in the Sky",
    chapter: [
      "When we look up at night, we see light that began its journey long before it reached our eyes. Looking at the sky can also mean looking into the past.",
      "Science tries to describe how space and time behave and how the objects we see came to exist. Not every answer is simple, but understanding begins with a clear question.",
      "This first chapter invites curiosity: what lies beyond what we can see, and what evidence could help us find out?"
    ]
  }
];

const categories = ["All", "Fantasy", "Sci-Fi", "Romance", "Mystery", "Classic", "Horror", "Self-Help", "History", "Finance", "Science"];
const featuredIds = ["harry-potter", "1984", "great-gatsby", "murder-orient-express", "atomic-habits"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key, fallback) {
    try { const value = localStorage.getItem(key); return value === null ? fallback : JSON.parse(value); }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Private browsing can disable storage. */ }
  }
};

const state = {
  category: "All",
  query: "",
  sort: "featured",
  view: "library",
  favorites: new Set(storage.get("lila-favorites", [])),
  progress: storage.get("lila-progress", {}),
  featureIndex: 0,
  selectedBook: null,
  synopsisOpen: true,
  readerFont: 17,
  theme: storage.get("lila-theme", "light")
};

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function normalize(value) {
  return String(value).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getBook(id) {
  return books.find(book => book.id === id);
}

function renderFilters() {
  $("#filterList").innerHTML = categories.map(category => `
    <button class="filter-chip" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
      ${escapeHtml(category)}
    </button>`).join("");
}

function matchesBook(book) {
  const queryMatch = !state.query || normalize(`${book.title} ${book.author} ${book.genre} ${book.synopsis}`).includes(normalize(state.query));
  const categoryMatch = state.category === "All" || book.category === state.category;
  const shelfMatch = state.view !== "shelf" || state.favorites.has(book.id);
  return queryMatch && categoryMatch && shelfMatch;
}

function renderBooks() {
  let visible = books.filter(matchesBook);
  if (state.sort === "az") visible.sort((a, b) => a.title.localeCompare(b.title));
  if (state.sort === "za") visible.sort((a, b) => b.title.localeCompare(a.title));
  if (state.sort === "genre") visible.sort((a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title));

  $("#resultSummary").textContent = state.view === "shelf"
    ? `${visible.length} ${visible.length === 1 ? "book" : "books"} on your shelf.`
    : `${visible.length} of ${books.length} books shown.`;
  $("#shelfNotice").hidden = state.view !== "shelf";
  $("#bookGrid").hidden = visible.length === 0;
  $("#emptyState").hidden = visible.length !== 0;

  $("#bookGrid").innerHTML = visible.map(book => {
    const progress = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
    const favorite = state.favorites.has(book.id);
    return `
      <article class="book-card">
        <button class="book-cover-button" type="button" data-action="details" data-id="${book.id}" aria-label="View details for ${escapeHtml(book.title)}">
          <img class="book-cover" src="${book.cover}" alt="Cover of ${escapeHtml(book.title)}" loading="lazy">
          <span class="cover-overlay"><span>View details →</span></span>
        </button>
        <button class="favorite-button" type="button" data-action="favorite" data-id="${book.id}" aria-label="${favorite ? "Remove from" : "Add to"} My Shelf: ${escapeHtml(book.title)}" aria-pressed="${favorite}">${favorite ? "♥" : "♡"}</button>
        <div class="book-card-meta">
          <p class="book-genre">${escapeHtml(book.category)}</p>
          <h3>${escapeHtml(book.title)}</h3>
          <p class="book-author">${escapeHtml(book.author)}</p>
          ${progress > 0 ? `<div class="card-progress" title="Reading progress: ${progress}%"><span style="width:${progress}%"></span></div>` : ""}
          <div class="card-actions">
            <button class="card-action read-action" type="button" data-action="read" data-id="${book.id}">${progress > 0 && progress < 100 ? "Continue reading" : "Read"}</button>
            <button class="card-action" type="button" data-action="details" data-id="${book.id}">Details</button>
          </div>
        </div>
      </article>`;
  }).join("");
  $("#shelfCount").textContent = state.favorites.size;
  $$(".main-nav [data-view]").forEach(link => link.classList.toggle("is-current", link.dataset.view === state.view));
}

function updateFeature() {
  const id = featuredIds[state.featureIndex];
  const book = getBook(id);
  if (!book) return;
  $("#featureCover").src = book.cover;
  $("#featureCover").alt = `Cover of ${book.title}`;
  $("#featureTitle").textContent = book.title;
  $("#featureAuthor").textContent = book.author;
  $("#featureGenre").textContent = book.genre;
  $("#featureSynopsis").textContent = book.synopsis;
  $("#featureLike").setAttribute("aria-pressed", state.favorites.has(book.id));
  $("#featureLike").textContent = state.favorites.has(book.id) ? "♥" : "♡";
  $("#featureLike").setAttribute("aria-label", state.favorites.has(book.id) ? "Remove from My Shelf" : "Add to My Shelf");
  $("#featureRead").dataset.id = book.id;
  $("#featureLike").dataset.id = book.id;
  $("#sliderDots").innerHTML = featuredIds.map((_, index) =>
    `<button class="slider-dot" type="button" data-slide="${index}" aria-label="Featured book ${index + 1}" aria-current="${index === state.featureIndex}"></button>`
  ).join("");
}

function setFeature(index) {
  state.featureIndex = (index + featuredIds.length) % featuredIds.length;
  updateFeature();
}

function toggleFavorite(id) {
  if (state.favorites.has(id)) state.favorites.delete(id);
  else state.favorites.add(id);
  storage.set("lila-favorites", [...state.favorites]);
  renderBooks();
  updateFeature();
  if ($("#bookDialog").open && state.selectedBook) updateDialogFavorite();
}

function updateDialogFavorite() {
  const active = state.favorites.has(state.selectedBook.id);
  $("#dialogLike").setAttribute("aria-pressed", active);
  $("#dialogLike").innerHTML = `${active ? "♥" : "♡"} <span id="dialogLikeText">${active ? "Saved to My Shelf" : "Add to My Shelf"}</span>`;
}

function updateDialogProgress(book) {
  const value = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  $("#dialogProgressWrap").hidden = value === 0;
  $("#dialogProgress").value = value;
  $("#dialogProgressText").textContent = `${value}%`;
}

function openDetails(book) {
  state.selectedBook = book;
  state.synopsisOpen = true;
  $("#dialogCover").src = book.cover;
  $("#dialogCover").alt = `Cover of ${book.title}`;
  $("#dialogGenre").textContent = book.genre;
  $("#dialogTitle").textContent = book.title;
  $("#dialogAuthor").textContent = `by ${book.author}`;
  $("#dialogSynopsis").textContent = book.synopsis;
  $("#dialogSynopsis").hidden = false;
  $("#synopsisToggle").textContent = "Hide";
  $("#synopsisToggle").setAttribute("aria-expanded", "true");
  $("#dialogRead").dataset.id = book.id;
  $("#dialogLike").dataset.id = book.id;
  updateDialogProgress(book);
  updateDialogFavorite();
  $("#bookDialog").showModal();
}

function openReader(book) {
  state.selectedBook = book;
  $("#readerBookTitle").textContent = book.title;
  $("#readerGenre").textContent = book.genre;
  $("#readerTitle").textContent = book.title;
  $("#readerAuthor").textContent = `by ${book.author}`;
  $("#chapterHeading").textContent = `Chapter 1: ${book.chapterTitle}`;
  $("#readerCopy").innerHTML = book.chapter.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join("");
  $("#finishReading").innerHTML = 'Mark as finished <span aria-hidden="true">✓</span>';
  $("#readerProgress").value = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  $("#readerDialog").showModal();
  const initialProgress = Math.max(0, Math.min(100, Number(state.progress[book.id]) || 0));
  requestAnimationFrame(() => {
    const scroller = $("#readerScroll");
    const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    scroller.scrollTop = max * (initialProgress / 100);
    $("#readerProgress").value = initialProgress;
  });
}

function saveReaderProgress(forceComplete = false, refreshUI = true) {
  if (!state.selectedBook) return;
  const scroller = $("#readerScroll");
  const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
  let value = max === 0 ? 0 : Math.round((scroller.scrollTop / max) * 100);
  if (forceComplete) value = 100;
  value = Math.max(0, Math.min(100, value));
  state.progress[state.selectedBook.id] = value;
  storage.set("lila-progress", state.progress);
  $("#readerProgress").value = value;
  updateDialogProgress(state.selectedBook);
  if (refreshUI) renderBooks();
}

function setView(view) {
  state.view = view;
  state.category = "All";
  renderFilters();
  renderBooks();
  if (view === "shelf") $("#libraryTitle").textContent = "My Shelf";
  else $("#libraryTitle").innerHTML = 'The Library <span class="heading-sparkle" aria-hidden="true">✦</span>';
}

function setTheme(theme) {
  state.theme = theme;
  document.documentElement.dataset.theme = theme;
  $("#themeIcon").textContent = theme === "dark" ? "☀" : "☾";
  $("#themeToggle").setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
  storage.set("lila-theme", theme);
}

function initialize() {
  setTheme(state.theme === "dark" ? "dark" : "light");
  renderFilters();
  renderBooks();
  updateFeature();

  $("#filterList").addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    const selectedCategory = button.dataset.category;
    if (state.view === "shelf") setView("library");
    state.category = selectedCategory;
    renderFilters();
    renderBooks();
  });

  $("#bookGrid").addEventListener("click", event => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const book = getBook(button.dataset.id);
    if (!book) return;
    if (button.dataset.action === "favorite") toggleFavorite(book.id);
    if (button.dataset.action === "details") openDetails(book);
    if (button.dataset.action === "read") openReader(book);
  });

  $("#searchInput").addEventListener("input", event => {
    state.query = event.target.value.trim();
    if (state.view === "shelf" && !state.favorites.size) setView("library");
    renderBooks();
  });
  $("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderBooks(); });
  $("#clearFilters").addEventListener("click", () => {
    state.category = "All";
    state.query = "";
    state.view = "library";
    $("#searchInput").value = "";
    renderFilters();
    renderBooks();
  });
  $("#backToLibrary").addEventListener("click", () => setView("library"));

  $$(".main-nav [data-view]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    setView(link.dataset.view);
    $("#library").scrollIntoView({ behavior: "smooth" });
  }));
  $("#featureRead").addEventListener("click", () => openReader(getBook($("#featureRead").dataset.id)));
  $("#featureLike").addEventListener("click", () => toggleFavorite($("#featureLike").dataset.id));
  $("#slidePrev").addEventListener("click", () => setFeature(state.featureIndex - 1));
  $("#slideNext").addEventListener("click", () => setFeature(state.featureIndex + 1));
  $("#sliderDots").addEventListener("click", event => {
    const dot = event.target.closest("[data-slide]");
    if (dot) setFeature(Number(dot.dataset.slide));
  });
  let slideTimer = window.setInterval(() => {
    if (!document.hidden && !$("#readerDialog").open && !$("#bookDialog").open) setFeature(state.featureIndex + 1);
  }, 7000);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) window.clearInterval(slideTimer);
    else slideTimer = window.setInterval(() => setFeature(state.featureIndex + 1), 7000);
  });

  $("#dialogRead").addEventListener("click", () => {
    if (!state.selectedBook) return;
    $("#bookDialog").close();
    openReader(state.selectedBook);
  });
  $("#dialogLike").addEventListener("click", () => state.selectedBook && toggleFavorite(state.selectedBook.id));
  $("#synopsisToggle").addEventListener("click", () => {
    state.synopsisOpen = !state.synopsisOpen;
    $("#dialogSynopsis").hidden = !state.synopsisOpen;
    $("#synopsisToggle").textContent = state.synopsisOpen ? "Hide" : "Show";
    $("#synopsisToggle").setAttribute("aria-expanded", String(state.synopsisOpen));
  });
  $("#readerScroll").addEventListener("scroll", () => {
    if (state.selectedBook && $("#readerDialog").open) saveReaderProgress(false, false);
  }, { passive: true });
  $("#readerDialog").addEventListener("close", () => {
    if (state.selectedBook) saveReaderProgress(false, false);
    renderBooks();
  });
  $("#finishReading").addEventListener("click", () => {
    saveReaderProgress(true);
    $("#readerScroll").scrollTo({ top: $("#readerScroll").scrollHeight, behavior: "smooth" });
    $("#finishReading").innerHTML = "Reading progress saved <span aria-hidden=\"true\">✓</span>";
  });
  $("#fontDown").addEventListener("click", () => {
    state.readerFont = Math.max(14, state.readerFont - 1);
    $("#readerCopy").style.fontSize = `${state.readerFont}px`;
  });
  $("#fontUp").addEventListener("click", () => {
    state.readerFont = Math.min(24, state.readerFont + 1);
    $("#readerCopy").style.fontSize = `${state.readerFont}px`;
  });
  $("#themeToggle").addEventListener("click", () => setTheme(state.theme === "dark" ? "light" : "dark"));
  $$("[data-close]").forEach(button => button.addEventListener("click", () => {
    const dialog = document.getElementById(button.dataset.close);
    if (dialog.open) dialog.close();
  }));
  [$("#bookDialog"), $("#readerDialog")].forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));
  document.addEventListener("keydown", event => {
    if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName) && !$("#bookDialog").open && !$("#readerDialog").open) {
      event.preventDefault();
      $("#searchInput").focus();
    }
  });
}

initialize();
