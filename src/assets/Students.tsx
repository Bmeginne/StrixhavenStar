import { Class, Club, Job, Location, School, Student } from "./Models"
import { BOOK_CLUB, CHEER, DEAD_LANGUAGES, DEBATE, DRAGONCHESS, ENTREPRENEURS, FAITH, FINE_ARTS, HORTICULTURE, LIFTERS, MAGE_TOWER, PARTY, BAND, SILKBALL, SPARRING, STAR } from "./Clubs"
import { BARISTA, GROUNDS_DRAG, GROUNDS_FENS, LABS, LIBRARIAN, RA_LORE, RA_PRIS, RA_QUAN, RA_SILV, RA_WITH, TA_ROVINA, WAITER } from "./Jobs"
import { ARITHMODROME, BIBLIOPLEX, BLISS_HALL, BOG, CAFE, COMMONS, CONSULARIUM, CULTIVARIUM, DORMS_COMMON, DORMS_LORE, DORMS_PRIS, DRAGONSBREATH, FENS, PILLARDROP, ROSE_STAGE, STADIUM, TAVERN, WHITERAVEN } from "./Locations"
import Cass from "./images/people/Cass.png"
import Dusty from "./images/people/Dusty.png"
import Ace from "./images/people/Ace.png"
import Alexis from "./images/people/Alexis.png"
import Ariel from "./images/people/Ariel.png"
import Arsene from "./images/people/Arsene.png"
import Brilliance from "./images/people/Brilliance.png"
import Brynn from "./images/people/Brynn.png"
import Carrion from "./images/people/Carrion.png"
import Cerise from "./images/people/Cerise.png"
import Ciaran from "./images/people/Ciaran.png"
import Cyr from "./images/people/Cyr.png"
import Elowen from "./images/people/Elowen.png"
import Evander from "./images/people/Evander.png"
import Farren from "./images/people/Farren.png"
import Felix from "./images/people/Felix.png"
import Grace from "./images/people/Grace.png"
import Hennie from "./images/people/Hennie.png"
import Hildegard from "./images/people/Hildegard.png"
import Jasmine from "./images/people/Jasmine.png"
import Jewel from "./images/people/Jewel.png"
import Lux from "./images/people/Lux.png"
import Page from "./images/people/Page.png"
import Petra from "./images/people/Petra.png"
import Pyre from "./images/people/Pyre.png"
import Ramona from "./images/people/Ramona.png"
import Ray from "./images/people/Ray.png"
import Sasha from "./images/people/Sasha.png"
import Shaw from "./images/people/Shaw.png"
import Thijs from "./images/people/Thijs.png"
import Tomas from "./images/people/Tomas.png"
import Vi from "./images/people/Vi.png"
import Worth from "./images/people/Worth.png"
import Zephyr from "./images/people/Zephyr.png"
import Zinnia from "./images/people/Zinnia.png"
import Zoey from "./images/people/Zoey.png"
// import Morgan from "./images/people/Morgan.png"
// import Oscar from "./images/people/Oscar.png"
// import Khalil from "./images/people/Khalil.png"
// import Elio from "./images/people/Elio.png"
import Andy from "./images/people/Andy.png"
import Elisa from "./images/people/Elisa.png"


export const STUDENTS: Student[] = [
    {
        name: 'Cassius "Cass" Elmbrant',
        shortName: "Cass",
        pronouns: "He/Him",
        appearance: {height: "5'10\"", eyes: "Brown", hair: "Brown"},
        year: "4th",
        school: "Lorehold",
        jobs: [LIBRARIAN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [BOOK_CLUB, SPARRING, DRAGONCHESS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, STADIUM, CAFE, FENS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Dusty"].sort(),
        freshRoomies: ["Dusty"].sort(),
        image: Cass,
        connections: [
            {name: "Dusty", relation: "Childhood best friend"},
            {name: "Zoey", relation: "Hasn't officially asked out"},
            {name: "Jasmine", relation: "A more recent but still good friend"},
            "He is the primary facilitator of Book Club and knows its members well."
        ],
        advisors: ["Maddox", "Mara"],
    },
    {
        name: 'Dusty Oleastro',
        shortName: "Dusty",
        pronouns: "Any",
        year: "4th",
        school: "Lorehold",
        jobs: [],
        clubs: [SPARRING, DEBATE, HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [PILLARDROP, CULTIVARIUM, FENS, BOG].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Cass"].sort(),
        freshRoomies: ["Cass"],
        image: Dusty,
        connections: [
            {name: "Jasmine", relation: "Complicated, too scared"},
            {name: "Sasha", relation: "Complicated, childhood friends, ate her out on a rock"},
            {name: "Cass", relation: "Childhood friends"},
        ],
        advisors: ["Mara", "Fiamma"],
    },
    {
        name: 'Ramona',
        shortName: "Ramona",
        pronouns: "She/Her",
        year: "4th",
        school: "Silverquill",
        jobs: [LIBRARIAN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [FINE_ARTS, SILKBALL].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, TAVERN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Hildegard"],
        freshRoomies: ["Pyre"].sort(),
        image: Ramona,
        advisors: ["Caladrius", "Caspian"]
    },
    {
        name: 'Vivian Olenta',
        shortName: "Vi",
        pronouns: "She/Her",
        appearance: {height: `6'4"`, eyes: "Void", hair: "Long Black"},
        year: "4th",
        school: "Witherbloom",
        jobs: [TA_ROVINA],
        clubs: [SPARRING, SILKBALL, FAITH].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BOG, FENS, CULTIVARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Farren"],
        freshRoomies: ["Zoey"].sort(),
        image: Vi,
        advisors: ["Rovina", "Diana"],
        connections: [
            {name: "Zoey", relation: "Something of her only friend, who she helps do violent things sometimes"},
            {name: "Lux", relation: "Helped Zoey attack them"},
            {name: "Sasha", relation: "Killed while attacking Lux. Had and still has a fondness for"},
            {name: "Farren", relation: "Fascinated by their aasimar nature and attacked them before"},
            {name: "Brilliance", relation: "Fascinated by her optimism and alchemical talent"}
        ]
    },
    {
        name: 'Zoey Allans',
        shortName: "Zoey",
        pronouns: "She/Her",
        appearance: {height: `5'10"`, hair: "Long Blonde", eyes: "Blue", other: ["Freckles"]},
        year: "4th",
        school: "Lorehold",
        jobs: [LABS],
        clubs: [SPARRING, BOOK_CLUB, SILKBALL].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [STADIUM, CAFE, COMMONS, BIBLIOPLEX].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Vi"].sort(),
        roommates: ["Jasmine"],
        image: Zoey,
        connections: [
            {name: "Lux", relation: "Sibling who she hates for being gay and an affair baby and ruining their family"},
            {name: "Cass", relation: "Hasn't asked to be her boyfriend yet"},
            {name: "Alexis", relation: "Co-Queen Bee in her clique"},
            {name: ["Pyre", "Carrion", "Jasmine"], relation: "Also in her clique"},
            {name: "Grace", relation: "Little sister figure and martial protege"},
            {name: "Vi", relation: "Violent first-year roommate who agreed to help her hurt Lux"},
            {name: "Sasha", relation: "Died by Vivian's hand as a result of the above conflict"},
            {name: "Felix", relation: "Publically defaming her in Lux's defense"}
        ]
    },
    {
        name: 'Ariel',
        shortName: "Ariel",
        pronouns: "He/Him",
        appearance: {height: `5'7.5"`, eyes: "Pale", hair: "Beautiful Pink"},
        year: "4th",
        school: "Lorehold",
        jobs: [],
        clubs: [SPARRING, BOOK_CLUB, DRAGONCHESS, HORTICULTURE, MAGE_TOWER, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, PILLARDROP].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Hildegard", "Jasmine"].sort(),
        roommates: ["Page"],
        image: Ariel,
        connections: [
            {name: "Hildegard", relation: "Very, very close friend"},
            {name: "Mara", relation: "Close mentor who he T.As for"},
            {name: "Felix", relation: "Slept with"},
            {name: "Brynn", relation: "Friends as a loose Lorehold mentor figure."}
        ]
    },
    {
        name: 'Pyre',
        shortName: "Pyre",
        pronouns: "She/Her",
        year: "4th",
        school: "Prismari",
        jobs: [],
        clubs: [BOOK_CLUB, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [TAVERN, CONSULARIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Evander"],
        freshRoomies: ["Ramona"].sort(),
        image: Pyre,
        connections: [{name: "Glass", relation: "Brother"}]
    },
    {
        name: 'Glass',
        shortName: "Glass",
        pronouns: "He/Him",
        year: "4th",
        school: "Witherbloom",
        jobs: [],
        clubs: [FINE_ARTS, MAGE_TOWER, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cerise"],
        freshRoomies: ["Farren", "Evander"].sort(),
        connections: [{name: "Pyre", relation: "Sister"}]
    },
    {
        name: 'Evander',
        shortName: "Evander",
        pronouns: "He/Him",
        year: "4th",
        school: "Prismari",
        jobs: [],
        clubs: [MAGE_TOWER, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Pyre"],
        freshRoomies: ["Glass", "Farren"].sort(),
        image: Evander
    },
    {
        name: 'Alexis',
        shortName: "Alexis",
        pronouns: "She/Her",
        appearance: {height: `5'7"`, eyes: "Blue/Black Heterochromia", hair: "Long Black"},
        year: "4th",
        school: "Quandrix",
        jobs: [],
        clubs: [DRAGONCHESS, ENTREPRENEURS, MAGE_TOWER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Zephyr"],
        freshRoomies: ["Carrion"].sort(),
        image: Alexis,
        connections: [
            {name: "Jewel", relation: "Primary Quandrix protege"},
            {name: "Petra", relation: "Also advises"},
            {name: "Worth", relation: "Secondary protege"},
            {name: "Zoey", relation: "Gruffer counterpart to her classier Queen Bee side of their clique"},
            {name: ["Pyre", "Jasmine", "Grace"], relation: "Also in her clique"},
            {name: "Carrion", relation: "In the clique but has a quiet rivalry with"},
            {name: ["Felix", "Ariel"], relation: "Had a fling with last Masquerade"},
            "A mystery professor who she slept with."
        ]
    },
    {
        name: 'Carrion',
        shortName: "Carrion",
        pronouns: "They/Them",
        year: "4th",
        school: "Silverquill",
        jobs: [LIBRARIAN],
        clubs: [DEBATE, STAR, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Thijs", "Tomas"],
        freshRoomies: ["Alexis"].sort(),
        image: Carrion
    },
    {
        name: 'Hildegard',
        shortName: "Hildegard",
        pronouns: "They/Them",
        year: "4th",
        school: "Silverquill",
        jobs: [RA_SILV],
        clubs: [STAR, FAITH, SPARRING].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Ramona"],
        freshRoomies: ["Ariel", "Jasmine"].sort(),
        image: Hildegard
    },
    {
        name: 'Farren',
        shortName: "Farren",
        pronouns: "They/Them",
        year: "4th",
        school: "Witherbloom",
        jobs: [RA_WITH],
        clubs: [SPARRING, DEAD_LANGUAGES, FAITH, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Vi"],
        freshRoomies: ["Glass", "Evander"].sort(),
        image: Farren
    },
    {
        name: 'Jasmine Bennett',
        shortName: "Jasmine",
        pronouns: "She/Her",
        appearance: {height: `5'6"`, eyes: "Blue", hair: "Ginger", other: ["Freckles"]},
        year: "4th",
        school: "Lorehold",
        jobs: [RA_LORE],
        clubs: [BOOK_CLUB, SPARRING, ENTREPRENEURS, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX, COMMONS, DORMS_LORE],
        freshRoomies: ["Ariel", "Hildegard"].sort(),
        roommates: ["Zoey"],
        image: Jasmine,
        connections: [
            {name: "Zoey", relation: "Roommate and good friend"},
            {name: "Hennie", relation: "Looks out for"},
            {name: ["Pyre", "Alexis", "Carrion"], relation: "In Zoey's friend group"},
            {name: "Dusty", relation: "Frequent adventure partner"},
            {name: "Felix", relation: "Fucked despite her wariness of his views on Shaw and Hennie"}
        ]
    },
    {
        name: 'Brynn Alfyr',
        shortName: "Brynn",
        pronouns: "She/Her",
        year: "3rd",
        school: "Lorehold",
        jobs: [],
        clubs: [BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [BIBLIOPLEX].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Ace"],
        freshRoomies: ["Cyr", "Elowen"].sort(),
        image: Brynn,
        advisors: ["Akshaya", "Fiamma"]
    },
    {
        name: 'Cyr Kostakis',
        shortName: "Cyr",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [BARISTA].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [DEAD_LANGUAGES, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [COMMONS, BLISS_HALL, CONSULARIUM, DRAGONSBREATH].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Worth", "Ciaran"],
        freshRoomies: ["Brynn", "Elowen"].sort(),
        image: Cyr,
        // connections: ["Lilia"]
        advisors: ["Emerson"]
    },
    {
        name: 'Thijs Vann Dalen',
        shortName: "Thijs",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [ENTREPRENEURS, DEBATE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [COMMONS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Tomas", "Carrion"],
        freshRoomies: ["Petra", "Ciaran"].sort(),
        image: Thijs,
        connections: [{name: "Hennie", relation: "Sister"}],
        advisors: ["Caladrius", "Entertain"]
    },
    {
        name: 'Felix Moulin',
        shortName: "Felix",
        pronouns: "He/Him",
        appearance: {height: `5'8"`, hair: "Golden", eyes: "Ruby", other: ["Golden Skin", "Fangs"]},
        year: "3rd",
        school: "Silverquill",
        jobs: [WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [FINE_ARTS, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [COMMONS, CONSULARIUM, TAVERN, ROSE_STAGE, WHITERAVEN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: [],
        image: Felix,
        advisors: ["Caspian", "Emerson"],
        connections: [
            {name: "Arsene", relation: "Faithful and loyally devoted boytoy/companion"},
            {name: "Sasha", relation: "Trusted second in command"},
            {name: "Cerise", relation: "Sweet and cherished treasure"},
            {name: "Lux", relation: "Companion who he not only values but feels strongly protective of"},
            {name: "Glass", relation: "Favorite tall dark and handsome chew toy"},
            {name: "Evander", relation: "Delights in the fanaticism of"},
            {name: "Pyre", relation: "Often invites to play at his parties"},
            {name: "Zoey", relation: "Is now big beefin' with on Lux's behalf"},
            {name: "Caspian", relation: "Almost had sex with before learning the tragic backstory of"},
            {name: "Ciaran", relation: "Been personally and deeply offended by more than anyone else ever could"},
            {name: ["Alexis", "Ariel", "Dusty", "Jasmine"], relation: "Also people he's had sex with"}
        ]
    },
    {
        name: 'Lux Allans',
        shortName: "Lux",
        pronouns: "They/Them",
        appearance: {height: `5'8"`, eyes: "Golden", hair: "Golden"},
        year: "3rd",
        school: "Witherbloom",
        jobs: [BARISTA, WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [HORTICULTURE, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [FENS, ROSE_STAGE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Sasha"],
        freshRoomies: ["Ray", "Sasha"].sort(),
        image: Lux,
        connections: [
            {name: "Felix", relation: "Friend who they deeply admire and respect but also feel indebted to for all he's done to draw them out of their shell"},
            {name: "Sasha", relation: "Person they think of first"},
            {name: "Zoey", relation: "Elder sister whose approval they sought until the incident that led to Sasha's death"},
            {name: "Grace", relation: "Coworker at the fire jolt and the little sister their sister always wanted. Normal feelings about that"}
        ],
        advisors: ["Arabella", "Eloise"]
    },
    {
        name: 'Ace',
        shortName: "Ace",
        pronouns: "They/Them",
        year: "3rd",
        school: "Lorehold",
        jobs: [WAITER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        clubs: [SILKBALL, MAGE_TOWER, BOOK_CLUB, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Arsene", "Tomas"],
        roommates: ["Brynn"].sort(),
        image: Ace
    },
    {
        name: 'Ray',
        shortName: "Ray",
        pronouns: "He/Him",
        year: "3rd",
        school: "Prismari",
        jobs: [],
        clubs: [FINE_ARTS, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Lux", "Shaw"].sort(),
        roommates: ["Shaw"],
        image: Ray
    },
    {
        name: 'Elowen',
        shortName: "Elowen",
        pronouns: "She/Her",
        year: "3rd",
        school: "Prismari",
        jobs: [RA_PRIS],
        clubs: [FINE_ARTS, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Brynn", "Cyr"].sort(),
        roommates: ["Grace", "Hennie"],
        image: Elowen
    },
    {
        name: 'Petra',
        shortName: "Petra",
        pronouns: "He/Him",
        year: "3rd",
        school: "Quandrix",
        jobs: [LABS, RA_QUAN],
        clubs: [DRAGONCHESS, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Arsene"],
        freshRoomies: ["Thijs", "Ciaran"].sort(),
        image: Petra
    },
    {
        name: 'Arsene',
        shortName: "Arsene",
        pronouns: "He/They",
        year: "3rd",
        school: "Quandrix",
        jobs: [],
        clubs: [HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Petra"],
        freshRoomies: ["Tomas", "Ace"].sort(),
        image: Arsene
    },
    {
        name: 'Ciaran',
        shortName: "Ciaran",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [DRAGONCHESS, BOOK_CLUB, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cyr", "Worth"],
        freshRoomies: ["Thijs", "Petra"].sort(),
        image: Ciaran
    },
    {
        name: 'Tomas',
        shortName: "Tomas",
        pronouns: "He/Him",
        year: "3rd",
        school: "Silverquill",
        jobs: [],
        clubs: [DEBATE, STAR, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Thijs", "Carrion"],
        freshRoomies: ["Arsene", "Ace"].sort(),
        image: Tomas
    },
    {
        name: 'Sasha',
        shortName: "Sasha",
        pronouns: "She/Her",
        year: "3rd",
        school: "Witherbloom",
        jobs: [],
        clubs: [SILKBALL, SPARRING, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Lux"],
        freshRoomies: ["Ray", "Lux"].sort(),
        image: Sasha
    },
    {
        name: 'Grace Mirari',
        shortName: "Grace",
        pronouns: "She/Her",
        appearance: {height: `5'10"`, eyes: "Big Blue(?)", hair: "Blonde(?)"},
        year: "2nd",
        school: "Prismari",
        jobs: [BARISTA],
        clubs: [SPARRING, CHEER, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [CAFE, FENS, STADIUM, CONSULARIUM, DORMS_PRIS].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Worth", "Brilliance"].sort(),
        roommates: ["Hennie", "Elowen"],
        image: Grace,
        advisors: ["Adresin", "Johanna"],
        connections: [
            {name: "Worth", relation: "Boyfriend who she's absolutely obsessed with"},
            {name: "Zoey", relation: "Mentor and big sister figure"},
            {name: "Cass", relation: "Loosely a mentor figure but mainly Zoey's love interest"},
            {name: "Lux", relation: "Coworker and Zoey's estranged sibling, which she has guilt over"},
            {name: "Ray", relation: "Has a strange fixation on and also broke her heart"},
            {name: ["Hennie", "Brilliance"], relation: "Good friends"},
            {name: ["Zinnia, Zephyr, Jewel"], relation: "Also friends with"},
            {name: ["Adresin", "Johanna"], relation: "The closest thing she has to parental figures"},
            {name: "Rovina", relation: "Wine Aunt"},
            {name: "Odette", relation: "Other big sister figure"}
        ]
    },
    {
        name: 'Hendrika Vann Dalen',
        shortName: "Hennie",
        pronouns: "She/Her",
        appearance: {height: `5'5"`, eyes: "Brown", hair: "Blonde", other: ["Tan skin"]},
        year: "2nd",
        school: "Prismari",
        jobs: [],
        clubs: [FINE_ARTS, CHEER].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [TAVERN, STADIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Zephyr", "Shaw"].sort(),
        roommates: ["Grace", "Elowen"],
        image: Hennie,
        connections: [
            {name: "Thijs", relation: "Stick-in-the-mud older brother"},
            {name: "Shaw", relation: "'Amicable' ex she dated on and off through first year, messily"},
            {name: ["Grace", "Brilliance", "Zephyr"], relation: "Helped her through her breakup first year"},
            {name: ["Jewel", "Zinnia"], relation: "Also in that friend group"},
            {name: "Odette", relation: "Really admires as the cheer captain"},
            {name: "Jasmine", relation: "Is doing her best to be a girl's girl for her"}
        ],
        advisors: ["Odette", "Valora"]
    },
    {
        name: 'Jewel',
        shortName: "Jewel",
        pronouns: "She/Her",
        appearance: {height: `5'`, hair: "White", eyes: "Pink", other: ["Pink crystals pockmarking her skin"]},
        year: "2nd",
        school: "Quandrix",
        jobs: [],
        clubs: [MAGE_TOWER, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [CONSULARIUM, COMMONS, ARITHMODROME, STADIUM].sort((a,b) => {return a.name.localeCompare(b.name)}),
        freshRoomies: ["Zinnia"].sort(),
        roommates: ["Andy"],
        image: Jewel,
        advisors: ["Isolde", "Jianhua"],
        connections: [
            {name: "Alexis", relation: "Quandrix mentor"},
            {name: ["Hennie", "Grace", "Brilliance", "Zinnia"], relation: "Second-year gal pals across houses"},
            {name: "Zephyr", relation: "Sometimes write each other notes in class. Also part of the inter-house gal pals"},
            {name: "Andy", relation: "Frequent source of academic inspiration"}
        ]
    },
    {
        name: 'Brilliance',
        shortName: "Brilliance",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [],
        clubs: [HORTICULTURE].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [CULTIVARIUM, CAFE, TAVERN].sort((a,b) => {return a.name.localeCompare(b.name)}),
        roommates: ["Zinnia"],
        freshRoomies: ["Grace", "Worth"].sort((a,b) => {return a.localeCompare(b)}),
        image: Brilliance,
        advisors: ["Arabella", "Rovina"]
    },
    {
        name: 'Page',
        shortName: "Page",
        pronouns: "They/Them",
        year: "2nd",
        school: "Lorehold",
        jobs: [],
        clubs: [BOOK_CLUB, SPARRING].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Cerise"].sort(),
        roommates: ["Ariel"],
        image: Page
    },
    {
        name: 'Shaw',
        shortName: "Shaw",
        pronouns: "He/Him",
        year: "2nd",
        school: "Prismari",
        jobs: [GROUNDS_DRAG],
        clubs: [FINE_ARTS, SILKBALL, LIFTERS, BAND, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        freshRoomies: ["Zephyr", "Hennie"].sort(),
        roommates: ["Ray"],
        image: Shaw
    },
    {
        name: 'Zephyr',
        shortName: "Zephyr",
        pronouns: "She/Her",
        year: "2nd",
        school: "Quandrix",
        jobs: [LABS, LIBRARIAN],
        clubs: [DEAD_LANGUAGES, DRAGONCHESS, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Alexis"],
        freshRoomies: ["Shaw", "Hennie"].sort(),
        image: Zephyr
    },
    {
        name: 'Worth',
        shortName: "Worth",
        pronouns: "He/Him",
        year: "2nd",
        school: "Silverquill",
        jobs: [LIBRARIAN],
        clubs: [DEBATE, ENTREPRENEURS, STAR, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Cyr", "Ciaran"],
        freshRoomies: ["Grace", "Brilliance"].sort(),
        image: Worth,
        connections: [{name: "Worth", relation: "Girlfriend"}]
    },
    {
        name: 'Zinnia',
        shortName: "Zinnia",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [GROUNDS_FENS],
        clubs: [HORTICULTURE, BOOK_CLUB].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Brilliance"],
        freshRoomies: ["Jewel"].sort(),
        image: Zinnia,
        // connections: ["Chrys"]
    },
    {
        name: 'Cerise',
        shortName: "Cerise",
        pronouns: "She/Her",
        year: "2nd",
        school: "Witherbloom",
        jobs: [BARISTA],
        clubs: [HORTICULTURE, BOOK_CLUB, PARTY].sort((a,b) => {return a.name.localeCompare(b.name)}),
        frequents: [],
        roommates: ["Glass"],
        freshRoomies: ["Page"],
        image: Cerise
    },
    {
        name: 'Andrea "Andy" Lebowitz',
        shortName: "Andy",
        pronouns: "She/Her",
        appearance: {height: `6'`, hair: "Red Mane", eyes: "Dark", other: ["Glasses"]},
        year: "2nd",
        school: "Quandrix",
        jobs: [LABS],
        clubs: [DEBATE, STAR],
        frequents: [COMMONS, BIBLIOPLEX, ARITHMODROME, TAVERN],
        roommates: ["Jewel"],
        freshRoomies: [],
        image: Andy,
        advisors: ["Aleksander", "Jianhua"],
        connections: [
            {name: "Thijs", relation: "Best friend in haterism, and only real friend on campus"},
            {name: "Tomas", relation: "Tormentor and sexually charged enemy on the Star's writing staff"},
            {name: "Jewel", relation: "Academic rival"},
            "Her best friend and crush, you wouldn't know him, he doesn't go here"
        ]
    },
    {
        name: "Elisa",
        shortName: "Elisa",
        pronouns: "She/Her",
        year: "2nd",
        school: "Quandrix",
        jobs: [],
        clubs: [],
        frequents: [],
        roommates: [],
        image: Elisa
    }
    // {
    //     name: 'Morgan Arell',
    //     shortName: "Morgan",
    //     pronouns: "They/Them",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [SILKBALL, FAITH, LIFTERS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Morgan
    // },
    // {
    //     name: 'Khalil',
    //     shortName: "Khalil",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Quandrix",
    //     jobs: JOBS,
    //     clubs: [MAGE_TOWER],
    //     frequents: [STADIUM, SANCTUARY, CULTIVARIUM],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Khalil
    // },
    // {
    //     name: 'Oscar Gatewood',
    //     shortName: "Oscar",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Lorehold",
    //     jobs: [LIBRARIAN],
    //     clubs: [DEAD_LANGUAGES, DRAGONCHESS, HORTICULTURE],
    //     frequents: [BIBLIOPLEX, CAFE, GUARDIAN_HALL, LEGACY_ROW, PILLARDROP, OPUS],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Oscar
    // },
    // {
    //     name: 'Elio',
    //     shortName: "Elio",
    //     pronouns: "He/Him",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: CLUBS,
    //     frequents: [BOG, COMMONS],
    //     roommates: [],
    //     freshRoomies: [],
    //     image: Elio
    // },
    // {
    //     name: 'Lilia',
    //     shortName: "Lilia",
    //     pronouns: "She/Her",
    //     year: "3rd",
    //     school: "Silverquill",
    //     jobs: [],
    //     clubs: [DEAD_LANGUAGES],
    //     frequents: [COMMONS],
    //     roommates: ["Cyr"].sort(),
    //     freshRoomies: []
    // },
    // {
    //     name: 'Burning Hands',
    //     shortName: "Burning Hands",
    //     pronouns: "?/?",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [FINE_ARTS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'SU(E)',
    //     shortName: "SU(E)",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [DRAGONCHESS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'Weatherby',
    //     shortName: "Weatherby",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [DRAGONCHESS, SILKBALL],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    // {
    //     name: 'Chrys',
    //     shortName: "Chrys",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [SILKBALL, HORTICULTURE],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    //     connections: ["Zinnia"]
    // },
    // {
    //     name: 'Laanpen',
    //     shortName: "Laanpen",
    //     pronouns: "",
    //     year: "1st",
    //     school: "Prismari",
    //     jobs: [],
    //     clubs: [LIFTERS],
    //     frequents: [],
    //     roommates: [],
    //     freshRoomies: []
    // },
    
].sort((a,b) => a.shortName.localeCompare(b.shortName)) as Student[]


export function getStudentByShortName(name: String): Student | undefined  {
    return STUDENTS.find((student) => student.shortName === name)
}

export function getRegularsByLocation(loc?: Location): Student[] {

    if (!loc) {
        return []
    }

    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.frequents.includes(loc)) {
            students.push(student)
        }
        if (loc === DORMS_COMMON && student.year === "1st") {
            students.push(student)
        } else if (loc.shortName.endsWith(" Dorms") && loc.shortName.split(" ")[0] === student.school) {
            students.push(student)
        }
    })

    return students.sort((a,b) => a.name.localeCompare(b.name))
}

export function getEmployeesByJob(job: Job, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.jobs.includes(job) && (!except || !except.includes(student))) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}

export function getMembersByClub(club: Club, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.clubs.includes(club) && (!except || !except.includes(student))) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}

export function getStudentsBySchool(school: School | "Central", year?: "1st" |"2nd" | "3rd" | "4th"): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.school === school && (!year || student.year === year)) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.name.localeCompare(b.name))
}

export function getStudentsByClass(cls: Class, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach((student) => {
        if (student.classes?.includes(cls) && (!except || !except.includes(student))) {
            students.push(student)
        }
    }) 
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}

export function getStudentsByAdvisor(advisor: string, except?: Student[]): Student[] {
    const students: Student[] = []
    STUDENTS.forEach(student => {
        if (student.advisors?.includes(advisor) && (!except || !except.includes(student)))
            students.push(student)
    })
    return students.sort((a,b) => a.shortName.localeCompare(b.shortName))
}