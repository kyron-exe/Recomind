require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Mock Database
const database = {
  Movies: [
    { id: 1, title: "The Shawshank Redemption", genre: "Drama", description: "Two prisoners form a deep bond while serving time, discovering hope and redemption." },
    { id: 2, title: "Forrest Gump", genre: "Drama", description: "A kind-hearted man unknowingly influences major events in American history." },
    { id: 3, title: "The Pursuit of Happyness", genre: "Drama", description: "A struggling father overcomes hardship to build a better future for his son." },
    { id: 4, title: "Fight Club", genre: "Drama", description: "An underground fight club evolves into a chaotic movement led by a mysterious figure." },
    { id: 5, title: "The Green Mile", genre: "Drama", description: "A prison guard witnesses miraculous events involving a death row inmate." },
    { id: 6, title: "A Beautiful Mind", genre: "Drama", description: "A brilliant mathematician battles schizophrenia while making groundbreaking discoveries." },
    { id: 7, title: "Whiplash", genre: "Drama", description: "A young drummer faces intense pressure from his perfectionist instructor." },
    { id: 8, title: "Gladiator", genre: "Drama", description: "A betrayed Roman general rises as a gladiator to seek revenge." },
    { id: 9, title: "Joker", genre: "Drama", description: "A failed comedian spirals into madness and becomes a symbol of chaos." },
    { id: 10, title: "The Social Network", genre: "Drama", description: "The story behind the creation of Facebook and its legal battles." },

    { id: 11, title: "Parasite", genre: "Drama", description: "A poor family infiltrates a wealthy household with unexpected consequences." },
    { id: 12, title: "12 Years a Slave", genre: "Drama", description: "A free man is enslaved and struggles to survive with dignity." },
    { id: 13, title: "The Pianist", genre: "Drama", description: "A pianist survives the horrors of World War II in Nazi-occupied Poland." },
    { id: 14, title: "Slumdog Millionaire", genre: "Drama", description: "A young man reflects on his life while competing in a quiz show." },
    { id: 15, title: "Life of Pi", genre: "Drama", description: "A boy survives at sea with a Bengal tiger after a shipwreck." },
    { id: 16, title: "Good Will Hunting", genre: "Drama", description: "A genius janitor struggles with his past while realizing his potential." },
    { id: 17, title: "The Revenant", genre: "Drama", description: "A frontiersman fights for survival and revenge in the wilderness." },
    { id: 18, title: "The Godfather", genre: "Drama", description: "The aging patriarch of a crime family transfers power to his son." },
    { id: 19, title: "The Godfather Part II", genre: "Drama", description: "The rise and fall of a mafia empire across generations." },
    { id: 20, title: "Schindler's List", genre: "Drama", description: "A businessman saves Jewish lives during the Holocaust." },

    { id: 21, title: "The Theory of Everything", genre: "Drama", description: "The life of Stephen Hawking and his battle with ALS." },
    { id: 22, title: "Manchester by the Sea", genre: "Drama", description: "A man confronts his painful past after becoming guardian to his nephew." },
    { id: 23, title: "Moonlight", genre: "Drama", description: "A young man grows up facing identity and hardship in Miami." },
    { id: 24, title: "The Fault in Our Stars", genre: "Drama", description: "Two teenagers with cancer fall in love and find meaning in life." },
    { id: 25, title: "Her", genre: "Drama", description: "A lonely writer develops a relationship with an AI assistant." },
    { id: 26, title: "Marriage Story", genre: "Drama", description: "A couple navigates a painful divorce while trying to stay connected." },
    { id: 27, title: "Room", genre: "Drama", description: "A mother and son escape captivity and adjust to the outside world." },
    { id: 28, title: "The Notebook", genre: "Drama", description: "A lifelong love story unfolds through memory and time." },
    { id: 29, title: "Titanic", genre: "Drama", description: "A tragic love story set aboard the ill-fated ship." },
    { id: 30, title: "Cast Away", genre: "Drama", description: "A man struggles to survive alone on a deserted island." },

    { id: 31, title: "Into the Wild", genre: "Drama", description: "A young man abandons society to explore the wilderness." },
    { id: 32, title: "The Truman Show", genre: "Drama", description: "A man discovers his entire life is a reality TV show." },
    { id: 33, title: "Dead Poets Society", genre: "Drama", description: "An inspiring teacher encourages students to seize the day." },
    { id: 34, title: "The Blind Side", genre: "Drama", description: "A homeless boy is given a chance to succeed through kindness." },
    { id: 35, title: "Hidden Figures", genre: "Drama", description: "Brilliant women help NASA achieve historic space missions." },
    { id: 36, title: "Erin Brockovich", genre: "Drama", description: "A legal assistant fights a corporation over environmental pollution." },
    { id: 37, title: "The Help", genre: "Drama", description: "African-American maids share their stories in 1960s Mississippi." },
    { id: 38, title: "Spotlight", genre: "Drama", description: "Journalists uncover a major scandal within the church." },
    { id: 39, title: "The Imitation Game", genre: "Drama", description: "Alan Turing cracks Nazi codes during World War II." },
    { id: 40, title: "American Beauty", genre: "Drama", description: "A man reevaluates his life and desires in suburban America." },

    { id: 41, title: "Requiem for a Dream", genre: "Drama", description: "Four individuals spiral into addiction and face devastating consequences." },
    { id: 42, title: "The Wolf of Wall Street", genre: "Drama", description: "A stockbroker rises to wealth through corruption and excess." },
    { id: 43, title: "There Will Be Blood", genre: "Drama", description: "An oilman’s ambition leads to greed, power, and isolation." },
    { id: 44, title: "No Country for Old Men", genre: "Drama", description: "A hunter finds money and becomes hunted by a ruthless killer." },
    { id: 45, title: "The Departed", genre: "Drama", description: "An undercover cop and a mole engage in a dangerous game of deception." },
    { id: 46, title: "Birdman", genre: "Drama", description: "A washed-up actor attempts to revive his career on Broadway." },
    { id: 47, title: "Black Swan", genre: "Drama", description: "A ballerina descends into madness while pursuing perfection." },
    { id: 48, title: "The King's Speech", genre: "Drama", description: "King George VI overcomes a speech impediment to lead his nation." },
    { id: 49, title: "The Curious Case of Benjamin Button", genre: "Drama", description: "A man ages backward and experiences life in a unique way." },
    { id: 50, title: "The Irishman", genre: "Drama", description: "A mob hitman reflects on his life and involvement in organized crime." },

    { id: 51, title: "Million Dollar Baby", genre: "Drama", description: "A determined woman trains to become a professional boxer." },
    { id: 52, title: "Gran Torino", genre: "Drama", description: "A bitter war veteran forms an unlikely friendship with his neighbor." },
    { id: 53, title: "The Fighter", genre: "Drama", description: "A boxer struggles with family issues while pursuing success." },
    { id: 54, title: "Rush", genre: "Drama", description: "Two Formula 1 drivers compete in a fierce rivalry." },
    { id: 55, title: "Ford v Ferrari", genre: "Drama", description: "Engineers build a race car to defeat Ferrari at Le Mans." },
    { id: 56, title: "The Big Short", genre: "Drama", description: "Investors predict and profit from the 2008 financial crisis." },
    { id: 57, title: "Bohemian Rhapsody", genre: "Drama", description: "The journey of Freddie Mercury and the band Queen." },
    { id: 58, title: "Rocketman", genre: "Drama", description: "The life story of musician Elton John and his rise to fame." },
    { id: 59, title: "Elvis", genre: "Drama", description: "The story of Elvis Presley’s rise and relationship with his manager." },
    { id: 60, title: "The Trial of the Chicago 7", genre: "Drama", description: "Activists are charged after protests at a political convention." },

    { id: 61, title: "Bridge of Spies", genre: "Drama", description: "A lawyer negotiates a spy exchange during the Cold War." },
    { id: 62, title: "Argo", genre: "Drama", description: "A CIA agent rescues hostages using a fake film production." },
    { id: 63, title: "Zero Dark Thirty", genre: "Drama", description: "The hunt for Osama bin Laden after 9/11." },
    { id: 64, title: "Captain Phillips", genre: "Drama", description: "A cargo ship captain faces Somali pirates." },
    { id: 65, title: "Dunkirk", genre: "Drama", description: "Allied soldiers are evacuated during World War II." },
    { id: 66, title: "1917", genre: "Drama", description: "Two soldiers race against time to deliver a critical message." },
    { id: 67, title: "Hacksaw Ridge", genre: "Drama", description: "A medic saves lives in battle without carrying a weapon." },
    { id: 68, title: "Saving Private Ryan", genre: "Drama", description: "Soldiers search for a paratrooper during WWII." },
    { id: 69, title: "The Hurt Locker", genre: "Drama", description: "A bomb disposal team faces intense pressure in Iraq." },
    { id: 70, title: "American Sniper", genre: "Drama", description: "A sniper struggles with the impact of war." },

    { id: 71, title: "The Grand Budapest Hotel", genre: "Drama", description: "A hotel concierge becomes involved in a murder mystery." },
    { id: 72, title: "La La Land", genre: "Drama", description: "Two artists fall in love while chasing their dreams." },
    { id: 73, title: "The Shape of Water", genre: "Drama", description: "A mute woman forms a bond with a mysterious creature." },
    { id: 74, title: "Little Women", genre: "Drama", description: "Four sisters navigate life, love, and ambition." },
    { id: 75, title: "Call Me by Your Name", genre: "Drama", description: "A summer romance changes a young man’s life forever." },
    { id: 76, title: "The Florida Project", genre: "Drama", description: "A child experiences life near Disney World in poverty." },
    { id: 77, title: "Nomadland", genre: "Drama", description: "A woman lives as a modern-day nomad after losing everything." },
    { id: 78, title: "The Whale", genre: "Drama", description: "A reclusive man tries to reconnect with his daughter." },
    { id: 79, title: "Sound of Metal", genre: "Drama", description: "A drummer loses his hearing and struggles to adapt." },
    { id: 80, title: "CODA", genre: "Drama", description: "A hearing girl balances family responsibilities and dreams." },

    { id: 81, title: "The Edge of Seventeen", genre: "Drama", description: "A teenager navigates the struggles of growing up." },
    { id: 82, title: "Lady Bird", genre: "Drama", description: "A high school girl seeks independence and identity." },
    { id: 83, title: "Brooklyn", genre: "Drama", description: "An immigrant woman balances love and duty." },
    { id: 84, title: "Carol", genre: "Drama", description: "Two women form a forbidden relationship in the 1950s." },
    { id: 85, title: "Blue Valentine", genre: "Drama", description: "A couple’s relationship unfolds across time." },
    { id: 86, title: "Before Sunrise", genre: "Drama", description: "Two strangers form a connection during one night in Vienna." },
    { id: 87, title: "Before Sunset", genre: "Drama", description: "The couple reunites years later in Paris." },
    { id: 88, title: "Before Midnight", genre: "Drama", description: "The couple faces challenges in their long-term relationship." },
    { id: 89, title: "The Place Beyond the Pines", genre: "Drama", description: "The lives of fathers and sons intersect across generations." },
    { id: 90, title: "Prisoners", genre: "Drama", description: "A father takes matters into his own hands after his daughter goes missing." },

    { id: 91, title: "Gone Girl", genre: "Drama", description: "A man becomes the prime suspect in his wife’s disappearance." },
    { id: 92, title: "Mystic River", genre: "Drama", description: "Childhood friends are reunited by tragedy and suspicion." },
    { id: 93, title: "Zodiac", genre: "Drama", description: "Journalists investigate a serial killer in San Francisco." },
    { id: 94, title: "Nightcrawler", genre: "Drama", description: "A man dives into crime journalism with disturbing ambition." },
    { id: 95, title: "Drive", genre: "Drama", description: "A stunt driver becomes entangled in a dangerous criminal world." },
    { id: 96, title: "The Machinist", genre: "Drama", description: "A man suffering from insomnia questions reality." },
    { id: 97, title: "Shutter Island", genre: "Drama", description: "A detective investigates a disappearance at a mental asylum." },
    { id: 98, title: "The Prestige", genre: "Drama", description: "Two magicians engage in a deadly rivalry." },
    { id: 99, title: "Memento", genre: "Drama", description: "A man with memory loss searches for his wife’s killer." },
    { id: 100, title: "Inception", genre: "Drama", description: "A thief enters dreams to steal secrets and plant ideas." },

    { id: 101, title: "300", genre: "Action", description: "Spartan warriors make a heroic stand against a massive Persian army." },
    { id: 102, title: "Kill Bill: Vol. 1", genre: "Action", description: "A bride awakens from a coma and begins her revenge mission." },
    { id: 103, title: "Kill Bill: Vol. 2", genre: "Action", description: "The bride continues her journey to confront her former master." },
    { id: 104, title: "Snowpiercer", genre: "Action", description: "Survivors of a frozen world fight for control of a train." },
    { id: 105, title: "Dredd", genre: "Action", description: "A judge enforces the law in a violent futuristic city." },
    { id: 106, title: "Crank", genre: "Action", description: "A hitman must keep his adrenaline high to stay alive." },
    { id: 107, title: "Crank: High Voltage", genre: "Action", description: "A man fights to retrieve his stolen heart." },
    { id: 108, title: "The Raid", genre: "Action", description: "A SWAT team fights its way through a crime-filled building." },
    { id: 109, title: "The Raid 2", genre: "Action", description: "An undercover cop dives deeper into the criminal underworld." },
    { id: 110, title: "Ong-Bak: The Thai Warrior", genre: "Action", description: "A martial artist travels to recover a stolen sacred statue." },

    { id: 111, title: "Ip Man", genre: "Action", description: "A martial arts master defends his honor during wartime." },
    { id: 112, title: "Ip Man 2", genre: "Action", description: "Ip Man faces challenges in a new city while spreading his art." },
    { id: 113, title: "Ip Man 3", genre: "Action", description: "A grandmaster protects his school from powerful threats." },
    { id: 114, title: "Rush Hour", genre: "Action", description: "A detective duo teams up to rescue a kidnapped girl." },
    { id: 115, title: "Rush Hour 2", genre: "Action", description: "Partners travel abroad to uncover a criminal conspiracy." },
    { id: 116, title: "Rush Hour 3", genre: "Action", description: "The duo tracks a crime syndicate across Europe." },
    { id: 117, title: "Shanghai Noon", genre: "Action", description: "A guard travels west to rescue a kidnapped princess." },
    { id: 118, title: "Shanghai Knights", genre: "Action", description: "A duo seeks justice in London." },
    { id: 119, title: "The Transporter", genre: "Action", description: "A driver follows strict rules while transporting dangerous packages." },
    { id: 120, title: "Transporter 2", genre: "Action", description: "A driver protects a child from kidnappers." },

    { id: 121, title: "Transporter 3", genre: "Action", description: "A courier must complete a dangerous mission across Europe." },
    { id: 122, title: "Safe", genre: "Action", description: "A fighter protects a girl carrying a valuable code." },
    { id: 123, title: "Mechanic: Resurrection", genre: "Action", description: "A hitman is forced to complete deadly assignments." },
    { id: 124, title: "The Mechanic", genre: "Action", description: "An elite assassin trains an apprentice in his craft." },
    { id: 125, title: "Shooter", genre: "Action", description: "A marksman is framed and seeks revenge." },
    { id: 126, title: "Lone Survivor", genre: "Action", description: "Soldiers face overwhelming odds during a mission." },
    { id: 127, title: "Olympus Has Fallen", genre: "Action", description: "A former guard defends the White House from terrorists." },
    { id: 128, title: "London Has Fallen", genre: "Action", description: "A global conspiracy threatens world leaders." },
    { id: 129, title: "Angel Has Fallen", genre: "Action", description: "An agent is framed and must clear his name." },
    { id: 130, title: "White House Down", genre: "Action", description: "A man protects the president during an attack." },

    { id: 131, title: "The Rock", genre: "Action", description: "Agents break into a prison to stop a chemical attack." },
    { id: 132, title: "Face/Off", genre: "Action", description: "An agent swaps faces with a criminal to stop a threat." },
    { id: 133, title: "Con Air", genre: "Action", description: "Prisoners hijack a transport plane mid-flight." },
    { id: 134, title: "Speed", genre: "Action", description: "A bus will explode if it slows below a certain speed." },
    { id: 135, title: "Speed 2: Cruise Control", genre: "Action", description: "A cruise ship is taken over by a hacker." },
    { id: 136, title: "Under Siege", genre: "Action", description: "A cook fights terrorists aboard a battleship." },
    { id: 137, title: "Under Siege 2", genre: "Action", description: "A train is hijacked by dangerous criminals." },
    { id: 138, title: "Broken Arrow", genre: "Action", description: "Nuclear weapons are stolen, leading to a dangerous chase." },
    { id: 139, title: "Hard Target", genre: "Action", description: "A man hunts criminals who target humans for sport." },
    { id: 140, title: "Universal Soldier", genre: "Action", description: "Reanimated soldiers fight for control and survival." } ,

    { id: 141, title: "War", genre: "Action", description: "An FBI agent hunts a rogue assassin in a deadly game of revenge." },
    { id: 142, title: "The Man from U.N.C.L.E.", genre: "Action", description: "Two spies from rival nations team up during the Cold War." },
    { id: 143, title: "Atomic Blonde", genre: "Action", description: "An MI6 agent uncovers a spy ring in Berlin." },
    { id: 144, title: "Salt", genre: "Action", description: "A CIA agent goes on the run after being accused of espionage." },
    { id: 145, title: "Red", genre: "Action", description: "Retired agents reunite to uncover a deadly conspiracy." },
    { id: 146, title: "Red 2", genre: "Action", description: "Former operatives track down a missing nuclear device." },
    { id: 147, title: "The A-Team", genre: "Action", description: "A group of soldiers framed for a crime work to clear their names." },
    { id: 148, title: "Jack Reacher", genre: "Action", description: "An investigator uncovers the truth behind a sniper case." },
    { id: 149, title: "Jack Reacher: Never Go Back", genre: "Action", description: "Reacher returns to expose corruption and rescue an ally." },
    { id: 150, title: "Oblivion", genre: "Action", description: "A technician uncovers hidden truths about a war-torn Earth." },

    { id: 151, title: "Elysium", genre: "Action", description: "A man fights to reach a space station where the elite live." },
    { id: 152, title: "District 9", genre: "Action", description: "Aliens stranded on Earth struggle against human oppression." },
    { id: 153, title: "Chappie", genre: "Action", description: "A robot gains consciousness and learns about humanity." },
    { id: 154, title: "Alita: Battle Angel", genre: "Action", description: "A cyborg awakens with no memory but incredible abilities." },
    { id: 155, title: "Real Steel", genre: "Action", description: "A father and son bond through robot boxing competitions." },
    { id: 156, title: "The Incredible Hulk", genre: "Action", description: "A scientist struggles to control his powerful alter ego." },
    { id: 157, title: "Hancock", genre: "Action", description: "A flawed superhero seeks redemption and acceptance." },
    { id: 158, title: "Blade", genre: "Action", description: "A vampire hunter fights against bloodthirsty creatures." },
    { id: 159, title: "Blade II", genre: "Action", description: "Blade teams up with vampires to fight a greater threat." },
    { id: 160, title: "Blade: Trinity", genre: "Action", description: "The final battle between Blade and powerful enemies." },

    { id: 161, title: "Ghost Rider", genre: "Action", description: "A stuntman becomes a fiery anti-hero bound to a demon." },
    { id: 162, title: "Ghost Rider: Spirit of Vengeance", genre: "Action", description: "The Ghost Rider protects a boy from dark forces." },
    { id: 163, title: "The Punisher", genre: "Action", description: "A man wages war on crime after losing his family." },
    { id: 164, title: "Punisher: War Zone", genre: "Action", description: "The Punisher faces a brutal crime boss." },
    { id: 165, title: "Kick-Ass", genre: "Action", description: "An ordinary teen becomes a real-life superhero." },
    { id: 166, title: "Kick-Ass 2", genre: "Action", description: "Young heroes unite against a dangerous villain." },
    { id: 167, title: "Scott Pilgrim vs. the World", genre: "Action", description: "A young man battles his girlfriend’s evil exes." },
    { id: 168, title: "The Mask of Zorro", genre: "Action", description: "A masked hero trains his successor to fight injustice." },
    { id: 169, title: "The Legend of Zorro", genre: "Action", description: "Zorro returns to protect his family and country." },
    { id: 170, title: "Robin Hood", genre: "Action", description: "An outlaw fights corruption and injustice in medieval England." },

    { id: 171, title: "Prince of Persia: The Sands of Time", genre: "Action", description: "A prince controls time to prevent disaster." },
    { id: 172, title: "Clash of the Titans", genre: "Action", description: "A hero battles mythological creatures and gods." },
    { id: 173, title: "Wrath of the Titans", genre: "Action", description: "The hero returns to fight even greater mythical threats." },
    { id: 174, title: "Immortals", genre: "Action", description: "A warrior rises against a tyrant with divine help." },
    { id: 175, title: "Gods of Egypt", genre: "Action", description: "A mortal teams up with a god to save the world." },
    { id: 176, title: "Troy", genre: "Action", description: "The legendary battle of Troy unfolds with heroes and kings." },
    { id: 177, title: "King Arthur: Legend of the Sword", genre: "Action", description: "A young man discovers his destiny as king." },
    { id: 178, title: "Exodus: Gods and Kings", genre: "Action", description: "Moses leads his people to freedom from slavery." },
    { id: 179, title: "Ben-Hur", genre: "Action", description: "A prince seeks revenge after betrayal by his brother." },
    { id: 180, title: "The Last Samurai", genre: "Action", description: "A soldier embraces a new culture while fighting for honor." },
    
    { id: 181, title: "13 Hours: The Secret Soldiers of Benghazi", genre: "Action", description: "Security contractors defend a diplomatic compound under attack." },
    { id: 182, title: "Black Hawk Down", genre: "Action", description: "Soldiers fight to survive after a mission goes wrong in Somalia." },
    { id: 183, title: "American Sniper", genre: "Action", description: "A sniper struggles with war and life at home." },
    { id: 184, title: "Zero Dark Thirty", genre: "Action", description: "A decade-long hunt for a notorious terrorist leader." },
    { id: 185, title: "Sicario", genre: "Action", description: "An FBI agent is drawn into the war against drug cartels." },
    { id: 186, title: "Sicario: Day of the Soldado", genre: "Action", description: "The drug war escalates with dangerous consequences." },
    { id: 187, title: "The Equalizer", genre: "Action", description: "A former agent uses his skills to help those in need." },
    { id: 188, title: "The Equalizer 2", genre: "Action", description: "The vigilante returns to deliver justice." },
    { id: 189, title: "The Equalizer 3", genre: "Action", description: "The final chapter of a man seeking peace and justice." },
    { id: 190, title: "Man on Fire", genre: "Action", description: "A bodyguard seeks revenge after a kidnapping tragedy." },

    { id: 191, title: "Collateral", genre: "Action", description: "A cab driver becomes entangled with a hitman." },
    { id: 192, title: "Public Enemies", genre: "Action", description: "The story of a notorious bank robber and the FBI pursuit." },
    { id: 193, title: "The Fugitive", genre: "Action", description: "A man wrongly accused fights to prove his innocence." },
    { id: 194, title: "U.S. Marshals", genre: "Action", description: "A fugitive is hunted by a relentless marshal." },
    { id: 195, title: "Enemy of the State", genre: "Action", description: "A lawyer becomes a target of government surveillance." },
    { id: 196, title: "Body of Lies", genre: "Action", description: "An agent navigates complex intelligence operations." },
    { id: 197, title: "Green Zone", genre: "Action", description: "A soldier searches for hidden weapons in Iraq." },
    { id: 198, title: "The Kingdom", genre: "Action", description: "Agents investigate a terrorist attack in Saudi Arabia." },
    { id: 199, title: "Blood Diamond", genre: "Action", description: "A smuggler and a fisherman search for a rare diamond." },
    { id: 200, title: "The Book of Eli", genre: "Action", description: "A lone traveler protects a sacred book in a post-apocalyptic world." },

    { id: 201, title: "Inception", genre: "Sci-Fi", description: "A thief enters dreams to steal secrets from the subconscious." },
    { id: 202, title: "Interstellar", genre: "Sci-Fi", description: "Explorers travel through a wormhole to save humanity." },
    { id: 203, title: "The Matrix", genre: "Sci-Fi", description: "A hacker discovers reality is a simulation controlled by machines." },
    { id: 204, title: "The Matrix Reloaded", genre: "Sci-Fi", description: "Neo and his allies continue the fight against the machines." },
    { id: 205, title: "The Matrix Revolutions", genre: "Sci-Fi", description: "The war between humans and machines reaches its climax." },
    { id: 206, title: "Avatar", genre: "Sci-Fi", description: "A marine explores an alien world and sides with its inhabitants." },
    { id: 207, title: "Avatar: The Way of Water", genre: "Sci-Fi", description: "The story continues as new threats emerge on Pandora." },
    { id: 208, title: "Blade Runner", genre: "Sci-Fi", description: "A detective hunts rogue androids in a dystopian future." },
    { id: 209, title: "Blade Runner 2049", genre: "Sci-Fi", description: "A new blade runner uncovers long-hidden secrets." },
    { id: 210, title: "Arrival", genre: "Sci-Fi", description: "A linguist communicates with extraterrestrial visitors." },

    { id: 211, title: "Gravity", genre: "Sci-Fi", description: "Astronauts struggle to survive after a disaster in space." },
    { id: 212, title: "The Martian", genre: "Sci-Fi", description: "An astronaut survives alone on Mars using science and wit." },
    { id: 213, title: "Edge of Tomorrow", genre: "Sci-Fi", description: "A soldier relives the same battle against aliens repeatedly." },
    { id: 214, title: "Looper", genre: "Sci-Fi", description: "A hitman confronts his future self." },
    { id: 215, title: "Minority Report", genre: "Sci-Fi", description: "A cop is accused of a future crime he hasn't committed." },
    { id: 216, title: "Total Recall", genre: "Sci-Fi", description: "A man questions reality after a memory implant." },
    { id: 217, title: "Ex Machina", genre: "Sci-Fi", description: "A programmer tests an advanced artificial intelligence." },
    { id: 218, title: "Her", genre: "Sci-Fi", description: "A man forms a relationship with an AI system." },
    { id: 219, title: "A Quiet Place", genre: "Sci-Fi", description: "A family survives in silence to avoid deadly creatures." },
    { id: 220, title: "A Quiet Place Part II", genre: "Sci-Fi", description: "The family ventures into the outside world facing new dangers." },

    { id: 221, title: "District 9", genre: "Sci-Fi", description: "Aliens stranded on Earth live under harsh conditions." },
    { id: 222, title: "Elysium", genre: "Sci-Fi", description: "A man fights for equality in a divided future society." },
    { id: 223, title: "Chappie", genre: "Sci-Fi", description: "A robot develops consciousness and human emotions." },
    { id: 224, title: "Alita: Battle Angel", genre: "Sci-Fi", description: "A cyborg discovers her past and fights for justice." },
    { id: 225, title: "Ready Player One", genre: "Sci-Fi", description: "A virtual reality world becomes the key to a hidden fortune." },
    { id: 226, title: "Tron", genre: "Sci-Fi", description: "A programmer is transported inside a digital world." },
    { id: 227, title: "Tron: Legacy", genre: "Sci-Fi", description: "A son enters the digital world to find his father." },
    { id: 228, title: "Oblivion", genre: "Sci-Fi", description: "A technician uncovers secrets about Earth's past." },
    { id: 229, title: "Snowpiercer", genre: "Sci-Fi", description: "Humanity survives aboard a train in a frozen world." },
    { id: 230, title: "Children of Men", genre: "Sci-Fi", description: "A man protects the first pregnant woman in years." },

    { id: 231, title: "War of the Worlds", genre: "Sci-Fi", description: "Earth is invaded by powerful alien forces." },
    { id: 232, title: "Independence Day", genre: "Sci-Fi", description: "Humans unite to fight an alien invasion." },
    { id: 233, title: "Independence Day: Resurgence", genre: "Sci-Fi", description: "Aliens return to threaten Earth once again." },
    { id: 234, title: "Pacific Rim", genre: "Sci-Fi", description: "Humans pilot giant robots to fight monstrous creatures." },
    { id: 235, title: "Pacific Rim: Uprising", genre: "Sci-Fi", description: "A new generation faces a returning threat." },
    { id: 236, title: "Transformers", genre: "Sci-Fi", description: "Alien robots battle for control of Earth." },
    { id: 237, title: "Transformers: Dark of the Moon", genre: "Sci-Fi", description: "A hidden alien plot threatens humanity." },
    { id: 238, title: "Transformers: Age of Extinction", genre: "Sci-Fi", description: "Humans and robots clash in a new era." },
    { id: 239, title: "Transformers: The Last Knight", genre: "Sci-Fi", description: "The origin of Transformers is revealed." },
    { id: 240, title: "Bumblebee", genre: "Sci-Fi", description: "A young girl befriends a kind-hearted robot." } ,

    { id: 241, title: "The Terminator", genre: "Sci-Fi", description: "A cyborg assassin travels back in time to kill a future leader's mother." },
    { id: 242, title: "Terminator 2: Judgment Day", genre: "Sci-Fi", description: "A reprogrammed robot protects a boy from a more advanced machine." },
    { id: 243, title: "Terminator 3: Rise of the Machines", genre: "Sci-Fi", description: "Machines rise as humanity faces inevitable war." },
    { id: 244, title: "Terminator Salvation", genre: "Sci-Fi", description: "Humans fight back in a post-apocalyptic machine-dominated world." },
    { id: 245, title: "Terminator Genisys", genre: "Sci-Fi", description: "A soldier travels through time to alter humanity's fate." },
    { id: 246, title: "Terminator: Dark Fate", genre: "Sci-Fi", description: "A new threat emerges as machines continue their war." },
    { id: 247, title: "I, Robot", genre: "Sci-Fi", description: "A detective investigates a robot suspected of murder." },
    { id: 248, title: "AI Artificial Intelligence", genre: "Sci-Fi", description: "A robotic child longs to become human." },
    { id: 249, title: "Moon", genre: "Sci-Fi", description: "A lone worker on the Moon uncovers a shocking truth." },
    { id: 250, title: "Sunshine", genre: "Sci-Fi", description: "A crew attempts to reignite the dying sun." },

    { id: 251, title: "Pandorum", genre: "Sci-Fi", description: "Astronauts awaken on a spaceship with no memory of their mission." },
    { id: 252, title: "Event Horizon", genre: "Sci-Fi", description: "A rescue crew investigates a spaceship that vanished mysteriously." },
    { id: 253, title: "Alien", genre: "Sci-Fi", description: "A crew encounters a deadly extraterrestrial organism." },
    { id: 254, title: "Aliens", genre: "Sci-Fi", description: "Soldiers battle a colony of hostile alien creatures." },
    { id: 255, title: "Alien 3", genre: "Sci-Fi", description: "A survivor faces a deadly alien on a prison planet." },
    { id: 256, title: "Alien Resurrection", genre: "Sci-Fi", description: "A cloned survivor faces new alien threats." },
    { id: 257, title: "Prometheus", genre: "Sci-Fi", description: "Explorers search for humanity's origins in deep space." },
    { id: 258, title: "Alien: Covenant", genre: "Sci-Fi", description: "A colony ship crew discovers a dark secret on a distant planet." },
    { id: 259, title: "Life", genre: "Sci-Fi", description: "Scientists aboard a space station encounter a dangerous life form." },
    { id: 260, title: "Europa Report", genre: "Sci-Fi", description: "Astronauts explore Jupiter’s moon for signs of life." },

    { id: 261, title: "Passengers", genre: "Sci-Fi", description: "Two passengers awaken early on a long space journey." },
    { id: 262, title: "Ad Astra", genre: "Sci-Fi", description: "An astronaut travels across the solar system to find his father." },
    { id: 263, title: "Contact", genre: "Sci-Fi", description: "A scientist receives a signal from extraterrestrial intelligence." },
    { id: 264, title: "The Fifth Element", genre: "Sci-Fi", description: "A cab driver helps save the world with a mysterious being." },
    { id: 265, title: "Gattaca", genre: "Sci-Fi", description: "A man fights genetic discrimination to achieve his dream." },
    { id: 266, title: "Dark City", genre: "Sci-Fi", description: "A man uncovers a reality controlled by mysterious beings." },
    { id: 267, title: "The Island", genre: "Sci-Fi", description: "Clones discover the truth about their existence." },
    { id: 268, title: "Surrogates", genre: "Sci-Fi", description: "Humans live through robotic avatars in a futuristic world." },
    { id: 269, title: "Upgrade", genre: "Sci-Fi", description: "A man gains enhanced abilities through an AI implant." },
    { id: 270, title: "Transcendence", genre: "Sci-Fi", description: "A scientist uploads his consciousness into a computer." },

    { id: 271, title: "The Adjustment Bureau", genre: "Sci-Fi", description: "A man discovers a group controlling human fate." },
    { id: 272, title: "Source Code", genre: "Sci-Fi", description: "A soldier relives moments to prevent a disaster." },
    { id: 273, title: "Deja Vu", genre: "Sci-Fi", description: "An agent uses technology to investigate past events." },
    { id: 274, title: "Timecop", genre: "Sci-Fi", description: "A cop enforces laws across different timelines." },
    { id: 275, title: "Looper", genre: "Sci-Fi", description: "A hitman confronts his future self in a time loop." },
    { id: 276, title: "Predestination", genre: "Sci-Fi", description: "A time agent tracks a criminal across timelines." },
    { id: 277, title: "Coherence", genre: "Sci-Fi", description: "A comet causes strange parallel realities during a dinner party." },
    { id: 278, title: "Annihilation", genre: "Sci-Fi", description: "Scientists explore a mysterious and dangerous zone." },
    { id: 279, title: "The Signal", genre: "Sci-Fi", description: "Students encounter a mysterious hacker leading to strange events." },
    { id: 280, title: "Vivarium", genre: "Sci-Fi", description: "A couple becomes trapped in a bizarre suburban maze." } ,

    { id: 281, title: "Star Wars: Episode IV - A New Hope", genre: "Sci-Fi", description: "A young hero joins a rebellion to destroy a powerful space station." },
    { id: 282, title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Sci-Fi", description: "The rebellion faces a major defeat against the Empire." },
    { id: 283, title: "Star Wars: Episode VI - Return of the Jedi", genre: "Sci-Fi", description: "The final battle between the rebels and the Empire unfolds." },
    { id: 284, title: "Star Wars: Episode I - The Phantom Menace", genre: "Sci-Fi", description: "A young Anakin Skywalker begins his journey." },
    { id: 285, title: "Star Wars: Episode II - Attack of the Clones", genre: "Sci-Fi", description: "The galaxy edges closer to war as tensions rise." },
    { id: 286, title: "Star Wars: Episode III - Revenge of the Sith", genre: "Sci-Fi", description: "Anakin turns to the dark side, changing the galaxy forever." },
    { id: 287, title: "Rogue One: A Star Wars Story", genre: "Sci-Fi", description: "Rebels attempt to steal plans for a powerful weapon." },
    { id: 288, title: "Solo: A Star Wars Story", genre: "Sci-Fi", description: "The origin story of a legendary smuggler." },
    { id: 289, title: "Star Wars: The Force Awakens", genre: "Sci-Fi", description: "A new generation rises to fight a revived threat." },
    { id: 290, title: "Star Wars: The Last Jedi", genre: "Sci-Fi", description: "The resistance struggles as heroes face difficult choices." },

    { id: 291, title: "Star Wars: The Rise of Skywalker", genre: "Sci-Fi", description: "The final chapter of the Skywalker saga." },
    { id: 292, title: "Guardians of the Galaxy", genre: "Sci-Fi", description: "A group of misfits protect the galaxy from danger." },
    { id: 293, title: "Guardians of the Galaxy Vol. 2", genre: "Sci-Fi", description: "The team uncovers secrets about their origins." },
    { id: 294, title: "Guardians of the Galaxy Vol. 3", genre: "Sci-Fi", description: "The guardians face emotional and physical challenges." },
    { id: 295, title: "Thor", genre: "Sci-Fi", description: "A powerful god is cast to Earth and learns humility." },
    { id: 296, title: "Thor: The Dark World", genre: "Sci-Fi", description: "Thor battles a dark force threatening the universe." },
    { id: 297, title: "Thor: Ragnarok", genre: "Sci-Fi", description: "Thor must escape a distant planet to save his home." },
    { id: 298, title: "Thor: Love and Thunder", genre: "Sci-Fi", description: "Thor embarks on a journey of self-discovery." },
    { id: 299, title: "Doctor Strange", genre: "Sci-Fi", description: "A surgeon learns mystical arts to protect reality." },
    { id: 300, title: "Doctor Strange in the Multiverse of Madness", genre: "Sci-Fi", description: "A sorcerer explores dangerous alternate realities." },

    { id: 301, title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Fantasy", description: "A hobbit begins a journey to destroy a powerful ring." },
    { id: 302, title: "The Lord of the Rings: The Two Towers", genre: "Fantasy", description: "The fellowship is divided as darkness rises." },
    { id: 303, title: "The Lord of the Rings: The Return of the King", genre: "Fantasy", description: "The final battle for Middle-earth begins." },
    { id: 304, title: "The Hobbit: An Unexpected Journey", genre: "Fantasy", description: "Bilbo begins an epic adventure." },
    { id: 305, title: "The Hobbit: The Desolation of Smaug", genre: "Fantasy", description: "The journey continues toward the dragon Smaug." },
    { id: 306, title: "The Hobbit: The Battle of the Five Armies", genre: "Fantasy", description: "Armies clash for control of treasure." },
    { id: 307, title: "Harry Potter and the Sorcerer’s Stone", genre: "Fantasy", description: "A boy discovers he is a wizard." },
    { id: 308, title: "Harry Potter and the Chamber of Secrets", genre: "Fantasy", description: "A dark force threatens Hogwarts." },
    { id: 309, title: "Harry Potter and the Prisoner of Azkaban", genre: "Fantasy", description: "A dangerous prisoner escapes Azkaban." },
    { id: 310, title: "Harry Potter and the Goblet of Fire", genre: "Fantasy", description: "Harry competes in a magical tournament." },

    { id: 311, title: "Harry Potter and the Order of the Phoenix", genre: "Fantasy", description: "A secret group forms to fight dark forces." },
    { id: 312, title: "Harry Potter and the Half-Blood Prince", genre: "Fantasy", description: "Secrets about Voldemort are revealed." },
    { id: 313, title: "Harry Potter and the Deathly Hallows: Part 1", genre: "Fantasy", description: "The search for Horcruxes begins." },
    { id: 314, title: "Harry Potter and the Deathly Hallows: Part 2", genre: "Fantasy", description: "The final battle against Voldemort." },
    { id: 315, title: "Fantastic Beasts and Where to Find Them", genre: "Fantasy", description: "A wizard explores magical creatures in a new world." },
    { id: 316, title: "Fantastic Beasts: The Crimes of Grindelwald", genre: "Fantasy", description: "Dark forces rise in the wizarding world." },
    { id: 317, title: "Fantastic Beasts: The Secrets of Dumbledore", genre: "Fantasy", description: "Allies unite against a powerful wizard." },
    { id: 318, title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", genre: "Fantasy", description: "Children enter a magical land through a wardrobe." },
    { id: 319, title: "The Chronicles of Narnia: Prince Caspian", genre: "Fantasy", description: "The children return to help a prince reclaim his throne." },
    { id: 320, title: "The Chronicles of Narnia: The Voyage of the Dawn Treader", genre: "Fantasy", description: "A sea journey leads to magical discoveries." },

    { id: 321, title: "Pan’s Labyrinth", genre: "Fantasy", description: "A girl discovers a mystical labyrinth." },
    { id: 322, title: "Stardust", genre: "Fantasy", description: "A young man travels to a magical realm to find a fallen star." },
    { id: 323, title: "The Princess Bride", genre: "Fantasy", description: "A fairy tale adventure filled with love and sword fights." },
    { id: 324, title: "Willow", genre: "Fantasy", description: "A farmer protects a special child from evil forces." },
    { id: 325, title: "Legend", genre: "Fantasy", description: "A hero must stop darkness from destroying light." },
    { id: 326, title: "The NeverEnding Story", genre: "Fantasy", description: "A boy reads a book that becomes real." },
    { id: 327, title: "Eragon", genre: "Fantasy", description: "A farm boy discovers he is a dragon rider." },
    { id: 328, title: "Percy Jackson & the Olympians: The Lightning Thief", genre: "Fantasy", description: "A boy discovers he is a demigod." },
    { id: 329, title: "Percy Jackson: Sea of Monsters", genre: "Fantasy", description: "A quest begins to save a magical sanctuary." },
    { id: 330, title: "Clash of the Titans", genre: "Fantasy", description: "A hero battles gods and monsters." },

    { id: 331, title: "Wrath of the Titans", genre: "Fantasy", description: "The war between gods and titans intensifies." },
    { id: 332, title: "Immortals", genre: "Fantasy", description: "A warrior fights against a ruthless king." },
    { id: 333, title: "Gods of Egypt", genre: "Fantasy", description: "Gods battle for control of Egypt." },
    { id: 334, title: "The Golden Compass", genre: "Fantasy", description: "A girl journeys to the Arctic to rescue her friend." },
    { id: 335, title: "Inkheart", genre: "Fantasy", description: "Characters from books come to life." },
    { id: 336, title: "Bridge to Terabithia", genre: "Fantasy", description: "Two friends create a magical kingdom." },
    { id: 337, title: "The Spiderwick Chronicles", genre: "Fantasy", description: "Children discover a hidden magical world." },
    { id: 338, title: "Alice in Wonderland", genre: "Fantasy", description: "A girl enters a whimsical and strange world." },
    { id: 339, title: "Alice Through the Looking Glass", genre: "Fantasy", description: "Alice returns to save the Mad Hatter." },
    { id: 340, title: "Oz the Great and Powerful", genre: "Fantasy", description: "A magician becomes the ruler of Oz." },

    { id: 341, title: "Maleficent", genre: "Fantasy", description: "The untold story of a famous villain." },
    { id: 342, title: "Maleficent: Mistress of Evil", genre: "Fantasy", description: "A battle between humans and fairies begins." },
    { id: 343, title: "Snow White and the Huntsman", genre: "Fantasy", description: "A princess teams up with a hunter to defeat a queen." },
    { id: 344, title: "The Huntsman: Winter’s War", genre: "Fantasy", description: "A warrior faces magical threats in a frozen land." },
    { id: 345, title: "Mirror Mirror", genre: "Fantasy", description: "A comedic retelling of Snow White." },
    { id: 346, title: "Jack the Giant Slayer", genre: "Fantasy", description: "A young man battles giants." },
    { id: 347, title: "The BFG", genre: "Fantasy", description: "A girl befriends a friendly giant." },
    { id: 348, title: "Pete’s Dragon", genre: "Fantasy", description: "A boy and his dragon live in the forest." },
    { id: 349, title: "The Secret of Moonacre", genre: "Fantasy", description: "A girl uncovers a magical family secret." },
    { id: 350, title: "The Dark Crystal", genre: "Fantasy", description: "A hero restores balance to a mystical world." },

    { id: 351, title: "Labyrinth", genre: "Fantasy", description: "A girl navigates a maze to rescue her brother." },
    { id: 352, title: "Coraline", genre: "Fantasy", description: "A girl discovers a dark parallel world." },
    { id: 353, title: "Kubo and the Two Strings", genre: "Fantasy", description: "A boy uses magic to defeat evil spirits." },
    { id: 354, title: "Spirited Away", genre: "Fantasy", description: "A girl enters a magical spirit world." },
    { id: 355, title: "Howl’s Moving Castle", genre: "Fantasy", description: "A girl is cursed and meets a wizard." },
    { id: 356, title: "Princess Mononoke", genre: "Fantasy", description: "A prince becomes involved in a conflict between nature and humans." },
    { id: 357, title: "The Shape of Water", genre: "Fantasy", description: "A woman forms a bond with a mysterious creature." },
    { id: 358, title: "The Green Knight", genre: "Fantasy", description: "A knight embarks on a mysterious quest." },
    { id: 359, title: "Bright", genre: "Fantasy", description: "Humans and magical creatures coexist in a modern world." },
    { id: 360, title: "Warcraft", genre: "Fantasy", description: "Humans and orcs battle for survival." },

    { id: 361, title: "Dungeons & Dragons", genre: "Fantasy", description: "Adventurers embark on a magical quest." },
    { id: 362, title: "Dungeons & Dragons: Honor Among Thieves", genre: "Fantasy", description: "A group of thieves attempt a daring heist." },
    { id: 363, title: "The Sorcerer’s Apprentice", genre: "Fantasy", description: "A young man learns magic from a powerful sorcerer." },
    { id: 364, title: "Seventh Son", genre: "Fantasy", description: "An apprentice trains to fight dark magic." },
    { id: 365, title: "The Last Witch Hunter", genre: "Fantasy", description: "A hunter battles witches across time." },
    { id: 366, title: "The Covenant", genre: "Fantasy", description: "Young men discover magical powers." },
    { id: 367, title: "Beautiful Creatures", genre: "Fantasy", description: "A girl struggles with her magical destiny." },
    { id: 368, title: "The Mortal Instruments: City of Bones", genre: "Fantasy", description: "A girl discovers a hidden world of shadow hunters." },
    { id: 369, title: "The Magicians", genre: "Fantasy", description: "Students learn magic at a secret university." },
    { id: 370, title: "The House with a Clock in Its Walls", genre: "Fantasy", description: "A boy discovers magic in his uncle’s house." },

    { id: 371, title: "Miss Peregrine’s Home for Peculiar Children", genre: "Fantasy", description: "A boy finds children with special abilities." },
    { id: 372, title: "The Witches", genre: "Fantasy", description: "A boy encounters a group of witches." },
    { id: 373, title: "Matilda the Musical", genre: "Fantasy", description: "A gifted girl uses her powers against injustice." },
    { id: 374, title: "Enchanted", genre: "Fantasy", description: "A princess is transported to the real world." },
    { id: 375, title: "Disenchanted", genre: "Fantasy", description: "A fairy tale life faces unexpected challenges." },
    { id: 376, title: "Into the Woods", genre: "Fantasy", description: "Fairy tale characters collide in one story." },
    { id: 377, title: "The Nutcracker and the Four Realms", genre: "Fantasy", description: "A girl enters a magical world of soldiers and mice." },
    { id: 378, title: "The Polar Express", genre: "Fantasy", description: "A magical train takes children to the North Pole." },
    { id: 379, title: "Hook", genre: "Fantasy", description: "Peter Pan returns to Neverland." },
    { id: 380, title: "Peter Pan", genre: "Fantasy", description: "Children travel to a land where they never grow up." },

    { id: 381, title: "Peter Pan & Wendy", genre: "Fantasy", description: "A modern retelling of the classic tale." },
    { id: 382, title: "The Tale of Despereaux", genre: "Fantasy", description: "A small mouse becomes a hero." },
    { id: 383, title: "Epic", genre: "Fantasy", description: "A girl joins a battle in a hidden forest world." },
    { id: 384, title: "Rise of the Guardians", genre: "Fantasy", description: "Guardians protect children’s dreams." },
    { id: 385, title: "The Boxtrolls", genre: "Fantasy", description: "A boy raised by underground creatures." },
    { id: 386, title: "Trolls", genre: "Fantasy", description: "Colorful creatures go on an adventure." },
    { id: 387, title: "Onward", genre: "Fantasy", description: "Two brothers go on a magical quest." },
    { id: 388, title: "Frozen", genre: "Fantasy", description: "A princess with ice powers struggles to control them." },
    { id: 389, title: "Frozen II", genre: "Fantasy", description: "A journey reveals the origin of magical powers." },
    { id: 390, title: "Moana", genre: "Fantasy", description: "A girl sails across the ocean to save her people." },

    { id: 391, title: "Raya and the Last Dragon", genre: "Fantasy", description: "A warrior seeks the last dragon." },
    { id: 392, title: "Wish Dragon", genre: "Fantasy", description: "A boy meets a dragon who grants wishes." },
    { id: 393, title: "The Dragon Prince", genre: "Fantasy", description: "Princes and elves seek peace between kingdoms." },
    { id: 394, title: "The Sea Beast", genre: "Fantasy", description: "A hunter encounters a legendary sea creature." },
    { id: 395, title: "The Black Cauldron", genre: "Fantasy", description: "A young hero stops an evil king." },
    { id: 396, title: "The Sword in the Stone", genre: "Fantasy", description: "A boy learns magic from Merlin." },
    { id: 397, title: "Excalibur", genre: "Fantasy", description: "The legend of King Arthur unfolds." },
    { id: 398, title: "King Arthur", genre: "Fantasy", description: "A leader rises to unite a kingdom." },
    { id: 399, title: "The Kid Who Would Be King", genre: "Fantasy", description: "A boy finds King Arthur’s sword in modern times." },
    { id: 400, title: "Dragonheart", genre: "Fantasy", description: "A knight bonds with a dragon to fight evil." } ,

    { id: 401, title: "The Hangover", genre: "Comedy", description: "Friends wake up after a wild night with no memory." },
    { id: 402, title: "The Hangover Part II", genre: "Comedy", description: "Another chaotic bachelor trip goes wrong." },
    { id: 403, title: "The Hangover Part III", genre: "Comedy", description: "The group reunites for one final adventure." },
    { id: 404, title: "Superbad", genre: "Comedy", description: "Two teens try to enjoy their last days before college." },
    { id: 405, title: "Step Brothers", genre: "Comedy", description: "Two grown men become stepbrothers and rivals." },
    { id: 406, title: "Talladega Nights", genre: "Comedy", description: "A NASCAR driver faces a new rival." },
    { id: 407, title: "Anchorman", genre: "Comedy", description: "A news anchor deals with changing times." },
    { id: 408, title: "Anchorman 2", genre: "Comedy", description: "The news team returns in the modern era." },
    { id: 409, title: "Dumb and Dumber", genre: "Comedy", description: "Two friends go on a silly road trip." },
    { id: 410, title: "Dumb and Dumber To", genre: "Comedy", description: "The duo returns for another adventure." },

    { id: 411, title: "Ace Ventura: Pet Detective", genre: "Comedy", description: "A quirky detective searches for missing animals." },
    { id: 412, title: "Ace Ventura: When Nature Calls", genre: "Comedy", description: "The detective travels to Africa for a mission." },
    { id: 413, title: "Bruce Almighty", genre: "Comedy", description: "A man gains divine powers for a short time." },
    { id: 414, title: "Yes Man", genre: "Comedy", description: "A man says yes to everything and changes his life." },
    { id: 415, title: "Liar Liar", genre: "Comedy", description: "A lawyer is forced to tell the truth for a day." },
    { id: 416, title: "The Mask", genre: "Comedy", description: "A man gains magical powers from a mysterious mask." },
    { id: 417, title: "The Cable Guy", genre: "Comedy", description: "A cable installer becomes overly attached." },
    { id: 418, title: "Me, Myself & Irene", genre: "Comedy", description: "A man struggles with multiple personalities." },
    { id: 419, title: "There’s Something About Mary", genre: "Comedy", description: "A man tries to win back his high school crush." },
    { id: 420, title: "Meet the Parents", genre: "Comedy", description: "A man tries to impress his girlfriend’s strict father." },

    { id: 421, title: "Meet the Fockers", genre: "Comedy", description: "Two very different families meet each other." },
    { id: 422, title: "Little Fockers", genre: "Comedy", description: "Family chaos continues with kids involved." },
    { id: 423, title: "Night at the Museum", genre: "Comedy", description: "Museum exhibits come to life at night." },
    { id: 424, title: "Night at the Museum 2", genre: "Comedy", description: "The adventure continues in a bigger museum." },
    { id: 425, title: "Night at the Museum: Secret of the Tomb", genre: "Comedy", description: "A final mission to save the magic." },
    { id: 426, title: "The Intern", genre: "Comedy", description: "An elderly intern joins a modern startup." },
    { id: 427, title: "The Proposal", genre: "Comedy", description: "A fake marriage leads to unexpected romance." },
    { id: 428, title: "Crazy Rich Asians", genre: "Comedy", description: "A woman discovers her boyfriend is extremely wealthy." },
    { id: 429, title: "Mean Girls", genre: "Comedy", description: "A girl navigates high school social groups." },
    { id: 430, title: "Legally Blonde", genre: "Comedy", description: "A fashion student proves herself in law school." },

    { id: 431, title: "Legally Blonde 2", genre: "Comedy", description: "Elle continues her journey in politics." },
    { id: 432, title: "Miss Congeniality", genre: "Comedy", description: "An FBI agent goes undercover in a beauty pageant." },
    { id: 433, title: "Miss Congeniality 2", genre: "Comedy", description: "The agent returns for another mission." },
    { id: 434, title: "The Devil Wears Prada", genre: "Comedy", description: "A young woman works for a demanding editor." },
    { id: 435, title: "The Other Woman", genre: "Comedy", description: "Women unite against a cheating partner." },
    { id: 436, title: "The Heat", genre: "Comedy", description: "Two mismatched cops team up for a case." },
    { id: 437, title: "Spy", genre: "Comedy", description: "A desk agent becomes a field spy." },
    { id: 438, title: "Bridesmaids", genre: "Comedy", description: "A woman struggles while planning her friend’s wedding." },
    { id: 439, title: "Pitch Perfect", genre: "Comedy", description: "A college singing group competes nationally." },
    { id: 440, title: "Pitch Perfect 2", genre: "Comedy", description: "The group aims for international success." },

    { id: 441, title: "Pitch Perfect 3", genre: "Comedy", description: "The singers reunite for one last tour." },
    { id: 442, title: "21 Jump Street", genre: "Comedy", description: "Undercover cops return to high school." },
    { id: 443, title: "22 Jump Street", genre: "Comedy", description: "The duo goes undercover in college." },
    { id: 444, title: "Get Smart", genre: "Comedy", description: "A clumsy agent tries to stop a criminal organization." },
    { id: 445, title: "Johnny English", genre: "Comedy", description: "A bumbling spy saves the day accidentally." },
    { id: 446, title: "Johnny English Reborn", genre: "Comedy", description: "The spy returns for another mission." },
    { id: 447, title: "Johnny English Strikes Again", genre: "Comedy", description: "A retired agent is called back to action." },
    { id: 448, title: "Mr. Bean’s Holiday", genre: "Comedy", description: "Mr. Bean travels to France causing chaos." },
    { id: 449, title: "Bean", genre: "Comedy", description: "Mr. Bean disrupts an art gallery." },
    { id: 450, title: "Home Alone", genre: "Comedy", description: "A boy defends his house from burglars." },

    { id: 451, title: "Home Alone 2", genre: "Comedy", description: "The boy gets lost in New York." },
    { id: 452, title: "The Pink Panther", genre: "Comedy", description: "A clumsy detective investigates a jewel theft." },
    { id: 453, title: "The Pink Panther 2", genre: "Comedy", description: "The inspector joins a global investigation." },
    { id: 454, title: "Zoolander", genre: "Comedy", description: "A model gets involved in a conspiracy." },
    { id: 455, title: "Zoolander 2", genre: "Comedy", description: "The model returns to the spotlight." },
    { id: 456, title: "Tropic Thunder", genre: "Comedy", description: "Actors get caught in a real war situation." },
    { id: 457, title: "The Dictator", genre: "Comedy", description: "A dictator visits the modern world." },
    { id: 458, title: "Borat", genre: "Comedy", description: "A reporter travels across America." },
    { id: 459, title: "Borat Subsequent Moviefilm", genre: "Comedy", description: "Borat returns for another journey." },
    { id: 460, title: "The Grand Budapest Hotel", genre: "Comedy", description: "A hotel concierge gets involved in a mystery." },

    { id: 461, title: "Napoleon Dynamite", genre: "Comedy", description: "An awkward teen navigates high school life." },
    { id: 462, title: "School of Rock", genre: "Comedy", description: "A musician teaches kids through rock music." },
    { id: 463, title: "Jumanji: Welcome to the Jungle", genre: "Comedy", description: "Teens get trapped in a video game world." },
    { id: 464, title: "Jumanji: The Next Level", genre: "Comedy", description: "The adventure continues with new challenges." },
    { id: 465, title: "Central Intelligence", genre: "Comedy", description: "An accountant joins a CIA mission." },
    { id: 466, title: "Ride Along", genre: "Comedy", description: "A man joins his future brother-in-law on patrol." },
    { id: 467, title: "Ride Along 2", genre: "Comedy", description: "The duo heads to Miami for a case." },
    { id: 468, title: "We're the Millers", genre: "Comedy", description: "A fake family smuggles drugs across borders." },
    { id: 469, title: "Horrible Bosses", genre: "Comedy", description: "Employees plan revenge on their bosses." },
    { id: 470, title: "Horrible Bosses 2", genre: "Comedy", description: "The trio starts their own business." },

    { id: 471, title: "Ted", genre: "Comedy", description: "A man deals with his talking teddy bear." },
    { id: 472, title: "Ted 2", genre: "Comedy", description: "The bear fights for legal rights." },
    { id: 473, title: "Paul", genre: "Comedy", description: "Two fans meet an alien on the run." },
    { id: 474, title: "The Internship", genre: "Comedy", description: "Two salesmen join a tech internship." },
    { id: 475, title: "Office Christmas Party", genre: "Comedy", description: "A wild office party goes out of control." },
    { id: 476, title: "Game Night", genre: "Comedy", description: "A game night turns into a real mystery." },
    { id: 477, title: "Date Night", genre: "Comedy", description: "A couple gets caught in a dangerous situation." },
    { id: 478, title: "Blockers", genre: "Comedy", description: "Parents try to stop their kids’ plans." },
    { id: 479, title: "Bad Moms", genre: "Comedy", description: "Mothers rebel against expectations." },
    { id: 480, title: "A Bad Moms Christmas", genre: "Comedy", description: "Holiday chaos with their own mothers." },

    { id: 481, title: "Easy A", genre: "Comedy", description: "A rumor changes a student’s life." },
    { id: 482, title: "Clueless", genre: "Comedy", description: "A rich teen navigates school and friendships." },
    { id: 483, title: "She's the Man", genre: "Comedy", description: "A girl disguises herself to play soccer." },
    { id: 484, title: "10 Things I Hate About You", genre: "Comedy", description: "A modern retelling of a classic romance." },
    { id: 485, title: "Notting Hill", genre: "Comedy", description: "A bookstore owner falls for a movie star." },
    { id: 486, title: "Love Actually", genre: "Comedy", description: "Interconnected love stories unfold." },
    { id: 487, title: "The Holiday", genre: "Comedy", description: "Two women swap homes for the holidays." },
    { id: 488, title: "How to Lose a Guy in 10 Days", genre: "Comedy", description: "A relationship experiment goes wrong." },
    { id: 489, title: "50 First Dates", genre: "Comedy", description: "A man falls in love with a woman with memory loss." },
    { id: 490, title: "Click", genre: "Comedy", description: "A remote control changes a man’s life." },

    { id: 491, title: "Grown Ups", genre: "Comedy", description: "Friends reunite after years apart." },
    { id: 492, title: "Grown Ups 2", genre: "Comedy", description: "More family chaos and fun." },
    { id: 493, title: "Just Go with It", genre: "Comedy", description: "A fake marriage leads to real feelings." },
    { id: 494, title: "Blended", genre: "Comedy", description: "Two families bond on vacation." },
    { id: 495, title: "The Waterboy", genre: "Comedy", description: "A waterboy becomes a football star." },
    { id: 496, title: "Happy Gilmore", genre: "Comedy", description: "A hockey player joins professional golf." },
    { id: 497, title: "Big Daddy", genre: "Comedy", description: "A man adopts a child to impress his girlfriend." },
    { id: 498, title: "Mr. Deeds", genre: "Comedy", description: "A small-town man inherits a fortune." },
    { id: 499, title: "The Longest Yard", genre: "Comedy", description: "Prisoners play football against guards." },
    { id: 500, title: "Pixels", genre: "Comedy", description: "Video game characters attack Earth." } ,

     { id: 501, title: "Se7en", genre: "Thriller", description: "Two detectives hunt a serial killer using deadly sins." },
    { id: 502, title: "Gone Girl", genre: "Thriller", description: "A man becomes suspect when his wife disappears." },
    { id: 503, title: "Prisoners", genre: "Thriller", description: "A father takes extreme steps to find his missing daughter." },
    { id: 504, title: "Zodiac", genre: "Thriller", description: "Journalists track a mysterious serial killer." },
    { id: 505, title: "Shutter Island", genre: "Thriller", description: "A detective investigates a psychiatric facility." },
    { id: 506, title: "The Girl with the Dragon Tattoo", genre: "Thriller", description: "A journalist uncovers dark secrets." },
    { id: 507, title: "Nightcrawler", genre: "Thriller", description: "A man dives into crime journalism." },
    { id: 508, title: "No Country for Old Men", genre: "Thriller", description: "A hunter finds money and is chased by a killer." },
    { id: 509, title: "The Silence of the Lambs", genre: "Thriller", description: "An FBI trainee consults a cannibalistic killer." },
    { id: 510, title: "Hannibal", genre: "Thriller", description: "The infamous killer returns." },

    { id: 511, title: "Red Dragon", genre: "Thriller", description: "A profiler tracks a brutal serial killer." },
    { id: 512, title: "The Sixth Sense", genre: "Thriller", description: "A boy communicates with spirits." },
    { id: 513, title: "Split", genre: "Thriller", description: "A man with multiple personalities kidnaps girls." },
    { id: 514, title: "Glass", genre: "Thriller", description: "Superhuman individuals collide." },
    { id: 515, title: "Unbreakable", genre: "Thriller", description: "A man discovers his hidden abilities." },
    { id: 516, title: "The Others", genre: "Thriller", description: "A mother suspects ghosts in her house." },
    { id: 517, title: "The Invitation", genre: "Thriller", description: "A dinner party hides dark intentions." },
    { id: 518, title: "The Gift", genre: "Thriller", description: "A couple faces a mysterious past acquaintance." },
    { id: 519, title: "Searching", genre: "Thriller", description: "A father searches for his missing daughter online." },
    { id: 520, title: "Run", genre: "Thriller", description: "A girl suspects her mother is hiding secrets." },

    { id: 521, title: "A Quiet Place", genre: "Thriller", description: "A family survives in silence from deadly creatures." },
    { id: 522, title: "A Quiet Place Part II", genre: "Thriller", description: "The family continues their survival journey." },
    { id: 523, title: "Bird Box", genre: "Thriller", description: "People must avoid seeing deadly entities." },
    { id: 524, title: "The Platform", genre: "Thriller", description: "Prisoners fight for survival in a vertical jail." },
    { id: 525, title: "Cube", genre: "Thriller", description: "Strangers wake up in a deadly maze." },
    { id: 526, title: "Exam", genre: "Thriller", description: "Candidates face a mysterious test." },
    { id: 527, title: "Escape Room", genre: "Thriller", description: "Players must solve puzzles to survive." },
    { id: 528, title: "Escape Room: Tournament of Champions", genre: "Thriller", description: "Survivors face deadlier challenges." },
    { id: 529, title: "Don't Breathe", genre: "Thriller", description: "Burglars break into a dangerous blind man’s home." },
    { id: 530, title: "Don't Breathe 2", genre: "Thriller", description: "The story continues with more danger." },

    { id: 531, title: "The Purge", genre: "Thriller", description: "Crime is legal for one night." },
    { id: 532, title: "The Purge: Anarchy", genre: "Thriller", description: "Citizens fight to survive purge night." },
    { id: 533, title: "The Purge: Election Year", genre: "Thriller", description: "Politics collide with purge chaos." },
    { id: 534, title: "The Forever Purge", genre: "Thriller", description: "The purge continues beyond one night." },
    { id: 535, title: "Disturbia", genre: "Thriller", description: "A teen suspects his neighbor is a killer." },
    { id: 536, title: "Rear Window", genre: "Thriller", description: "A man spies on neighbors and suspects murder." },
    { id: 537, title: "Panic Room", genre: "Thriller", description: "A mother hides from intruders in a safe room." },
    { id: 538, title: "Flightplan", genre: "Thriller", description: "A woman searches for her missing daughter on a plane." },
    { id: 539, title: "Non-Stop", genre: "Thriller", description: "An air marshal faces a mid-air threat." },
    { id: 540, title: "Unknown", genre: "Thriller", description: "A man wakes up with a stolen identity." },

    { id: 541, title: "The Commuter", genre: "Thriller", description: "A man is caught in a conspiracy on a train." },
    { id: 542, title: "Source Code", genre: "Thriller", description: "A soldier relives a train bombing repeatedly." },
    { id: 543, title: "Deja Vu", genre: "Thriller", description: "An agent uses time-bending tech to stop a crime." },
    { id: 544, title: "Enemy of the State", genre: "Thriller", description: "A lawyer is hunted by government agents." },
    { id: 545, title: "Phone Booth", genre: "Thriller", description: "A man is trapped in a phone booth by a sniper." },
    { id: 546, title: "The Call", genre: "Thriller", description: "A 911 operator helps a kidnapped girl." },
    { id: 547, title: "Fracture", genre: "Thriller", description: "A clever killer plays mind games in court." },
    { id: 548, title: "Law Abiding Citizen", genre: "Thriller", description: "A man seeks revenge through legal loopholes." },
    { id: 549, title: "Inside Man", genre: "Thriller", description: "A bank heist turns into a psychological game." },
    { id: 550, title: "The Town", genre: "Thriller", description: "Bank robbers face consequences." },

    { id: 551, title: "Heat", genre: "Thriller", description: "A cop and criminal clash in Los Angeles." },
    { id: 552, title: "Collateral", genre: "Thriller", description: "A taxi driver becomes hostage to a hitman." },
    { id: 553, title: "Drive", genre: "Thriller", description: "A driver gets involved in crime." },
    { id: 554, title: "Looper", genre: "Thriller", description: "Time-travel assassins face paradoxes." },
    { id: 555, title: "The Game", genre: "Thriller", description: "A man enters a mysterious life-altering game." },
    { id: 556, title: "Identity", genre: "Thriller", description: "Strangers are trapped in a deadly motel." },
    { id: 557, title: "Secret Window", genre: "Thriller", description: "A writer is accused of plagiarism." },
    { id: 558, title: "The Machinist", genre: "Thriller", description: "A man suffers from insomnia and paranoia." },
    { id: 559, title: "Enemy", genre: "Thriller", description: "A man discovers his identical double." },
    { id: 560, title: "The Number 23", genre: "Thriller", description: "A man becomes obsessed with a number." },

    { id: 561, title: "Cape Fear", genre: "Thriller", description: "A lawyer is stalked by a former client." },
    { id: 562, title: "Basic Instinct", genre: "Thriller", description: "A detective investigates a seductive suspect." },
    { id: 563, title: "Fatal Attraction", genre: "Thriller", description: "An affair turns dangerous." },
    { id: 564, title: "Single White Female", genre: "Thriller", description: "A roommate becomes obsessed." },
    { id: 565, title: "The Hand That Rocks the Cradle", genre: "Thriller", description: "A nanny seeks revenge." },
    { id: 566, title: "Sleeping with the Enemy", genre: "Thriller", description: "A woman escapes an abusive husband." },
    { id: 567, title: "Double Jeopardy", genre: "Thriller", description: "A woman seeks justice after betrayal." },
    { id: 568, title: "The Fugitive", genre: "Thriller", description: "A man escapes custody to prove innocence." },
    { id: 569, title: "U.S. Marshals", genre: "Thriller", description: "A fugitive is pursued by law enforcement." },
    { id: 570, title: "Safe House", genre: "Thriller", description: "A rookie agent protects a criminal." },

    { id: 571, title: "Argo", genre: "Thriller", description: "A CIA mission rescues hostages." },
    { id: 572, title: "Zero Dark Thirty", genre: "Thriller", description: "The hunt for Osama bin Laden." },
    { id: 573, title: "Munich", genre: "Thriller", description: "Agents seek revenge after an attack." },
    { id: 574, title: "Body of Lies", genre: "Thriller", description: "A spy tracks a terrorist leader." },
    { id: 575, title: "Syriana", genre: "Thriller", description: "Oil politics and espionage collide." },
    { id: 576, title: "The Interpreter", genre: "Thriller", description: "A translator overhears a plot." },
    { id: 577, title: "The Pelican Brief", genre: "Thriller", description: "A law student uncovers a conspiracy." },
    { id: 578, title: "Michael Clayton", genre: "Thriller", description: "A lawyer deals with corporate corruption." },
    { id: 579, title: "Erin Brockovich", genre: "Thriller", description: "A woman fights a corporate giant." },
    { id: 580, title: "The Insider", genre: "Thriller", description: "A whistleblower exposes the truth." },

    { id: 581, title: "Contagion", genre: "Thriller", description: "A deadly virus spreads globally." },
    { id: 582, title: "Outbreak", genre: "Thriller", description: "Scientists race to stop a virus." },
    { id: 583, title: "World War Z", genre: "Thriller", description: "A global zombie outbreak occurs." },
    { id: 584, title: "I Am Legend", genre: "Thriller", description: "A lone survivor fights infected humans." },
    { id: 585, title: "Train to Busan", genre: "Thriller", description: "Passengers fight zombies on a train." },
    { id: 586, title: "Snowpiercer", genre: "Thriller", description: "Survivors live on a train after apocalypse." },
    { id: 587, title: "Children of Men", genre: "Thriller", description: "A world without children faces hope." },
    { id: 588, title: "The Road", genre: "Thriller", description: "A father and son survive post-apocalypse." },
    { id: 589, title: "28 Days Later", genre: "Thriller", description: "A virus turns people into rage-filled beings." },
    { id: 590, title: "28 Weeks Later", genre: "Thriller", description: "The infection returns." },

    { id: 591, title: "The Mist", genre: "Thriller", description: "A town faces deadly creatures in fog." },
    { id: 592, title: "The Descent", genre: "Thriller", description: "Cave explorers encounter horrors." },
    { id: 593, title: "The Babadook", genre: "Thriller", description: "A mother and son face a dark entity." },
    { id: 594, title: "It Follows", genre: "Thriller", description: "A curse passes through victims." },
    { id: 595, title: "Hereditary", genre: "Thriller", description: "A family faces dark secrets." },
    { id: 596, title: "Midsommar", genre: "Thriller", description: "A festival hides disturbing rituals." },
    { id: 597, title: "Get Out", genre: "Thriller", description: "A man uncovers a chilling secret." },
    { id: 598, title: "Us", genre: "Thriller", description: "A family faces their doppelgängers." },
    { id: 599, title: "The Invisible Man", genre: "Thriller", description: "A woman is stalked by an unseen force." },
    { id: 600, title: "The Menu", genre: "Thriller", description: "Guests attend a mysterious dining experience." },

     { id: 601, title: "Titanic", genre: "Romance", description: "A tragic love story aboard a doomed ship." },
    { id: 602, title: "The Notebook", genre: "Romance", description: "A lifelong love story unfolds." },
    { id: 603, title: "Pride and Prejudice", genre: "Romance", description: "Love grows despite misunderstandings." },
    { id: 604, title: "La La Land", genre: "Romance", description: "Artists chase dreams and love." },
    { id: 605, title: "Before Sunrise", genre: "Romance", description: "Two strangers connect in one night." },
    { id: 606, title: "Before Sunset", genre: "Romance", description: "They reunite years later." },
    { id: 607, title: "Before Midnight", genre: "Romance", description: "Their relationship evolves." },
    { id: 608, title: "Notting Hill", genre: "Romance", description: "A bookstore owner meets a celebrity." },
    { id: 609, title: "Love Actually", genre: "Romance", description: "Interwoven love stories." },
    { id: 610, title: "The Holiday", genre: "Romance", description: "Two women swap homes and find love." },

    { id: 611, title: "Pretty Woman", genre: "Romance", description: "A businessman falls for a woman he hires." },
    { id: 612, title: "Runaway Bride", genre: "Romance", description: "A woman keeps leaving her weddings." },
    { id: 613, title: "Sleepless in Seattle", genre: "Romance", description: "A radio show connects two people." },
    { id: 614, title: "You've Got Mail", genre: "Romance", description: "Online rivals fall in love." },
    { id: 615, title: "When Harry Met Sally", genre: "Romance", description: "Friends question love and friendship." },
    { id: 616, title: "500 Days of Summer", genre: "Romance", description: "A non-linear love story." },
    { id: 617, title: "Me Before You", genre: "Romance", description: "A caretaker forms a deep bond." },
    { id: 618, title: "The Fault in Our Stars", genre: "Romance", description: "Two teens fall in love despite illness." },
    { id: 619, title: "A Walk to Remember", genre: "Romance", description: "A rebellious teen finds love." },
    { id: 620, title: "Dear John", genre: "Romance", description: "A soldier falls in love." },

    { id: 621, title: "The Vow", genre: "Romance", description: "A husband helps his wife regain memory." },
    { id: 622, title: "Safe Haven", genre: "Romance", description: "A woman starts fresh and finds love." },
    { id: 623, title: "The Lucky One", genre: "Romance", description: "A soldier searches for a woman from a photo." },
    { id: 624, title: "Midnight in Paris", genre: "Romance", description: "A writer travels through time." },
    { id: 625, title: "Her", genre: "Romance", description: "A man falls in love with an AI." },
    { id: 626, title: "Silver Linings Playbook", genre: "Romance", description: "Two troubled people connect." },
    { id: 627, title: "Crazy, Stupid, Love", genre: "Romance", description: "Multiple love stories intersect." },
    { id: 628, title: "Friends with Benefits", genre: "Romance", description: "Friends test a casual relationship." },
    { id: 629, title: "No Strings Attached", genre: "Romance", description: "Casual love gets complicated." },
    { id: 630, title: "The Proposal", genre: "Romance", description: "A fake engagement turns real." },

    { id: 631, title: "27 Dresses", genre: "Romance", description: "A woman always a bridesmaid seeks love." },
    { id: 632, title: "The Wedding Planner", genre: "Romance", description: "A planner falls for a client." },
    { id: 633, title: "Bride Wars", genre: "Romance", description: "Friends compete over weddings." },
    { id: 634, title: "Mamma Mia!", genre: "Romance", description: "A wedding brings family secrets." },
    { id: 635, title: "Mamma Mia! Here We Go Again", genre: "Romance", description: "A sequel exploring past love." },
    { id: 636, title: "The Time Traveler’s Wife", genre: "Romance", description: "A man travels through time affecting love." },
    { id: 637, title: "The Age of Adaline", genre: "Romance", description: "A woman stops aging and finds love." },
    { id: 638, title: "Brooklyn", genre: "Romance", description: "An immigrant finds love in a new land." },
    { id: 639, title: "Call Me by Your Name", genre: "Romance", description: "A summer romance blossoms." },
    { id: 640, title: "Blue Valentine", genre: "Romance", description: "A relationship’s highs and lows." },

    { id: 641, title: "Eternal Sunshine of the Spotless Mind", genre: "Romance", description: "A couple erases memories of each other." },
    { id: 642, title: "About Time", genre: "Romance", description: "A man uses time travel to improve love." },
    { id: 643, title: "Love, Simon", genre: "Romance", description: "A teen navigates identity and love." },
    { id: 644, title: "To All the Boys I've Loved Before", genre: "Romance", description: "Love letters cause chaos." },
    { id: 645, title: "The Kissing Booth", genre: "Romance", description: "A teen falls for her best friend’s brother." },
    { id: 646, title: "The Kissing Booth 2", genre: "Romance", description: "Long-distance love struggles." },
    { id: 647, title: "The Kissing Booth 3", genre: "Romance", description: "Final decisions about love." },
    { id: 648, title: "After", genre: "Romance", description: "A college romance begins." },
    { id: 649, title: "After We Collided", genre: "Romance", description: "The relationship deepens." },
    { id: 650, title: "After We Fell", genre: "Romance", description: "More challenges in love." },

    { id: 651, title: "After Ever Happy", genre: "Romance", description: "The story reaches its climax." },
    { id: 652, title: "The Last Song", genre: "Romance", description: "A teen reconnects with family and love." },
    { id: 653, title: "Endless Love", genre: "Romance", description: "Young love faces obstacles." },
    { id: 654, title: "The Best of Me", genre: "Romance", description: "Former lovers reunite." },
    { id: 655, title: "Remember Me", genre: "Romance", description: "A couple finds love in difficult times." },
    { id: 656, title: "The Spectacular Now", genre: "Romance", description: "A teen learns about real love." },
    { id: 657, title: "Paper Towns", genre: "Romance", description: "A boy searches for a mysterious girl." },
    { id: 658, title: "If I Stay", genre: "Romance", description: "A girl decides between life and love." },
    { id: 659, title: "Warm Bodies", genre: "Romance", description: "A zombie falls in love." },
    { id: 660, title: "The Lake House", genre: "Romance", description: "Two people connect across time." },

    { id: 661, title: "Ghost", genre: "Romance", description: "A spirit protects his loved one." },
    { id: 662, title: "City of Angels", genre: "Romance", description: "An angel falls in love." },
    { id: 663, title: "The Bodyguard", genre: "Romance", description: "A singer falls for her protector." },
    { id: 664, title: "Dirty Dancing", genre: "Romance", description: "A summer romance through dance." },
    { id: 665, title: "Grease", genre: "Romance", description: "High school love story with music." },
    { id: 666, title: "West Side Story", genre: "Romance", description: "Love across rival groups." },
    { id: 667, title: "Romeo + Juliet", genre: "Romance", description: "Modern adaptation of classic tragedy." },
    { id: 668, title: "Anna Karenina", genre: "Romance", description: "A tragic love affair." },
    { id: 669, title: "Sense and Sensibility", genre: "Romance", description: "Two sisters navigate love." },
    { id: 670, title: "Jane Eyre", genre: "Romance", description: "A governess falls in love." },

    { id: 671, title: "The English Patient", genre: "Romance", description: "Love unfolds during war." },
    { id: 672, title: "Out of Africa", genre: "Romance", description: "A love story set in Africa." },
    { id: 673, title: "The Great Gatsby", genre: "Romance", description: "A man longs for lost love." },
    { id: 674, title: "Water for Elephants", genre: "Romance", description: "Love in a traveling circus." },
    { id: 675, title: "The Princess Bride", genre: "Romance", description: "A fairy tale love adventure." },
    { id: 676, title: "Stardust", genre: "Romance", description: "A magical love story." },
    { id: 677, title: "Enchanted", genre: "Romance", description: "A fairy tale princess in real world." },
    { id: 678, title: "Ella Enchanted", genre: "Romance", description: "A girl breaks a magical curse." },
    { id: 679, title: "Beauty and the Beast", genre: "Romance", description: "Love beyond appearances." },
    { id: 680, title: "Cinderella", genre: "Romance", description: "A classic fairy tale love story." },

    { id: 681, title: "Aladdin", genre: "Romance", description: "A street boy falls for a princess." },
    { id: 682, title: "The Little Mermaid", genre: "Romance", description: "A mermaid falls in love with a human." },
    { id: 683, title: "Tangled", genre: "Romance", description: "A princess finds love and freedom." },
    { id: 684, title: "Frozen", genre: "Romance", description: "Love and sisterhood story." },
    { id: 685, title: "Frozen II", genre: "Romance", description: "A continuation of Elsa’s journey." },
    { id: 686, title: "The Fault in Our Stars", genre: "Romance", description: "Young love faces illness." },
    { id: 687, title: "Five Feet Apart", genre: "Romance", description: "Two patients fall in love." },
    { id: 688, title: "Love & Other Drugs", genre: "Romance", description: "Love and illness intertwine." },
    { id: 689, title: "The Longest Ride", genre: "Romance", description: "Two love stories connect." },
    { id: 690, title: "Letters to Juliet", genre: "Romance", description: "A woman helps reunite lovers." },

    { id: 691, title: "The Choice", genre: "Romance", description: "A couple faces life decisions." },
    { id: 692, title: "One Day", genre: "Romance", description: "A relationship over years." },
    { id: 693, title: "The DUFF", genre: "Romance", description: "A teen redefines herself." },
    { id: 694, title: "She's All That", genre: "Romance", description: "A makeover leads to love." },
    { id: 695, title: "Never Been Kissed", genre: "Romance", description: "A reporter goes undercover in school." },
    { id: 696, title: "The Ugly Truth", genre: "Romance", description: "Opposites clash in love." },
    { id: 697, title: "What Happens in Vegas", genre: "Romance", description: "A fake marriage leads to real love." },
    { id: 698, title: "Leap Year", genre: "Romance", description: "A woman travels to propose." },
    { id: 699, title: "Just Married", genre: "Romance", description: "A honeymoon tests a couple." },
    { id: 700, title: "Two Weeks Notice", genre: "Romance", description: "A lawyer and boss develop feelings." },

    { id: 701, title: "Sholay", genre: "Action", description: "Two outlaws and a former officer team up to hunt a ruthless bandit in the Indian badlands." },
    { id: 702, title: "Uri: The Surgical Strike", genre: "Action", description: "Indian special forces plan a covert strike against militants after a deadly attack on security personnel." },
    { id: 703, title: "Pathaan", genre: "Action", description: "An exiled RAW agent returns to stop a terror outfit from unleashing a devastating attack on India." },
    { id: 704, title: "Baahubali: The Beginning", genre: "Action", description: "A young man raised in a village discovers his royal lineage and fights for a fallen kingdom." },
    { id: 705, title: "Singham", genre: "Action", description: "An honest police inspector takes on a corrupt politician linked to the coastal underworld." },

    { id: 706, title: "Koi... Mil Gaya", genre: "Sci-Fi", description: "A man with a childlike mind befriends an alien and must protect him from those who would exploit him." },
    { id: 707, title: "2.0", genre: "Sci-Fi", description: "A scientist and a humanoid robot face a vengeful force threatening mass destruction across the city." },
    { id: 708, title: "Ra.One", genre: "Sci-Fi", description: "A game designer’s villainous creation crosses into the real world, forcing his family into a digital duel." },
    { id: 709, title: "PK", genre: "Sci-Fi", description: "An innocent alien stranded on Earth questions faith, society, and what it means to be human." },
    { id: 710, title: "Cargo", genre: "Sci-Fi", description: "A lone astronaut on a post-apocalyptic spaceship helps souls transition in a quiet Indian sci-fi fable." },

    { id: 711, title: "Baahubali 2: The Conclusion", genre: "Fantasy", description: "The epic saga continues as hidden lineage, palace intrigue, and war decide the fate of Mahishmati." },
    { id: 712, title: "Brahmastra Part One: Shiva", genre: "Fantasy", description: "A young man discovers ancient astras and his connection to a secret society guarding mystical weapons." },
    { id: 713, title: "Padmaavat", genre: "Fantasy", description: "A queen’s honor, a sultan’s obsession, and a siege unfold in a lavish Rajput-era legend." },
    { id: 714, title: "Tumbbad", genre: "Fantasy", description: "Greed and myth entwine across decades as a family seeks treasure guarded by an ancient goddess." },
    { id: 715, title: "RRR", genre: "Fantasy", description: "Two revolutionaries cross paths in a heightened historical spectacle of friendship, fire, and freedom." },

    { id: 716, title: "Hera Pheri", genre: "Comedy", description: "Three broke tenants stumble into a ransom scheme and chaos in this cult slapstick caper." },
    { id: 717, title: "Munna Bhai M.B.B.S.", genre: "Comedy", description: "A lovable Mumbai gangster fakes his way through medical school with heart and Gandhian wit." },
    { id: 718, title: "3 Idiots", genre: "Comedy", description: "Three engineering friends challenge rigid education and chase dreams with humor and warmth." },
    { id: 719, title: "Dhamaal", genre: "Comedy", description: "Four dimwits race across India for buried treasure, tripping into one absurd disaster after another." },
    { id: 720, title: "Golmaal: Fun Unlimited", genre: "Comedy", description: "Four friends hide in a blind couple’s home and spin lies that spiral into manic comedy." },

    { id: 721, title: "Dilwale Dulhania Le Jayenge", genre: "Drama", description: "A London boy and an Indian girl fall in love on a European trip; tradition and courage shape their future." },
    { id: 722, title: "Taare Zameen Par", genre: "Drama", description: "An art teacher helps a struggling boy with dyslexia find confidence beyond grades and expectations." },
    { id: 723, title: "Swades", genre: "Drama", description: "An NASA engineer returns to rural India and reconnects with roots, duty, and unfinished dreams." },
    { id: 724, title: "Rang De Basanti", genre: "Drama", description: "Carefree students filming a freedom-fighter drama awaken to activism after a personal tragedy." },
    { id: 725, title: "Gangs of Wasseypur", genre: "Drama", description: "Generations of families feud across decades of crime, politics, and revenge in the coal belt." },

    { id: 726, title: "Andhadhun", genre: "Thriller", description: "A blind pianist is pulled into a web of murder, lies, and dark comedy where nothing is certain." },
    { id: 727, title: "Drishyam", genre: "Thriller", description: "A devoted father uses sharp wits to shield his family when a crime threatens to unravel their lives." },
    { id: 728, title: "Kahaani", genre: "Thriller", description: "A pregnant woman searches Kolkata for her missing husband, uncovering layers of conspiracy." },
    { id: 729, title: "Talaash: The Answer Lies Within", genre: "Thriller", description: "A troubled inspector investigates a celebrity’s death and drifts into the city’s hidden shadows." },
    { id: 730, title: "Badla", genre: "Thriller", description: "A successful businesswoman and her lawyer reconstruct a night of secrets, betrayal, and murder." },

    { id: 731, title: "Yeh Jawaani Hai Deewani", genre: "Romance", description: "Friends reunite on a trek and a wedding, balancing wanderlust, ambition, and a second chance at love." },
    { id: 732, title: "Veer-Zaara", genre: "Romance", description: "An Indian Air Force officer and a Pakistani woman’s love story spans borders, years, and sacrifice." },
    { id: 733, title: "Jab We Met", genre: "Romance", description: "A feisty girl and a melancholy businessman meet on a train trip that reroutes both their lives." },
    { id: 734, title: "Barfi!", genre: "Romance", description: "A hearing-mute charmer’s joyful life intertwines with two women in a bittersweet, whimsical romance." },
    { id: 735, title: "Rockstar", genre: "Romance", description: "A musician’s rise to fame is fueled by heartbreak, rebellion, and an all-consuming love." }
  ],
  Books: [
    {
        "id": 1,
        "title": "The Hobbit",
        "genre": "Fantasy",
        "description": "A reluctant hobbit embarks on an unexpected journey with dwarves and a wizard to reclaim a dragon-guarded treasure.",
        "author": "J.R.R. Tolkien"
      },
      {
        "id": 2,
        "title": "The Fellowship of the Ring",
        "genre": "Fantasy",
        "description": "A young hobbit and his companions set out to destroy a powerful ring before it falls into evil hands.",
        "author": "J.R.R. Tolkien"
      },
      {
        "id": 3,
        "title": "A Game of Thrones",
        "genre": "Fantasy",
        "description": "Noble families battle for control of the Iron Throne in a world of political intrigue, war, and ancient magic.",
        "author": "George R.R. Martin"
      },
      {
        "id": 4,
        "title": "The Name of the Wind",
        "genre": "Fantasy",
        "description": "A legendary wizard recounts his extraordinary life, from street urchin to university prodigy and renowned arcanist.",
        "author": "Patrick Rothfuss"
      },
      {
        "id": 5,
        "title": "The Way of Kings",
        "genre": "Fantasy",
        "description": "In a world ravaged by war and storms, soldiers, scholars, and assassins struggle with honor, betrayal, and ancient powers.",
        "author": "Brandon Sanderson"
      },
      {
        "id": 6,
        "title": "Mistborn: The Final Empire",
        "genre": "Fantasy",
        "description": "A thief with unique powers joins a rebellion to overthrow a tyrannical immortal ruler using allomantic magic.",
        "author": "Brandon Sanderson"
      },
      {
        "id": 7,
        "title": "The Lion, the Witch and the Wardrobe",
        "genre": "Fantasy",
        "description": "Four siblings discover a magical land trapped in eternal winter and help restore its true ruler.",
        "author": "C.S. Lewis"
      },
      {
        "id": 8,
        "title": "Harry Potter and the Sorcerer's Stone",
        "genre": "Fantasy",
        "description": "An orphaned boy learns he is a wizard and attends a school of magic while facing a dark threat.",
        "author": "J.K. Rowling"
      },
      {
        "id": 9,
        "title": "The Priory of the Orange Tree",
        "genre": "Fantasy",
        "description": "Dragons awaken as queens, warriors, and scholars unite to prevent the return of an ancient evil.",
        "author": "Samantha Shannon"
      },
      {
        "id": 10,
        "title": "Assassin's Apprentice",
        "genre": "Fantasy",
        "description": "A royal bastard is trained as an assassin in a kingdom where political intrigue and ancient magic collide.",
        "author": "Robin Hobb"
      },
      {
        "id": 11,
        "title": "The Lies of Locke Lamora",
        "genre": "Fantasy",
        "description": "A clever thief leads a gang of con artists in a city of canals, pulling off impossible heists against the rich.",
        "author": "Scott Lynch"
      },
      {
        "id": 12,
        "title": "The Blade Itself",
        "genre": "Fantasy",
        "description": "A crippled nobleman, a barbarian, and a wizard form an unlikely alliance in a world on the brink of war.",
        "author": "Joe Abercrombie"
      },
      {
        "id": 13,
        "title": "The Eye of the World",
        "genre": "Fantasy",
        "description": "A farm boy and his friends flee their village as dark forces hunt them across a vast, dangerous world.",
        "author": "Robert Jordan"
      },
      {
        "id": 14,
        "title": "Gardens of the Moon",
        "genre": "Fantasy",
        "description": "Gods, mages, and soldiers clash in a sprawling empire where ancient powers awaken once more.",
        "author": "Steven Erikson"
      },
      {
        "id": 15,
        "title": "The Color of Magic",
        "genre": "Fantasy",
        "description": "An inept wizard and a cynical tourist embark on chaotic adventures in a flat, disc-shaped world.",
        "author": "Terry Pratchett"
      },
      {
        "id": 16,
        "title": "A Wizard of Earthsea",
        "genre": "Fantasy",
        "description": "A young mage must confront the shadow of his own pride and power in a world of islands and ancient magic.",
        "author": "Ursula K. Le Guin"
      },
      {
        "id": 17,
        "title": "The Tombs of Atuan",
        "genre": "Fantasy",
        "description": "A priestess guarding ancient tombs meets a wizard seeking to restore balance to the world.",
        "author": "Ursula K. Le Guin"
      },
      {
        "id": 18,
        "title": "Jonathan Strange & Mr Norrell",
        "genre": "Fantasy",
        "description": "Two magicians revive English magic during the Napoleonic Wars, unleashing unexpected consequences.",
        "author": "Susanna Clarke"
      },
      {
        "id": 19,
        "title": "The Ocean at the End of the Lane",
        "genre": "Fantasy",
        "description": "A man returns to his childhood home and recalls a terrifying supernatural encounter from his youth.",
        "author": "Neil Gaiman"
      },
      {
        "id": 20,
        "title": "Piranesi",
        "genre": "Fantasy",
        "description": "A man lives alone in a vast, mysterious house filled with endless halls and statues, seeking to understand his world.",
        "author": "Susanna Clarke"
      },
      {
        "id": 21,
        "title": "The Poppy War",
        "genre": "Fantasy",
        "description": "A young woman rises through a brutal military academy and unleashes god-like powers in a war-torn empire.",
        "author": "R.F. Kuang"
      },
      {
        "id": 22,
        "title": "The Fifth Season",
        "genre": "Fantasy",
        "description": "In a world plagued by catastrophic seasons, a woman with the power to control earthquakes searches for her missing daughter.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 23,
        "title": "Circe",
        "genre": "Fantasy",
        "description": "The witch from Greek mythology forges her own path of power, revenge, and self-discovery among gods and mortals.",
        "author": "Madeline Miller"
      },
      {
        "id": 24,
        "title": "The Bear and the Nightingale",
        "genre": "Fantasy",
        "description": "A young girl with a connection to old magic defends her family against dark forces in a harsh Russian winter.",
        "author": "Katherine Arden"
      },
      {
        "id": 25,
        "title": "Uprooted",
        "genre": "Fantasy",
        "description": "A village girl is taken by a powerful wizard to combat a corrupting magical wood threatening their land.",
        "author": "Naomi Novik"
      },
      {
        "id": 26,
        "title": "Spinning Silver",
        "genre": "Fantasy",
        "description": "Three women navigate dangerous bargains with fae, demons, and kings in a reimagined fairy tale.",
        "author": "Naomi Novik"
      },
      {
        "id": 27,
        "title": "The House in the Cerulean Sea",
        "genre": "Fantasy",
        "description": "A caseworker for magical children visits an orphanage housing dangerous but lovable supernatural kids.",
        "author": "TJ Klune"
      },
      {
        "id": 28,
        "title": "Legends & Lattes",
        "genre": "Fantasy",
        "description": "A retired orc warrior opens a coffee shop in a fantasy city, seeking a peaceful new life.",
        "author": "Travis Baldree"
      },
      {
        "id": 29,
        "title": "The Shadow of the Gods",
        "genre": "Fantasy",
        "description": "Warriors and outcasts battle gods, monsters, and fate in a Viking-inspired world of blood and glory.",
        "author": "John Gwynne"
      },
      {
        "id": 30,
        "title": "The Black Prism",
        "genre": "Fantasy",
        "description": "A young man discovers he is the illegitimate son of a powerful leader in a world ruled by color-based magic.",
        "author": "Brent Weeks"
      },
      {
        "id": 31,
        "title": "The Dark Tower: The Gunslinger",
        "genre": "Fantasy",
        "description": "A lone gunslinger pursues a mysterious man in black across a desolate world in search of the Dark Tower.",
        "author": "Stephen King"
      },
      {
        "id": 32,
        "title": "The Lies of Locke Lamora",
        "genre": "Fantasy",
        "description": "A master thief and his crew execute elaborate cons in a vibrant city filled with danger and intrigue.",
        "author": "Scott Lynch"
      },
      {
        "id": 33,
        "title": "The Grace of Kings",
        "genre": "Fantasy",
        "description": "Two unlikely friends rise through rebellion and war to shape the destiny of an empire inspired by ancient China.",
        "author": "Ken Liu"
      },
      {
        "id": 34,
        "title": "The Bone Shard Daughter",
        "genre": "Fantasy",
        "description": "In a floating empire, a princess and a constructs-maker uncover dark secrets about magic and power.",
        "author": "Andrea Stewart"
      },
      {
        "id": 35,
        "title": "A Darker Shade of Magic",
        "genre": "Fantasy",
        "description": "A magician who can travel between parallel Londons gets caught in a dangerous conspiracy involving forbidden magic.",
        "author": "V.E. Schwab"
      },
      {
        "id": 36,
        "title": "The Night Circus",
        "genre": "Fantasy",
        "description": "Two young illusionists compete in a magical circus that appears only at night, bound by a deadly game.",
        "author": "Erin Morgenstern"
      },
      {
        "id": 37,
        "title": "Neverwhere",
        "genre": "Fantasy",
        "description": "An ordinary man discovers a magical underworld beneath London after helping a mysterious stranger.",
        "author": "Neil Gaiman"
      },
      {
        "id": 38,
        "title": "American Gods",
        "genre": "Fantasy",
        "description": "An ex-con becomes bodyguard to an old god as ancient deities battle for survival in modern America.",
        "author": "Neil Gaiman"
      },
      {
        "id": 39,
        "title": "The Invisible Life of Addie LaRue",
        "genre": "Fantasy",
        "description": "A woman makes a Faustian bargain for immortality and is forgotten by everyone she meets until one day someone remembers her.",
        "author": "V.E. Schwab"
      },
      {
        "id": 40,
        "title": "The Starless Sea",
        "genre": "Fantasy",
        "description": "A graduate student discovers a mysterious underground library filled with stories that blur the line between reality and fiction.",
        "author": "Erin Morgenstern"
      },
      {
        "id": 41,
        "title": "The Cruel Prince",
        "genre": "Fantasy",
        "description": "A mortal girl raised in the faerie courts schemes for power in a dangerous world of intrigue and betrayal.",
        "author": "Holly Black"
      },
      {
        "id": 42,
        "title": "Six of Crows",
        "genre": "Fantasy",
        "description": "A crew of outcasts and criminals attempts a daring heist in a world of magic and political tension.",
        "author": "Leigh Bardugo"
      },
      {
        "id": 43,
        "title": "The Shadowhunter's Codex",
        "genre": "Fantasy",
        "description": "Young shadowhunters battle demons in a hidden world parallel to our own.",
        "author": "Cassandra Clare"
      },
      {
        "id": 44,
        "title": "The Rage of Dragons",
        "genre": "Fantasy",
        "description": "A young warrior seeks vengeance and mastery in a kingdom built on endless war against ancient dragons.",
        "author": "Evan Winter"
      },
      {
        "id": 45,
        "title": "The Library at Mount Char",
        "genre": "Fantasy",
        "description": "A group of adopted siblings trained in impossible powers by a god-like father fight for control after his death.",
        "author": "Scott Hawkins"
      },
      {
        "id": 46,
        "title": "The Ten Thousand Doors of January",
        "genre": "Fantasy",
        "description": "A young woman discovers magical doors leading to other worlds while uncovering family secrets.",
        "author": "Alix E. Harrow"
      },
      {
        "id": 47,
        "title": "The Once and Future Witches",
        "genre": "Fantasy",
        "description": "Three sisters revive forgotten witchcraft in a world that has outlawed magic during the suffrage era.",
        "author": "Alix E. Harrow"
      },
      {
        "id": 48,
        "title": "The Jasmine Throne",
        "genre": "Fantasy",
        "description": "A princess and a powerful priestess form an uneasy alliance to overthrow a tyrannical empire.",
        "author": "Tasha Suri"
      },
      {
        "id": 49,
        "title": "She Who Became the Sun",
        "genre": "Fantasy",
        "description": "A young girl assumes her brother's identity to rise through military ranks in a war-torn empire inspired by Chinese history.",
        "author": "Shelley Parker-Chan"
      },
      {
        "id": 50,
        "title": "The Empire of Gold",
        "genre": "Fantasy",
        "description": "In a world of djinn and magic, political intrigue and rebellion threaten an ancient empire.",
        "author": "S.A. Chakraborty"
      },
      {
        "id": 51,
        "title": "The City of Brass",
        "genre": "Fantasy",
        "description": "A con artist and a prince uncover their connection to a hidden world of djinn and magic in Cairo.",
        "author": "S.A. Chakraborty"
      },
      {
        "id": 52,
        "title": "The Sword of Kaigen",
        "genre": "Fantasy",
        "description": "A powerful warrior mother must defend her family and homeland when war comes to their isolated mountain province.",
        "author": "M.L. Wang"
      },
      {
        "id": 53,
        "title": "The Unspoken Name",
        "genre": "Fantasy",
        "description": "A death priestess escapes her fate and becomes entangled in cosmic intrigue and forbidden magic.",
        "author": "A.K. Larkwood"
      },
      {
        "id": 54,
        "title": "The Black God's Drums",
        "genre": "Fantasy",
        "description": "A young thief in an alternate New Orleans becomes involved in a plot involving airships and voodoo gods.",
        "author": "P. Djèlí Clark"
      },
      {
        "id": 55,
        "title": "Ring Shout",
        "genre": "Fantasy",
        "description": "In 1920s Georgia, three Black women hunters battle supernatural Ku Klux Klan monsters using magic and shotguns.",
        "author": "P. Djèlí Clark"
      },
      {
        "id": 56,
        "title": "The House of the Cerulean Sea",
        "genre": "Fantasy",
        "description": "A bureaucrat discovers love and belonging while overseeing a magical orphanage.",
        "author": "TJ Klune"
      },
      {
        "id": 57,
        "title": "A Psalm for the Wild-Built",
        "genre": "Fantasy",
        "description": "A tea monk and a robot form an unlikely friendship while exploring what it means to be alive in a post-industrial world.",
        "author": "Becky Chambers"
      },
      {
        "id": 58,
        "title": "The Spear Cuts Through Water",
        "genre": "Fantasy",
        "description": "Two warriors escort a god through a dreamlike realm filled with myth, violence, and wonder.",
        "author": "Simon Jimenez"
      },
      {
        "id": 59,
        "title": "The Daughter of the Moon Goddess",
        "genre": "Fantasy",
        "description": "A young woman hides her divine heritage while training to become a warrior in an immortal realm.",
        "author": "Sue Lynn Tan"
      },
      {
        "id": 60,
        "title": "The Kingdom of Copper",
        "genre": "Fantasy",
        "description": "A healer and a prince navigate political unrest and forbidden magic in a city of djinn.",
        "author": "S.A. Chakraborty"
      },
      {
        "id": 61,
        "title": "The Dragon Republic",
        "genre": "Fantasy",
        "description": "A shamanistic warrior seeks revenge and power in a war-torn empire inspired by Chinese history.",
        "author": "R.F. Kuang"
      },
      {
        "id": 62,
        "title": "The Burning God",
        "genre": "Fantasy",
        "description": "A young shaman rises to god-like power as she leads a revolution against an oppressive empire.",
        "author": "R.F. Kuang"
      },
      {
        "id": 63,
        "title": "The Atlas Six",
        "genre": "Fantasy",
        "description": "Six powerful magicians compete for a spot in a secret society that controls knowledge and reality.",
        "author": "Olivie Blake"
      },
      {
        "id": 64,
        "title": "The Atlas Paradox",
        "genre": "Fantasy",
        "description": "The surviving magicians grapple with betrayal, power, and the cost of ultimate knowledge.",
        "author": "Olivie Blake"
      },
      {
        "id": 65,
        "title": "Fourth Wing",
        "genre": "Fantasy",
        "description": "A young woman with a frail body enters a brutal dragon rider academy and forms a dangerous bond.",
        "author": "Rebecca Yarros"
      },
      {
        "id": 66,
        "title": "Iron Flame",
        "genre": "Fantasy",
        "description": "The dragon riders face escalating war and betrayal as secrets about their world come to light.",
        "author": "Rebecca Yarros"
      },
      {
        "id": 67,
        "title": "The Familiar",
        "genre": "Fantasy",
        "description": "A servant girl with hidden magical talent becomes entangled in the dangerous world of Spanish Inquisition-era sorcery.",
        "author": "Leigh Bardugo"
      },
      {
        "id": 68,
        "title": "The Midnight Library",
        "genre": "Fantasy",
        "description": "A woman explores alternate lives in a mystical library between life and death.",
        "author": "Matt Haig"
      },
      {
        "id": 69,
        "title": "The Silent Patient",
        "genre": "Fantasy",
        "description": "A woman shoots her husband and never speaks again; a psychotherapist becomes obsessed with uncovering her motive.",
        "author": "Alex Michaelides"
      },
      {
        "id": 70,
        "title": "Mexican Gothic",
        "genre": "Fantasy",
        "description": "A young woman investigates the dark secrets of her cousin's isolated mansion in 1950s Mexico.",
        "author": "Silvia Moreno-Garcia"
      },
      {
        "id": 71,
        "title": "The Only Good Indians",
        "genre": "Fantasy",
        "description": "Four Native American men are haunted by a supernatural entity tied to a past hunting transgression.",
        "author": "Stephen Graham Jones"
      },
      {
        "id": 72,
        "title": "The Ballad of Black Tom",
        "genre": "Fantasy",
        "description": "A hustler in 1920s Harlem becomes entangled in Lovecraftian horror and cosmic dread.",
        "author": "Victor LaValle"
      },
      {
        "id": 73,
        "title": "The Deep",
        "genre": "Fantasy",
        "description": "Descendants of pregnant African women thrown overboard during the Middle Passage develop an underwater civilization.",
        "author": "Rivers Solomon"
      },
      {
        "id": 74,
        "title": "The Space Between Worlds",
        "genre": "Fantasy",
        "description": "A woman from the poorest parallel Earth becomes a traverser who can visit other worlds—except her own.",
        "author": "Micaiah Johnson"
      },
      {
        "id": 75,
        "title": "The Ministry for the Future",
        "genre": "Fantasy",
        "description": "A UN agency works desperately to combat climate change using radical and unconventional methods.",
        "author": "Kim Stanley Robinson"
      },
      {
        "id": 76,
        "title": "Piranesi",
        "genre": "Fantasy",
        "description": "A solitary inhabitant explores an infinite house of halls and statues while piecing together his mysterious past.",
        "author": "Susanna Clarke"
      },
      {
        "id": 77,
        "title": "The Water Dancer",
        "genre": "Fantasy",
        "description": "A young enslaved man with a mysterious power of conduction fights for freedom in antebellum America.",
        "author": "Ta-Nehisi Coates"
      },
      {
        "id": 78,
        "title": "The Changeling",
        "genre": "Fantasy",
        "description": "A new father in New York City unravels a horrifying supernatural mystery involving his wife and child.",
        "author": "Victor LaValle"
      },
      {
        "id": 79,
        "title": "The Broken Earth Trilogy",
        "genre": "Fantasy",
        "description": "In a world where the earth itself can kill, orogenes with the power to control seismic activity face persecution and destiny.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 80,
        "title": "The Hundred Thousand Kingdoms",
        "genre": "Fantasy",
        "description": "A young woman inherits control over captive gods and must navigate deadly palace politics.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 81,
        "title": "The Goblin Emperor",
        "genre": "Fantasy",
        "description": "An exiled half-goblin prince unexpectedly becomes emperor and must survive court intrigue.",
        "author": "Katherine Addison"
      },
      {
        "id": 82,
        "title": "The Witness for the Dead",
        "genre": "Fantasy",
        "description": "A goblin investigator with the ability to speak with the dead solves mysteries in a complex elven empire.",
        "author": "Katherine Addison"
      },
      {
        "id": 83,
        "title": "The Traitor Baru Cormorant",
        "genre": "Fantasy",
        "description": "A brilliant young woman infiltrates an empire that conquered her homeland to destroy it from within.",
        "author": "Seth Dickinson"
      },
      {
        "id": 84,
        "title": "The Masquerade",
        "genre": "Fantasy",
        "description": "A cunning spymaster and her allies navigate political betrayal in a world of masks and empires.",
        "author": "Seth Dickinson"
      },
      {
        "id": 85,
        "title": "The Winterlong",
        "genre": "Fantasy",
        "description": "In a post-apocalyptic Washington D.C., genetically engineered artists and scholars seek meaning and survival.",
        "author": "Elizabeth Hand"
      },
      {
        "id": 86,
        "title": "The Stars Are Legion",
        "genre": "Fantasy",
        "description": "Two women fight for control of living world-ships in a decaying fleet of organic spaceships.",
        "author": "Kameron Hurley"
      },
      {
        "id": 87,
        "title": "The Light Brigade",
        "genre": "Fantasy",
        "description": "Soldiers are turned into light and sent across time to fight a corporate war on Mars.",
        "author": "Kameron Hurley"
      },
      {
        "id": 88,
        "title": "The Power",
        "genre": "Fantasy",
        "description": "Women suddenly develop the ability to generate electric shocks, upending global power structures.",
        "author": "Naomi Alderman"
      },
      {
        "id": 89,
        "title": "The Testaments",
        "genre": "Fantasy",
        "description": "In the dystopian Republic of Gilead, three women’s stories converge in a tale of resistance.",
        "author": "Margaret Atwood"
      },
      {
        "id": 90,
        "title": "The Handmaid's Tale",
        "genre": "Fantasy",
        "description": "In a theocratic regime that subjugates women, one handmaid risks everything for freedom.",
        "author": "Margaret Atwood"
      },
      {
        "id": 91,
        "title": "The Broken Kingdoms",
        "genre": "Fantasy",
        "description": "A blind artist with the ability to see magic becomes entangled in divine conspiracies.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 92,
        "title": "The Kingdom of Gods",
        "genre": "Fantasy",
        "description": "A fallen god-child seeks redemption and love while ancient powers threaten the world.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 93,
        "title": "The Rage of Dragons",
        "genre": "Fantasy",
        "description": "A young man trains to become a dragon rider in a society obsessed with endless war.",
        "author": "Evan Winter"
      },
      {
        "id": 94,
        "title": "The Fires of Vengeance",
        "genre": "Fantasy",
        "description": "A vengeful warrior continues his quest for justice in a kingdom built on blood and dragons.",
        "author": "Evan Winter"
      },
      {
        "id": 95,
        "title": "The Bloodsworn Saga",
        "genre": "Fantasy",
        "description": "Viking-inspired warriors and outcasts battle gods and fate in a brutal world of blood and glory.",
        "author": "John Gwynne"
      },
      {
        "id": 96,
        "title": "The Shadow of the Gods",
        "genre": "Fantasy",
        "description": "Three unlikely heroes confront gods, monsters, and destiny in a harsh northern world.",
        "author": "John Gwynne"
      },
      {
        "id": 97,
        "title": "The Wisdom of Crowds",
        "genre": "Fantasy",
        "description": "Old alliances fracture and new ones form as war and political chaos engulf the Union.",
        "author": "Joe Abercrombie"
      },
      {
        "id": 98,
        "title": "The Trouble with Peace",
        "genre": "Fantasy",
        "description": "Peace proves more dangerous than war as old enemies and new threats rise in the North.",
        "author": "Joe Abercrombie"
      },
      {
        "id": 99,
        "title": "The Heroes",
        "genre": "Fantasy",
        "description": "A single bloody battle reveals the true cost of war through the eyes of soldiers on all sides.",
        "author": "Joe Abercrombie"
      },
      {
        "id": 100,
        "title": "The First Law Trilogy",
        "genre": "Fantasy",
        "description": "In a grim world of war and betrayal, flawed characters fight for survival and power.",
        "author": "Joe Abercrombie"
      },
      
      {
        "id": 101,
        "title": "To Kill a Mockingbird",
        "genre": "Fiction",
        "description": "A young girl in the American South witnesses racial injustice and moral growth through her father's defense of an innocent man.",
        "author": "Harper Lee"
      },
      {
        "id": 102,
        "title": "1984",
        "genre": "Fiction",
        "description": "In a dystopian future, a man rebels against a totalitarian regime that controls every aspect of life and truth.",
        "author": "George Orwell"
      },
      {
        "id": 103,
        "title": "The Great Gatsby",
        "genre": "Fiction",
        "description": "A mysterious millionaire throws lavish parties in pursuit of his lost love in the glittering Jazz Age.",
        "author": "F. Scott Fitzgerald"
      },
      {
        "id": 104,
        "title": "Pride and Prejudice",
        "genre": "Fiction",
        "description": "A spirited young woman navigates love, class, and misunderstandings in Regency-era England.",
        "author": "Jane Austen"
      },
      {
        "id": 105,
        "title": "The Catcher in the Rye",
        "genre": "Fiction",
        "description": "A disillusioned teenager wanders New York City while grappling with adolescence, loss, and phoniness.",
        "author": "J.D. Salinger"
      },
      {
        "id": 106,
        "title": "One Hundred Years of Solitude",
        "genre": "Fiction",
        "description": "The multi-generational saga of the Buendía family in the mythical town of Macondo.",
        "author": "Gabriel García Márquez"
      },
      {
        "id": 107,
        "title": "Beloved",
        "genre": "Fiction",
        "description": "A former slave is haunted by the ghost of her dead daughter in post-Civil War America.",
        "author": "Toni Morrison"
      },
      {
        "id": 108,
        "title": "Jane Eyre",
        "genre": "Fiction",
        "description": "An orphaned governess finds love and independence at a mysterious estate.",
        "author": "Charlotte Brontë"
      },
      {
        "id": 109,
        "title": "Wuthering Heights",
        "genre": "Fiction",
        "description": "A passionate and destructive love story unfolds on the wild Yorkshire moors.",
        "author": "Emily Brontë"
      },
      {
        "id": 110,
        "title": "Brave New World",
        "genre": "Fiction",
        "description": "In a futuristic society engineered for happiness, one man questions the cost of stability.",
        "author": "Aldous Huxley"
      },
      {
        "id": 111,
        "title": "The Alchemist",
        "genre": "Fiction",
        "description": "A young shepherd follows his dreams across deserts in search of treasure and destiny.",
        "author": "Paulo Coelho"
      },
      {
        "id": 112,
        "title": "The Midnight Library",
        "genre": "Fiction",
        "description": "A woman explores alternate lives in a mystical library between life and death.",
        "author": "Matt Haig"
      },
      {
        "id": 113,
        "title": "Normal People",
        "genre": "Fiction",
        "description": "Two Irish teenagers navigate a complex on-again, off-again relationship through school and university.",
        "author": "Sally Rooney"
      },
      {
        "id": 114,
        "title": "The Secret History",
        "genre": "Fiction",
        "description": "A group of elite college students commit a murder that unravels their privileged world.",
        "author": "Donna Tartt"
      },
      {
        "id": 115,
        "title": "The Kite Runner",
        "genre": "Fiction",
        "description": "A man confronts his past betrayal of a childhood friend in war-torn Afghanistan.",
        "author": "Khaled Hosseini"
      },
      {
        "id": 116,
        "title": "Where the Crawdads Sing",
        "genre": "Fiction",
        "description": "A young woman raised in isolation becomes the prime suspect in a murder case.",
        "author": "Delia Owens"
      },
      {
        "id": 117,
        "title": "The Nightingale",
        "genre": "Fiction",
        "description": "Two sisters in Nazi-occupied France take very different paths to resist the occupation.",
        "author": "Kristin Hannah"
      },
      {
        "id": 118,
        "title": "Lessons in Chemistry",
        "genre": "Fiction",
        "description": "A brilliant female chemist in the 1960s challenges gender norms through her cooking show.",
        "author": "Bonnie Garmus"
      },
      {
        "id": 119,
        "title": "The Women",
        "genre": "Fiction",
        "description": "A young nurse serves in Vietnam and returns home to face a changed America.",
        "author": "Kristin Hannah"
      },
      {
        "id": 120,
        "title": "Remarkably Bright Creatures",
        "genre": "Fiction",
        "description": "An elderly woman forms an unlikely friendship with a giant Pacific octopus.",
        "author": "Shelby Van Pelt"
      },
      {
        "id": 121,
        "title": "The Goldfinch",
        "genre": "Fiction",
        "description": "A boy survives a museum bombing and becomes obsessed with a stolen painting.",
        "author": "Donna Tartt"
      },
      {
        "id": 122,
        "title": "Pachinko",
        "genre": "Fiction",
        "description": "Four generations of a Korean family endure discrimination and survival in Japan.",
        "author": "Min Jin Lee"
      },
      {
        "id": 123,
        "title": "Circe",
        "genre": "Fiction",
        "description": "The witch from Greek mythology forges her own path of power and self-discovery.",
        "author": "Madeline Miller"
      },
      {
        "id": 124,
        "title": "The Song of Achilles",
        "genre": "Fiction",
        "description": "A reimagining of the Trojan War through the eyes of Patroclus and Achilles.",
        "author": "Madeline Miller"
      },
      {
        "id": 125,
        "title": "The Handmaid's Tale",
        "genre": "Fiction",
        "description": "In a theocratic regime, a woman fights for survival and freedom.",
        "author": "Margaret Atwood"
      },
      {
        "id": 126,
        "title": "The Road",
        "genre": "Fiction",
        "description": "A father and son journey through a post-apocalyptic wasteland.",
        "author": "Cormac McCarthy"
      },
      {
        "id": 127,
        "title": "Station Eleven",
        "genre": "Fiction",
        "description": "Survivors of a pandemic build a new world while preserving art and culture.",
        "author": "Emily St. John Mandel"
      },
      {
        "id": 128,
        "title": "Americanah",
        "genre": "Fiction",
        "description": "A young Nigerian woman navigates race, identity, and love across continents.",
        "author": "Chimamanda Ngozi Adichie"
      },
      {
        "id": 129,
        "title": "The House in the Cerulean Sea",
        "genre": "Fiction",
        "description": "A caseworker discovers love and belonging at a magical orphanage.",
        "author": "TJ Klune"
      },
      {
        "id": 130,
        "title": "The Seven Husbands of Evelyn Hugo",
        "genre": "Fiction",
        "description": "A reclusive Hollywood icon reveals her glamorous and scandalous life story.",
        "author": "Taylor Jenkins Reid"
      },
      {
        "id": 131,
        "title": "Daisy Jones & The Six",
        "genre": "Fiction",
        "description": "The rise and fall of a legendary 1970s rock band told through oral history.",
        "author": "Taylor Jenkins Reid"
      },
      {
        "id": 132,
        "title": "Educated",
        "genre": "Fiction",
        "description": "A young woman escapes a strict survivalist family to pursue education.",
        "author": "Tara Westover"
      },
      {
        "id": 133,
        "title": "The Silent Patient",
        "genre": "Fiction",
        "description": "A woman shoots her husband and never speaks again; a therapist becomes obsessed with her story.",
        "author": "Alex Michaelides"
      },
      {
        "id": 134,
        "title": "Mexican Gothic",
        "genre": "Fiction",
        "description": "A young woman uncovers dark family secrets in a mysterious Mexican mansion.",
        "author": "Silvia Moreno-Garcia"
      },
      {
        "id": 135,
        "title": "The Invisible Life of Addie LaRue",
        "genre": "Fiction",
        "description": "A woman gains immortality but is forgotten by everyone she meets.",
        "author": "V.E. Schwab"
      },
      {
        "id": 136,
        "title": "The Night Circus",
        "genre": "Fiction",
        "description": "Two illusionists compete in a magical circus that appears only at night.",
        "author": "Erin Morgenstern"
      },
      {
        "id": 137,
        "title": "Never Let Me Go",
        "genre": "Fiction",
        "description": "Friends at a mysterious boarding school discover the dark truth of their existence.",
        "author": "Kazuo Ishiguro"
      },
      {
        "id": 138,
        "title": "Remains of the Day",
        "genre": "Fiction",
        "description": "An English butler reflects on duty, love, and missed opportunities.",
        "author": "Kazuo Ishiguro"
      },
      {
        "id": 139,
        "title": "Life of Pi",
        "genre": "Fiction",
        "description": "A young boy survives a shipwreck with a Bengal tiger on a lifeboat.",
        "author": "Yann Martel"
      },
      {
        "id": 140,
        "title": "The Book Thief",
        "genre": "Fiction",
        "description": "A young girl steals books and finds solace in Nazi Germany.",
        "author": "Markus Zusak"
      },
      {
        "id": 141,
        "title": "All the Light We Cannot See",
        "genre": "Fiction",
        "description": "A blind French girl and a German boy’s paths converge during World War II.",
        "author": "Anthony Doerr"
      },
      {
        "id": 142,
        "title": "Cloud Atlas",
        "genre": "Fiction",
        "description": "Six interconnected stories span centuries and genres.",
        "author": "David Mitchell"
      },
      {
        "id": 143,
        "title": "The Poisonwood Bible",
        "genre": "Fiction",
        "description": "An American missionary family faces tragedy and transformation in the Congo.",
        "author": "Barbara Kingsolver"
      },
      {
        "id": 144,
        "title": "The Underground Railroad",
        "genre": "Fiction",
        "description": "A young slave escapes via a literal underground railroad in an alternate history.",
        "author": "Colson Whitehead"
      },
      {
        "id": 145,
        "title": "Homegoing",
        "genre": "Fiction",
        "description": "Two half-sisters’ descendants trace the legacy of slavery across generations.",
        "author": "Yaa Gyasi"
      },
      {
        "id": 146,
        "title": "The Vanishing Half",
        "genre": "Fiction",
        "description": "Twin sisters choose different racial identities and lead divergent lives.",
        "author": "Brit Bennett"
      },
      {
        "id": 147,
        "title": "Such a Fun Age",
        "genre": "Fiction",
        "description": "A young Black babysitter becomes entangled in a white family's racial dynamics.",
        "author": "Kiley Reid"
      },
      {
        "id": 148,
        "title": "The Overstory",
        "genre": "Fiction",
        "description": "Nine strangers find their lives intertwined with the fate of ancient trees.",
        "author": "Richard Powers"
      },
      {
        "id": 149,
        "title": "An American Marriage",
        "genre": "Fiction",
        "description": "A newlywed couple’s life is upended when the husband is wrongly imprisoned.",
        "author": "Tayari Jones"
      },
      {
        "id": 150,
        "title": "Little Fires Everywhere",
        "genre": "Fiction",
        "description": "Two families collide in a seemingly perfect suburban town.",
        "author": "Celeste Ng"
      },
      {
        "id": 151,
        "title": "Everything I Never Told You",
        "genre": "Fiction",
        "description": "A mixed-race family unravels after the mysterious death of their daughter.",
        "author": "Celeste Ng"
      },
      {
        "id": 152,
        "title": "The Joy Luck Club",
        "genre": "Fiction",
        "description": "Chinese immigrant mothers and their American-born daughters share stories across generations.",
        "author": "Amy Tan"
      },
      {
        "id": 153,
        "title": "The Namesake",
        "genre": "Fiction",
        "description": "An Indian-American man struggles with his identity and family expectations.",
        "author": "Jhumpa Lahiri"
      },
      {
        "id": 154,
        "title": "Interpreter of Maladies",
        "genre": "Fiction",
        "description": "Short stories exploring the lives of Indian immigrants and cultural displacement.",
        "author": "Jhumpa Lahiri"
      },
      {
        "id": 155,
        "title": "The Brief Wondrous Life of Oscar Wao",
        "genre": "Fiction",
        "description": "A Dominican-American nerd battles family curses and his own obsessions.",
        "author": "Junot Díaz"
      },
      {
        "id": 156,
        "title": "A Little Life",
        "genre": "Fiction",
        "description": "Four friends in New York navigate trauma, success, and deep friendship.",
        "author": "Hanya Yanagihara"
      },
      {
        "id": 157,
        "title": "The Sympathizer",
        "genre": "Fiction",
        "description": "A half-French, half-Vietnamese spy reflects on the Vietnam War from both sides.",
        "author": "Viet Thanh Nguyen"
      },
      {
        "id": 158,
        "title": "Pachinko",
        "genre": "Fiction",
        "description": "A Korean family’s multi-generational struggle for survival in Japan.",
        "author": "Min Jin Lee"
      },
      {
        "id": 159,
        "title": "The Lincoln Highway",
        "genre": "Fiction",
        "description": "Four boys embark on a cross-country road trip in 1950s America.",
        "author": "Amor Towles"
      },
      {
        "id": 160,
        "title": "A Gentleman in Moscow",
        "genre": "Fiction",
        "description": "An aristocrat under house arrest in a Moscow hotel observes decades of Soviet history.",
        "author": "Amor Towles"
      },
      {
        "id": 161,
        "title": "Rules of Civility",
        "genre": "Fiction",
        "description": "A young woman navigates 1930s New York society and personal ambition.",
        "author": "Amor Towles"
      },
      {
        "id": 162,
        "title": "The Dutch House",
        "genre": "Fiction",
        "description": "A brother and sister grapple with family secrets and a lost childhood home.",
        "author": "Ann Patchett"
      },
      {
        "id": 163,
        "title": "Commonwealth",
        "genre": "Fiction",
        "description": "Two families are forever changed by a single impulsive act at a christening.",
        "author": "Ann Patchett"
      },
      {
        "id": 164,
        "title": "The Corrections",
        "genre": "Fiction",
        "description": "A dysfunctional Midwestern family confronts their failures and desires.",
        "author": "Jonathan Franzen"
      },
      {
        "id": 165,
        "title": "Freedom",
        "genre": "Fiction",
        "description": "A couple’s marriage and ideals are tested over decades of American life.",
        "author": "Jonathan Franzen"
      },
      {
        "id": 166,
        "title": "The Amazing Adventures of Kavalier & Clay",
        "genre": "Fiction",
        "description": "Two cousins create comic book heroes during the Golden Age of comics.",
        "author": "Michael Chabon"
      },
      {
        "id": 167,
        "title": "The Yiddish Policemen's Union",
        "genre": "Fiction",
        "description": "A detective investigates a murder in an alternate-history Jewish homeland in Alaska.",
        "author": "Michael Chabon"
      },
      {
        "id": 168,
        "title": "The Hours",
        "genre": "Fiction",
        "description": "Three women in different eras are connected by Virginia Woolf’s novel Mrs. Dalloway.",
        "author": "Michael Cunningham"
      },
      {
        "id": 169,
        "title": "Manhattan Beach",
        "genre": "Fiction",
        "description": "A young woman works at a naval shipyard during World War II while searching for her father.",
        "author": "Jennifer Egan"
      },
      {
        "id": 170,
        "title": "A Visit from the Goon Squad",
        "genre": "Fiction",
        "description": "Interconnected stories explore time, technology, and music in modern life.",
        "author": "Jennifer Egan"
      },
      {
        "id": 171,
        "title": "The Orphan Master's Son",
        "genre": "Fiction",
        "description": "A young man navigates survival and propaganda in North Korea.",
        "author": "Adam Johnson"
      },
      {
        "id": 172,
        "title": "The Sellout",
        "genre": "Fiction",
        "description": "A satirical tale of a man who tries to reinstate segregation in his California town.",
        "author": "Paul Beatty"
      },
      {
        "id": 173,
        "title": "Less",
        "genre": "Fiction",
        "description": "A failing writer embarks on a worldwide trip to avoid his ex-boyfriend’s wedding.",
        "author": "Andrew Sean Greer"
      },
      {
        "id": 174,
        "title": "The Nickel Boys",
        "genre": "Fiction",
        "description": "Two boys endure horrific abuse at a reform school in Jim Crow-era Florida.",
        "author": "Colson Whitehead"
      },
      {
        "id": 175,
        "title": "The Water Dancer",
        "genre": "Fiction",
        "description": "An enslaved young man with a mysterious power fights for freedom.",
        "author": "Ta-Nehisi Coates"
      },
      {
        "id": 176,
        "title": "The Testaments",
        "genre": "Fiction",
        "description": "Resistance stories unfold in the dystopian Republic of Gilead.",
        "author": "Margaret Atwood"
      },
      {
        "id": 177,
        "title": "The Ministry for the Future",
        "genre": "Fiction",
        "description": "A UN agency battles climate change with radical solutions.",
        "author": "Kim Stanley Robinson"
      },
      {
        "id": 178,
        "title": "The Space Between Worlds",
        "genre": "Fiction",
        "description": "A traverser visits parallel Earths but cannot return to her own dangerous one.",
        "author": "Micaiah Johnson"
      },
      {
        "id": 179,
        "title": "The Deep",
        "genre": "Fiction",
        "description": "Descendants of enslaved Africans build an underwater civilization.",
        "author": "Rivers Solomon"
      },
      {
        "id": 180,
        "title": "The Ballad of Black Tom",
        "genre": "Fiction",
        "description": "A hustler in 1920s Harlem confronts Lovecraftian horror.",
        "author": "Victor LaValle"
      },
      {
        "id": 181,
        "title": "The Only Good Indians",
        "genre": "Fiction",
        "description": "Four Native American men are haunted by a supernatural entity.",
        "author": "Stephen Graham Jones"
      },
      {
        "id": 182,
        "title": "Mexican Gothic",
        "genre": "Fiction",
        "description": "A woman investigates horrors in her cousin’s isolated mansion.",
        "author": "Silvia Moreno-Garcia"
      },
      {
        "id": 183,
        "title": "The Changeling",
        "genre": "Fiction",
        "description": "A new father unravels a supernatural mystery in New York City.",
        "author": "Victor LaValle"
      },
      {
        "id": 184,
        "title": "The Ten Thousand Doors of January",
        "genre": "Fiction",
        "description": "A young woman discovers magical doors to other worlds.",
        "author": "Alix E. Harrow"
      },
      {
        "id": 185,
        "title": "The Once and Future Witches",
        "genre": "Fiction",
        "description": "Three sisters revive witchcraft in a world that has banned it.",
        "author": "Alix E. Harrow"
      },
      {
        "id": 186,
        "title": "The Jasmine Throne",
        "genre": "Fiction",
        "description": "A princess and a priestess ally to overthrow a tyrannical empire.",
        "author": "Tasha Suri"
      },
      {
        "id": 187,
        "title": "She Who Became the Sun",
        "genre": "Fiction",
        "description": "A girl assumes her brother’s identity to rise in a war-torn empire.",
        "author": "Shelley Parker-Chan"
      },
      {
        "id": 188,
        "title": "The City of Brass",
        "genre": "Fiction",
        "description": "A con artist and a prince uncover djinn magic in Cairo.",
        "author": "S.A. Chakraborty"
      },
      {
        "id": 189,
        "title": "The Poppy War",
        "genre": "Fiction",
        "description": "A young woman unleashes shamanic powers in a brutal war.",
        "author": "R.F. Kuang"
      },
      {
        "id": 190,
        "title": "The Fifth Season",
        "genre": "Fiction",
        "description": "In a world of catastrophic seasons, a mother with earth powers searches for her daughter.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 191,
        "title": "The Hundred Thousand Kingdoms",
        "genre": "Fiction",
        "description": "A young woman inherits control over captive gods.",
        "author": "N.K. Jemisin"
      },
      {
        "id": 192,
        "title": "The Goblin Emperor",
        "genre": "Fiction",
        "description": "An exiled half-goblin unexpectedly becomes emperor.",
        "author": "Katherine Addison"
      },
      {
        "id": 193,
        "title": "The Traitor Baru Cormorant",
        "genre": "Fiction",
        "description": "A woman infiltrates an empire to destroy it from within.",
        "author": "Seth Dickinson"
      },
      {
        "id": 194,
        "title": "The Power",
        "genre": "Fiction",
        "description": "Women develop the ability to generate electric shocks, upending society.",
        "author": "Naomi Alderman"
      },
      {
        "id": 195,
        "title": "The Atlas Six",
        "genre": "Fiction",
        "description": "Six magicians compete for a spot in a secret society of knowledge.",
        "author": "Olivie Blake"
      },
      {
        "id": 196,
        "title": "Fourth Wing",
        "genre": "Fiction",
        "description": "A young woman with a frail body enters a brutal dragon rider academy.",
        "author": "Rebecca Yarros"
      },
      {
        "id": 197,
        "title": "The Familiar",
        "genre": "Fiction",
        "description": "A servant girl with hidden magic talent navigates danger in Inquisition Spain.",
        "author": "Leigh Bardugo"
      },
      {
        "id": 198,
        "title": "Yellowface",
        "genre": "Fiction",
        "description": "A struggling writer steals a deceased Asian author’s manuscript.",
        "author": "R.F. Kuang"
      },
      {
        "id": 199,
        "title": "Tomorrow, and Tomorrow, and Tomorrow",
        "genre": "Fiction",
        "description": "Two childhood friends build a video game empire and confront their complicated bond.",
        "author": "Gabrielle Zevin"
      },
      {
        "id": 200,
        "title": "Demon Copperhead",
        "genre": "Fiction",
        "description": "A modern retelling of David Copperfield set in rural Appalachia.",
        "author": "Barbara Kingsolver"
      },

      {
        "id": 301,
        "title": "And Then There Were None",
        "genre": "Mystery",
        "description": "Ten strangers are invited to a remote island and systematically murdered one by one as they confront their past sins.",
        "author": "Agatha Christie"
      },
      {
        "id": 302,
        "title": "The Girl with the Dragon Tattoo",
        "genre": "Mystery",
        "description": "A disgraced journalist and a brilliant hacker investigate a decades-old disappearance in a powerful family.",
        "author": "Stieg Larsson"
      },
      {
        "id": 303,
        "title": "Gone Girl",
        "genre": "Mystery",
        "description": "A man becomes the prime suspect when his wife disappears on their fifth wedding anniversary.",
        "author": "Gillian Flynn"
      },
      {
        "id": 304,
        "title": "The Da Vinci Code",
        "genre": "Mystery",
        "description": "A symbologist and a cryptographer race to uncover a centuries-old secret hidden by the Catholic Church.",
        "author": "Dan Brown"
      },
      {
        "id": 305,
        "title": "The Silent Patient",
        "genre": "Mystery",
        "description": "A woman shoots her husband and refuses to speak; a psychotherapist becomes obsessed with uncovering her motive.",
        "author": "Alex Michaelides"
      },
      {
        "id": 306,
        "title": "Murder on the Orient Express",
        "genre": "Mystery",
        "description": "Hercule Poirot investigates the murder of a wealthy passenger aboard a luxurious train trapped in snow.",
        "author": "Agatha Christie"
      },
      {
        "id": 307,
        "title": "The Hound of the Baskervilles",
        "genre": "Mystery",
        "description": "Sherlock Holmes and Dr. Watson investigate a family curse and a spectral hound on the moors.",
        "author": "Arthur Conan Doyle"
      },
      {
        "id": 308,
        "title": "Rebecca",
        "genre": "Mystery",
        "description": "A young woman marries a wealthy widower and becomes haunted by the memory of his first wife.",
        "author": "Daphne du Maurier"
      },
      {
        "id": 309,
        "title": "The Talented Mr. Ripley",
        "genre": "Mystery",
        "description": "A charming young man assumes a new identity and spirals into deception, fraud, and murder.",
        "author": "Patricia Highsmith"
      },
      {
        "id": 310,
        "title": "The Big Sleep",
        "genre": "Mystery",
        "description": "Private detective Philip Marlowe navigates blackmail, murder, and corruption in 1930s Los Angeles.",
        "author": "Raymond Chandler"
      },
      {
        "id": 311,
        "title": "The Woman in White",
        "genre": "Mystery",
        "description": "A drawing teacher becomes entangled in a conspiracy involving switched identities and imprisonment.",
        "author": "Wilkie Collins"
      },
      {
        "id": 312,
        "title": "Shutter Island",
        "genre": "Mystery",
        "description": "Two U.S. Marshals investigate the disappearance of a patient at a remote asylum for the criminally insane.",
        "author": "Dennis Lehane"
      },
      {
        "id": 313,
        "title": "The Name of the Rose",
        "genre": "Mystery",
        "description": "A Franciscan friar and his novice investigate a series of murders in a medieval monastery.",
        "author": "Umberto Eco"
      },
      {
        "id": 314,
        "title": "The No. 1 Ladies' Detective Agency",
        "genre": "Mystery",
        "description": "A Botswanan woman opens her country's first female detective agency and solves everyday mysteries.",
        "author": "Alexander McCall Smith"
      },
      {
        "id": 315,
        "title": "In the Woods",
        "genre": "Mystery",
        "description": "A detective returns to his childhood town to investigate a murder that echoes his own traumatic past.",
        "author": "Tana French"
      },
      {
        "id": 316,
        "title": "The Girl on the Train",
        "genre": "Mystery",
        "description": "A woman obsessed with a couple she sees from her train becomes entangled in their disappearance.",
        "author": "Paula Hawkins"
      },
      {
        "id": 317,
        "title": "The Murder of Roger Ackroyd",
        "genre": "Mystery",
        "description": "Hercule Poirot investigates the murder of a wealthy man in a seemingly peaceful village.",
        "author": "Agatha Christie"
      },
      {
        "id": 318,
        "title": "The Long Goodbye",
        "genre": "Mystery",
        "description": "Philip Marlowe searches for a missing friend and uncovers layers of betrayal and corruption.",
        "author": "Raymond Chandler"
      },
      {
        "id": 319,
        "title": "The Secret History",
        "genre": "Mystery",
        "description": "A group of elite college students commit a murder that unravels their privileged world.",
        "author": "Donna Tartt"
      },
      {
        "id": 320,
        "title": "The Thirteenth Tale",
        "genre": "Mystery",
        "description": "A biographer uncovers the dark secrets of a reclusive author's mysterious past.",
        "author": "Diane Setterfield"
      },
      {
        "id": 321,
        "title": "The Maltese Falcon",
        "genre": "Mystery",
        "description": "Private detective Sam Spade becomes involved in a deadly quest for a priceless statuette.",
        "author": "Dashiell Hammett"
      },
      {
        "id": 322,
        "title": "The Daughter of Time",
        "genre": "Mystery",
        "description": "A hospitalized detective re-examines the historical case of King Richard III and the Princes in the Tower.",
        "author": "Josephine Tey"
      },
      {
        "id": 323,
        "title": "The Moonstone",
        "genre": "Mystery",
        "description": "A valuable diamond is stolen during a house party, leading to a complex investigation.",
        "author": "Wilkie Collins"
      },
      {
        "id": 324,
        "title": "The Cuckoo's Calling",
        "genre": "Mystery",
        "description": "Private detective Cormoran Strike investigates the apparent suicide of a famous supermodel.",
        "author": "Robert Galbraith"
      },
      {
        "id": 325,
        "title": "The Dry",
        "genre": "Mystery",
        "description": "A federal agent returns to his drought-stricken hometown to investigate a triple murder.",
        "author": "Jane Harper"
      },
      {
        "id": 326,
        "title": "The Guest List",
        "genre": "Mystery",
        "description": "Tensions rise and old secrets surface at a glamorous wedding on a remote Irish island.",
        "author": "Lucy Foley"
      },
      {
        "id": 327,
        "title": "The 7½ Deaths of Evelyn Hardcastle",
        "genre": "Mystery",
        "description": "A man wakes up in different bodies each day, trapped in a time loop to solve a murder.",
        "author": "Stuart Turton"
      },
      {
        "id": 328,
        "title": "The Woman in the Window",
        "genre": "Mystery",
        "description": "An agoraphobic woman believes she witnessed a murder in her neighbor's house.",
        "author": "A.J. Finn"
      },
      {
        "id": 329,
        "title": "Before I Go to Sleep",
        "genre": "Mystery",
        "description": "A woman with amnesia wakes each day without memories and discovers disturbing truths.",
        "author": "S.J. Watson"
      },
      {
        "id": 330,
        "title": "The Snowman",
        "genre": "Mystery",
        "description": "Detective Harry Hole hunts a serial killer who leaves a snowman at each crime scene.",
        "author": "Jo Nesbø"
      },
      {
        "id": 331,
        "title": "The Reversal",
        "genre": "Mystery",
        "description": "A defense attorney and a prosecutor team up to re-examine a decades-old murder conviction.",
        "author": "Michael Connelly"
      },
      {
        "id": 332,
        "title": "The Lincoln Lawyer",
        "genre": "Mystery",
        "description": "A defense attorney who works from his Lincoln Town Car takes on a high-profile case.",
        "author": "Michael Connelly"
      },
      {
        "id": 333,
        "title": "The Postman Always Rings Twice",
        "genre": "Mystery",
        "description": "A drifter and a married woman plot to murder her husband in this classic noir tale.",
        "author": "James M. Cain"
      },
      {
        "id": 334,
        "title": "The Thin Man",
        "genre": "Mystery",
        "description": "A retired detective and his witty wife investigate a disappearance and murder.",
        "author": "Dashiell Hammett"
      },
      {
        "id": 335,
        "title": "The Brutal Telling",
        "genre": "Mystery",
        "description": "Chief Inspector Gamache investigates a murder in the seemingly peaceful village of Three Pines.",
        "author": "Louise Penny"
      },
      {
        "id": 336,
        "title": "Still Life",
        "genre": "Mystery",
        "description": "Inspector Gamache uncovers secrets in a small Quebec village after an elderly woman's death.",
        "author": "Louise Penny"
      },
      {
        "id": 337,
        "title": "The Likeness",
        "genre": "Mystery",
        "description": "A detective assumes the identity of a murder victim who looks exactly like her.",
        "author": "Tana French"
      },
      {
        "id": 338,
        "title": "The Black Echo",
        "genre": "Mystery",
        "description": "Detective Harry Bosch investigates a murder linked to his past in the Vietnam War.",
        "author": "Michael Connelly"
      },
      {
        "id": 339,
        "title": "The Devil in the White City",
        "genre": "Mystery",
        "description": "A serial killer operates amid the grandeur of the 1893 Chicago World's Fair.",
        "author": "Erik Larson"
      },
      {
        "id": 340,
        "title": "The Alienist",
        "genre": "Mystery",
        "description": "A psychologist and a reporter hunt a serial killer terrorizing 1890s New York.",
        "author": "Caleb Carr"
      },
      {
        "id": 341,
        "title": "The Beekeeper's Apprentice",
        "genre": "Mystery",
        "description": "A young woman becomes Sherlock Holmes's apprentice in this clever continuation.",
        "author": "Laurie R. King"
      },
      {
        "id": 342,
        "title": "A Study in Scarlet",
        "genre": "Mystery",
        "description": "Sherlock Holmes and Dr. Watson investigate a bizarre murder with links to America.",
        "author": "Arthur Conan Doyle"
      },
      {
        "id": 343,
        "title": "The Mysterious Affair at Styles",
        "genre": "Mystery",
        "description": "Hercule Poirot solves his first case involving a poisoning at a country estate.",
        "author": "Agatha Christie"
      },
      {
        "id": 344,
        "title": "The Westing Game",
        "genre": "Mystery",
        "description": "Sixteen heirs compete in an eccentric millionaire's game to solve his murder.",
        "author": "Ellen Raskin"
      },
      {
        "id": 345,
        "title": "The 39 Steps",
        "genre": "Mystery",
        "description": "A man on the run must uncover a spy conspiracy before it's too late.",
        "author": "John Buchan"
      },
      {
        "id": 346,
        "title": "The Big Sleep",
        "genre": "Mystery",
        "description": "Philip Marlowe navigates a web of blackmail and murder among the wealthy.",
        "author": "Raymond Chandler"
      },
      {
        "id": 347,
        "title": "The Spy Who Came in from the Cold",
        "genre": "Mystery",
        "description": "A British spy undertakes one final dangerous mission during the Cold War.",
        "author": "John le Carré"
      },
      {
        "id": 348,
        "title": "Gaudy Night",
        "genre": "Mystery",
        "description": "Harriet Vane returns to Oxford and investigates a series of malicious incidents.",
        "author": "Dorothy L. Sayers"
      },
      {
        "id": 349,
        "title": "The Quiet American",
        "genre": "Mystery",
        "description": "A British journalist in Vietnam becomes entangled in politics and murder.",
        "author": "Graham Greene"
      },
      {
        "id": 350,
        "title": "Beast in View",
        "genre": "Mystery",
        "description": "A woman receives threatening calls from someone who knows her darkest secrets.",
        "author": "Margaret Millar"
      },
      {
        "id": 351,
        "title": "Faceless Killers",
        "genre": "Mystery",
        "description": "Inspector Wallander investigates the brutal murder of an elderly couple.",
        "author": "Henning Mankell"
      },
      {
        "id": 352,
        "title": "The Power Broker",
        "genre": "Biography",
        "description": "The definitive biography of Robert Moses, the man who shaped modern New York.",
        "author": "Robert A. Caro"
      },
      {
        "id": 353,
        "title": "Steve Jobs",
        "genre": "Biography",
        "description": "The authorized biography of Apple's visionary co-founder.",
        "author": "Walter Isaacson"
      },
      {
        "id": 354,
        "title": "Unbroken",
        "genre": "Biography",
        "description": "The extraordinary survival story of Louis Zamperini during World War II.",
        "author": "Laura Hillenbrand"
      },
      {
        "id": 355,
        "title": "Einstein: His Life and Universe",
        "genre": "Biography",
        "description": "A comprehensive portrait of the genius scientist and his revolutionary ideas.",
        "author": "Walter Isaacson"
      },
      {
        "id": 356,
        "title": "Into the Wild",
        "genre": "Biography",
        "description": "The true story of Christopher McCandless who abandoned society for the Alaskan wilderness.",
        "author": "Jon Krakauer"
      },
      {
        "id": 357,
        "title": "The Autobiography of Malcolm X",
        "genre": "Biography",
        "description": "The powerful life story of the civil rights leader as told to Alex Haley.",
        "author": "Malcolm X, Alex Haley"
      },
      {
        "id": 358,
        "title": "Alexander Hamilton",
        "genre": "Biography",
        "description": "The definitive biography that inspired the hit Broadway musical.",
        "author": "Ron Chernow"
      },
      {
        "id": 359,
        "title": "Educated",
        "genre": "Biography",
        "description": "A young woman's journey from a survivalist family to earning a PhD.",
        "author": "Tara Westover"
      },
      {
        "id": 360,
        "title": "Born a Crime",
        "genre": "Biography",
        "description": "Trevor Noah's hilarious and moving memoir of growing up in apartheid South Africa.",
        "author": "Trevor Noah"
      },
      {
        "id": 361,
        "title": "The Diary of a Young Girl",
        "genre": "Biography",
        "description": "Anne Frank's poignant diary written while hiding from the Nazis.",
        "author": "Anne Frank"
      },
      {
        "id": 362,
        "title": "Team of Rivals",
        "genre": "Biography",
        "description": "Abraham Lincoln's political genius in bringing rivals into his cabinet.",
        "author": "Doris Kearns Goodwin"
      },
      {
        "id": 363,
        "title": "The Story of My Experiments with Truth",
        "genre": "Biography",
        "description": "Mahatma Gandhi's autobiography detailing his philosophy of non-violence.",
        "author": "Mahatma Gandhi"
      },
      {
        "id": 364,
        "title": "Shoe Dog",
        "genre": "Biography",
        "description": "Phil Knight's candid memoir of founding Nike.",
        "author": "Phil Knight"
      },
      {
        "id": 365,
        "title": "Open",
        "genre": "Biography",
        "description": "Andre Agassi's brutally honest memoir of his tennis career and personal struggles.",
        "author": "Andre Agassi"
      },
      {
        "id": 366,
        "title": "The Immortal Life of Henrietta Lacks",
        "genre": "Biography",
        "description": "The story of the woman whose cells revolutionized medicine without her knowledge.",
        "author": "Rebecca Skloot"
      },
      {
        "id": 367,
        "title": "Becoming",
        "genre": "Biography",
        "description": "Michelle Obama's inspiring memoir of her life and time in the White House.",
        "author": "Michelle Obama"
      },
      {
        "id": 368,
        "title": "Long Walk to Freedom",
        "genre": "Biography",
        "description": "Nelson Mandela's autobiography of his fight against apartheid.",
        "author": "Nelson Mandela"
      },
      {
        "id": 369,
        "title": "Churchill",
        "genre": "Biography",
        "description": "A masterful single-volume biography of Winston Churchill.",
        "author": "Andrew Roberts"
      },
      {
        "id": 370,
        "title": "The Wright Brothers",
        "genre": "Biography",
        "description": "The story of the two brothers who invented the airplane.",
        "author": "David McCullough"
      },
      {
        "id": 371,
        "title": "John Adams",
        "genre": "Biography",
        "description": "A vivid portrait of America's second president.",
        "author": "David McCullough"
      },
      {
        "id": 372,
        "title": "Grant",
        "genre": "Biography",
        "description": "A sweeping biography of Ulysses S. Grant, Civil War hero and president.",
        "author": "Ron Chernow"
      },
      {
        "id": 373,
        "title": "The Power Broker",
        "genre": "Biography",
        "description": "Robert Moses and his influence on New York City's infrastructure.",
        "author": "Robert A. Caro"
      },
      {
        "id": 374,
        "title": "King: A Life",
        "genre": "Biography",
        "description": "A definitive modern biography of Martin Luther King Jr.",
        "author": "Jonathan Eig"
      },
      {
        "id": 375,
        "title": "Empire of Pain",
        "genre": "Biography",
        "description": "The Sackler family's role in the opioid crisis.",
        "author": "Patrick Radden Keefe"
      },
      {
        "id": 376,
        "title": "Hidden Figures",
        "genre": "Biography",
        "description": "The untold story of the Black women mathematicians at NASA.",
        "author": "Margot Lee Shetterly"
      },
      {
        "id": 377,
        "title": "The Theory of Everything",
        "genre": "Biography",
        "description": "Stephen Hawking's life and relationship with Jane Hawking.",
        "author": "Jane Hawking"
      },
      {
        "id": 378,
        "title": "Bohemian Rhapsody",
        "genre": "Biography",
        "description": "The life and career of Freddie Mercury and Queen.",
        "author": "Lesley-Ann Jones"
      },
      {
        "id": 379,
        "title": "The Imitation Game",
        "genre": "Biography",
        "description": "Alan Turing's groundbreaking work and tragic life.",
        "author": "Andrew Hodges"
      },
      {
        "id": 380,
        "title": "A Beautiful Mind",
        "genre": "Biography",
        "description": "The life of mathematician John Nash and his battle with schizophrenia.",
        "author": "Sylvia Nasar"
      },
      {
        "id": 381,
        "title": "The Last Lion",
        "genre": "Biography",
        "description": "Winston Churchill's early life and rise to power.",
        "author": "William Manchester"
      },
      {
        "id": 382,
        "title": "Alexander Hamilton",
        "genre": "Biography",
        "description": "The founding father's extraordinary life and legacy.",
        "author": "Ron Chernow"
      },
      {
        "id": 383,
        "title": "The Black Count",
        "genre": "Biography",
        "description": "The real-life inspiration for The Count of Monte Cristo.",
        "author": "Tom Reiss"
      },
      {
        "id": 384,
        "title": "Totto-Chan",
        "genre": "Biography",
        "description": "The memoir of a free-spirited girl's unconventional education in Japan.",
        "author": "Tetsuko Kuroyanagi"
      },
      {
        "id": 385,
        "title": "Surrender",
        "genre": "Biography",
        "description": "Bono's candid memoir of music, activism, and faith.",
        "author": "Bono"
      },
      {
        "id": 386,
        "title": "Stay True",
        "genre": "Biography",
        "description": "A memoir of friendship, loss, and coming of age.",
        "author": "Hua Hsu"
      },
      {
        "id": 387,
        "title": "The Double Helix",
        "genre": "Biography",
        "description": "James Watson's account of discovering the structure of DNA.",
        "author": "James D. Watson"
      },
      {
        "id": 388,
        "title": "Parallel Lives",
        "genre": "Biography",
        "description": "Plutarch's classic biographies of famous Greeks and Romans.",
        "author": "Plutarch"
      },
      {
        "id": 389,
        "title": "The Life of Samuel Johnson",
        "genre": "Biography",
        "description": "The influential biography of the great English writer and critic.",
        "author": "James Boswell"
      },
      {
        "id": 390,
        "title": "Napoleon: A Life",
        "genre": "Biography",
        "description": "A comprehensive modern biography of the French emperor.",
        "author": "Andrew Roberts"
      },
      {
        "id": 391,
        "title": "Pride and Prejudice",
        "genre": "Romance",
        "description": "Elizabeth Bennet navigates love, class, and misunderstandings with the proud Mr. Darcy.",
        "author": "Jane Austen"
      },
      {
        "id": 392,
        "title": "Outlander",
        "genre": "Romance",
        "description": "A WWII nurse is transported to 18th-century Scotland and falls for a Highland warrior.",
        "author": "Diana Gabaldon"
      },
      {
        "id": 393,
        "title": "Jane Eyre",
        "genre": "Romance",
        "description": "A governess finds love and independence at a mysterious estate.",
        "author": "Charlotte Brontë"
      },
      {
        "id": 394,
        "title": "Gone with the Wind",
        "genre": "Romance",
        "description": "Scarlett O'Hara's passionate survival during the American Civil War.",
        "author": "Margaret Mitchell"
      },
      {
        "id": 395,
        "title": "The Notebook",
        "genre": "Romance",
        "description": "An elderly man reads a love story to his wife with Alzheimer's.",
        "author": "Nicholas Sparks"
      },
      {
        "id": 396,
        "title": "Normal People",
        "genre": "Romance",
        "description": "Two Irish teenagers navigate a complex relationship through school and university.",
        "author": "Sally Rooney"
      },
      {
        "id": 397,
        "title": "Call Me by Your Name",
        "genre": "Romance",
        "description": "A summer romance between a teenager and his father's research assistant in Italy.",
        "author": "André Aciman"
      },
      {
        "id": 398,
        "title": "The Time Traveler's Wife",
        "genre": "Romance",
        "description": "A love story complicated by a man's uncontrollable time-traveling condition.",
        "author": "Audrey Niffenegger"
      },
      {
        "id": 399,
        "title": "Me Before You",
        "genre": "Romance",
        "description": "A young woman becomes caregiver to a quadriplegic man and falls in love.",
        "author": "Jojo Moyes"
      },
      {
        "id": 400,
        "title": "The Fault in Our Stars",
        "genre": "Romance",
        "description": "Two teenagers with cancer fall deeply in love.",
        "author": "John Green"
      },
      {
        "id": 401,
        "title": "The Bridgertons: The Duke and I",
        "genre": "Romance",
        "description": "A fake courtship between a duke and a young woman leads to unexpected love.",
        "author": "Julia Quinn"
      },
      {
        "id": 402,
        "title": "Eleanor & Park",
        "genre": "Romance",
        "description": "Two misfit teenagers form an unlikely and beautiful connection.",
        "author": "Rainbow Rowell"
      },
      {
        "id": 403,
        "title": "The Hating Game",
        "genre": "Romance",
        "description": "Two rival coworkers engage in a tense battle that turns into attraction.",
        "author": "Sally Thorne"
      },
      {
        "id": 404,
        "title": "Red, White & Royal Blue",
        "genre": "Romance",
        "description": "The son of the U.S. president falls in love with the British prince.",
        "author": "Casey McQuiston"
      },
      {
        "id": 405,
        "title": "Beach Read",
        "genre": "Romance",
        "description": "Two rival authors challenge each other to write in the other's genre.",
        "author": "Emily Henry"
      },
      {
        "id": 406,
        "title": "The Kiss Quotient",
        "genre": "Romance",
        "description": "A woman with autism hires an escort to teach her about intimacy.",
        "author": "Helen Hoang"
      },
      {
        "id": 407,
        "title": "Get a Life, Chloe Brown",
        "genre": "Romance",
        "description": "A chronically ill woman creates a list to live boldly and finds love.",
        "author": "Talia Hibbert"
      },
      {
        "id": 408,
        "title": "Boyfriend Material",
        "genre": "Romance",
        "description": "A failing celebrity needs a fake boyfriend to repair his image.",
        "author": "Alexis Hall"
      },
      {
        "id": 409,
        "title": "The Flatshare",
        "genre": "Romance",
        "description": "Two strangers share a flat and communicate only through notes.",
        "author": "Beth O'Leary"
      },
      {
        "id": 410,
        "title": "A Court of Thorns and Roses",
        "genre": "Romance",
        "description": "A huntress is taken to a magical faerie realm and forms a dangerous bond.",
        "author": "Sarah J. Maas"
      },
      {
        "id": 411,
        "title": "The Seven Husbands of Evelyn Hugo",
        "genre": "Romance",
        "description": "A reclusive Hollywood icon reveals her glamorous and scandalous life.",
        "author": "Taylor Jenkins Reid"
      },
      {
        "id": 412,
        "title": "Daisy Jones & The Six",
        "genre": "Romance",
        "description": "The rise and fall of a legendary 1970s rock band told in oral history style.",
        "author": "Taylor Jenkins Reid"
      },
      {
        "id": 413,
        "title": "It Ends with Us",
        "genre": "Romance",
        "description": "A woman must choose between her first love and a new relationship.",
        "author": "Colleen Hoover"
      },
      {
        "id": 414,
        "title": "Verity",
        "genre": "Romance",
        "description": "A struggling writer takes over for an injured author and uncovers dark secrets.",
        "author": "Colleen Hoover"
      },
      {
        "id": 415,
        "title": "The Spanish Love Deception",
        "genre": "Romance",
        "description": "A woman pretends her workplace enemy is her boyfriend for a family wedding.",
        "author": "Elena Armas"
      },
      {
        "id": 416,
        "title": "The Love Hypothesis",
        "genre": "Romance",
        "description": "A fake dating arrangement between a grad student and her professor turns real.",
        "author": "Ali Hazelwood"
      },
      {
        "id": 417,
        "title": "People We Meet on Vacation",
        "genre": "Romance",
        "description": "Two best friends take one final vacation to confront their feelings.",
        "author": "Emily Henry"
      },
      {
        "id": 418,
        "title": "Book Lovers",
        "genre": "Romance",
        "description": "A literary agent and an editor clash during a small-town trip.",
        "author": "Emily Henry"
      },
      {
        "id": 419,
        "title": "The Unhoneymooners",
        "genre": "Romance",
        "description": "Two enemies are forced to go on a honeymoon trip after their siblings get sick.",
        "author": "Christina Lauren"
      },
      {
        "id": 420,
        "title": "Twisted Love",
        "genre": "Romance",
        "description": "A ruthless billionaire becomes obsessed with his best friend's innocent sister.",
        "author": "Ana Huang"
      },
      {
        "id": 421,
        "title": "The Cruel Prince",
        "genre": "Romance",
        "description": "A mortal girl raised in the faerie courts schemes for power and love.",
        "author": "Holly Black"
      },
      {
        "id": 422,
        "title": "Six of Crows",
        "genre": "Romance",
        "description": "A crew of outcasts attempts a daring heist in a world of magic.",
        "author": "Leigh Bardugo"
      },
      {
        "id": 423,
        "title": "From Blood and Ash",
        "genre": "Romance",
        "description": "A maiden chosen by the gods falls for her forbidden protector.",
        "author": "Jennifer L. Armentrout"
      },
      {
        "id": 424,
        "title": "The Invisible Life of Addie LaRue",
        "genre": "Romance",
        "description": "A woman cursed with immortality is forgotten by everyone until one day someone remembers.",
        "author": "V.E. Schwab"
      },
      {
        "id": 425,
        "title": "The Night Circus",
        "genre": "Romance",
        "description": "Two young illusionists compete in a magical circus bound by a deadly game.",
        "author": "Erin Morgenstern"
      },
      {
        "id": 426,
        "title": "Circe",
        "genre": "Romance",
        "description": "The witch from Greek mythology forges her own path of power and love.",
        "author": "Madeline Miller"
      },
      {
        "id": 427,
        "title": "The Song of Achilles",
        "genre": "Romance",
        "description": "A reimagining of the Trojan War through the eyes of Patroclus and Achilles.",
        "author": "Madeline Miller"
      },
      {
        "id": 428,
        "title": "The House in the Cerulean Sea",
        "genre": "Romance",
        "description": "A caseworker discovers love and belonging at a magical orphanage.",
        "author": "TJ Klune"
      },
      {
        "id": 429,
        "title": "Legends & Lattes",
        "genre": "Romance",
        "description": "A retired orc warrior opens a coffee shop and finds a new peaceful life.",
        "author": "Travis Baldree"
      },
      {
        "id": 430,
        "title": "The Midnight Library",
        "genre": "Romance",
        "description": "A woman explores alternate lives in a mystical library between life and death.",
        "author": "Matt Haig"
      },
      {
        "id": 431,
        "title": "The Seven Year Slip",
        "genre": "Romance",
        "description": "A woman time-travels and falls for a man from the past.",
        "author": "Ashley Poston"
      },
      {
        "id": 432,
        "title": "Funny Story",
        "genre": "Romance",
        "description": "Two exes of the same couple pretend to date to get revenge.",
        "author": "Emily Henry"
      },
      {
        "id": 433,
        "title": "The Rom-Commers",
        "genre": "Romance",
        "description": "A romance writer collaborates with her favorite author on a screenplay.",
        "author": "Katherine Center"
      },
      {
        "id": 434,
        "title": "Happy Place",
        "genre": "Romance",
        "description": "A couple pretends to still be together during their annual friends' trip.",
        "author": "Emily Henry"
      },
      {
        "id": 435,
        "title": "Love on the Brain",
        "genre": "Romance",
        "description": "Two rival neuroscientists are forced to work together on a NASA project.",
        "author": "Ali Hazelwood"
      },
      {
        "id": 436,
        "title": "The American Roommate Experiment",
        "genre": "Romance",
        "description": "A woman agrees to let her best friend's cousin stay with her.",
        "author": "Elena Armas"
      },
      {
        "id": 437,
        "title": "Twisted Games",
        "genre": "Romance",
        "description": "A princess and her forbidden bodyguard navigate danger and desire.",
        "author": "Ana Huang"
      },
      {
        "id": 438,
        "title": "The Deal",
        "genre": "Romance",
        "description": "A hockey player makes a deal with a bookish girl for mutual benefits.",
        "author": "Elle Kennedy"
      },
      {
        "id": 439,
        "title": "The Score",
        "genre": "Romance",
        "description": "A college hockey star falls for his best friend's sister.",
        "author": "Elle Kennedy"
      },
      {
        "id": 440,
        "title": "The Mistake",
        "genre": "Romance",
        "description": "A hockey player tries to win back the girl he accidentally hooked up with.",
        "author": "Elle Kennedy"
      },
      {
        "id": 441,
        "title": "The Goal",
        "genre": "Romance",
        "description": "A college hockey player becomes a single father and finds unexpected love.",
        "author": "Elle Kennedy"
      },
      {
        "id": 442,
        "title": "The Chase",
        "genre": "Romance",
        "description": "A college student tries to resist her hockey player neighbor.",
        "author": "Elle Kennedy"
      },
      {
        "id": 443,
        "title": "The Risk",
        "genre": "Romance",
        "description": "A rebellious hockey player and a straight-laced student form an unlikely bond.",
        "author": "Elle Kennedy"
      },
      {
        "id": 444,
        "title": "The Dare",
        "genre": "Romance",
        "description": "A shy student is dared to seduce the campus bad boy.",
        "author": "Elle Kennedy"
      },
      {
        "id": 445,
        "title": "The Legacy",
        "genre": "Romance",
        "description": "The next generation of Off-Campus couples face new challenges.",
        "author": "Elle Kennedy"
      },
      {
        "id": 446,
        "title": "P.S. I Still Love You",
        "genre": "Romance",
        "description": "Lara Jean's secret love letters continue to cause romantic chaos.",
        "author": "Jenny Han"
      },
      {
        "id": 447,
        "title": "To All the Boys I've Loved Before",
        "genre": "Romance",
        "description": "A girl's secret love letters are accidentally mailed out.",
        "author": "Jenny Han"
      },
      {
        "id": 448,
        "title": "Always and Forever, Lara Jean",
        "genre": "Romance",
        "description": "Lara Jean navigates senior year and her future with Peter.",
        "author": "Jenny Han"
      },
      {
        "id": 449,
        "title": "The Summer I Turned Pretty",
        "genre": "Romance",
        "description": "A girl spends one last magical summer at the beach house with two brothers.",
        "author": "Jenny Han"
      },
      {
        "id": 450,
        "title": "It's Not Summer Without You",
        "genre": "Romance",
        "description": "Belly deals with loss and complicated feelings for the Fisher brothers.",
        "author": "Jenny Han"
      },
      {
        "id": 451,
        "title": "We'll Always Have Summer",
        "genre": "Romance",
        "description": "Belly must choose between the two brothers she has loved her whole life.",
        "author": "Jenny Han"
      },
      {
        "id": 452,
        "title": "The Selection",
        "genre": "Romance",
        "description": "Thirty-five girls compete for the heart of the prince in a dystopian society.",
        "author": "Kiera Cass"
      },
      {
        "id": 453,
        "title": "The Elite",
        "genre": "Romance",
        "description": "America Singer narrows her choices in the competition for the prince.",
        "author": "Kiera Cass"
      },
      {
        "id": 454,
        "title": "The One",
        "genre": "Romance",
        "description": "America must decide between love and duty in the final selection.",
        "author": "Kiera Cass"
      },
      {
        "id": 455,
        "title": "The Crown",
        "genre": "Romance",
        "description": "The next princess must choose her own suitor in a new selection.",
        "author": "Kiera Cass"
      },
      {
        "id": 456,
        "title": "The Heir",
        "genre": "Romance",
        "description": "Princess Eadlyn's own selection process begins.",
        "author": "Kiera Cass"
      },
      {
        "id": 457,
        "title": "The Betrothed",
        "genre": "Romance",
        "description": "A young woman is torn between duty and true love in a royal court.",
        "author": "Kiera Cass"
      },
      {
        "id": 458,
        "title": "The Ballad of Songbirds and Snakes",
        "genre": "Romance",
        "description": "The origin story of Coriolanus Snow and his complex relationship.",
        "author": "Suzanne Collins"
      },
      {
        "id": 459,
        "title": "The Hunger Games",
        "genre": "Romance",
        "description": "Katniss Everdeen volunteers for the deadly Hunger Games to save her sister.",
        "author": "Suzanne Collins"
      },
      {
        "id": 460,
        "title": "Catching Fire",
        "genre": "Romance",
        "description": "Katniss and Peeta return for a special edition of the Hunger Games.",
        "author": "Suzanne Collins"
      },
      {
        "id": 461,
        "title": "Mockingjay",
        "genre": "Romance",
        "description": "Katniss becomes the symbol of rebellion against the Capitol.",
        "author": "Suzanne Collins"
      },
      {
        "id": 462,
        "title": "Divergent",
        "genre": "Romance",
        "description": "In a dystopian society divided by factions, Tris discovers her true nature.",
        "author": "Veronica Roth"
      },
      {
        "id": 463,
        "title": "Insurgent",
        "genre": "Romance",
        "description": "Tris fights to stop a war brewing between factions.",
        "author": "Veronica Roth"
      },
      {
        "id": 464,
        "title": "Allegiant",
        "genre": "Romance",
        "description": "Tris and Four venture beyond the walls of their city.",
        "author": "Veronica Roth"
      },
      {
        "id": 465,
        "title": "Twilight",
        "genre": "Romance",
        "description": "A teenage girl falls in love with a mysterious vampire.",
        "author": "Stephenie Meyer"
      },
      {
        "id": 466,
        "title": "New Moon",
        "genre": "Romance",
        "description": "Bella faces heartbreak and new dangers after Edward leaves.",
        "author": "Stephenie Meyer"
      },
      {
        "id": 467,
        "title": "Eclipse",
        "genre": "Romance",
        "description": "Bella must choose between Edward and Jacob as danger approaches.",
        "author": "Stephenie Meyer"
      },
      {
        "id": 468,
        "title": "Breaking Dawn",
        "genre": "Romance",
        "description": "Bella's transformation and the final battle for her future.",
        "author": "Stephenie Meyer"
      },
      {
        "id": 469,
        "title": "The Host",
        "genre": "Romance",
        "description": "A human rebel fights for control of her body against an alien soul.",
        "author": "Stephenie Meyer"
      },
      {
        "id": 470,
        "title": "The Princess Bride",
        "genre": "Romance",
        "description": "A grandfather reads a fairy tale of true love, adventure, and revenge.",
        "author": "William Goldman"
      },
      {
        "id": 471,
        "title": "Eternal Sunshine of the Spotless Mind",
        "genre": "Romance",
        "description": "A couple erases memories of each other after a painful breakup.",
        "author": "Charlie Kaufman"
      },
      {
        "id": 472,
        "title": "Before Sunrise",
        "genre": "Romance",
        "description": "Two strangers spend one magical night together in Vienna.",
        "author": "Richard Linklater"
      },
      {
        "id": 473,
        "title": "Amélie",
        "genre": "Romance",
        "description": "A shy waitress decides to change the lives of those around her.",
        "author": "Jean-Pierre Jeunet"
      },
      {
        "id": 474,
        "title": "The Shape of Water",
        "genre": "Romance",
        "description": "A mute woman forms a unique bond with an amphibious creature.",
        "author": "Guillermo del Toro"
      },
      {
        "id": 475,
        "title": "Ghost",
        "genre": "Romance",
        "description": "A woman is haunted by the ghost of her murdered lover.",
        "author": "Bruce Joel Rubin"
      },
      {
        "id": 476,
        "title": "Dirty Dancing",
        "genre": "Romance",
        "description": "A sheltered young woman falls for her dance instructor.",
        "author": "Eleanor Bergstein"
      },
      {
        "id": 477,
        "title": "Roman Holiday",
        "genre": "Romance",
        "description": "A princess on the run in Rome falls for an American journalist.",
        "author": "Ian McLellan Hunter"
      },
      {
        "id": 478,
        "title": "Brokeback Mountain",
        "genre": "Romance",
        "description": "Two cowboys develop a complex romantic relationship over decades.",
        "author": "Annie Proulx"
      },
      {
        "id": 479,
        "title": "Notting Hill",
        "genre": "Romance",
        "description": "A simple bookstore owner falls in love with a world-famous actress.",
        "author": "Richard Curtis"
      },
      {
        "id": 480,
        "title": "Crazy, Stupid, Love.",
        "genre": "Romance",
        "description": "A middle-aged man receives dating advice after his divorce.",
        "author": "Dan Fogelman"
      },
      {
        "id": 481,
        "title": "Silver Linings Playbook",
        "genre": "Romance",
        "description": "Two people with emotional issues form an unlikely bond.",
        "author": "Matthew Quick"
      },
      {
        "id": 482,
        "title": "Moonstruck",
        "genre": "Romance",
        "description": "A widow falls for her fiancé's estranged brother.",
        "author": "John Patrick Shanley"
      },
      {
        "id": 483,
        "title": "Sleepless in Seattle",
        "genre": "Romance",
        "description": "A widowed father and a journalist connect through a radio call.",
        "author": "Nora Ephron"
      },
      {
        "id": 484,
        "title": "10 Things I Hate About You",
        "genre": "Romance",
        "description": "A rebellious teen is hired to woo a strong-willed girl.",
        "author": "Karen McCullah Lutz"
      },
      {
        "id": 485,
        "title": "The Big Sick",
        "genre": "Romance",
        "description": "A comedian navigates cultural differences while his girlfriend is in a coma.",
        "author": "Kumail Nanjiani"
      },
      {
        "id": 486,
        "title": "Carol",
        "genre": "Romance",
        "description": "A forbidden romance between an aspiring photographer and an older woman.",
        "author": "Patricia Highsmith"
      },
      {
        "id": 487,
        "title": "Her",
        "genre": "Romance",
        "description": "A lonely writer falls in love with an advanced operating system.",
        "author": "Spike Jonze"
      },
      {
        "id": 488,
        "title": "Lost in Translation",
        "genre": "Romance",
        "description": "Two lonely Americans form a deep connection in Tokyo.",
        "author": "Sofia Coppola"
      },
      {
        "id": 489,
        "title": "Before Sunset",
        "genre": "Romance",
        "description": "Two former lovers reunite for one afternoon in Paris.",
        "author": "Richard Linklater"
      },
      {
        "id": 490,
        "title": "A Star Is Born",
        "genre": "Romance",
        "description": "A fading rock star helps launch the career of a talented young singer.",
        "author": "Bradley Cooper"
      },
      {
        "id": 491,
        "title": "The Bridges of Madison County",
        "genre": "Romance",
        "description": "A brief but profound romance between a photographer and a lonely housewife.",
        "author": "Robert James Waller"
      },
      {
        "id": 492,
        "title": "An Affair to Remember",
        "genre": "Romance",
        "description": "Two people engaged to others promise to reunite atop the Empire State Building.",
        "author": "Leo McCarey"
      },
      {
        "id": 493,
        "title": "You've Got Mail",
        "genre": "Romance",
        "description": "Two rival bookstore owners unknowingly fall in love online.",
        "author": "Nora Ephron"
      },
      {
        "id": 494,
        "title": "About Time",
        "genre": "Romance",
        "description": "A young man with the ability to time travel improves his love life.",
        "author": "Richard Curtis"
      },
      {
        "id": 495,
        "title": "The Age of Adaline",
        "genre": "Romance",
        "description": "A woman cursed with eternal youth struggles to find love.",
        "author": "J. Mills Goodloe"
      },
      {
        "id": 496,
        "title": "Crazy Rich Asians",
        "genre": "Romance",
        "description": "A woman discovers her boyfriend comes from one of Singapore's wealthiest families.",
        "author": "Kevin Kwan"
      },
      {
        "id": 497,
        "title": "The Proposal",
        "genre": "Romance",
        "description": "A high-powered editor forces her assistant to marry her to avoid deportation.",
        "author": "Jasmine Guillory"
      },
      {
        "id": 498,
        "title": "Love Actually",
        "genre": "Romance",
        "description": "Interwoven stories explore love and relationships before Christmas.",
        "author": "Richard Curtis"
      },
      {
        "id": 499,
        "title": "Pretty Woman",
        "genre": "Romance",
        "description": "A wealthy businessman hires a prostitute and unexpectedly falls in love.",
        "author": "J.F. Lawton"
      },
      {
        "id": 500,
        "title": "Singin' in the Rain",
        "genre": "Romance",
        "description": "A silent film star navigates the transition to talkies and finds love.",
        "author": "Betty Comden"
      },
      {
        "id": 501,
        "title": "West Side Story",
        "genre": "Romance",
        "description": "A modern retelling of Romeo and Juliet set against rival gangs.",
        "author": "Arthur Laurents"
      },
      {
        "id": 502,
        "title": "Moonrise Kingdom",
        "genre": "Romance",
        "description": "Two precocious 12-year-olds run away together on a New England island.",
        "author": "Wes Anderson"
      },
      {
        "id": 503,
        "title": "The Umbrellas of Cherbourg",
        "genre": "Romance",
        "description": "A young couple's love is tested when the man is sent to war.",
        "author": "Jacques Demy"
      },
      {
        "id": 504,
        "title": "My Fair Lady",
        "genre": "Romance",
        "description": "A phonetics professor transforms a cockney flower girl into a lady.",
        "author": "Alan Jay Lerner"
      },
      {
        "id": 505,
        "title": "Brief Encounter",
        "genre": "Romance",
        "description": "A married woman and a doctor develop a deep but impossible attraction.",
        "author": "Noël Coward"
      },
      {
        "id": 506,
        "title": "It Happened One Night",
        "genre": "Romance",
        "description": "A spoiled heiress and a reporter go on a cross-country adventure.",
        "author": "Robert Riskin"
      },
      {
        "id": 507,
        "title": "The Apartment",
        "genre": "Romance",
        "description": "A lonely clerk lends his apartment to executives and falls for one of their mistresses.",
        "author": "Billy Wilder"
      },
      {
        "id": 508,
        "title": "Harold and Maude",
        "genre": "Romance",
        "description": "A young man obsessed with death forms a romance with an eccentric 79-year-old woman.",
        "author": "Colin Higgins"
      },
      {
        "id": 509,
        "title": "Groundhog Day",
        "genre": "Romance",
        "description": "A cynical weatherman is trapped in a time loop and learns to win love.",
        "author": "Danny Rubin"
      },
      {
        "id": 510,
        "title": "The Way We Were",
        "genre": "Romance",
        "description": "A passionate activist and a carefree writer fall in love despite differences.",
        "author": "Arthur Laurents"
      },
      {
        "id": 511,
        "title": "Gone with the Wind",
        "genre": "Romance",
        "description": "Scarlett O'Hara's passionate survival during the Civil War era.",
        "author": "Margaret Mitchell"
      },
      {
        "id": 512,
        "title": "An American in Paris",
        "genre": "Romance",
        "description": "An ex-GI painter falls for a young woman engaged to another in Paris.",
        "author": "Alan Jay Lerner"
      },
      {
        "id": 513,
        "title": "From Here to Eternity",
        "genre": "Romance",
        "description": "Military personnel in Hawaii face personal conflicts before Pearl Harbor.",
        "author": "James Jones"
      },
      {
        "id": 514,
        "title": "Doctor Zhivago",
        "genre": "Romance",
        "description": "A poet experiences love and loss amid the Russian Revolution.",
        "author": "Boris Pasternak"
      },
      {
        "id": 515,
        "title": "Out of Africa",
        "genre": "Romance",
        "description": "A Danish baroness moves to Kenya and begins a passionate romance.",
        "author": "Isak Dinesen"
      },
      {
        "id": 516,
        "title": "The English Patient",
        "genre": "Romance",
        "description": "A burned pilot recounts his passionate affair during World War II.",
        "author": "Michael Ondaatje"
      },
      {
        "id": 517,
        "title": "Sense and Sensibility",
        "genre": "Romance",
        "description": "Two sisters navigate love and societal expectations in Regency England.",
        "author": "Jane Austen"
      },
      {
        "id": 518,
        "title": "Emma",
        "genre": "Romance",
        "description": "A wealthy young woman plays matchmaker and learns about love.",
        "author": "Jane Austen"
      },
      {
        "id": 519,
        "title": "Persuasion",
        "genre": "Romance",
        "description": "A young woman gets a second chance at love with a naval officer.",
        "author": "Jane Austen"
      },
      {
        "id": 520,
        "title": "Moulin Rouge!",
        "genre": "Romance",
        "description": "A poet falls in love with a courtesan in a lavish Parisian nightclub.",
        "author": "Baz Luhrmann"
      },
      {
        "id": 521,
        "title": "Wuthering Heights",
        "genre": "Romance",
        "description": "A passionate and destructive love story on the wild Yorkshire moors.",
        "author": "Emily Brontë"
      },
      {
        "id": 522,
        "title": "Anna Karenina",
        "genre": "Romance",
        "description": "A married woman's tragic affair with a count in Russian high society.",
        "author": "Leo Tolstoy"
      },
      {
        "id": 523,
        "title": "The Great Gatsby",
        "genre": "Romance",
        "description": "A mysterious millionaire pursues his lost love in the Jazz Age.",
        "author": "F. Scott Fitzgerald"
      },
      {
        "id": 524,
        "title": "Romeo and Juliet",
        "genre": "Romance",
        "description": "The classic tragic love story of two young lovers from feuding families.",
        "author": "William Shakespeare"
      },
      {
        "id": 525,
        "title": "A Midsummer Night's Dream",
        "genre": "Romance",
        "description": "A magical comedy of love, mistaken identities, and fairy mischief.",
        "author": "William Shakespeare"
      },
      {
        "id": 526,
        "title": "Much Ado About Nothing",
        "genre": "Romance",
        "description": "Witty banter and deception lead to love between two sharp-tongued characters.",
        "author": "William Shakespeare"
      },
      {
        "id": 527,
        "title": "The Tempest",
        "genre": "Romance",
        "description": "A sorcerer orchestrates love and reconciliation on a magical island.",
        "author": "William Shakespeare"
      },
      {
        "id": 528,
        "title": "Twelfth Night",
        "genre": "Romance",
        "description": "Disguise, mistaken identity, and love triangles in a comedic tale.",
        "author": "William Shakespeare"
      },
      {
        "id": 529,
        "title": "As You Like It",
        "genre": "Romance",
        "description": "Love and self-discovery in the Forest of Arden.",
        "author": "William Shakespeare"
      },
      {
        "id": 530,
        "title": "The Merchant of Venice",
        "genre": "Romance",
        "description": "A tale of love, mercy, and justice in Renaissance Venice.",
        "author": "William Shakespeare"
      },
      {
        "id": 531,
        "title": "Othello",
        "genre": "Romance",
        "description": "A tragic story of love destroyed by jealousy and manipulation.",
        "author": "William Shakespeare"
      },
      {
        "id": 532,
        "title": "Antony and Cleopatra",
        "genre": "Romance",
        "description": "The passionate and doomed romance between the Roman general and Egyptian queen.",
        "author": "William Shakespeare"
      },
      {
        "id": 533,
        "title": "The Winter's Tale",
        "genre": "Romance",
        "description": "A tale of jealousy, loss, and miraculous redemption.",
        "author": "William Shakespeare"
      },
      {
        "id": 534,
        "title": "Cymbeline",
        "genre": "Romance",
        "description": "A complex story of love, betrayal, and reunion.",
        "author": "William Shakespeare"
      },
      {
        "id": 535,
        "title": "Pericles",
        "genre": "Romance",
        "description": "A prince's epic journey of love, loss, and family reunion.",
        "author": "William Shakespeare"
      },
      {
        "id": 536,
        "title": "The Two Gentlemen of Verona",
        "genre": "Romance",
        "description": "A comedic tale of friendship, love, and betrayal.",
        "author": "William Shakespeare"
      },
      {
        "id": 537,
        "title": "Love's Labour's Lost",
        "genre": "Romance",
        "description": "Four men swear off women but fall in love anyway.",
        "author": "William Shakespeare"
      },
      {
        "id": 538,
        "title": "All's Well That Ends Well",
        "genre": "Romance",
        "description": "A clever young woman wins the husband who rejects her.",
        "author": "William Shakespeare"
      },
      {
        "id": 539,
        "title": "Measure for Measure",
        "genre": "Romance",
        "description": "A dark comedy exploring justice, mercy, and hidden desires.",
        "author": "William Shakespeare"
      },
      {
        "id": 540,
        "title": "The Taming of the Shrew",
        "genre": "Romance",
        "description": "A headstrong woman is 'tamed' by a bold suitor in this controversial comedy.",
        "author": "William Shakespeare"
      },
      {
        "id": 541,
        "title": "The Comedy of Errors",
        "genre": "Romance",
        "description": "Twins separated at birth cause chaos and romantic mix-ups.",
        "author": "William Shakespeare"
      },
      {
        "id": 542,
        "title": "A Midsummer Night's Dream",
        "genre": "Romance",
        "description": "Magic and mistaken identities lead to romantic entanglements.",
        "author": "William Shakespeare"
      },
      {
        "id": 543,
        "title": "Much Ado About Nothing",
        "genre": "Romance",
        "description": "Beatrice and Benedick's witty battle of wits turns to love.",
        "author": "William Shakespeare"
      },
      {
        "id": 544,
        "title": "As You Like It",
        "genre": "Romance",
        "description": "Rosalind disguises herself and finds love in the forest.",
        "author": "William Shakespeare"
      },
      {
        "id": 545,
        "title": "Twelfth Night",
        "genre": "Romance",
        "description": "Viola disguises herself as a man and sparks romantic confusion.",
        "author": "William Shakespeare"
      },
      {
        "id": 546,
        "title": "The Merchant of Venice",
        "genre": "Romance",
        "description": "Portia cleverly saves her husband's friend in a court of law.",
        "author": "William Shakespeare"
      },
      {
        "id": 547,
        "title": "The Tempest",
        "genre": "Romance",
        "description": "Prospero arranges a marriage for his daughter on a magical island.",
        "author": "William Shakespeare"
      },
      {
        "id": 548,
        "title": "The Winter's Tale",
        "genre": "Romance",
        "description": "A king's jealousy leads to separation and eventual reunion.",
        "author": "William Shakespeare"
      },
      {
        "id": 549,
        "title": "Cymbeline",
        "genre": "Romance",
        "description": "A princess's love survives betrayal and exile.",
        "author": "William Shakespeare"
      },
      {
        "id": 550,
        "title": "Pericles, Prince of Tyre",
        "genre": "Romance",
        "description": "A prince's adventures reunite him with his lost family.",
        "author": "William Shakespeare"
      },
      {
        "id": 551,
        "title": "The Two Noble Kinsmen",
        "genre": "Romance",
        "description": "Two friends become rivals for the love of the same woman.",
        "author": "William Shakespeare"
      },
      {
        "id": 552,
        "title": "Cardenio",
        "genre": "Romance",
        "description": "A lost play involving love, madness, and mistaken identity.",
        "author": "William Shakespeare"
      },
      {
        "id": 553,
        "title": "Henry V",
        "genre": "Romance",
        "description": "The young king's courtship of a French princess amid war.",
        "author": "William Shakespeare"
      },
      {
        "id": 554,
        "title": "Richard II",
        "genre": "Romance",
        "description": "A king's downfall and reflections on love and power.",
        "author": "William Shakespeare"
      },
      {
        "id": 555,
        "title": "Romeo and Juliet",
        "genre": "Romance",
        "description": "Star-crossed lovers from feuding families defy fate.",
        "author": "William Shakespeare"
      },
      {
        "id": 556,
        "title": "Antony and Cleopatra",
        "genre": "Romance",
        "description": "The passionate and tragic love between the Roman and Egyptian rulers.",
        "author": "William Shakespeare"
      },
      {
        "id": 557,
        "title": "Othello",
        "genre": "Romance",
        "description": "Jealousy destroys the marriage of a Moorish general and his wife.",
        "author": "William Shakespeare"
      },
      {
        "id": 558,
        "title": "King Lear",
        "genre": "Romance",
        "description": "A king's division of his kingdom leads to family betrayal and redemption.",
        "author": "William Shakespeare"
      },
      {
        "id": 559,
        "title": "Macbeth",
        "genre": "Romance",
        "description": "Ambition and guilt strain the marriage of the Scottish king and queen.",
        "author": "William Shakespeare"
      },
      {
        "id": 560,
        "title": "Hamlet",
        "genre": "Romance",
        "description": "The prince of Denmark's love for Ophelia is overshadowed by revenge.",
        "author": "William Shakespeare"
      },
      {
        "id": 561,
        "title": "The Taming of the Shrew",
        "genre": "Romance",
        "description": "Petruchio woos the fiery Katherine in a battle of wills.",
        "author": "William Shakespeare"
      },
      {
        "id": 562,
        "title": "Love's Labour's Lost",
        "genre": "Romance",
        "description": "Four lords swear off women but fall in love with four ladies.",
        "author": "William Shakespeare"
      },
      {
        "id": 563,
        "title": "All's Well That Ends Well",
        "genre": "Romance",
        "description": "Helena uses wit and determination to win the husband who rejects her.",
        "author": "William Shakespeare"
      },
      {
        "id": 564,
        "title": "Measure for Measure",
        "genre": "Romance",
        "description": "A duke tests justice and mercy through disguised observation.",
        "author": "William Shakespeare"
      },
      {
        "id": 565,
        "title": "The Comedy of Errors",
        "genre": "Romance",
        "description": "Twin brothers and their servants cause romantic and comedic confusion.",
        "author": "William Shakespeare"
      },
      {
        "id": 566,
        "title": "The Two Gentlemen of Verona",
        "genre": "Romance",
        "description": "Friendship and love are tested in this early comedy.",
        "author": "William Shakespeare"
      },
      {
        "id": 567,
        "title": "The Merry Wives of Windsor",
        "genre": "Romance",
        "description": "Falstaff's failed attempts to woo married women lead to hilarious chaos.",
        "author": "William Shakespeare"
      },
      {
        "id": 568,
        "title": "A Midsummer Night's Dream",
        "genre": "Romance",
        "description": "Lovers, fairies, and mechanicals create magical romantic mix-ups.",
        "author": "William Shakespeare"
      },
      {
        "id": 569,
        "title": "Much Ado About Nothing",
        "genre": "Romance",
        "description": "Beatrice and Benedick's sharp wit hides their growing affection.",
        "author": "William Shakespeare"
      },
      {
        "id": 570,
        "title": "As You Like It",
        "genre": "Romance",
        "description": "Rosalind finds love while disguised as a man in the forest.",
        "author": "William Shakespeare"
      },
      {
        "id": 571,
        "title": "Twelfth Night",
        "genre": "Romance",
        "description": "Viola's disguise leads to love triangles and comic resolution.",
        "author": "William Shakespeare"
      },
      {
        "id": 572,
        "title": "The Merchant of Venice",
        "genre": "Romance",
        "description": "Portia's cleverness secures love and justice.",
        "author": "William Shakespeare"
      },
      {
        "id": 573,
        "title": "The Tempest",
        "genre": "Romance",
        "description": "Prospero engineers his daughter's marriage and reconciliation.",
        "author": "William Shakespeare"
      },
      {
        "id": 574,
        "title": "The Winter's Tale",
        "genre": "Romance",
        "description": "Jealousy tears a family apart, but time brings healing and love.",
        "author": "William Shakespeare"
      },
      {
        "id": 575,
        "title": "Cymbeline",
        "genre": "Romance",
        "description": "A princess's fidelity and courage lead to reunion and love.",
        "author": "William Shakespeare"
      },
      {
        "id": 576,
        "title": "Pericles",
        "genre": "Romance",
        "description": "A father's long search for his lost daughter ends in joyful reunion.",
        "author": "William Shakespeare"
      },
      {
        "id": 577,
        "title": "The Two Noble Kinsmen",
        "genre": "Romance",
        "description": "Two cousins compete for the hand of the same woman.",
        "author": "William Shakespeare"
      },
      {
        "id": 578,
        "title": "Henry V",
        "genre": "Romance",
        "description": "King Henry's courtship of Princess Katharine seals peace.",
        "author": "William Shakespeare"
      },
      {
        "id": 579,
        "title": "Richard II",
        "genre": "Romance",
        "description": "A king's fall from power reflects on love, loyalty, and kingship.",
        "author": "William Shakespeare"
      },
      {
        "id": 580,
        "title": "Romeo and Juliet",
        "genre": "Romance",
        "description": "Two young lovers from warring families defy fate.",
        "author": "William Shakespeare"
      },
      {
        "id": 581,
        "title": "Antony and Cleopatra",
        "genre": "Romance",
        "description": "The epic and tragic love between Antony and Cleopatra.",
        "author": "William Shakespeare"
      },
      {
        "id": 582,
        "title": "Othello",
        "genre": "Romance",
        "description": "Iago's manipulation destroys Othello's trust in Desdemona.",
        "author": "William Shakespeare"
      },
      {
        "id": 583,
        "title": "King Lear",
        "genre": "Romance",
        "description": "A king's division of his kingdom leads to profound family tragedy.",
        "author": "William Shakespeare"
      },
      {
        "id": 584,
        "title": "Macbeth",
        "genre": "Romance",
        "description": "Lady Macbeth's ambition fuels her husband's bloody rise and fall.",
        "author": "William Shakespeare"
      },
      {
        "id": 585,
        "title": "Hamlet",
        "genre": "Romance",
        "description": "Hamlet's love for Ophelia is overshadowed by revenge and madness.",
        "author": "William Shakespeare"
      },
      {
        "id": 586,
        "title": "The Taming of the Shrew",
        "genre": "Romance",
        "description": "Petruchio's bold wooing of the fiery Katherine.",
        "author": "William Shakespeare"
      },
      {
        "id": 587,
        "title": "Love's Labour's Lost",
        "genre": "Romance",
        "description": "Four lords break their vow to avoid women and fall in love.",
        "author": "William Shakespeare"
      },
      {
        "id": 588,
        "title": "All's Well That Ends Well",
        "genre": "Romance",
        "description": "Helena's clever scheme wins her the husband she desires.",
        "author": "William Shakespeare"
      },
      {
        "id": 589,
        "title": "Measure for Measure",
        "genre": "Romance",
        "description": "A duke's test of justice leads to unexpected romantic resolutions.",
        "author": "William Shakespeare"
      },
      {
        "id": 590,
        "title": "The Comedy of Errors",
        "genre": "Romance",
        "description": "Twin brothers cause romantic and comedic chaos in Ephesus.",
        "author": "William Shakespeare"
      },
      {
        "id": 591,
        "title": "The Two Gentlemen of Verona",
        "genre": "Romance",
        "description": "Friendship is tested by love in this early romantic comedy.",
        "author": "William Shakespeare"
      },
      {
        "id": 592,
        "title": "The Merry Wives of Windsor",
        "genre": "Romance",
        "description": "Falstaff's schemes to woo married women lead to hilarious failure.",
        "author": "William Shakespeare"
      },
      {
        "id": 593,
        "title": "A Midsummer Night's Dream",
        "genre": "Romance",
        "description": "Magic and mistaken identities create romantic chaos in the forest.",
        "author": "William Shakespeare"
      },
      {
        "id": 594,
        "title": "Much Ado About Nothing",
        "genre": "Romance",
        "description": "Beatrice and Benedick's witty battle turns into true love.",
        "author": "William Shakespeare"
      },
      {
        "id": 595,
        "title": "As You Like It",
        "genre": "Romance",
        "description": "Rosalind finds love and freedom disguised as a man.",
        "author": "William Shakespeare"
      },
      {
        "id": 596,
        "title": "Twelfth Night",
        "genre": "Romance",
        "description": "Disguise and mistaken identity lead to romantic resolution.",
        "author": "William Shakespeare"
      },
      {
        "id": 597,
        "title": "The Merchant of Venice",
        "genre": "Romance",
        "description": "Portia's intelligence secures love and mercy in Venice.",
        "author": "William Shakespeare"
      },
      {
        "id": 598,
        "title": "The Tempest",
        "genre": "Romance",
        "description": "Prospero arranges his daughter's happy marriage on the island.",
        "author": "William Shakespeare"
      },
      {
        "id": 599,
        "title": "The Winter's Tale",
        "genre": "Romance",
        "description": "A king's jealousy is healed by time and the power of love.",
        "author": "William Shakespeare"
      },
      {
        "id": 600,
        "title": "Cymbeline",
        "genre": "Romance",
        "description": "A princess's courage and fidelity lead to family reunion and love.",
        "author": "William Shakespeare"
      }
  ],
  Games: [
    {
        "id": 1,
        "title": "The Witcher 3: Wild Hunt",
        "genre": "RPG",
        "description": "Monster hunter Geralt of Rivia searches for his adopted daughter in a vast, war-torn open world filled with deep choices and memorable stories.",
        "developer": "CD Projekt Red"
      },
      {
        "id": 2,
        "title": "Baldur's Gate 3",
        "genre": "RPG",
        "description": "A mind-flayer parasite threatens the world; build your party, make meaningful choices, and shape the story in this epic Dungeons & Dragons adventure.",
        "developer": "Larian Studios"
      },
      {
        "id": 3,
        "title": "The Elder Scrolls V: Skyrim",
        "genre": "RPG",
        "description": "In a vast fantasy world, become the Dragonborn and battle dragons while exploring endless quests and lore.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 4,
        "title": "Final Fantasy VII",
        "genre": "RPG",
        "description": "Cloud Strife and his allies fight the megacorporation Shinra and the ancient threat Sephiroth in this iconic JRPG.",
        "developer": "Square"
      },
      {
        "id": 5,
        "title": "Fallout: New Vegas",
        "genre": "RPG",
        "description": "In a post-apocalyptic Mojave Wasteland, choose factions and shape the future after being left for dead.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 6,
        "title": "Mass Effect 2",
        "genre": "RPG",
        "description": "Commander Shepard builds a team to stop an ancient threat in this sci-fi space opera with deep character relationships.",
        "developer": "BioWare"
      },
      {
        "id": 7,
        "title": "Planescape: Torment",
        "genre": "RPG",
        "description": "An immortal man searches for the reason behind his endless reincarnations in a philosophical, story-rich world.",
        "developer": "Black Isle Studios"
      },
      {
        "id": 8,
        "title": "Divinity: Original Sin 2",
        "genre": "RPG",
        "description": "Wield powerful source magic, cooperate or compete with friends, and shape a reactive world through your choices.",
        "developer": "Larian Studios"
      },
      {
        "id": 9,
        "title": "Dragon Age: Origins",
        "genre": "RPG",
        "description": "Recruit allies to stop a demonic Blight in a dark fantasy world where every decision carries weight.",
        "developer": "BioWare"
      },
      {
        "id": 10,
        "title": "Chrono Trigger",
        "genre": "RPG",
        "description": "A young hero time-travels across eras to prevent a cataclysmic future in this timeless JRPG classic.",
        "developer": "Square"
      },
      {
        "id": 11,
        "title": "Elden Ring",
        "genre": "RPG",
        "description": "Explore a vast, unforgiving open world created with George R.R. Martin, battling gods and uncovering ancient secrets.",
        "developer": "FromSoftware"
      },
      {
        "id": 12,
        "title": "The Elder Scrolls III: Morrowind",
        "genre": "RPG",
        "description": "Arrive on the island of Vvardenfell with near-total freedom to explore, join factions, and shape your destiny.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 13,
        "title": "Fallout 3",
        "genre": "RPG",
        "description": "Leave Vault 101 and explore the Capital Wasteland in this post-apocalyptic open-world RPG.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 14,
        "title": "Persona 5",
        "genre": "RPG",
        "description": "High school students become Phantom Thieves, stealing corrupt hearts in a stylish turn-based adventure.",
        "developer": "Atlus"
      },
      {
        "id": 15,
        "title": "Deus Ex",
        "genre": "RPG",
        "description": "A cybernetically enhanced agent navigates conspiracy, stealth, and moral choices in a near-future world.",
        "developer": "Ion Storm"
      },
      {
        "id": 16,
        "title": "Vampire: The Masquerade - Bloodlines",
        "genre": "RPG",
        "description": "Survive as a newly embraced vampire in a dark, immersive Los Angeles full of intrigue and factions.",
        "developer": "Troika Games"
      },
      {
        "id": 17,
        "title": "Star Wars: Knights of the Old Republic",
        "genre": "RPG",
        "description": "Choose the light or dark side of the Force in this epic Star Wars story set thousands of years before the films.",
        "developer": "BioWare"
      },
      {
        "id": 18,
        "title": "Pillars of Eternity",
        "genre": "RPG",
        "description": "Explore a rich fantasy world with deep lore, party-based combat, and meaningful narrative choices.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 19,
        "title": "Hades",
        "genre": "RPG",
        "description": "Escape the underworld as Zagreus in this fast-paced roguelike with Greek mythology and evolving relationships.",
        "developer": "Supergiant Games"
      },
      {
        "id": 20,
        "title": "Cyberpunk 2077",
        "genre": "RPG",
        "description": "Become a mercenary in Night City, making life-altering choices in a dystopian open world.",
        "developer": "CD Projekt Red"
      },
      {
        "id": 21,
        "title": "Final Fantasy VI",
        "genre": "RPG",
        "description": "A diverse cast fights an empire and a mad clown in one of the most emotionally resonant JRPGs ever made.",
        "developer": "Square"
      },
      {
        "id": 22,
        "title": "Dragon Quest V: Hand of the Heavenly Bride",
        "genre": "RPG",
        "description": "A multi-generational epic where your choices and family shape the story across decades.",
        "developer": "Chunsoft"
      },
      {
        "id": 23,
        "title": "Ultima VII: The Black Gate",
        "genre": "RPG",
        "description": "Investigate a murder in a living, breathing world filled with moral complexity and interactivity.",
        "developer": "Origin Systems"
      },
      {
        "id": 24,
        "title": "Baldur's Gate II: Shadows of Amn",
        "genre": "RPG",
        "description": "Continue your adventure in this epic sequel with vast dungeons, companions, and epic storytelling.",
        "developer": "BioWare"
      },
      {
        "id": 25,
        "title": "Arcanum: Of Steamworks and Magick Obscura",
        "genre": "RPG",
        "description": "A steampunk-fantasy world where technology and magic clash in a deeply reactive RPG.",
        "developer": "Troika Games"
      },
      {
        "id": 26,
        "title": "Neverwinter Nights 2",
        "genre": "RPG",
        "description": "Build your legend in the Forgotten Realms with party-based combat and toolset creativity.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 27,
        "title": "System Shock 2",
        "genre": "RPG",
        "description": "Survive a horrifying sci-fi spaceship with RPG elements and immersive sim gameplay.",
        "developer": "Irrational Games"
      },
      {
        "id": 28,
        "title": "The Outer Worlds",
        "genre": "RPG",
        "description": "Explore corporate-controlled colonies in this humorous sci-fi RPG with meaningful choices.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 29,
        "title": "Kingdom Come: Deliverance",
        "genre": "RPG",
        "description": "Live as a medieval commoner seeking revenge in a realistic, historically accurate open world.",
        "developer": "Warhorse Studios"
      },
      {
        "id": 30,
        "title": "Horizon Forbidden West",
        "genre": "RPG",
        "description": "Aloy explores a post-apocalyptic world filled with robotic creatures and ancient mysteries.",
        "developer": "Guerrilla Games"
      },
      {
        "id": 31,
        "title": "Final Fantasy IX",
        "genre": "RPG",
        "description": "A charming cast embarks on a quest to save the world in this heartfelt JRPG.",
        "developer": "Square"
      },
      {
        "id": 32,
        "title": "Suikoden II",
        "genre": "RPG",
        "description": "Recruit 108 Stars of Destiny in this epic tale of war, friendship, and rebellion.",
        "developer": "Konami"
      },
      {
        "id": 33,
        "title": "Undertale",
        "genre": "RPG",
        "description": "A charming underground world where your choices to fight or befriend monsters change everything.",
        "developer": "Toby Fox"
      },
      {
        "id": 34,
        "title": "Disco Elysium",
        "genre": "RPG",
        "description": "Solve a murder as a detective with a broken psyche in this narrative-driven, dialogue-heavy masterpiece.",
        "developer": "ZA/UM"
      },
      {
        "id": 35,
        "title": "KOTOR II: The Sith Lords",
        "genre": "RPG",
        "description": "Explore moral gray areas and unfinished story threads in this acclaimed Star Wars sequel.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 36,
        "title": "Bloodborne",
        "genre": "RPG",
        "description": "Hunt nightmarish beasts in a gothic horror world with punishing combat and deep lore.",
        "developer": "FromSoftware"
      },
      {
        "id": 37,
        "title": "Persona 4 Golden",
        "genre": "RPG",
        "description": "Solve murders in a small town while balancing school life and supernatural battles.",
        "developer": "Atlus"
      },
      {
        "id": 38,
        "title": "The Legend of Zelda: Breath of the Wild",
        "genre": "RPG",
        "description": "Explore a vast open Hyrule with freedom to tackle challenges in any order.",
        "developer": "Nintendo"
      },
      {
        "id": 39,
        "title": "Dragon Age II",
        "genre": "RPG",
        "description": "Experience a decade of friendship, rivalry, and rebellion in Kirkwall.",
        "developer": "BioWare"
      },
      {
        "id": 40,
        "title": "Tyranny",
        "genre": "RPG",
        "description": "Play as a conqueror's enforcer in a world where evil has already won.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 41,
        "title": "Pathfinder: Kingmaker",
        "genre": "RPG",
        "description": "Rule your own kingdom while adventuring in a rich fantasy world based on the tabletop RPG.",
        "developer": "Owlcat Games"
      },
      {
        "id": 42,
        "title": "Wasteland 2",
        "genre": "RPG",
        "description": "Lead a Desert Ranger team through a post-apocalyptic America filled with tough choices.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 43,
        "title": "Shadowrun Returns",
        "genre": "RPG",
        "description": "Cyberpunk meets fantasy in this tactical RPG with deep storytelling.",
        "developer": "Harebrained Schemes"
      },
      {
        "id": 44,
        "title": "Torment: Tides of Numenera",
        "genre": "RPG",
        "description": "Explore a strange future where your actions define the tides of reality.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 45,
        "title": "GreedFall",
        "genre": "RPG",
        "description": "Colonize a magical island as a diplomat while uncovering ancient secrets.",
        "developer": "Spiders"
      },
      {
        "id": 46,
        "title": "Elex",
        "genre": "RPG",
        "description": "Survive a post-apocalyptic world blending magic and technology.",
        "developer": "Piranha Bytes"
      },
      {
        "id": 47,
        "title": "Gothic",
        "genre": "RPG",
        "description": "A prisoner must rise through the ranks in a harsh penal colony.",
        "developer": "Piranha Bytes"
      },
      {
        "id": 48,
        "title": "Risen",
        "genre": "RPG",
        "description": "Shipwrecked on a mysterious island, uncover ancient powers and choose your path.",
        "developer": "Piranha Bytes"
      },
      {
        "id": 49,
        "title": "Two Worlds II",
        "genre": "RPG",
        "description": "A vast open-world fantasy RPG with deep character customization and magic.",
        "developer": "Reality Pump"
      },
      {
        "id": 50,
        "title": "The Bard's Tale",
        "genre": "RPG",
        "description": "A humorous take on classic RPG tropes with witty narration and dungeon crawling.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 51,
        "title": "Icewind Dale",
        "genre": "RPG",
        "description": "A party-based adventure in the frozen north of the Forgotten Realms.",
        "developer": "Black Isle Studios"
      },
      {
        "id": 52,
        "title": "Temple of Elemental Evil",
        "genre": "RPG",
        "description": "A faithful adaptation of the classic D&D module with deep tactical combat.",
        "developer": "Troika Games"
      },
      {
        "id": 53,
        "title": "Arx Fatalis",
        "genre": "RPG",
        "description": "Survive underground in a world where magic is cast by drawing runes.",
        "developer": "Arkane Studios"
      },
      {
        "id": 54,
        "title": "Morrowind",
        "genre": "RPG",
        "description": "Discover the alien landscape of Vvardenfell with unparalleled freedom.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 55,
        "title": "Oblivion",
        "genre": "RPG",
        "description": "Close Oblivion gates and save Cyrodiil in this expansive Elder Scrolls adventure.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 56,
        "title": "Fallout 4",
        "genre": "RPG",
        "description": "Build settlements and search for your son in a post-nuclear Commonwealth.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 57,
        "title": "Starfield",
        "genre": "RPG",
        "description": "Explore a vast galaxy, build ships, and uncover cosmic mysteries.",
        "developer": "Bethesda Game Studios"
      },
      {
        "id": 58,
        "title": "Dragon Age: Inquisition",
        "genre": "RPG",
        "description": "Lead the Inquisition to close rifts and stop a demonic invasion.",
        "developer": "BioWare"
      },
      {
        "id": 59,
        "title": "Mass Effect 3",
        "genre": "RPG",
        "description": "Unite the galaxy for the final stand against the Reapers.",
        "developer": "BioWare"
      },
      {
        "id": 60,
        "title": "The Outer Worlds",
        "genre": "RPG",
        "description": "Corporate satire meets choice-driven sci-fi adventure on distant colonies.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 61,
        "title": "Pillars of Eternity II: Deadfire",
        "genre": "RPG",
        "description": "Sail the Deadfire Archipelago in this sequel with improved reactivity and ship combat.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 62,
        "title": "Pathfinder: Wrath of the Righteous",
        "genre": "RPG",
        "description": "Lead a crusade against demons and ascend to mythic power.",
        "developer": "Owlcat Games"
      },
      {
        "id": 63,
        "title": "Solasta: Crown of the Magister",
        "genre": "RPG",
        "description": "A tactical D&D 5e adventure with verticality and faithful ruleset.",
        "developer": "Tactical Adventures"
      },
      {
        "id": 64,
        "title": "Wasteland 3",
        "genre": "RPG",
        "description": "Lead Rangers in frozen Colorado, making hard choices in a brutal wasteland.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 65,
        "title": "Shadowrun: Dragonfall",
        "genre": "RPG",
        "description": "A cyberpunk-fantasy story with deep characters and tactical combat.",
        "developer": "Harebrained Schemes"
      },
      {
        "id": 66,
        "title": "Banner Saga",
        "genre": "RPG",
        "description": "Lead a caravan of Vikings through a world-ending winter with tough decisions.",
        "developer": "Stoic"
      },
      {
        "id": 67,
        "title": "Expeditions: Viking",
        "genre": "RPG",
        "description": "Lead a Viking raid to England and build your legacy through diplomacy or conquest.",
        "developer": "Logic Artists"
      },
      {
        "id": 68,
        "title": "Expeditions: Rome",
        "genre": "RPG",
        "description": "Rise through the ranks of the Roman Republic on a campaign in Asia Minor.",
        "developer": "Logic Artists"
      },
      {
        "id": 69,
        "title": "Atom RPG",
        "genre": "RPG",
        "description": "Post-apocalyptic Soviet Union survival with deep character creation and humor.",
        "developer": "Atom Team"
      },
      {
        "id": 70,
        "title": "Underrail",
        "genre": "RPG",
        "description": "A hardcore, turn-based post-apocalyptic RPG inspired by classic Fallout.",
        "developer": "Stygian Software"
      },
      {
        "id": 71,
        "title": "Age of Decadence",
        "genre": "RPG",
        "description": "Survive the fall of a Roman-inspired empire with skill-based, consequence-heavy gameplay.",
        "developer": "Iron Tower Studio"
      },
      {
        "id": 72,
        "title": "Colony Ship",
        "genre": "RPG",
        "description": "A sci-fi RPG set on a generation ship with deep factions and moral dilemmas.",
        "developer": "Iron Tower Studio"
      },
      {
        "id": 73,
        "title": "Encased",
        "genre": "RPG",
        "description": "A sci-fi post-apocalyptic RPG with a unique dome setting and retro-futuristic style.",
        "developer": "Dark Crystal Games"
      },
      {
        "id": 74,
        "title": "Battle Brothers",
        "genre": "RPG",
        "description": "Lead a mercenary company in a low-fantasy world with permadeath and tactical combat.",
        "developer": "Overhype Studios"
      },
      {
        "id": 75,
        "title": "King's Bounty II",
        "genre": "RPG",
        "description": "Command armies and make moral choices in a fantasy world inspired by the classic series.",
        "developer": "1C Entertainment"
      },
      {
        "id": 76,
        "title": "Elex II",
        "genre": "RPG",
        "description": "Fight for the future of Magalan in a world blending magic and sci-fi technology.",
        "developer": "Piranha Bytes"
      },
      {
        "id": 77,
        "title": "Outward",
        "genre": "RPG",
        "description": "Survival-focused open-world RPG where the world doesn't revolve around you.",
        "developer": "Nine Dots Studio"
      },
      {
        "id": 78,
        "title": "Enderal: Forgotten Stories",
        "genre": "RPG",
        "description": "A total conversion mod for Skyrim with its own deep story and world.",
        "developer": "SureAI"
      },
      {
        "id": 79,
        "title": "The Bard's Tale IV: Barrows Deep",
        "genre": "RPG",
        "description": "A modern take on the classic series with grid-based dungeons and humor.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 80,
        "title": "Might & Magic VI: The Mandate of Heaven",
        "genre": "RPG",
        "description": "Classic party-based RPG with vast exploration and humorous writing.",
        "developer": "New World Computing"
      },
      {
        "id": 81,
        "title": "Wizardry 8",
        "genre": "RPG",
        "description": "Deep party-based dungeon crawling with challenging combat and character progression.",
        "developer": "Sir-Tech"
      },
      {
        "id": 82,
        "title": "Betrayal at Krondor",
        "genre": "RPG",
        "description": "A story-rich RPG based on Raymond E. Feist's novels with innovative combat.",
        "developer": "Dynamix"
      },
      {
        "id": 83,
        "title": "Quest for Glory II: Trial by Fire",
        "genre": "RPG",
        "description": "Blend adventure, RPG, and humor in this classic Sierra series entry.",
        "developer": "Sierra On-Line"
      },
      {
        "id": 84,
        "title": "Dark Messiah of Might and Magic",
        "genre": "RPG",
        "description": "First-person action RPG with physics-based combat and moral choices.",
        "developer": "Arkane Studios"
      },
      {
        "id": 85,
        "title": "Vampire: The Masquerade - Swansong",
        "genre": "RPG",
        "description": "Navigate vampire politics through dialogue and investigation in three intertwined stories.",
        "developer": "Big Bad Wolf"
      },
      {
        "id": 86,
        "title": "GreedFall 2",
        "genre": "RPG",
        "description": "Continue the colonial fantasy saga with deeper politics and combat.",
        "developer": "Spiders"
      },
      {
        "id": 87,
        "title": "Avowed",
        "genre": "RPG",
        "description": "First-person fantasy RPG set in the Pillars of Eternity universe.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 88,
        "title": "Dragon Age: The Veilguard",
        "genre": "RPG",
        "description": "Return to Thedas to combat ancient gods and close the veil.",
        "developer": "BioWare"
      },
      {
        "id": 89,
        "title": "Metroid Prime",
        "genre": "RPG",
        "description": "Explore a mysterious planet as bounty hunter Samus in first-person.",
        "developer": "Retro Studios"
      },
      {
        "id": 90,
        "title": "South Park: The Stick of Truth",
        "genre": "RPG",
        "description": "Join the kids of South Park in an epic, crude, and hilarious fantasy RPG.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 91,
        "title": "South Park: The Fractured But Whole",
        "genre": "RPG",
        "description": "Superhero kids battle for control of the town in this tactical RPG sequel.",
        "developer": "Ubisoft San Francisco"
      },
      {
        "id": 92,
        "title": "The Banner Saga 3",
        "genre": "RPG",
        "description": "Conclude the epic Viking caravan saga with even tougher choices.",
        "developer": "Stoic"
      },
      {
        "id": 93,
        "title": "Torment: Tides of Numenera",
        "genre": "RPG",
        "description": "A spiritual successor to Planescape: Torment with philosophical depth.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 94,
        "title": "Shadowrun: Hong Kong",
        "genre": "RPG",
        "description": "Cyberpunk shadowrunning in a neon-drenched future Hong Kong.",
        "developer": "Harebrained Schemes"
      },
      {
        "id": 95,
        "title": "Wasteland 3",
        "genre": "RPG",
        "description": "Frozen Colorado survival with squad-based tactics and dark humor.",
        "developer": "inXile Entertainment"
      },
      {
        "id": 96,
        "title": "Disco Elysium",
        "genre": "RPG",
        "description": "Master your own mind in this revolutionary narrative RPG.",
        "developer": "ZA/UM"
      },
      {
        "id": 97,
        "title": "Pentiment",
        "genre": "RPG",
        "description": "Solve murders in 16th-century Bavaria as an artist with historical accuracy.",
        "developer": "Obsidian Entertainment"
      },
      {
        "id": 98,
        "title": "Citizen Sleeper",
        "genre": "RPG",
        "description": "A dice-rolling narrative RPG about a synthetic refugee on a space station.",
        "developer": "Gareth Damian Martin"
      },
      {
        "id": 99,
        "title": "In Stars and Time",
        "genre": "RPG",
        "description": "A time-loop RPG where you relive the same adventure to save your friends.",
        "developer": "insertdisc5"
      },
      {
        "id": 100,
        "title": "Sea of Stars",
        "genre": "RPG",
        "description": "A retro-inspired turn-based RPG with beautiful pixel art and timing-based combat.",
        "developer": "Sabotage Studio"
      },
      {
        "id": 101,
        "title": "Half-Life 2",
        "genre": "FPS",
        "description": "Gordon Freeman fights an oppressive alien regime using physics-based gameplay and immersive storytelling.",
        "developer": "Valve"
      },
      {
        "id": 102,
        "title": "Doom (2016)",
        "genre": "FPS",
        "description": "Rip and tear through demons on Mars in this fast-paced, brutal revival of the classic series.",
        "developer": "id Software"
      },
      {
        "id": 103,
        "title": "Call of Duty 4: Modern Warfare",
        "genre": "FPS",
        "description": "A cinematic modern warfare campaign that redefined multiplayer shooters.",
        "developer": "Infinity Ward"
      },
      {
        "id": 104,
        "title": "Halo: Combat Evolved",
        "genre": "FPS",
        "description": "Master Chief battles the Covenant on the mysterious ringworld Halo.",
        "developer": "Bungie"
      },
      {
        "id": 105,
        "title": "BioShock",
        "genre": "FPS",
        "description": "Explore the underwater dystopia of Rapture and uncover its philosophical horrors.",
        "developer": "2K Boston"
      },
      {
        "id": 106,
        "title": "Counter-Strike",
        "genre": "FPS",
        "description": "Team-based tactical shooter where precision and strategy define every round.",
        "developer": "Valve"
      },
      {
        "id": 107,
        "title": "Quake",
        "genre": "FPS",
        "description": "Fast-paced arena combat against Lovecraftian horrors in a groundbreaking 3D engine.",
        "developer": "id Software"
      },
      {
        "id": 108,
        "title": "GoldenEye 007",
        "genre": "FPS",
        "description": "Iconic James Bond mission on the N64 with split-screen multiplayer.",
        "developer": "Rare"
      },
      {
        "id": 109,
        "title": "Titanfall 2",
        "genre": "FPS",
        "description": "Pilot massive mechs and engage in fluid movement-based combat with a memorable single-player campaign.",
        "developer": "Respawn Entertainment"
      },
      {
        "id": 110,
        "title": "Doom Eternal",
        "genre": "FPS",
        "description": "The Slayer returns to rip and tear across dimensions in even more intense demon-slaying action.",
        "developer": "id Software"
      },
      {
        "id": 111,
        "title": "Metro Exodus",
        "genre": "FPS",
        "description": "Survive a post-apocalyptic Russia on a cross-country train journey with stunning atmosphere.",
        "developer": "4A Games"
      },
      {
        "id": 112,
        "title": "Half-Life",
        "genre": "FPS",
        "description": "The game that revolutionized storytelling in shooters with seamless narrative and alien invasion.",
        "developer": "Valve"
      },
      {
        "id": 113,
        "title": "Portal 2",
        "genre": "FPS",
        "description": "Solve mind-bending puzzles with portals, witty AI, and cooperative gameplay.",
        "developer": "Valve"
      },
      {
        "id": 114,
        "title": "Left 4 Dead 2",
        "genre": "FPS",
        "description": "Survive relentless zombie hordes in this intense co-op shooter with dynamic AI.",
        "developer": "Valve"
      },
      {
        "id": 115,
        "title": "Battlefield Bad Company 2",
        "genre": "FPS",
        "description": "Destructible environments and large-scale warfare in this fan-favorite Battlefield entry.",
        "developer": "DICE"
      },
      {
        "id": 116,
        "title": "Wolfenstein: The New Order",
        "genre": "FPS",
        "description": "Fight Nazis in an alternate 1960s with a gripping story and intense action.",
        "developer": "MachineGames"
      },
      {
        "id": 117,
        "title": "Prey (2017)",
        "genre": "FPS",
        "description": "Immersive sim on a space station overrun by shape-shifting aliens.",
        "developer": "Arkane Studios"
      },
      {
        "id": 118,
        "title": "System Shock 2",
        "genre": "FPS",
        "description": "A terrifying sci-fi horror FPS with RPG elements and deep atmosphere.",
        "developer": "Irrational Games"
      },
      {
        "id": 119,
        "title": "Bioshock Infinite",
        "genre": "FPS",
        "description": "Soar through the floating city of Columbia and unravel its dark secrets.",
        "developer": "Irrational Games"
      },
      {
        "id": 120,
        "title": "Halo 2",
        "genre": "FPS",
        "description": "Epic continuation of the Halo saga with groundbreaking online multiplayer.",
        "developer": "Bungie"
      },
      {
        "id": 121,
        "title": "Overwatch",
        "genre": "FPS",
        "description": "Team-based hero shooter with colorful characters and dynamic objectives.",
        "developer": "Blizzard Entertainment"
      },
      {
        "id": 122,
        "title": "Team Fortress 2",
        "genre": "FPS",
        "description": "Class-based multiplayer mayhem with humor and endless replayability.",
        "developer": "Valve"
      },
      {
        "id": 123,
        "title": "Destiny 2",
        "genre": "FPS",
        "description": "Loot-driven sci-fi shooter with epic raids and evolving story content.",
        "developer": "Bungie"
      },
      {
        "id": 124,
        "title": "Rainbow Six Siege",
        "genre": "FPS",
        "description": "Tactical close-quarters combat with destructible environments and operator gadgets.",
        "developer": "Ubisoft Montreal"
      },
      {
        "id": 125,
        "title": "Valorant",
        "genre": "FPS",
        "description": "Precise tactical shooter blending CS-style gameplay with hero abilities.",
        "developer": "Riot Games"
      },
      {
        "id": 126,
        "title": "Apex Legends",
        "genre": "FPS",
        "description": "Fast-paced battle royale with unique legends and squad-based teamwork.",
        "developer": "Respawn Entertainment"
      },
      {
        "id": 127,
        "title": "Fortnite",
        "genre": "FPS",
        "description": "The cultural phenomenon battle royale with building, events, and constant updates.",
        "developer": "Epic Games"
      },
      {
        "id": 128,
        "title": "PUBG: Battlegrounds",
        "genre": "FPS",
        "description": "The game that popularized the battle royale genre with realistic survival gameplay.",
        "developer": "PUBG Studios"
      },
      {
        "id": 129,
        "title": "Borderlands 2",
        "genre": "FPS",
        "description": "Loot-shooter mayhem with humor, cel-shaded style, and co-op chaos.",
        "developer": "Gearbox Software"
      },
      {
        "id": 130,
        "title": "DOOM (1993)",
        "genre": "FPS",
        "description": "The original that defined the FPS genre with fast demons and iconic level design.",
        "developer": "id Software"
      },
      {
        "id": 131,
        "title": "Quake III Arena",
        "genre": "FPS",
        "description": "Pure arena multiplayer deathmatch with lightning-fast movement.",
        "developer": "id Software"
      },
      {
        "id": 132,
        "title": "Unreal Tournament",
        "genre": "FPS",
        "description": "Iconic multiplayer shooter with vehicles, modes, and competitive gameplay.",
        "developer": "Epic Games"
      },
      {
        "id": 133,
        "title": "Serious Sam",
        "genre": "FPS",
        "description": "Horde-based shooter with over-the-top action and hordes of enemies.",
        "developer": "Croteam"
      },
      {
        "id": 134,
        "title": "Painkiller",
        "genre": "FPS",
        "description": "Fast, brutal action against waves of hellish creatures.",
        "developer": "People Can Fly"
      },
      {
        "id": 135,
        "title": "F.E.A.R.",
        "genre": "FPS",
        "description": "Atmospheric horror shooter with advanced AI and slow-motion gunplay.",
        "developer": "Monolith Productions"
      },
      {
        "id": 136,
        "title": "Crysis",
        "genre": "FPS",
        "description": "Use a powerful nanosuit to tackle enemies with freedom in a tropical paradise.",
        "developer": "Crytek"
      },
      {
        "id": 137,
        "title": "Bulletstorm",
        "genre": "FPS",
        "description": "Creative, over-the-top shooter that rewards stylish kills.",
        "developer": "People Can Fly"
      },
      {
        "id": 138,
        "title": "Shadow Warrior",
        "genre": "FPS",
        "description": "Fast-paced samurai action with humor and katana-swordplay.",
        "developer": "Flying Wild Hog"
      },
      {
        "id": 139,
        "title": "Dusk",
        "genre": "FPS",
        "description": "Retro-style boomer shooter with dark atmosphere and intense action.",
        "developer": "New Blood Interactive"
      },
      {
        "id": 140,
        "title": "Amid Evil",
        "genre": "FPS",
        "description": "Colorful, fast-paced fantasy shooter inspired by classic arena games.",
        "developer": "IndieUs"
      },
      {
        "id": 141,
        "title": "Ultrakill",
        "genre": "FPS",
        "description": "Stylish, movement-heavy shooter set in a cyber-hell with ranking system.",
        "developer": "Hakita"
      },
      {
        "id": 142,
        "title": "Prodeus",
        "genre": "FPS",
        "description": "Modern retro shooter with gory, satisfying combat and level editor.",
        "developer": "Bounding Box Software"
      },
      {
        "id": 143,
        "title": "Ion Fury",
        "genre": "FPS",
        "description": "Build engine shooter with beautiful pixel art and explosive action.",
        "developer": "Voidpoint"
      },
      {
        "id": 144,
        "title": "Hrot",
        "genre": "FPS",
        "description": "Surreal Eastern European retro shooter with weird humor and atmosphere.",
        "developer": "Spytihněv"
      },
      {
        "id": 145,
        "title": "Cultic",
        "genre": "FPS",
        "description": "Atmospheric horror shooter inspired by 90s classics.",
        "developer": "Jasozz Games"
      },
      {
        "id": 146,
        "title": "Selaco",
        "genre": "FPS",
        "description": "Modern Build engine shooter with smart AI and detailed environments.",
        "developer": "Altered Orbit Studios"
      },
      {
        "id": 147,
        "title": "Wrath: Aeon of Ruin",
        "genre": "FPS",
        "description": "Dark fantasy Quake-style shooter with gothic atmosphere.",
        "developer": "3D Realms"
      },
      {
        "id": 148,
        "title": "Nightdive's System Shock",
        "genre": "FPS",
        "description": "Remake of the groundbreaking immersive sim horror classic.",
        "developer": "Nightdive Studios"
      },
      {
        "id": 149,
        "title": "The Callisto Protocol",
        "genre": "FPS",
        "description": "Horror survival shooter set in a brutal space prison.",
        "developer": "Striking Distance Studios"
      },
      {
        "id": 150,
        "title": "Dead Space",
        "genre": "FPS",
        "description": "Dismember necromorphs in zero-gravity horror aboard the USG Ishimura.",
        "developer": "Visceral Games"
      },
      {
        "id": 151,
        "title": "Returnal",
        "genre": "FPS",
        "description": "Roguelike shooter with intense action and a mysterious sci-fi story.",
        "developer": "Housemarque"
      },
      {
        "id": 152,
        "title": "Control",
        "genre": "FPS",
        "description": "Supernatural action in a shifting government building with telekinetic powers.",
        "developer": "Remedy Entertainment"
      },
      {
        "id": 153,
        "title": "Atomic Heart",
        "genre": "FPS",
        "description": "Retro-futuristic Soviet utopia gone wrong with quirky humor and combat.",
        "developer": "Mundfish"
      },
      {
        "id": 154,
        "title": "High on Life",
        "genre": "FPS",
        "description": "Rick and Morty-style humor meets first-person shooting with talking guns.",
        "developer": "Squanch Games"
      },
      {
        "id": 155,
        "title": "Deep Rock Galactic",
        "genre": "FPS",
        "description": "Co-op dwarf miners shooting bugs while mining precious resources.",
        "developer": "Ghost Ship Games"
      },
      {
        "id": 156,
        "title": "Helldivers 2",
        "genre": "FPS",
        "description": "Chaotic co-op satire of military sci-fi with friendly fire and massive battles.",
        "developer": "Arrowhead Game Studios"
      },
      {
        "id": 157,
        "title": "The Finals",
        "genre": "FPS",
        "description": "Fast-paced, destructible-arena shooter with unique movement and team play.",
        "developer": "Embark Studios"
      },
      {
        "id": 158,
        "title": "Marvel's Avengers",
        "genre": "FPS",
        "description": "Third-person action with hero abilities (note: often grouped in broader shooter discussions).",
        "developer": "Crystal Dynamics"
      },
      {
        "id": 159,
        "title": "Destiny",
        "genre": "FPS",
        "description": "Loot-driven MMO shooter that laid the foundation for its sequel.",
        "developer": "Bungie"
      },
      {
        "id": 160,
        "title": "Borderlands",
        "genre": "FPS",
        "description": "The original loot-shooter that started the franchise's humorous mayhem.",
        "developer": "Gearbox Software"
      },
      {
        "id": 161,
        "title": "Serious Sam 4",
        "genre": "FPS",
        "description": "More over-the-top horde shooting with Sam's signature attitude.",
        "developer": "Croteam"
      },
      {
        "id": 162,
        "title": "Shadow Warrior 3",
        "genre": "FPS",
        "description": "Stylish, fast-paced samurai shooter with humor and sword combat.",
        "developer": "Flying Wild Hog"
      },
      {
        "id": 163,
        "title": "Ghostrunner",
        "genre": "FPS",
        "description": "Cyberpunk parkour shooter with one-hit kills and neon aesthetics.",
        "developer": "One More Level"
      },
      {
        "id": 164,
        "title": "Bright Memory: Infinite",
        "genre": "FPS",
        "description": "Fast-paced action with sci-fi and fantasy elements in a short, intense package.",
        "developer": "FYQD-Studio"
      },
      {
        "id": 165,
        "title": "ULTRAKILL",
        "genre": "FPS",
        "description": "Retro-style blood-fueled shooter with style ranking and fast movement.",
        "developer": "Hakita"
      },
      {
        "id": 166,
        "title": "Prodeus",
        "genre": "FPS",
        "description": "Modern retro shooter with gory visuals and classic gameplay.",
        "developer": "Bounding Box Software"
      },
      {
        "id": 167,
        "title": "Ion Fury",
        "genre": "FPS",
        "description": "Build-engine shooter with detailed levels and explosive action.",
        "developer": "Voidpoint"
      },
      {
        "id": 168,
        "title": "Amid Evil",
        "genre": "FPS",
        "description": "Fantasy arena shooter with beautiful visuals and satisfying combat.",
        "developer": "IndieUs"
      },
      {
        "id": 169,
        "title": "Dusk",
        "genre": "FPS",
        "description": "Dark, atmospheric retro shooter with intense level design.",
        "developer": "New Blood Interactive"
      },
      {
        "id": 170,
        "title": "Cultic",
        "genre": "FPS",
        "description": "Horror-tinged retro shooter with moody atmosphere.",
        "developer": "Jasozz Games"
      },
      {
        "id": 171,
        "title": "Selaco",
        "genre": "FPS",
        "description": "Smart AI and detailed environments in a modern Build-engine shooter.",
        "developer": "Altered Orbit Studios"
      },
      {
        "id": 172,
        "title": "Wrath: Aeon of Ruin",
        "genre": "FPS",
        "description": "Dark fantasy Quake-inspired shooter.",
        "developer": "3D Realms"
      },
      {
        "id": 173,
        "title": "Nightdive's System Shock Remake",
        "genre": "FPS",
        "description": "Updated classic immersive sim horror shooter.",
        "developer": "Nightdive Studios"
      },
      {
        "id": 174,
        "title": "The Callisto Protocol",
        "genre": "FPS",
        "description": "Brutal sci-fi horror with dismemberment mechanics.",
        "developer": "Striking Distance Studios"
      },
      {
        "id": 175,
        "title": "Dead Space Remake",
        "genre": "FPS",
        "description": "Remastered horror classic with improved visuals and gameplay.",
        "developer": "Motive Studio"
      },
      {
        "id": 176,
        "title": "Returnal",
        "genre": "FPS",
        "description": "Roguelike shooter with psychological sci-fi narrative.",
        "developer": "Housemarque"
      },
      {
        "id": 177,
        "title": "Control Ultimate Edition",
        "genre": "FPS",
        "description": "Supernatural action with telekinesis in a shifting Federal Bureau.",
        "developer": "Remedy Entertainment"
      },
      {
        "id": 178,
        "title": "Atomic Heart",
        "genre": "FPS",
        "description": "Soviet retro-futuristic shooter with quirky robots and humor.",
        "developer": "Mundfish"
      },
      {
        "id": 179,
        "title": "High on Life",
        "genre": "FPS",
        "description": "Hilarious talking-gun shooter from the creators of Rick and Morty.",
        "developer": "Squanch Games"
      },
      {
        "id": 180,
        "title": "Deep Rock Galactic",
        "genre": "FPS",
        "description": "Co-op mining shooter with dwarves, bugs, and beer.",
        "developer": "Ghost Ship Games"
      },
      {
        "id": 181,
        "title": "Helldivers 2",
        "genre": "FPS",
        "description": "Satirical co-op shooter with massive battles and friendly fire.",
        "developer": "Arrowhead Game Studios"
      },
      {
        "id": 182,
        "title": "The Finals",
        "genre": "FPS",
        "description": "Destructible arena shooter with creative movement.",
        "developer": "Embark Studios"
      },
      {
        "id": 183,
        "title": "Marvel Rivals",
        "genre": "FPS",
        "description": "Hero-based team shooter featuring Marvel characters.",
        "developer": "NetEase Games"
      },
      {
        "id": 184,
        "title": "Concord",
        "genre": "FPS",
        "description": "Stylish hero shooter with unique crew abilities.",
        "developer": "Firewalk Studios"
      },
      {
        "id": 185,
        "title": "Splitgate",
        "genre": "FPS",
        "description": "Portal meets Halo in this fast-paced multiplayer shooter.",
        "developer": "1047 Games"
      },
      {
        "id": 186,
        "title": "Halo Infinite",
        "genre": "FPS",
        "description": "Open-world Master Chief adventure with updated multiplayer.",
        "developer": "343 Industries"
      },
      {
        "id": 187,
        "title": "Battlefield 2042",
        "genre": "FPS",
        "description": "Large-scale futuristic warfare with dynamic weather and destruction.",
        "developer": "DICE"
      },
      {
        "id": 188,
        "title": "Call of Duty: Modern Warfare II (2022)",
        "genre": "FPS",
        "description": "Modern tactical shooter with campaign, multiplayer, and Warzone.",
        "developer": "Infinity Ward"
      },
      {
        "id": 189,
        "title": "Rainbow Six Extraction",
        "genre": "FPS",
        "description": "Co-op alien containment shooter with tactical operators.",
        "developer": "Ubisoft Montreal"
      },
      {
        "id": 190,
        "title": "Back 4 Blood",
        "genre": "FPS",
        "description": "Spiritual successor to Left 4 Dead with card-based progression.",
        "developer": "Turtle Rock Studios"
      },
      {
        "id": 191,
        "title": "World War Z",
        "genre": "FPS",
        "description": "Horde-based co-op shooter based on the film with massive zombie swarms.",
        "developer": "Saber Interactive"
      },
      {
        "id": 192,
        "title": "Killing Floor 2",
        "genre": "FPS",
        "description": "Wave-based survival horror shooter with gore and perks.",
        "developer": "Tripwire Interactive"
      },
      {
        "id": 193,
        "title": "Payday 2",
        "genre": "FPS",
        "description": "Co-op heist shooter with deep customization and stealth options.",
        "developer": "Overkill Software"
      },
      {
        "id": 194,
        "title": "Escape from Tarkov",
        "genre": "FPS",
        "description": "Hardcore extraction shooter with realistic gunplay and loot.",
        "developer": "Battlestate Games"
      },
      {
        "id": 195,
        "title": "Hunt: Showdown",
        "genre": "FPS",
        "description": "PvPvE bounty hunter shooter in a dark, monster-filled bayou.",
        "developer": "Crytek"
      },
      {
        "id": 196,
        "title": "Insurgency: Sandstorm",
        "genre": "FPS",
        "description": "Realistic tactical shooter with intense close-quarters combat.",
        "developer": "New World Interactive"
      },
      {
        "id": 197,
        "title": "Squad",
        "genre": "FPS",
        "description": "Large-scale realistic military simulation with teamwork emphasis.",
        "developer": "Offworld Industries"
      },
      {
        "id": 198,
        "title": "Hell Let Loose",
        "genre": "FPS",
        "description": "WWII large-scale battles with infantry, tanks, and logistics.",
        "developer": "Team17"
      },
      {
        "id": 199,
        "title": "Post Scriptum",
        "genre": "FPS",
        "description": "Realistic WWII tactical shooter focused on historical battles.",
        "developer": "Periscope Games"
      },
      {
        "id": 200,
        "title": "Ready or Not",
        "genre": "FPS",
        "description": "Tactical SWAT simulator with realistic room-clearing and moral decisions.",
        "developer": "VOID Interactive"
      },
      {
        "id": 201,
        "title": "The Legend of Zelda: Breath of the Wild",
        "genre": "Adventure",
        "description": "Explore a vast open Hyrule with freedom to climb, glide, and solve puzzles your way.",
        "developer": "Nintendo"
      },
      {
        "id": 202,
        "title": "Red Dead Redemption 2",
        "genre": "Adventure",
        "description": "Immerse yourself in the American West as outlaw Arthur Morgan in a living, breathing world.",
        "developer": "Rockstar Games"
      },
      {
        "id": 203,
        "title": "God of War (2018)",
        "genre": "Adventure",
        "description": "Kratos and his son Atreus embark on a mythic journey through Norse realms.",
        "developer": "Santa Monica Studio"
      },
      {
        "id": 204,
        "title": "The Last of Us Part II",
        "genre": "Adventure",
        "description": "A gripping story of revenge, survival, and morality in a post-apocalyptic world.",
        "developer": "Naughty Dog"
      },
      {
        "id": 205,
        "title": "Uncharted 2: Among Thieves",
        "genre": "Adventure",
        "description": "Nathan Drake's globe-trotting treasure hunt with cinematic set pieces and humor.",
        "developer": "Naughty Dog"
      },
      {
        "id": 206,
        "title": "Tomb Raider (2013)",
        "genre": "Adventure",
        "description": "The origin story of Lara Croft as she survives a deadly island.",
        "developer": "Crystal Dynamics"
      },
      {
        "id": 207,
        "title": "Horizon Zero Dawn",
        "genre": "Adventure",
        "description": "Hunt robotic beasts in a post-apocalyptic world reclaimed by nature.",
        "developer": "Guerrilla Games"
      },
      {
        "id": 208,
        "title": "Assassin's Creed II",
        "genre": "Adventure",
        "description": "Ezio Auditore's revenge story in Renaissance Italy with parkour and historical intrigue.",
        "developer": "Ubisoft Montreal"
      },
      {
        "id": 209,
        "title": "Spider-Man (2018)",
        "genre": "Adventure",
        "description": "Swing through New York as Peter Parker in this fluid, story-driven superhero game.",
        "developer": "Insomniac Games"
      },
      {
        "id": 210,
        "title": "Marvel's Spider-Man 2",
        "genre": "Adventure",
        "description": "Peter and Miles face new threats and Venom in an expanded New York.",
        "developer": "Insomniac Games"
      },
      {
        "id": 211,
        "title": "Indiana Jones and the Great Circle",
        "genre": "Adventure",
        "description": "Whip-cracking adventure with puzzles, combat, and cinematic storytelling.",
        "developer": "MachineGames"
      },
      {
        "id": 212,
        "title": "Outer Wilds",
        "genre": "Adventure",
        "description": "Explore a miniature solar system trapped in a 22-minute time loop.",
        "developer": "Mobius Digital"
      },
      {
        "id": 213,
        "title": "Return of the Obra Dinn",
        "genre": "Adventure",
        "description": "Solve the mystery of a ghost ship by deducing the fate of its crew.",
        "developer": "Lucas Pope"
      },
      {
        "id": 214,
        "title": "What Remains of Edith Finch",
        "genre": "Adventure",
        "description": "A touching walking simulator exploring the tragic stories of a cursed family.",
        "developer": "Giant Sparrow"
      },
      {
        "id": 215,
        "title": "Firewatch",
        "genre": "Adventure",
        "description": "A summer as a fire lookout in Wyoming with mysterious radio conversations.",
        "developer": "Campo Santo"
      },
      {
        "id": 216,
        "title": "Life is Strange",
        "genre": "Adventure",
        "description": "A young woman with time-rewind powers faces moral choices in a small town.",
        "developer": "Dontnod Entertainment"
      },
      {
        "id": 217,
        "title": "Detroit: Become Human",
        "genre": "Adventure",
        "description": "Three androids fight for freedom in a near-future Detroit with branching narratives.",
        "developer": "Quantic Dream"
      },
      {
        "id": 218,
        "title": "Heavy Rain",
        "genre": "Adventure",
        "description": "A gripping crime thriller where every choice can lead to drastically different endings.",
        "developer": "Quantic Dream"
      },
      {
        "id": 219,
        "title": "Beyond: Two Souls",
        "genre": "Adventure",
        "description": "A young woman with a supernatural connection experiences a life of extraordinary events.",
        "developer": "Quantic Dream"
      },
      {
        "id": 220,
        "title": "The Walking Dead (Telltale)",
        "genre": "Adventure",
        "description": "Emotional story of survival and tough choices in a zombie apocalypse.",
        "developer": "Telltale Games"
      },
      {
        "id": 221,
        "title": "The Wolf Among Us",
        "genre": "Adventure",
        "description": "Investigate murders in a world where fairy tale characters live among us.",
        "developer": "Telltale Games"
      },
      {
        "id": 222,
        "title": "Kentucky Route Zero",
        "genre": "Adventure",
        "description": "Surreal magical realist journey along a mysterious highway.",
        "developer": "Cardboard Computer"
      },
      {
        "id": 223,
        "title": "Grim Fandango",
        "genre": "Adventure",
        "description": "A noir-style adventure in the Land of the Dead with puzzles and memorable characters.",
        "developer": "LucasArts"
      },
      {
        "id": 224,
        "title": "The Secret of Monkey Island",
        "genre": "Adventure",
        "description": "Guybrush Threepwood's hilarious pirate adventure with clever puzzles.",
        "developer": "LucasArts"
      },
      {
        "id": 225,
        "title": "Monkey Island 2: LeChuck's Revenge",
        "genre": "Adventure",
        "description": "Guybrush returns for more swashbuckling humor and bigger puzzles.",
        "developer": "LucasArts"
      },
      {
        "id": 226,
        "title": "Day of the Tentacle",
        "genre": "Adventure",
        "description": "Time-travel comedy with three characters fixing a mutant tentacle problem.",
        "developer": "LucasArts"
      },
      {
        "id": 227,
        "title": "Full Throttle",
        "genre": "Adventure",
        "description": "A biker gang leader fights corruption in a post-apocalyptic road adventure.",
        "developer": "LucasArts"
      },
      {
        "id": 228,
        "title": "Indiana Jones and the Fate of Atlantis",
        "genre": "Adventure",
        "description": "Indy races Nazis to discover the lost city of Atlantis.",
        "developer": "LucasArts"
      },
      {
        "id": 229,
        "title": "Broken Sword: The Shadow of the Templars",
        "genre": "Adventure",
        "description": "A journalist and an American tourist uncover a Templar conspiracy in Paris.",
        "developer": "Revolution Software"
      },
      {
        "id": 230,
        "title": "The Longest Journey",
        "genre": "Adventure",
        "description": "A young woman travels between twin worlds of science and magic.",
        "developer": "Funcom"
      },
      {
        "id": 231,
        "title": "Syberia",
        "genre": "Adventure",
        "description": "A lawyer searches for a missing inventor across Europe in a steampunk world.",
        "developer": "Microïds"
      },
      {
        "id": 232,
        "title": "Machinarium",
        "genre": "Adventure",
        "description": "A charming robot solves puzzles in a beautifully hand-drawn mechanical world.",
        "developer": "Amanita Design"
      },
      {
        "id": 233,
        "title": "Samorost 3",
        "genre": "Adventure",
        "description": "A whimsical point-and-click adventure with surreal alien worlds and beautiful music.",
        "developer": "Amanita Design"
      },
      {
        "id": 234,
        "title": "Botanicula",
        "genre": "Adventure",
        "description": "Help tiny creatures save their tree home in this charming puzzle adventure.",
        "developer": "Amanita Design"
      },
      {
        "id": 235,
        "title": "Chuchel",
        "genre": "Adventure",
        "description": "A fuzzy orange creature's hilarious quest for a cherry.",
        "developer": "Amanita Design"
      },
      {
        "id": 236,
        "title": "The Witness",
        "genre": "Adventure",
        "description": "Solve hundreds of line-drawing puzzles on a mysterious island.",
        "developer": "Thekla, Inc."
      },
      {
        "id": 237,
        "title": "Myst",
        "genre": "Adventure",
        "description": "The groundbreaking puzzle adventure set on surreal linking books and islands.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 238,
        "title": "Riven",
        "genre": "Adventure",
        "description": "The stunning sequel to Myst with even more intricate puzzles and atmosphere.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 239,
        "title": "Portal",
        "genre": "Adventure",
        "description": "Test chamber puzzles with portals and a sarcastic AI companion.",
        "developer": "Valve"
      },
      {
        "id": 240,
        "title": "Portal 2",
        "genre": "Adventure",
        "description": "Expanded puzzles, co-op, and one of gaming's best-written stories.",
        "developer": "Valve"
      },
      {
        "id": 241,
        "title": "The Stanley Parable",
        "genre": "Adventure",
        "description": "A meta-narrative exploration of choice, narration, and video game conventions.",
        "developer": "Galactic Cafe"
      },
      {
        "id": 242,
        "title": "Gone Home",
        "genre": "Adventure",
        "description": "A quiet, emotional exploration of a family's empty house and hidden stories.",
        "developer": "The Fullbright Company"
      },
      {
        "id": 243,
        "title": "Tacoma",
        "genre": "Adventure",
        "description": "Investigate the abandoned space station Tacoma through augmented reality logs.",
        "developer": "Fullbright"
      },
      {
        "id": 244,
        "title": "Oxenfree",
        "genre": "Adventure",
        "description": "Teenagers on an island uncover supernatural radio mysteries and time loops.",
        "developer": "Night School Studio"
      },
      {
        "id": 245,
        "title": "Night in the Woods",
        "genre": "Adventure",
        "description": "A young cat returns home to face depression, mystery, and small-town secrets.",
        "developer": "Infinite Fall"
      },
      {
        "id": 246,
        "title": "Celeste",
        "genre": "Adventure",
        "description": "A platformer with deep story about mental health and climbing a mountain.",
        "developer": "Maddy Makes Games"
      },
      {
        "id": 247,
        "title": "Hollow Knight",
        "genre": "Adventure",
        "description": "Explore a vast, beautiful, and dangerous insect kingdom in this Metroidvania.",
        "developer": "Team Cherry"
      },
      {
        "id": 248,
        "title": "Ori and the Blind Forest",
        "genre": "Adventure",
        "description": "A emotional platformer with stunning visuals and fluid movement.",
        "developer": "Moon Studios"
      },
      {
        "id": 249,
        "title": "Ori and the Will of the Wisps",
        "genre": "Adventure",
        "description": "Continue the journey with improved combat and even more beautiful worlds.",
        "developer": "Moon Studios"
      },
      {
        "id": 250,
        "title": "A Short Hike",
        "genre": "Adventure",
        "description": "A relaxing, charming hike up a mountain with birds and light platforming.",
        "developer": "Adamgryu"
      },
      {
        "id": 251,
        "title": "Spiritfarer",
        "genre": "Adventure",
        "description": "A cozy management game where you ferry spirits to the afterlife.",
        "developer": "Thunder Lotus Games"
      },
      {
        "id": 252,
        "title": "Gris",
        "genre": "Adventure",
        "description": "A beautiful watercolor journey through grief and self-discovery.",
        "developer": "Nomada Studio"
      },
      {
        "id": 253,
        "title": "Journey",
        "genre": "Adventure",
        "description": "A wordless, emotional pilgrimage across a vast desert toward a distant mountain.",
        "developer": "thatgamecompany"
      },
      {
        "id": 254,
        "title": "Abzû",
        "genre": "Adventure",
        "description": "A serene underwater exploration of vibrant oceans and marine life.",
        "developer": "Giant Squid"
      },
      {
        "id": 255,
        "title": "Flower",
        "genre": "Adventure",
        "description": "Control the wind to guide petals across beautiful landscapes.",
        "developer": "thatgamecompany"
      },
      {
        "id": 256,
        "title": "The Pathless",
        "genre": "Adventure",
        "description": "An archer hunts an evil curse in a vast, open world with fluid movement.",
        "developer": "Giant Squid"
      },
      {
        "id": 257,
        "title": "Fez",
        "genre": "Adventure",
        "description": "A 2D/3D puzzle platformer where rotating the world reveals new perspectives.",
        "developer": "Polytron Corporation"
      },
      {
        "id": 258,
        "title": "Inside",
        "genre": "Adventure",
        "description": "A dark, atmospheric puzzle-platformer with a haunting narrative.",
        "developer": "Playdead"
      },
      {
        "id": 259,
        "title": "Limbo",
        "genre": "Adventure",
        "description": "A boy searches for his sister in a dark, dangerous world of traps and puzzles.",
        "developer": "Playdead"
      },
      {
        "id": 260,
        "title": "Little Nightmares",
        "genre": "Adventure",
        "description": "A small girl escapes a nightmarish world filled with grotesque inhabitants.",
        "developer": "Tarsier Studios"
      },
      {
        "id": 261,
        "title": "Little Nightmares II",
        "genre": "Adventure",
        "description": "A boy and a girl team up to escape even darker horrors.",
        "developer": "Tarsier Studios"
      },
      {
        "id": 262,
        "title": "Stray",
        "genre": "Adventure",
        "description": "Play as a cat exploring a cybercity populated by robots.",
        "developer": "BlueTwelve Studio"
      },
      {
        "id": 263,
        "title": "Untitled Goose Game",
        "genre": "Adventure",
        "description": "Be a mischievous goose causing chaos in a peaceful village.",
        "developer": "House House"
      },
      {
        "id": 264,
        "title": "Donut County",
        "genre": "Adventure",
        "description": "A quirky physics puzzle game where you control a growing hole.",
        "developer": "Ben Esposito"
      },
      {
        "id": 265,
        "title": "Katamari Damacy Reroll",
        "genre": "Adventure",
        "description": "Roll up everything in sight to create stars in this whimsical classic.",
        "developer": "Bandai Namco"
      },
      {
        "id": 266,
        "title": "We Happy Few",
        "genre": "Adventure",
        "description": "Survive in a dystopian 1960s Britain where everyone is on happy pills.",
        "developer": "Compulsion Games"
      },
      {
        "id": 267,
        "title": "The Stanley Parable: Ultra Deluxe",
        "genre": "Adventure",
        "description": "Expanded meta-narrative with even more choices and commentary on games.",
        "developer": "Crows Crows Crows"
      },
      {
        "id": 268,
        "title": "Outer Wilds: Echoes of the Eye",
        "genre": "Adventure",
        "description": "DLC expansion adding new mysteries and terrifying new areas to explore.",
        "developer": "Mobius Digital"
      },
      {
        "id": 269,
        "title": "The Witness",
        "genre": "Adventure",
        "description": "Hundreds of line puzzles on a mysterious island with deep environmental storytelling.",
        "developer": "Thekla, Inc."
      },
      {
        "id": 270,
        "title": "Myst",
        "genre": "Adventure",
        "description": "Classic puzzle adventure with linking books and atmospheric islands.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 271,
        "title": "Riven",
        "genre": "Adventure",
        "description": "Stunning sequel with intricate puzzles and a living world.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 272,
        "title": "Obduction",
        "genre": "Adventure",
        "description": "Myst-like puzzle adventure where you are transported to alien worlds.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 273,
        "title": "Firmament",
        "genre": "Adventure",
        "description": "Myst-style puzzle adventure with beautiful Victorian sci-fi aesthetics.",
        "developer": "Cyan Worlds"
      },
      {
        "id": 274,
        "title": "The Room",
        "genre": "Adventure",
        "description": "Intricate mechanical puzzle boxes with a mysterious narrative.",
        "developer": "Fireproof Games"
      },
      {
        "id": 275,
        "title": "The Room Two",
        "genre": "Adventure",
        "description": "More complex puzzle boxes with deeper story connections.",
        "developer": "Fireproof Games"
      },
      {
        "id": 276,
        "title": "Gorogoa",
        "genre": "Adventure",
        "description": "A beautiful hand-drawn puzzle game where you rearrange illustrated panels.",
        "developer": "Jason Roberts"
      },
      {
        "id": 277,
        "title": "Monument Valley",
        "genre": "Adventure",
        "description": "Optical illusion puzzles in stunning minimalist architecture.",
        "developer": "ustwo games"
      },
      {
        "id": 278,
        "title": "Monument Valley 2",
        "genre": "Adventure",
        "description": "A mother and child journey through beautiful, impossible architecture.",
        "developer": "ustwo games"
      },
      {
        "id": 279,
        "title": "The Gardens Between",
        "genre": "Adventure",
        "description": "Manipulate time to solve puzzles in a touching friendship story.",
        "developer": "The Voxel Agents"
      },
      {
        "id": 280,
        "title": "A Plague Tale: Innocence",
        "genre": "Adventure",
        "description": "Two siblings survive the Black Death and rat swarms in medieval France.",
        "developer": "Asobo Studio"
      },
      {
        "id": 281,
        "title": "A Plague Tale: Requiem",
        "genre": "Adventure",
        "description": "The siblings' journey continues with even greater stakes and rat hordes.",
        "developer": "Asobo Studio"
      },
      {
        "id": 282,
        "title": "Sable",
        "genre": "Adventure",
        "description": "A coming-of-age journey across a beautiful desert world on a hoverbike.",
        "developer": "Shedworks"
      },
      {
        "id": 283,
        "title": "Eastshade",
        "genre": "Adventure",
        "description": "A painter explores a beautiful world and paints landscapes for its inhabitants.",
        "developer": "Eastshade Studios"
      },
      {
        "id": 284,
        "title": "The Witness",
        "genre": "Adventure",
        "description": "Line-drawing puzzles integrated into a mysterious island environment.",
        "developer": "Thekla, Inc."
      },
      {
        "id": 285,
        "title": "Fez",
        "genre": "Adventure",
        "description": "Rotate the 2D world into 3D to solve perspective-based puzzles.",
        "developer": "Polytron"
      },
      {
        "id": 286,
        "title": "Braid",
        "genre": "Adventure",
        "description": "Time-manipulation puzzles with a story about regret and pursuit.",
        "developer": "Number None"
      },
      {
        "id": 287,
        "title": "Super Meat Boy",
        "genre": "Adventure",
        "description": "Extremely difficult platforming with a bloody sense of humor.",
        "developer": "Team Meat"
      },
      {
        "id": 288,
        "title": "Celeste",
        "genre": "Adventure",
        "description": "Precise platforming combined with a heartfelt story about anxiety.",
        "developer": "Maddy Makes Games"
      },
      {
        "id": 289,
        "title": "Hollow Knight",
        "genre": "Adventure",
        "description": "Metroidvania masterpiece with beautiful art and challenging bosses.",
        "developer": "Team Cherry"
      },
      {
        "id": 290,
        "title": "Ori and the Will of the Wisps",
        "genre": "Adventure",
        "description": "Stunning Metroidvania with emotional storytelling and fluid platforming.",
        "developer": "Moon Studios"
      },
      {
        "id": 291,
        "title": "Dead Cells",
        "genre": "Adventure",
        "description": "Roguelite Metroidvania with fast combat and permanent progression.",
        "developer": "Motion Twin"
      },
      {
        "id": 292,
        "title": "Blasphemous",
        "genre": "Adventure",
        "description": "Dark, religious-themed Metroidvania with pixel art and brutal combat.",
        "developer": "The Game Kitchen"
      },
      {
        "id": 293,
        "title": "Salt and Sanctuary",
        "genre": "Adventure",
        "description": "2D Souls-like with deep character building and challenging bosses.",
        "developer": "Ska Studios"
      },
      {
        "id": 294,
        "title": "The Messenger",
        "genre": "Adventure",
        "description": "Ninja platformer with time-travel mechanics and 8-bit to 16-bit transitions.",
        "developer": "Sabotage Studio"
      },
      {
        "id": 295,
        "title": "Carrion",
        "genre": "Adventure",
        "description": "Reverse horror where you play as a tentacled monster escaping a facility.",
        "developer": "Phobia Game Studio"
      },
      {
        "id": 296,
        "title": "Katana ZERO",
        "genre": "Adventure",
        "description": "Stylish pixel-art action with time manipulation and a dark cyberpunk story.",
        "developer": "Askiisoft"
      },
      {
        "id": 297,
        "title": "Dead Estate",
        "genre": "Adventure",
        "description": "Roguelike horror shooter with pixel art and chaotic gameplay.",
        "developer": "Milkstone Studios"
      },
      {
        "id": 298,
        "title": "Noita",
        "genre": "Adventure",
        "description": "Every pixel is simulated in this physics-based roguelike wizard adventure.",
        "developer": "Nolla Games"
      },
      {
        "id": 299,
        "title": "Inscryption",
        "genre": "Adventure",
        "description": "A card game that evolves into a horror meta-narrative with multiple layers.",
        "developer": "Daniel Mullins Games"
      },
      {
        "id": 300,
        "title": "Dredge",
        "genre": "Adventure",
        "description": "Fish by day and uncover cosmic horror by night in this fishing adventure.",
        "developer": "Black Salt Games"
      },
      {
        "id": 301,
        "title": "FIFA 23",
        "genre": "Sports",
        "description": "The latest entry in the long-running soccer simulation series with realistic gameplay and modes.",
        "developer": "EA Sports"
      },
      {
        "id": 302,
        "title": "EA Sports FC 24",
        "genre": "Sports",
        "description": "The rebranded continuation of the FIFA series with Ultimate Team and hyper-realistic matches.",
        "developer": "EA Sports"
      },
      {
        "id": 303,
        "title": "NBA 2K24",
        "genre": "Sports",
        "description": "Basketball simulation with deep career mode, MyTeam, and realistic player animations.",
        "developer": "Visual Concepts"
      },
      {
        "id": 304,
        "title": "Madden NFL 24",
        "genre": "Sports",
        "description": "American football simulation with franchise mode and realistic gameplay mechanics.",
        "developer": "EA Tiburon"
      },
      {
        "id": 305,
        "title": "Tony Hawk's Pro Skater 1 + 2",
        "genre": "Sports",
        "description": "Remake of the classic skateboarding games with updated graphics and all the original levels.",
        "developer": "Vicarious Visions"
      },
      {
        "id": 306,
        "title": "Wii Sports",
        "genre": "Sports",
        "description": "Casual sports fun with tennis, bowling, golf, boxing, and baseball using motion controls.",
        "developer": "Nintendo"
      },
      {
        "id": 307,
        "title": "Rocket League",
        "genre": "Sports",
        "description": "Soccer with rocket-powered cars in fast-paced, chaotic multiplayer matches.",
        "developer": "Psyonix"
      },
      {
        "id": 308,
        "title": "MLB The Show 24",
        "genre": "Sports",
        "description": "Baseball simulation with Road to the Show, Diamond Dynasty, and realistic gameplay.",
        "developer": "San Diego Studio"
      },
      {
        "id": 309,
        "title": "PGA Tour 2K23",
        "genre": "Sports",
        "description": "Realistic golf simulation with career mode and course creator.",
        "developer": "HB Studios"
      },
      {
        "id": 310,
        "title": "F1 23",
        "genre": "Sports",
        "description": "Formula 1 racing simulation with career mode and authentic tracks.",
        "developer": "Codemasters"
      },
      {
        "id": 311,
        "title": "NHL 24",
        "genre": "Sports",
        "description": "Ice hockey simulation with realistic skating and team management modes.",
        "developer": "EA Vancouver"
      },
      {
        "id": 312,
        "title": "Fight Night Champion",
        "genre": "Sports",
        "description": "Boxing game with deep career mode and impactful punch mechanics.",
        "developer": "EA Canada"
      },
      {
        "id": 313,
        "title": "NBA Jam",
        "genre": "Sports",
        "description": "Arcade-style basketball with over-the-top dunks and fun gameplay.",
        "developer": "Midway"
      },
      {
        "id": 314,
        "title": "MVP Baseball 2005",
        "genre": "Sports",
        "description": "Highly regarded baseball game with deep mechanics and commentary.",
        "developer": "EA Canada"
      },
      {
        "id": 315,
        "title": "SSX 3",
        "genre": "Sports",
        "description": "Snowboarding adventure on a massive mountain with tricks and exploration.",
        "developer": "EA Canada"
      },
      {
        "id": 316,
        "title": "Mario Kart 8 Deluxe",
        "genre": "Sports",
        "description": "Fun kart racing with iconic Nintendo characters and tracks.",
        "developer": "Nintendo"
      },
      {
        "id": 317,
        "title": "Steep",
        "genre": "Sports",
        "description": "Open-world extreme sports game with skiing, snowboarding, and wingsuiting.",
        "developer": "Ubisoft Annecy"
      },
      {
        "id": 318,
        "title": "Skate 3",
        "genre": "Sports",
        "description": "Skateboarding sandbox with creative tricks and online community features.",
        "developer": "EA Black Box"
      },
      {
        "id": 319,
        "title": "Tiger Woods PGA Tour 2008",
        "genre": "Sports",
        "description": "Golf simulation with career mode and realistic courses.",
        "developer": "EA Tiburon"
      },
      {
        "id": 320,
        "title": "Pro Evolution Soccer 6",
        "genre": "Sports",
        "description": "Highly praised soccer simulation with fluid gameplay.",
        "developer": "Konami"
      },
      {
        "id": 321,
        "title": "Winning Eleven 7",
        "genre": "Sports",
        "description": "Classic soccer game known for its realistic passing and tactics.",
        "developer": "Konami"
      },
      {
        "id": 322,
        "title": "FIFA 13",
        "genre": "Sports",
        "description": "Soccer title with improved AI and player impact engine.",
        "developer": "EA Canada"
      },
      {
        "id": 323,
        "title": "Madden NFL 2005",
        "genre": "Sports",
        "description": "Football classic with superstar mode and realistic gameplay.",
        "developer": "EA Tiburon"
      },
      {
        "id": 324,
        "title": "ESPN NFL 2K5",
        "genre": "Sports",
        "description": "Football simulation with deep franchise features and gameplay.",
        "developer": "Visual Concepts"
      },
      {
        "id": 325,
        "title": "NHL '94",
        "genre": "Sports",
        "description": "Iconic hockey game with fast-paced arcade-style action.",
        "developer": "EA Sports"
      },
      {
        "id": 326,
        "title": "NCAA Football 14",
        "genre": "Sports",
        "description": "College football title with dynasty mode and realistic gameplay.",
        "developer": "EA Tiburon"
      },
      {
        "id": 327,
        "title": "NBA 2K11",
        "genre": "Sports",
        "description": "Basketball game featuring Michael Jordan and deep career options.",
        "developer": "Visual Concepts"
      },
      {
        "id": 328,
        "title": "NBA Street Vol. 2",
        "genre": "Sports",
        "description": "Arcade basketball with stylish tricks and street court atmosphere.",
        "developer": "EA Canada"
      },
      {
        "id": 329,
        "title": "WWF No Mercy",
        "genre": "Sports",
        "description": "Classic wrestling game with creation suite and story mode.",
        "developer": "AKI Corporation"
      },
      {
        "id": 330,
        "title": "Madden NFL 08",
        "genre": "Sports",
        "description": "Football title known for its gameplay improvements and features.",
        "developer": "EA Tiburon"
      },
      {
        "id": 331,
        "title": "NCAA Football 06",
        "genre": "Sports",
        "description": "College football with dynasty mode and recruiting.",
        "developer": "EA Tiburon"
      },
      {
        "id": 332,
        "title": "College Hoops 2K8",
        "genre": "Sports",
        "description": "College basketball simulation with deep legacy mode.",
        "developer": "Visual Concepts"
      },
      {
        "id": 333,
        "title": "MLB 2K5",
        "genre": "Sports",
        "description": "Baseball title praised for its pitching and hitting mechanics.",
        "developer": "Visual Concepts"
      },
      {
        "id": 334,
        "title": "Burnout 3: Takedown",
        "genre": "Sports",
        "description": "Arcade racing with spectacular crashes and takedowns.",
        "developer": "Criterion Games"
      },
      {
        "id": 335,
        "title": "Need for Speed: Most Wanted (2005)",
        "genre": "Sports",
        "description": "Street racing with police chases and black list rivals.",
        "developer": "EA Canada"
      },
      {
        "id": 336,
        "title": "Forza Horizon 5",
        "genre": "Sports",
        "description": "Open-world racing in a vibrant Mexican landscape with festivals.",
        "developer": "Playground Games"
      },
      {
        "id": 337,
        "title": "Gran Turismo 7",
        "genre": "Sports",
        "description": "Realistic racing simulation with hundreds of cars and tracks.",
        "developer": "Polyphony Digital"
      },
      {
        "id": 338,
        "title": "Assetto Corsa Competizione",
        "genre": "Sports",
        "description": "High-fidelity GT racing simulation with laser-scanned tracks.",
        "developer": "Kunos Simulazioni"
      },
      {
        "id": 339,
        "title": "iRacing",
        "genre": "Sports",
        "description": "Professional-grade online racing simulation used by real drivers.",
        "developer": "iRacing.com Motorsport Simulations"
      },
      {
        "id": 340,
        "title": "Dirt Rally 2.0",
        "genre": "Sports",
        "description": "Challenging rally racing with realistic physics and weather.",
        "developer": "Codemasters"
      },
      {
        "id": 341,
        "title": "Project CARS 2",
        "genre": "Sports",
        "description": "Detailed racing sim with weather, day-night cycles, and variety.",
        "developer": "Slightly Mad Studios"
      },
      {
        "id": 342,
        "title": "rFactor 2",
        "genre": "Sports",
        "description": "Moddable racing simulation with advanced physics.",
        "developer": "Studio 397"
      },
      {
        "id": 343,
        "title": "Wreckfest",
        "genre": "Sports",
        "description": "Demolition derby racing with realistic car damage and destruction.",
        "developer": "Bugbear Entertainment"
      },
      {
        "id": 344,
        "title": "TrackMania",
        "genre": "Sports",
        "description": "Fast-paced racing with user-created tracks and competitive leaderboards.",
        "developer": "Nadeo"
      },
      {
        "id": 345,
        "title": "Hot Wheels Unleashed",
        "genre": "Sports",
        "description": "Fun arcade racing with iconic Hot Wheels cars and tracks.",
        "developer": "Milestone"
      },
      {
        "id": 346,
        "title": "Dirt 5",
        "genre": "Sports",
        "description": "Off-road racing with career mode and vibrant environments.",
        "developer": "Codemasters"
      },
      {
        "id": 347,
        "title": "The Crew Motorfest",
        "genre": "Sports",
        "description": "Open-world racing festival in Hawaii with various disciplines.",
        "developer": "Ubisoft Ivory Tower"
      },
      {
        "id": 348,
        "title": "Test Drive Unlimited Solar Crown",
        "genre": "Sports",
        "description": "Open-world driving on Hong Kong Island with luxury cars.",
        "developer": "KT Racing"
      },
      {
        "id": 349,
        "title": "Forza Motorsport (2023)",
        "genre": "Sports",
        "description": "Realistic track racing with advanced simulation features.",
        "developer": "Turn 10 Studios"
      },
      {
        "id": 350,
        "title": "Gran Turismo Sport",
        "genre": "Sports",
        "description": "Online-focused racing with beautiful visuals and e-sports features.",
        "developer": "Polyphony Digital"
      },
      {
        "id": 351,
        "title": "F1 22",
        "genre": "Sports",
        "description": "Formula 1 racing with career, multiplayer, and authentic handling.",
        "developer": "Codemasters"
      },
      {
        "id": 352,
        "title": "WRC Generations",
        "genre": "Sports",
        "description": "Official World Rally Championship game with realistic rallying.",
        "developer": "KT Racing"
      },
      {
        "id": 353,
        "title": "V-Rally 4",
        "genre": "Sports",
        "description": "Off-road rally racing across multiple disciplines.",
        "developer": "KT Racing"
      },
      {
        "id": 354,
        "title": "Sébastien Loeb Rally EVO",
        "genre": "Sports",
        "description": "Rally simulation featuring the legendary driver and real stages.",
        "developer": "Milestone"
      },
      {
        "id": 355,
        "title": "DiRT Rally",
        "genre": "Sports",
        "description": "Challenging rally simulation with punishing physics.",
        "developer": "Codemasters"
      },
      {
        "id": 356,
        "title": "Richard Burns Rally",
        "genre": "Sports",
        "description": "Highly realistic rally simulation still praised for its physics.",
        "developer": "Warthog"
      },
      {
        "id": 357,
        "title": "Colin McRae Rally 2.0",
        "genre": "Sports",
        "description": "Classic rally game with demanding stages and career mode.",
        "developer": "Codemasters"
      },
      {
        "id": 358,
        "title": "Need for Speed Underground 2",
        "genre": "Sports",
        "description": "Street racing with customization and open city exploration.",
        "developer": "EA Canada"
      },
      {
        "id": 359,
        "title": "Midnight Club: Los Angeles",
        "genre": "Sports",
        "description": "Open-world street racing with free roam and pursuits.",
        "developer": "Rockstar San Diego"
      },
      {
        "id": 360,
        "title": "Test Drive Unlimited",
        "genre": "Sports",
        "description": "Open-world driving on Oahu with luxury cars and multiplayer.",
        "developer": "Eden Games"
      },
      {
        "id": 361,
        "title": "The Crew 2",
        "genre": "Sports",
        "description": "Massive open-world America with cars, boats, planes, and more.",
        "developer": "Ubisoft Ivory Tower"
      },
      {
        "id": 362,
        "title": "Forza Horizon 4",
        "genre": "Sports",
        "description": "Seasonal open-world racing in Britain with dynamic weather.",
        "developer": "Playground Games"
      },
      {
        "id": 363,
        "title": "Burnout Paradise Remastered",
        "genre": "Sports",
        "description": "Open-world crash-filled racing with beautiful Paradise City.",
        "developer": "Criterion Games"
      },
      {
        "id": 364,
        "title": "Grid Legends",
        "genre": "Sports",
        "description": "Story-driven racing with dramatic rivalries and varied events.",
        "developer": "Codemasters"
      },
      {
        "id": 365,
        "title": "Project Cars 3",
        "genre": "Sports",
        "description": "Accessible yet deep racing with weather and time-of-day effects.",
        "developer": "Slightly Mad Studios"
      },
      {
        "id": 366,
        "title": "Assetto Corsa",
        "genre": "Sports",
        "description": "Moddable racing sim with laser-scanned tracks and realistic physics.",
        "developer": "Kunos Simulazioni"
      },
      {
        "id": 367,
        "title": "iRacing",
        "genre": "Sports",
        "description": "The premier online racing simulator used by professionals.",
        "developer": "iRacing"
      },
      {
        "id": 368,
        "title": "rFactor 2",
        "genre": "Sports",
        "description": "Advanced simulation with mod support and realistic vehicle dynamics.",
        "developer": "Studio 397"
      },
      {
        "id": 369,
        "title": "BeamNG.drive",
        "genre": "Sports",
        "description": "Soft-body physics driving simulator with incredible crash deformation.",
        "developer": "BeamNG GmbH"
      },
      {
        "id": 370,
        "title": "My Summer Car",
        "genre": "Sports",
        "description": "Build and maintain a car in 90s Finland with survival elements.",
        "developer": "Amistech Games"
      },
      {
        "id": 371,
        "title": "Automation - The Car Company Tycoon Game",
        "genre": "Sports",
        "description": "Design and manage your own car company with deep engineering.",
        "developer": "Camel 51"
      },
      {
        "id": 372,
        "title": "Wreckfest",
        "genre": "Sports",
        "description": "Demolition derby and realistic racing with car damage.",
        "developer": "Bugbear"
      },
      {
        "id": 373,
        "title": "FlatOut 2",
        "genre": "Sports",
        "description": "Crazy stunt-filled racing with destruction derby modes.",
        "developer": "Bugbear Entertainment"
      },
      {
        "id": 374,
        "title": "Table Top Racing: World Tour",
        "genre": "Sports",
        "description": "Fun mini-car racing with power-ups and tracks.",
        "developer": "Playrise Digital"
      },
      {
        "id": 375,
        "title": "Hot Wheels Unleashed 2: Turbocharged",
        "genre": "Sports",
        "description": "Improved sequel with more cars, tracks, and modes.",
        "developer": "Milestone"
      },
      {
        "id": 376,
        "title": "TrackMania Turbo",
        "genre": "Sports",
        "description": "Fast, arcade-style racing with user-created tracks.",
        "developer": "Nadeo"
      },
      {
        "id": 377,
        "title": "DiRT 4",
        "genre": "Sports",
        "description": "Accessible yet deep rally and off-road racing.",
        "developer": "Codemasters"
      },
      {
        "id": 378,
        "title": "Sebastien Loeb Rally EVO",
        "genre": "Sports",
        "description": "Rally game featuring the nine-time world champion.",
        "developer": "Milestone"
      },
      {
        "id": 379,
        "title": "WRC 10",
        "genre": "Sports",
        "description": "Official World Rally Championship simulation.",
        "developer": "KT Racing"
      },
      {
        "id": 380,
        "title": "V-Rally 4",
        "genre": "Sports",
        "description": "Multi-discipline rally racing game.",
        "developer": "KT Racing"
      },
      {
        "id": 381,
        "title": "Richard Burns Rally",
        "genre": "Sports",
        "description": "One of the most realistic rally simulations ever made.",
        "developer": "Warthog"
      },
      {
        "id": 382,
        "title": "Colin McRae Rally",
        "genre": "Sports",
        "description": "The original rally classic that started the series.",
        "developer": "Codemasters"
      },
      {
        "id": 383,
        "title": "Need for Speed: Underground",
        "genre": "Sports",
        "description": "Street racing with tuning and night city atmosphere.",
        "developer": "EA Canada"
      },
      {
        "id": 384,
        "title": "Midnight Club II",
        "genre": "Sports",
        "description": "Open-world street racing across three cities.",
        "developer": "Rockstar San Diego"
      },
      {
        "id": 385,
        "title": "Test Drive Unlimited 2",
        "genre": "Sports",
        "description": "Expanded open-world driving on Ibiza and Hawaii.",
        "developer": "Eden Games"
      },
      {
        "id": 386,
        "title": "The Crew",
        "genre": "Sports",
        "description": "Cross-country road trip across the entire United States.",
        "developer": "Ubisoft Ivory Tower"
      },
      {
        "id": 387,
        "title": "Forza Horizon 3",
        "genre": "Sports",
        "description": "Festival racing in beautiful Australia with dynamic seasons.",
        "developer": "Playground Games"
      },
      {
        "id": 388,
        "title": "Burnout Revenge",
        "genre": "Sports",
        "description": "Aggressive racing with traffic checking and revenge takedowns.",
        "developer": "Criterion Games"
      },
      {
        "id": 389,
        "title": "Need for Speed: Carbon",
        "genre": "Sports",
        "description": "Canyon racing and crew-based territory battles.",
        "developer": "EA Canada"
      },
      {
        "id": 390,
        "title": "Grid 2",
        "genre": "Sports",
        "description": "Global racing tour with beautiful locations and handling.",
        "developer": "Codemasters"
      },
      {
        "id": 391,
        "title": "Project CARS",
        "genre": "Sports",
        "description": "Realistic racing with community-developed tracks and cars.",
        "developer": "Slightly Mad Studios"
      },
      {
        "id": 392,
        "title": "Assetto Corsa Competizione",
        "genre": "Sports",
        "description": "GT3 racing simulation with official Blancpain championship.",
        "developer": "Kunos Simulazioni"
      },
      {
        "id": 393,
        "title": "iRacing",
        "genre": "Sports",
        "description": "Online racing platform with official licenses and realism.",
        "developer": "iRacing"
      },
      {
        "id": 394,
        "title": "rFactor 2",
        "genre": "Sports",
        "description": "Highly moddable racing sim with advanced tire and physics models.",
        "developer": "Studio 397"
      },
      {
        "id": 395,
        "title": "BeamNG.drive",
        "genre": "Sports",
        "description": "Soft-body physics sandbox for crashing and driving.",
        "developer": "BeamNG"
      },
      {
        "id": 396,
        "title": "My Summer Car",
        "genre": "Sports",
        "description": "Build a car in the Finnish countryside with survival and humor.",
        "developer": "Amistech"
      },
      {
        "id": 397,
        "title": "Automation",
        "genre": "Sports",
        "description": "Car company tycoon game with deep engineering simulation.",
        "developer": "Camel 51"
      },
      {
        "id": 398,
        "title": "Wreckfest",
        "genre": "Sports",
        "description": "Destruction derby and realistic racing with damage modeling.",
        "developer": "Bugbear"
      },
      {
        "id": 399,
        "title": "FlatOut Ultimate Carnage",
        "genre": "Sports",
        "description": "Crazy stunt racing and demolition derby action.",
        "developer": "Bugbear"
      },
      {
        "id": 400,
        "title": "Table Top Racing: World Tour",
        "genre": "Sports",
        "description": "Miniature car racing with power-ups and colorful tracks.",
        "developer": "Playrise"
      }    
  ],
  Software: [
    {
        "id": 1,
        "title": "Notion",
        "genre": "Productivity",
        "description": "All-in-one workspace for notes, databases, project management, wikis, and team collaboration with customizable templates.",
        "developer": "Notion Labs"
      },
      {
        "id": 2,
        "title": "Todoist",
        "genre": "Productivity",
        "description": "Powerful task manager with natural language input, reminders, labels, priorities, and productivity tracking.",
        "developer": "Doist"
      },
      {
        "id": 3,
        "title": "Microsoft 365",
        "genre": "Productivity",
        "description": "Complete office suite including Word, Excel, PowerPoint, Teams, Outlook, and cloud storage for work and collaboration.",
        "developer": "Microsoft"
      },
      {
        "id": 4,
        "title": "Google Workspace",
        "genre": "Productivity",
        "description": "Cloud-based productivity suite with Gmail, Docs, Sheets, Slides, Drive, Meet, and Calendar for teams.",
        "developer": "Google"
      },
      {
        "id": 5,
        "title": "Asana",
        "genre": "Productivity",
        "description": "Project and task management platform with timelines, workflows, goals, and team collaboration features.",
        "developer": "Asana, Inc."
      },
      {
        "id": 6,
        "title": "Trello",
        "genre": "Productivity",
        "description": "Visual Kanban-style boards for organizing tasks, projects, and workflows with cards, lists, and power-ups.",
        "developer": "Atlassian"
      },
      {
        "id": 7,
        "title": "Slack",
        "genre": "Productivity",
        "description": "Team communication platform with channels, direct messaging, integrations, and workflow automation.",
        "developer": "Slack Technologies"
      },
      {
        "id": 8,
        "title": "Evernote",
        "genre": "Productivity",
        "description": "Note-taking app for organizing notes, web clippings, documents, and searchable knowledge base.",
        "developer": "Evernote Corporation"
      },
      {
        "id": 9,
        "title": "Obsidian",
        "genre": "Productivity",
        "description": "Powerful markdown-based knowledge base with linked notes, graph view, and local file storage.",
        "developer": "Obsidian.md"
      },
      {
        "id": 10,
        "title": "ClickUp",
        "genre": "Productivity",
        "description": "All-in-one project management with tasks, docs, goals, chat, and customizable dashboards.",
        "developer": "ClickUp"
      },
      {
        "id": 11,
        "title": "Monday.com",
        "genre": "Productivity",
        "description": "Work OS for managing projects, workflows, CRM, and team collaboration with visual boards.",
        "developer": "monday.com"
      },
      {
        "id": 12,
        "title": "Zapier",
        "genre": "Productivity",
        "description": "Automation platform that connects apps and automates repetitive tasks without coding.",
        "developer": "Zapier"
      },
      {
        "id": 13,
        "title": "Grammarly",
        "genre": "Productivity",
        "description": "AI-powered writing assistant for grammar, clarity, tone, and plagiarism checking across apps.",
        "developer": "Grammarly"
      },
      {
        "id": 14,
        "title": "Calendly",
        "genre": "Productivity",
        "description": "Scheduling tool that eliminates back-and-forth emails for meetings and appointments.",
        "developer": "Calendly"
      },
      {
        "id": 15,
        "title": "Toggl Track",
        "genre": "Productivity",
        "description": "Time tracking app with reports, project budgeting, and team productivity insights.",
        "developer": "Toggl"
      },
      {
        "id": 16,
        "title": "Airtable",
        "genre": "Productivity",
        "description": "Flexible database-spreadsheet hybrid for organizing data, projects, and workflows.",
        "developer": "Airtable"
      },
      {
        "id": 17,
        "title": "Microsoft OneNote",
        "genre": "Productivity",
        "description": "Digital notebook for handwritten notes, drawings, audio, and organized sections.",
        "developer": "Microsoft"
      },
      {
        "id": 18,
        "title": "Google Keep",
        "genre": "Productivity",
        "description": "Simple note-taking app with labels, reminders, and quick capture for ideas and lists.",
        "developer": "Google"
      },
      {
        "id": 19,
        "title": "Bear",
        "genre": "Productivity",
        "description": "Elegant markdown note-taking app with beautiful typography and organization features.",
        "developer": "Shiny Frog"
      },
      {
        "id": 20,
        "title": "Things 3",
        "genre": "Productivity",
        "description": "Elegant task manager for Apple devices with projects, areas, and daily planning.",
        "developer": "Cultured Code"
      },
      {
        "id": 21,
        "title": "Linear",
        "genre": "Productivity",
        "description": "Issue tracking and project management tool designed for high-performance software teams.",
        "developer": "Linear"
      },
      {
        "id": 22,
        "title": "Notion AI",
        "genre": "Productivity",
        "description": "AI-powered features inside Notion for summarizing, writing, brainstorming, and automation.",
        "developer": "Notion Labs"
      },
      {
        "id": 23,
        "title": "Otter.ai",
        "genre": "Productivity",
        "description": "AI meeting transcription, note-taking, and real-time collaboration tool.",
        "developer": "Otter.ai"
      },
      {
        "id": 24,
        "title": "Fireflies.ai",
        "genre": "Productivity",
        "description": "AI notetaker that records, transcribes, and analyzes meetings across video platforms.",
        "developer": "Fireflies.ai"
      },
      {
        "id": 25,
        "title": "Clockify",
        "genre": "Productivity",
        "description": "Free time tracking app with reports, projects, teams, and invoicing features.",
        "developer": "CAKE.com"
      },
      {
        "id": 26,
        "title": "RescueTime",
        "genre": "Productivity",
        "description": "Automatic time-tracking and productivity analytics to understand your digital habits.",
        "developer": "RescueTime"
      },
      {
        "id": 27,
        "title": "Focus@Will",
        "genre": "Productivity",
        "description": "Music designed using neuroscience to improve focus and productivity during work.",
        "developer": "Focus@Will"
      },
      {
        "id": 28,
        "title": "Brain.fm",
        "genre": "Productivity",
        "description": "Scientifically engineered music to enhance focus, relaxation, and deep work.",
        "developer": "Brain.fm"
      },
      {
        "id": 29,
        "title": "Freedom",
        "genre": "Productivity",
        "description": "Website and app blocker to eliminate distractions and boost focused work sessions.",
        "developer": "Freedom"
      },
      {
        "id": 30,
        "title": "Forest",
        "genre": "Productivity",
        "description": "Gamified focus app that grows virtual trees while you stay off your phone.",
        "developer": "Seekrtech"
      },
      {
        "id": 31,
        "title": "Habitica",
        "genre": "Productivity",
        "description": "Habit-building and task management app that turns your life into a role-playing game.",
        "developer": "Habitica"
      },
      {
        "id": 32,
        "title": "Streaks",
        "genre": "Productivity",
        "description": "Simple habit tracker that helps build daily streaks with visual progress.",
        "developer": "Crunchy Bagel"
      },
      {
        "id": 33,
        "title": "Day One",
        "genre": "Productivity",
        "description": "Private journaling app with photos, audio, location, and end-to-end encryption.",
        "developer": "Day One"
      },
      {
        "id": 34,
        "title": "Milanote",
        "genre": "Productivity",
        "description": "Visual note-taking and moodboarding tool for creative projects and research.",
        "developer": "Milanote"
      },
      {
        "id": 35,
        "title": "Roam Research",
        "genre": "Productivity",
        "description": "Networked thought tool for connected notes and bidirectional linking.",
        "developer": "Roam Research"
      },
      {
        "id": 36,
        "title": "Craft",
        "genre": "Productivity",
        "description": "Beautiful document and note-taking app with collaboration and publishing features.",
        "developer": "Craft Docs"
      },
      {
        "id": 37,
        "title": "Superlist",
        "genre": "Productivity",
        "description": "Modern task and list manager with rich content and team collaboration.",
        "developer": "Superlist"
      },
      {
        "id": 38,
        "title": "Akiflow",
        "genre": "Productivity",
        "description": "Unified inbox that combines tasks, calendar, and emails into one focused view.",
        "developer": "Akiflow"
      },
      {
        "id": 39,
        "title": "Routine",
        "genre": "Productivity",
        "description": "Daily planner with focused task view and integrated calendar.",
        "developer": "Routine"
      },
      {
        "id": 40,
        "title": "Sunsama",
        "genre": "Productivity",
        "description": "Daily planning tool that pulls tasks from multiple apps into a calm daily plan.",
        "developer": "Sunsama"
      },
      {
        "id": 41,
        "title": "Motion",
        "genre": "Productivity",
        "description": "AI-powered task and calendar manager that auto-schedules your day.",
        "developer": "Motion"
      },
      {
        "id": 42,
        "title": "Reclaim.ai",
        "genre": "Productivity",
        "description": "AI calendar tool that protects focus time and automatically schedules habits.",
        "developer": "Reclaim.ai"
      },
      {
        "id": 43,
        "title": "Clockwise",
        "genre": "Productivity",
        "description": "AI calendar optimization tool that finds focus time and improves team schedules.",
        "developer": "Clockwise"
      },
      {
        "id": 44,
        "title": "Mem",
        "genre": "Productivity",
        "description": "AI-powered notes app that organizes information and surfaces relevant content.",
        "developer": "Mem"
      },
      {
        "id": 45,
        "title": "NotebookLM",
        "genre": "Productivity",
        "description": "Google's AI tool for synthesizing documents, creating summaries, and audio overviews.",
        "developer": "Google"
      },
      {
        "id": 46,
        "title": "Perplexity",
        "genre": "Productivity",
        "description": "AI search engine that provides cited answers and research assistance.",
        "developer": "Perplexity AI"
      },
      {
        "id": 47,
        "title": "Claude",
        "genre": "Productivity",
        "description": "Anthropic's AI assistant for reasoning, document analysis, and creative work.",
        "developer": "Anthropic"
      },
      {
        "id": 48,
        "title": "ChatGPT",
        "genre": "Productivity",
        "description": "OpenAI's versatile AI for writing, brainstorming, coding, and daily assistance.",
        "developer": "OpenAI"
      },
      {
        "id": 49,
        "title": "Gemini",
        "genre": "Productivity",
        "description": "Google's multimodal AI integrated with Workspace for productivity tasks.",
        "developer": "Google"
      },
      {
        "id": 50,
        "title": "Lucidchart",
        "genre": "Productivity",
        "description": "Collaborative diagramming and visual collaboration tool for flowcharts and mind maps.",
        "developer": "Lucid Software"
      },
      {
        "id": 51,
        "title": "Adobe Photoshop",
        "genre": "Design",
        "description": "Industry-standard raster graphics editor for photo manipulation, digital art, and compositing.",
        "developer": "Adobe"
      },
      {
        "id": 52,
        "title": "Adobe Illustrator",
        "genre": "Design",
        "description": "Professional vector graphics software for logos, illustrations, and scalable designs.",
        "developer": "Adobe"
      },
      {
        "id": 53,
        "title": "Adobe InDesign",
        "genre": "Design",
        "description": "Layout and page design tool for print and digital publications like magazines and books.",
        "developer": "Adobe"
      },
      {
        "id": 54,
        "title": "Figma",
        "genre": "Design",
        "description": "Collaborative interface design tool for UI/UX, prototypes, and real-time team editing.",
        "developer": "Figma"
      },
      {
        "id": 55,
        "title": "Canva",
        "genre": "Design",
        "description": "Easy-to-use graphic design platform with templates for social media, presentations, and marketing.",
        "developer": "Canva"
      },
      {
        "id": 56,
        "title": "Affinity Designer",
        "genre": "Design",
        "description": "Professional vector and raster design alternative with one-time purchase pricing.",
        "developer": "Serif"
      },
      {
        "id": 57,
        "title": "Procreate",
        "genre": "Design",
        "description": "Powerful digital painting and illustration app designed exclusively for iPad.",
        "developer": "Savage Interactive"
      },
      {
        "id": 58,
        "title": "Sketch",
        "genre": "Design",
        "description": "Vector-based UI/UX design tool popular for app and web interface creation.",
        "developer": "Sketch"
      },
      {
        "id": 59,
        "title": "CorelDRAW",
        "genre": "Design",
        "description": "Comprehensive vector illustration and page layout suite with powerful tools.",
        "developer": "Corel"
      },
      {
        "id": 60,
        "title": "Adobe Fresco",
        "genre": "Design",
        "description": "Natural painting and drawing app with live brushes and raster/vector support.",
        "developer": "Adobe"
      },
      {
        "id": 61,
        "title": "Adobe Express",
        "genre": "Design",
        "description": "Quick graphic design tool with templates, AI features, and social media focus.",
        "developer": "Adobe"
      },
      {
        "id": 62,
        "title": "GIMP",
        "genre": "Design",
        "description": "Free and open-source raster graphics editor with advanced photo manipulation tools.",
        "developer": "GIMP Team"
      },
      {
        "id": 63,
        "title": "Inkscape",
        "genre": "Design",
        "description": "Free vector graphics editor with powerful tools for illustrations and logos.",
        "developer": "Inkscape"
      },
      {
        "id": 64,
        "title": "Affinity Photo",
        "genre": "Design",
        "description": "Professional photo editing software with advanced retouching and compositing.",
        "developer": "Serif"
      },
      {
        "id": 65,
        "title": "Affinity Publisher",
        "genre": "Design",
        "description": "Desktop publishing tool for creating books, magazines, and marketing materials.",
        "developer": "Serif"
      },
      {
        "id": 66,
        "title": "Blender",
        "genre": "Design",
        "description": "Free 3D creation suite for modeling, sculpting, animation, and rendering.",
        "developer": "Blender Foundation"
      },
      {
        "id": 67,
        "title": "Krita",
        "genre": "Design",
        "description": "Free digital painting and illustration software with brush engines and animation.",
        "developer": "Krita Foundation"
      },
      {
        "id": 68,
        "title": "Clip Studio Paint",
        "genre": "Design",
        "description": "Popular manga and comic creation software with natural drawing tools.",
        "developer": "Celsys"
      },
      {
        "id": 69,
        "title": "Adobe XD",
        "genre": "Design",
        "description": "UI/UX design and prototyping tool for web and mobile experiences.",
        "developer": "Adobe"
      },
      {
        "id": 70,
        "title": "Framer",
        "genre": "Design",
        "description": "Interactive design and prototyping tool with code components and animations.",
        "developer": "Framer"
      },
      {
        "id": 71,
        "title": "Webflow",
        "genre": "Design",
        "description": "No-code visual web design tool for building responsive websites.",
        "developer": "Webflow"
      },
      {
        "id": 72,
        "title": "Midjourney",
        "genre": "Design",
        "description": "AI-powered image generation tool for creating art and design concepts.",
        "developer": "Midjourney"
      },
      {
        "id": 73,
        "title": "Stable Diffusion",
        "genre": "Design",
        "description": "Open-source AI image generation model for custom creative workflows.",
        "developer": "Stability AI"
      },
      {
        "id": 74,
        "title": "Leonardo.AI",
        "genre": "Design",
        "description": "AI art generation platform with fine-tuned models and creative controls.",
        "developer": "Leonardo.AI"
      },
      {
        "id": 75,
        "title": "Ideogram",
        "genre": "Design",
        "description": "AI text-to-image tool known for excellent typography and prompt adherence.",
        "developer": "Ideogram"
      },
      {
        "id": 76,
        "title": "Canva Magic Studio",
        "genre": "Design",
        "description": "AI-powered design features inside Canva for quick image editing and generation.",
        "developer": "Canva"
      },
      {
        "id": 77,
        "title": "Photopea",
        "genre": "Design",
        "description": "Free browser-based Photoshop alternative for editing PSD and other files.",
        "developer": "Photopea"
      },
      {
        "id": 78,
        "title": "Pixlr",
        "genre": "Design",
        "description": "Online photo editor with AI tools and templates for quick graphic design.",
        "developer": "Pixlr"
      },
      {
        "id": 79,
        "title": "Gravit Designer",
        "genre": "Design",
        "description": "Vector design tool with cloud sync and collaboration features.",
        "developer": "Corel"
      },
      {
        "id": 80,
        "title": "Vectornator",
        "genre": "Design",
        "description": "Intuitive vector design app for iPad and Mac with powerful illustration tools.",
        "developer": "Linearity"
      },
      {
        "id": 81,
        "title": "Procreate Dreams",
        "genre": "Design",
        "description": "Animation and motion design app from the makers of Procreate.",
        "developer": "Savage Interactive"
      },
      {
        "id": 82,
        "title": "LumaFusion",
        "genre": "Design",
        "description": "Professional video editing app for mobile with advanced features.",
        "developer": "LumaTouch"
      },
      {
        "id": 83,
        "title": "DaVinci Resolve",
        "genre": "Design",
        "description": "All-in-one video editing, color correction, and audio post-production suite.",
        "developer": "Blackmagic Design"
      },
      {
        "id": 84,
        "title": "Final Cut Pro",
        "genre": "Design",
        "description": "Apple's professional non-linear video editing software with magnetic timeline.",
        "developer": "Apple"
      },
      {
        "id": 85,
        "title": "Adobe Premiere Pro",
        "genre": "Design",
        "description": "Industry-standard video editing software with deep integration to other Adobe apps.",
        "developer": "Adobe"
      },
      {
        "id": 86,
        "title": "After Effects",
        "genre": "Design",
        "description": "Motion graphics and visual effects composition tool for film and video.",
        "developer": "Adobe"
      },
      {
        "id": 87,
        "title": "Blender",
        "genre": "Design",
        "description": "Free 3D modeling, animation, and rendering software with full pipeline.",
        "developer": "Blender Foundation"
      },
      {
        "id": 88,
        "title": "Substance Painter",
        "genre": "Design",
        "description": "3D texturing and painting software used in game and film production.",
        "developer": "Adobe"
      },
      {
        "id": 89,
        "title": "ZBrush",
        "genre": "Design",
        "description": "Digital sculpting tool for creating high-detail 3D models and characters.",
        "developer": "Pixologic"
      },
      {
        "id": 90,
        "title": "Maya",
        "genre": "Design",
        "description": "3D animation, modeling, simulation, and rendering software for film and games.",
        "developer": "Autodesk"
      },
      {
        "id": 91,
        "title": "Cinema 4D",
        "genre": "Design",
        "description": "Powerful 3D modeling, animation, and rendering tool with intuitive interface.",
        "developer": "Maxon"
      },
      {
        "id": 92,
        "title": "SketchUp",
        "genre": "Design",
        "description": "3D modeling software popular for architecture, interior design, and engineering.",
        "developer": "Trimble"
      },
      {
        "id": 93,
        "title": "AutoCAD",
        "genre": "Design",
        "description": "Industry-standard CAD software for 2D and 3D design and drafting.",
        "developer": "Autodesk"
      },
      {
        "id": 94,
        "title": "Revit",
        "genre": "Design",
        "description": "BIM software for architectural design, engineering, and construction.",
        "developer": "Autodesk"
      },
      {
        "id": 95,
        "title": "Rhino",
        "genre": "Design",
        "description": "NURBS-based 3D modeling tool used in industrial and product design.",
        "developer": "Robert McNeel & Associates"
      },
      {
        "id": 96,
        "title": "Fusion 360",
        "genre": "Design",
        "description": "Cloud-based CAD/CAM/CAE tool for product design and manufacturing.",
        "developer": "Autodesk"
      },
      {
        "id": 97,
        "title": "SolidWorks",
        "genre": "Design",
        "description": "3D CAD software for mechanical design, simulation, and product development.",
        "developer": "Dassault Systèmes"
      },
      {
        "id": 98,
        "title": "Keynote",
        "genre": "Design",
        "description": "Apple's presentation software with beautiful templates and animations.",
        "developer": "Apple"
      },
      {
        "id": 99,
        "title": "PowerPoint",
        "genre": "Design",
        "description": "Microsoft's presentation tool with advanced design features and templates.",
        "developer": "Microsoft"
      },
      {
        "id": 100,
        "title": "Google Slides",
        "genre": "Design",
        "description": "Collaborative presentation tool with real-time editing and cloud integration.",
        "developer": "Google"
      },
      {
        "id": 101,
        "title": "Visual Studio Code",
        "genre": "Development",
        "description": "Lightweight, extensible code editor with excellent debugging and Git integration.",
        "developer": "Microsoft"
      },
      {
        "id": 102,
        "title": "IntelliJ IDEA",
        "genre": "Development",
        "description": "Powerful Java IDE with smart code completion, refactoring, and project tools.",
        "developer": "JetBrains"
      },
      {
        "id": 103,
        "title": "PyCharm",
        "genre": "Development",
        "description": "Python IDE with scientific tools, web development, and data science support.",
        "developer": "JetBrains"
      },
      {
        "id": 104,
        "title": "WebStorm",
        "genre": "Development",
        "description": "JavaScript and TypeScript IDE for modern web and Node.js development.",
        "developer": "JetBrains"
      },
      {
        "id": 105,
        "title": "Eclipse IDE",
        "genre": "Development",
        "description": "Extensible open-source IDE primarily for Java with plugins for many languages.",
        "developer": "Eclipse Foundation"
      },
      {
        "id": 106,
        "title": "Xcode",
        "genre": "Development",
        "description": "Apple's IDE for developing apps for iOS, macOS, watchOS, and tvOS.",
        "developer": "Apple"
      },
      {
        "id": 107,
        "title": "Android Studio",
        "genre": "Development",
        "description": "Official IDE for Android app development with emulator and debugging tools.",
        "developer": "Google"
      },
      {
        "id": 108,
        "title": "Visual Studio",
        "genre": "Development",
        "description": "Full-featured IDE for .NET, C++, and game development with excellent debugging.",
        "developer": "Microsoft"
      },
      {
        "id": 109,
        "title": "GitHub Copilot",
        "genre": "Development",
        "description": "AI pair programmer that suggests code completions and entire functions.",
        "developer": "GitHub"
      },
      {
        "id": 110,
        "title": "Cursor",
        "genre": "Development",
        "description": "AI-powered code editor built on VS Code with advanced editing capabilities.",
        "developer": "Cursor"
      },
      {
        "id": 111,
        "title": "Git",
        "genre": "Development",
        "description": "Distributed version control system for tracking code changes and collaboration.",
        "developer": "Linus Torvalds"
      },
      {
        "id": 112,
        "title": "Docker",
        "genre": "Development",
        "description": "Platform for developing, shipping, and running applications in containers.",
        "developer": "Docker Inc."
      },
      {
        "id": 113,
        "title": "Kubernetes",
        "genre": "Development",
        "description": "Container orchestration platform for automating deployment and scaling.",
        "developer": "Cloud Native Computing Foundation"
      },
      {
        "id": 114,
        "title": "Postman",
        "genre": "Development",
        "description": "API development and testing tool with collaboration and documentation features.",
        "developer": "Postman"
      },
      {
        "id": 115,
        "title": "Insomnia",
        "genre": "Development",
        "description": "Open-source REST and GraphQL client for designing and testing APIs.",
        "developer": "Kong Inc."
      },
      {
        "id": 116,
        "title": "VS Code Extensions",
        "genre": "Development",
        "description": "Ecosystem of extensions that add languages, debuggers, and tools to VS Code.",
        "developer": "Microsoft"
      },
      {
        "id": 117,
        "title": "Webpack",
        "genre": "Development",
        "description": "Module bundler for modern JavaScript applications with optimization features.",
        "developer": "Webpack Contributors"
      },
      {
        "id": 118,
        "title": "Vite",
        "genre": "Development",
        "description": "Next-generation frontend tooling with lightning-fast dev server and builds.",
        "developer": "Evan You"
      },
      {
        "id": 119,
        "title": "npm",
        "genre": "Development",
        "description": "Package manager for JavaScript with the world's largest software registry.",
        "developer": "npm Inc."
      },
      {
        "id": 120,
        "title": "Yarn",
        "genre": "Development",
        "description": "Fast, reliable, and secure dependency management for JavaScript projects.",
        "developer": "Yarn Contributors"
      },
      {
        "id": 121,
        "title": "pnpm",
        "genre": "Development",
        "description": "Fast and disk-efficient package manager that saves space and speeds installs.",
        "developer": "pnpm"
      },
      {
        "id": 122,
        "title": "Jenkins",
        "genre": "Development",
        "description": "Open-source automation server for building, testing, and deploying code.",
        "developer": "Jenkins Project"
      },
      {
        "id": 123,
        "title": "GitHub Actions",
        "genre": "Development",
        "description": "CI/CD platform integrated with GitHub for automated workflows.",
        "developer": "GitHub"
      },
      {
        "id": 124,
        "title": "GitLab",
        "genre": "Development",
        "description": "Complete DevOps platform with Git repository, CI/CD, and issue tracking.",
        "developer": "GitLab Inc."
      },
      {
        "id": 125,
        "title": "Bitbucket",
        "genre": "Development",
        "description": "Git and Mercurial code hosting with Jira integration and pipelines.",
        "developer": "Atlassian"
      },
      {
        "id": 126,
        "title": "Jira",
        "genre": "Development",
        "description": "Project tracking and agile planning tool for software teams.",
        "developer": "Atlassian"
      },
      {
        "id": 127,
        "title": "Linear",
        "genre": "Development",
        "description": "Modern issue tracking with keyboard shortcuts and high-velocity workflows.",
        "developer": "Linear"
      },
      {
        "id": 128,
        "title": "Sentry",
        "genre": "Development",
        "description": "Error tracking and performance monitoring for applications.",
        "developer": "Sentry"
      },
      {
        "id": 129,
        "title": "New Relic",
        "genre": "Development",
        "description": "Observability platform for monitoring applications and infrastructure.",
        "developer": "New Relic"
      },
      {
        "id": 130,
        "title": "Datadog",
        "genre": "Development",
        "description": "Monitoring and analytics platform for cloud-scale applications.",
        "developer": "Datadog"
      },
      {
        "id": 131,
        "title": "Terraform",
        "genre": "Development",
        "description": "Infrastructure as Code tool for building, changing, and versioning infrastructure.",
        "developer": "HashiCorp"
      },
      {
        "id": 132,
        "title": "Ansible",
        "genre": "Development",
        "description": "Automation tool for configuration management and application deployment.",
        "developer": "Red Hat"
      },
      {
        "id": 133,
        "title": "Puppet",
        "genre": "Development",
        "description": "Configuration management tool for automating infrastructure.",
        "developer": "Puppet"
      },
      {
        "id": 134,
        "title": "Chef",
        "genre": "Development",
        "description": "Infrastructure automation framework using Ruby-based recipes.",
        "developer": "Progress Chef"
      },
      {
        "id": 135,
        "title": "Docker Compose",
        "genre": "Development",
        "description": "Tool for defining and running multi-container Docker applications.",
        "developer": "Docker"
      },
      {
        "id": 136,
        "title": "Kubernetes",
        "genre": "Development",
        "description": "Container orchestration for deploying and scaling containerized apps.",
        "developer": "Cloud Native Computing Foundation"
      },
      {
        "id": 137,
        "title": "AWS",
        "genre": "Development",
        "description": "Comprehensive cloud platform with services for compute, storage, and databases.",
        "developer": "Amazon Web Services"
      },
      {
        "id": 138,
        "title": "Google Cloud Platform",
        "genre": "Development",
        "description": "Suite of cloud computing services including compute, storage, and AI tools.",
        "developer": "Google"
      },
      {
        "id": 139,
        "title": "Microsoft Azure",
        "genre": "Development",
        "description": "Cloud computing platform with hybrid capabilities and enterprise services.",
        "developer": "Microsoft"
      },
      {
        "id": 140,
        "title": "Vercel",
        "genre": "Development",
        "description": "Frontend cloud platform for hosting static sites and serverless functions.",
        "developer": "Vercel"
      },
      {
        "id": 141,
        "title": "Netlify",
        "genre": "Development",
        "description": "Platform for deploying and hosting modern web projects with CI/CD.",
        "developer": "Netlify"
      },
      {
        "id": 142,
        "title": "Heroku",
        "genre": "Development",
        "description": "Platform as a Service for deploying and scaling web applications.",
        "developer": "Salesforce"
      },
      {
        "id": 143,
        "title": "Supabase",
        "genre": "Development",
        "description": "Open-source Firebase alternative with PostgreSQL database and auth.",
        "developer": "Supabase"
      },
      {
        "id": 144,
        "title": "Firebase",
        "genre": "Development",
        "description": "Google's app development platform with realtime database and hosting.",
        "developer": "Google"
      },
      {
        "id": 145,
        "title": "Playwright",
        "genre": "Development",
        "description": "Reliable end-to-end testing and automation library for web apps.",
        "developer": "Microsoft"
      },
      {
        "id": 146,
        "title": "Selenium",
        "genre": "Development",
        "description": "Framework for automating web browsers across platforms and languages.",
        "developer": "Selenium"
      },
      {
        "id": 147,
        "title": "Jest",
        "genre": "Development",
        "description": "Delightful JavaScript testing framework with zero configuration.",
        "developer": "Facebook Open Source"
      },
      {
        "id": 148,
        "title": "Cypress",
        "genre": "Development",
        "description": "Fast, easy, and reliable testing for anything that runs in a browser.",
        "developer": "Cypress.io"
      },
      {
        "id": 149,
        "title": "Tailwind CSS",
        "genre": "Development",
        "description": "Utility-first CSS framework for rapidly building custom user interfaces.",
        "developer": "Tailwind Labs"
      },
      {
        "id": 150,
        "title": "React",
        "genre": "Development",
        "description": "JavaScript library for building fast and interactive user interfaces.",
        "developer": "Meta"
      }
  ],
}

function hashString(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
        h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
}

const MOVIE_LANGUAGE_SETS = [
    ['English'],
    ['English', 'Spanish (Latin America)'],
    ['English', 'French'],
    ['English', 'Hindi', 'English — descriptive audio'],
    ['English', 'Japanese'],
    ['Korean', 'English'],
    ['English', 'German'],
    ['English', 'Italian', 'Spanish'],
];

const CONTENT_RATINGS = ['G', 'PG', 'PG-13', 'R', 'NC-17'];

const DIRECTORS = [
    'Christopher Nolan', 'Steven Spielberg', 'Martin Scorsese', 'Kathryn Bigelow',
    'Denis Villeneuve', 'Greta Gerwig', 'Bong Joon-ho', 'Guillermo del Toro',
    'Jordan Peele', 'Damien Chazelle', 'Ava DuVernay', 'Ryan Coogler',
    'Sofia Coppola', 'Wes Anderson', 'Ridley Scott', 'James Cameron',
];

const INCLUDED_FEATURES = [
    'Subtitles & closed captions',
    '5.1 / surround sound mix',
    'HDR presentation (where available)',
    'Scene selection & chapters',
    'Bonus: deleted scenes',
    'Behind-the-scenes featurette',
    'Director or cast commentary',
    'Dolby Atmos track',
];

function formatRuntime(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h <= 0) return `${m}m`;
    if (m === 0) return `${h}h`;
    return `${h}h ${m}m`;
}

function enrichRecommendation(category, item) {
    if (category !== 'Movies') {
        return { ...item };
    }

    const seed = item.id * 7919 + hashString(item.title || '');
    const runtimeMinutes = 84 + (seed % 73);

    const langs = MOVIE_LANGUAGE_SETS[seed % MOVIE_LANGUAGE_SETS.length];
    const includeCount = 3 + (seed % 2);
    const included = [];
    for (let i = 0; i < includeCount; i++) {
        included.push(INCLUDED_FEATURES[(seed + i * 5) % INCLUDED_FEATURES.length]);
    }
    const uniqueIncluded = [...new Set(included)];

    return {
        ...item,
        runtimeMinutes,
        duration: formatRuntime(runtimeMinutes),
        languages: langs,
        year: 1975 + (seed % 50),
        contentRating: CONTENT_RATINGS[seed % CONTENT_RATINGS.length],
        director: DIRECTORS[seed % DIRECTORS.length],
        audienceScore: 62 + (seed % 36),
        included: uniqueIncluded,
    };
}

const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p';
const tmdbDetailsCache = new Map();

function tmdbImageUrl(path, size) {
    if (!path) return null;
    return `${TMDB_IMAGE_BASE}/${size}${path}`;
}

app.get('/api/movie-details', async (req, res) => {
    const rawTitle = req.query.title;
    const title = typeof rawTitle === 'string' ? rawTitle.trim() : '';
    if (!title) {
        return res.status(400).json({
            ok: false,
            reason: 'bad_request',
            message: 'Missing or invalid title query parameter.',
        });
    }

    const cacheKey = title.toLowerCase();
    if (tmdbDetailsCache.has(cacheKey)) {
        return res.json(tmdbDetailsCache.get(cacheKey));
    }

    const key = process.env.TMDB_API_KEY;
    if (!key) {
        const body = {
            ok: false,
            reason: 'no_key',
            message:
                'Set TMDB_API_KEY in backend/.env — create a free key at https://www.themoviedb.org/settings/api',
        };
        return res.json(body);
    }

    try {
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(
            title
        )}&include_adult=false`;
        const searchRes = await fetch(searchUrl);
        if (!searchRes.ok) {
            return res.status(502).json({
                ok: false,
                reason: 'tmdb_search',
                status: searchRes.status,
                message: 'TMDB search request failed.',
            });
        }
        const searchJson = await searchRes.json();
        const hit = searchJson.results?.[0];
        if (!hit) {
            const body = {
                ok: false,
                reason: 'not_found',
                message: 'No TMDB match for this title.',
            };
            tmdbDetailsCache.set(cacheKey, body);
            return res.json(body);
        }

        const detailUrl = `https://api.themoviedb.org/3/movie/${hit.id}?api_key=${key}&append_to_response=credits`;
        const detailRes = await fetch(detailUrl);
        if (!detailRes.ok) {
            return res.status(502).json({
                ok: false,
                reason: 'tmdb_detail',
                status: detailRes.status,
                message: 'TMDB movie details request failed.',
            });
        }
        const m = await detailRes.json();

        const directors = (m.credits?.crew || [])
            .filter((c) => c.job === 'Director')
            .map((c) => c.name)
            .slice(0, 3);
        const spoken = (m.spoken_languages || [])
            .map((l) => l.english_name || l.name)
            .filter(Boolean);
        const genres = (m.genres || []).map((g) => g.name);
        const runtime = typeof m.runtime === 'number' ? m.runtime : null;

        const body = {
            ok: true,
            posterUrl: tmdbImageUrl(m.poster_path, 'w500'),
            posterUrlLarge: tmdbImageUrl(m.poster_path, 'w780'),
            backdropUrl: tmdbImageUrl(m.backdrop_path, 'w1280'),
            title: m.title || title,
            originalTitle: m.original_title || null,
            overview: m.overview || '',
            tagline: m.tagline || '',
            runtime,
            duration: runtime != null ? formatRuntime(runtime) : null,
            releaseDate: m.release_date || null,
            year: m.release_date ? parseInt(String(m.release_date).slice(0, 4), 10) : null,
            voteAverage: typeof m.vote_average === 'number' ? m.vote_average : null,
            voteCount: typeof m.vote_count === 'number' ? m.vote_count : null,
            languages: spoken.length ? spoken : [],
            genres,
            director: directors.length ? directors.join(', ') : null,
            homepage: m.homepage || null,
            imdbId: m.imdb_id || null,
        };

        tmdbDetailsCache.set(cacheKey, body);
        return res.json(body);
    } catch (e) {
        console.error('movie-details', e);
        return res.status(500).json({
            ok: false,
            reason: 'server',
            message: e instanceof Error ? e.message : 'Unexpected error.',
        });
    }
});

// Books: Open Library API — free, no key (https://openlibrary.org/developers/api)
// Alternative with key: Google Books API — https://developers.google.com/books/docs/v1/using
const bookDetailsCache = new Map();
const OPEN_LIBRARY_UA = { 'User-Agent': 'recommender-app/1.0 (local demo)' };

function openLibraryLanguageLabel(code) {
    if (!code || typeof code !== 'string') return code;
    const c = code.toLowerCase();
    const map = {
        eng: 'English',
        spa: 'Spanish',
        fre: 'French',
        ger: 'German',
        hin: 'Hindi',
        ben: 'Bengali',
        tam: 'Tamil',
        tel: 'Telugu',
        mar: 'Marathi',
        jpn: 'Japanese',
        kor: 'Korean',
        zho: 'Chinese',
    };
    return map[c] || code;
}

app.get('/api/book-details', async (req, res) => {
    const title = typeof req.query.title === 'string' ? req.query.title.trim() : '';
    if (!title) {
        return res.status(400).json({
            ok: false,
            reason: 'bad_request',
            message: 'Missing or invalid title query parameter.',
        });
    }

    const cacheKey = title.toLowerCase();
    if (bookDetailsCache.has(cacheKey)) {
        return res.json(bookDetailsCache.get(cacheKey));
    }

    try {
        const searchUrl = `https://openlibrary.org/search.json?title=${encodeURIComponent(
            title
        )}&limit=8`;
        const searchRes = await fetch(searchUrl, { headers: OPEN_LIBRARY_UA });
        if (!searchRes.ok) {
            return res.status(502).json({
                ok: false,
                reason: 'openlibrary_search',
                status: searchRes.status,
                message: 'Open Library search request failed.',
            });
        }
        const searchJson = await searchRes.json();
        const docs = searchJson.docs || [];
        const norm = (t) => String(t || '').toLowerCase().replace(/[^a-z0-9]/g, '');
        const want = norm(title);
        const doc =
            docs.find((d) => norm(d.title) === want) ||
            docs.find((d) => norm(d.title).includes(want) || want.includes(norm(d.title))) ||
            docs[0];

        if (!doc) {
            const body = {
                ok: false,
                reason: 'not_found',
                message: 'No Open Library match for this title.',
            };
            bookDetailsCache.set(cacheKey, body);
            return res.json(body);
        }

        let overview = '';
        const workKey = doc.key;
        if (workKey && String(workKey).startsWith('/works/')) {
            const workRes = await fetch(`https://openlibrary.org${workKey}.json`, {
                headers: OPEN_LIBRARY_UA,
            });
            if (workRes.ok) {
                const work = await workRes.json();
                const d = work.description;
                if (typeof d === 'string') overview = d;
                else if (d && typeof d === 'object' && typeof d.value === 'string') overview = d.value;
            }
        }

        if (!overview && Array.isArray(doc.first_sentence) && doc.first_sentence[0]) {
            overview = String(doc.first_sentence[0]);
        } else if (!overview && typeof doc.first_sentence === 'string') {
            overview = doc.first_sentence;
        }

        let coverUrl = null;
        if (typeof doc.cover_i === 'number') {
            coverUrl = `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`;
        } else if (Array.isArray(doc.isbn) && doc.isbn[0]) {
            coverUrl = `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-L.jpg`;
        }

        const authors = Array.isArray(doc.author_name) ? doc.author_name.slice(0, 8).join(', ') : null;
        const subjects = Array.isArray(doc.subject) ? doc.subject.slice(0, 14) : [];
        const langs = Array.isArray(doc.language)
            ? [...new Set(doc.language.map(openLibraryLanguageLabel))]
            : [];

        const body = {
            ok: true,
            source: 'openlibrary',
            title: doc.title || title,
            authors,
            firstPublishYear: doc.first_publish_year ?? null,
            pageCount: doc.number_of_pages_median ?? null,
            subjects,
            languages: langs,
            coverUrl,
            coverUrlLarge: coverUrl,
            overview: overview || '',
            openLibraryWorkUrl: workKey ? `https://openlibrary.org${workKey}` : null,
        };

        bookDetailsCache.set(cacheKey, body);
        return res.json(body);
    } catch (e) {
        console.error('book-details', e);
        return res.status(500).json({
            ok: false,
            reason: 'server',
            message: e instanceof Error ? e.message : 'Unexpected error.',
        });
    }
});

function stripHtml(html) {
    if (!html || typeof html !== 'string') return '';
    return html
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function normForMatch(s) {
    return String(s || '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
}

// Games: RAWG Video Games API — free key at https://rawg.io/apidocs
const gameDetailsCache = new Map();

app.get('/api/game-details', async (req, res) => {
    const name = typeof req.query.name === 'string' ? req.query.name.trim() : '';
    if (!name) {
        return res.status(400).json({
            ok: false,
            reason: 'bad_request',
            message: 'Missing or invalid name query parameter.',
        });
    }

    const cacheKey = name.toLowerCase();
    if (gameDetailsCache.has(cacheKey)) {
        return res.json(gameDetailsCache.get(cacheKey));
    }

    const key = process.env.RAWG_API_KEY;
    if (!key) {
        return res.json({
            ok: false,
            reason: 'no_key',
            message:
                'Set RAWG_API_KEY in backend/.env — register at https://rawg.io/apidocs for a free API key.',
        });
    }

    try {
        const searchUrl = `https://api.rawg.io/api/games?search=${encodeURIComponent(
            name
        )}&page_size=8&key=${encodeURIComponent(key)}`;
        const searchRes = await fetch(searchUrl);
        if (!searchRes.ok) {
            return res.status(502).json({
                ok: false,
                reason: 'rawg_search',
                status: searchRes.status,
                message: 'RAWG search request failed.',
            });
        }
        const searchJson = await searchRes.json();
        const results = searchJson.results || [];
        const want = normForMatch(name);
        const pick =
            results.find((r) => normForMatch(r.name) === want) ||
            results.find(
                (r) =>
                    normForMatch(r.name).includes(want) ||
                    want.includes(normForMatch(r.name))
            ) ||
            results[0];

        if (!pick) {
            const body = {
                ok: false,
                reason: 'not_found',
                message: 'No RAWG match for this game.',
            };
            gameDetailsCache.set(cacheKey, body);
            return res.json(body);
        }

        const detailUrl = `https://api.rawg.io/api/games/${pick.id}?key=${encodeURIComponent(key)}`;
        const detailRes = await fetch(detailUrl);
        if (!detailRes.ok) {
            return res.status(502).json({
                ok: false,
                reason: 'rawg_detail',
                status: detailRes.status,
                message: 'RAWG game details request failed.',
            });
        }
        const g = await detailRes.json();

        const genres = (g.genres || []).map((x) => x.name).filter(Boolean);
        const developers = (g.developers || []).map((d) => d.name).slice(0, 6).join(', ') || null;
        const platforms = (g.platforms || [])
            .map((p) => p.platform && p.platform.name)
            .filter(Boolean)
            .slice(0, 16);

        const year =
            g.released && String(g.released).length >= 4
                ? parseInt(String(g.released).slice(0, 4), 10)
                : null;

        const body = {
            ok: true,
            source: 'rawg',
            title: g.name || name,
            overview: stripHtml(g.description || ''),
            posterUrl: g.background_image || null,
            posterUrlLarge: g.background_image || null,
            backdropUrl: g.background_image_additional || g.background_image || null,
            released: g.released || null,
            year,
            rating: typeof g.rating === 'number' ? g.rating : null,
            metacritic: typeof g.metacritic === 'number' ? g.metacritic : null,
            genres,
            developers,
            platforms,
            website: g.website || null,
            rawgUrl: g.slug ? `https://rawg.io/games/${g.slug}` : null,
        };

        gameDetailsCache.set(cacheKey, body);
        return res.json(body);
    } catch (e) {
        console.error('game-details', e);
        return res.status(500).json({
            ok: false,
            reason: 'server',
            message: e instanceof Error ? e.message : 'Unexpected error.',
        });
    }
});

// Software: Wikipedia REST summary (no API key) — https://www.mediawiki.org/wiki/API:REST_API
const softwareDetailsCache = new Map();

app.get('/api/software-details', async (req, res) => {
    const title = typeof req.query.title === 'string' ? req.query.title.trim() : '';
    if (!title) {
        return res.status(400).json({
            ok: false,
            reason: 'bad_request',
            message: 'Missing or invalid title query parameter.',
        });
    }

    const cacheKey = title.toLowerCase();
    if (softwareDetailsCache.has(cacheKey)) {
        return res.json(softwareDetailsCache.get(cacheKey));
    }

    const slug = title.trim().replace(/\s+/g, '_');

    async function fetchSummary(pageTitle) {
        const enc = encodeURIComponent(pageTitle.replace(/ /g, '_'));
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${enc}`;
        const r = await fetch(url, {
            headers: { 'User-Agent': 'recommender-app/1.0 (local demo; contact: local)' },
        });
        return r;
    }

    try {
        let resWiki = await fetchSummary(slug);
        if (resWiki.status === 404 && title.includes(':')) {
            const shortTitle = title.split(':')[0].trim();
            resWiki = await fetchSummary(shortTitle.replace(/\s+/g, '_'));
        }

        if (!resWiki.ok) {
            if (resWiki.status === 404) {
                const body = {
                    ok: false,
                    reason: 'not_found',
                    message: 'No Wikipedia article matched this title.',
                };
                softwareDetailsCache.set(cacheKey, body);
                return res.json(body);
            }
            return res.status(502).json({
                ok: false,
                reason: 'wikipedia',
                status: resWiki.status,
                message: 'Wikipedia summary request failed.',
            });
        }

        const page = await resWiki.json();
        const thumb = page.thumbnail && page.thumbnail.source ? page.thumbnail.source : null;

        const body = {
            ok: true,
            source: 'wikipedia',
            title: page.title || title,
            overview: page.extract || '',
            posterUrl: thumb,
            posterUrlLarge: thumb,
            backdropUrl: thumb,
            articleUrl: page.content_urls && page.content_urls.desktop ? page.content_urls.desktop.page : null,
        };

        softwareDetailsCache.set(cacheKey, body);
        return res.json(body);
    } catch (e) {
        console.error('software-details', e);
        return res.status(500).json({
            ok: false,
            reason: 'server',
            message: e instanceof Error ? e.message : 'Unexpected error.',
        });
    }
});

// API Endpoint to get recommendations
app.get('/api/recommend', (req, res) => {
    console.log("Query:", req.query);
    const { category } = req.query;
    const rawGenre = req.query.genre;
    const genre = Array.isArray(rawGenre) ? rawGenre[0] : rawGenre;

    // Validate category
    if (!database[category]) {
        return res.status(400).json({ error: 'Invalid category. Choose Movies, Books, Games, or Software.' });
    }

    if (typeof genre !== 'string' || !genre.trim()) {
        return res.status(400).json({ error: 'Missing or invalid genre query parameter.' });
    }

    // Filter by genre (case-insensitive)
    const results = database[category]
        .filter(item => item.genre.toLowerCase() === genre.toLowerCase())
        .map(item => enrichRecommendation(category, item));

    res.json(results);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server running on http://localhost:${PORT} (LAN: use this machine IP for phones)`);
});