import { Class, Faculty, School } from "./Models";
import Mara from "../assets/images/people/Mara.png"
import Rathal from "../assets/images/people/Rathal.png"
import Maddox from "../assets/images/people/Maddox.png"
import Fiamma from "../assets/images/people/Fiamma.png"
import Akshaya from "../assets/images/people/Akshaya.png"
import Johanna from "../assets/images/people/Johanna.png"
import Adresin from "../assets/images/people/Adresin.png"
import Odette from "../assets/images/people/Odette.png"
import Scoria from "../assets/images/people/Scoria.png"
import Valora from "../assets/images/people/Valora.png"
import Jianhua from "../assets/images/people/Jianhua.png"
import Aleksander from "../assets/images/people/Aleksander.png"
import Isolde from "../assets/images/people/Isolde.png"
import Elysian from "../assets/images/people/Elysian.png"
import Caladrius from "../assets/images/people/Caladrius.png"
import Entertain from "../assets/images/people/Entertain.png"
import Caspian from "../assets/images/people/Caspian.png"
import Emerson from "../assets/images/people/Emerson.png"
import Arabella from "../assets/images/people/Arabella.png"
import Genesis from "../assets/images/people/Genesis.png"
import Dottore from "../assets/images/people/Dottore.png"
import Eloise from "../assets/images/people/Eloise.png"
import Diana from "../assets/images/people/Diana.png"
import Jade from "../assets/images/people/Jade.png"

export const FACULTY: Faculty[] = [
    {
        name: "Mara",
        pronouns: "She/Her",
        shortName: "Mara",
        title: "Dean",
        dichotomy: "Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Mara,
        connections: [{name: "Rathal", relation: "Lover/Creation"}]
    },
    {
        name: "Rathal",
        pronouns: "She/Her",
        shortName: "Rathal",
        title: "Professor",
        dichotomy: "Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Rathal,
        connections: [{name: "Mara", relation: "Lover/Creator"}]
    },
    {
        name: "Gerard Maddox",
        pronouns: "He/Him",
        shortName: "Maddox",
        title: "Dean ",
        dichotomy: "Chaos",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Maddox
    },
    {
        name: "Fiamma",
        pronouns: "She/Her",
        shortName: "Fiamma",
        title: "Professor",
        dichotomy: "Chaos",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Fiamma
    },
    {
        name: "Akshaya",
        pronouns: "They/Them",
        shortName: "Akshaya",
        title: "Professor",
        dichotomy: "Order",
        frequents: [],
        school: "Lorehold",
        classes: [],
        image: Akshaya
    },
    {
        name: "Johanna Bauer",
        pronouns: "She/Her",
        shortName: "Johanna",
        title: "Dean",
        dichotomy: "Perfection",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Johanna
    },
    {
        name: "Adresin",
        pronouns: "He/Him",
        shortName: "Adresin",
        title: "Dean",
        dichotomy: "Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Adresin
    },
    {
        name: "Odette",
        pronouns: "She/Her",
        shortName: "Odette",
        title: "Professor",
        dichotomy: "Perfection",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Odette,
        connections: [{name: "Jianhua", relation: "?"}, {name: "Rovina", relation: "?"}]
    },
    {
        name: "Scoria",
        pronouns: "He/Him",
        shortName: "Scoria",
        title: "Instructor",
        dichotomy: "Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Scoria
    },
    {
        name: "Valora",
        pronouns: "She/Her",
        shortName: "Valora",
        title: "Instructor",
        dichotomy: "Expression",
        frequents: [],
        school: "Prismari",
        classes: [],
        image: Valora
    },
    {
        name: "Jianhua",
        pronouns: "They/Them",
        shortName: "Jianhua",
        title: "Dean",
        dichotomy: "Substance",
        frequents: [],
        school: "Quandrix",
        classes: [],
        image: Jianhua,
        connections: [{name: "Odette", relation: "?"}, {name: "Rovina", relation: "?"}]
    },
    {
        name: "Aleksander Larsen",
        pronouns: "He/Him",
        shortName: "Aleksander",
        title: "Dean",
        dichotomy: "Theory",
        frequents: [],
        school: "Quandrix",
        classes: [],
        image: Aleksander
    },
    {
        name: "Isolde Gallo",
        pronouns: "She/Her",
        shortName: "Isolde",
        title: "Professor",
        dichotomy: "Theory",
        frequents: [],
        school: "Quandrix",
        classes: [],
        image: Isolde,
        connections: [{name: "Caspian", relation: "Brother"}]
    },
    {
        name: "Elysian",
        pronouns: "They/Them",
        shortName: "Elysian",
        title: "Professor",
        dichotomy: "Substance",
        frequents: [],
        school: "Quandrix",
        classes: [],
        image: Elysian
    },
    {
        name: "Caladrius",
        pronouns: "They/Them",
        shortName: "Caladrius",
        title: "Dean",
        dichotomy: "Radiance",
        frequents: [],
        school: "Silverquill",
        classes: [],
        image: Caladrius
    },
    {
        name: "Entertain",
        pronouns: "He/Him",
        shortName: "Entertain",
        title: "Dean",
        dichotomy: "Shadow",
        frequents: [],
        school: "Silverquill",
        classes: [],
        image: Entertain
    },
    {
        name: "Caspian Gallo",
        pronouns: "He/Him",
        shortName: "Caspian",
        title: "Professor",
        dichotomy: "Shadow",
        frequents: [],
        school: "Silverquill",
        classes: [],
        image: Caspian,
        connections: [{name: "Isolde", relation: "Sister"}]
    },
    {
        name: "Emerson Blake",
        pronouns: "They/Them",
        shortName: "Emerson",
        title: "Instructor",
        dichotomy: "Radiance",
        frequents: [],
        school: "Silverquill",
        classes: [],
        image: Emerson
    },
    {
        name: "Arabella Abernathy",
        pronouns: "She/Her",
        shortName: "Arabella",
        title: "Dean",
        dichotomy: "The Root",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Arabella,
        connections: [{name: "Jade", relation: "?"}]
    },
    {
        name: "Genesis",
        pronouns: "They/Them",
        shortName: "Genesis",
        title: "Dean",
        dichotomy: "The Vein",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Genesis
    },
    {
        name: "Dottore Rovina",
        pronouns: "She/Her",
        shortName: "Rovina",
        title: "Professor",
        dichotomy: "The Vein",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Dottore,
        connections: [{name: "Jianhua", relation: "?"}, {name: "Odette", relation: "?"}]
    },
    {
        name: "Eloise",
        pronouns: "She/Her",
        shortName: "Eloise",
        title: "Professor",
        dichotomy: "The Vein",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Eloise
    },
    {
        name: "Diana Hawthorne",
        pronouns: "She/Her",
        shortName: "Diana",
        title: "Professor",
        dichotomy: "The Root",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Diana
    },
    {
        name: "Jade Ando",
        pronouns: "She/They",
        shortName: "Jade",
        title: "Instructor",
        dichotomy: "The Root",
        frequents: [],
        school: "Witherbloom",
        classes: [],
        image: Jade,
        connections: [{name: "Arabella", relation: "?"}]
    },
].sort((a,b) => a.name.localeCompare(b.name)).sort((a,b) => a.school.localeCompare(b.school)) as Faculty[]

export function getFacultyByShortName(name: String): Faculty | undefined {
    return FACULTY.find((faculty) => faculty.shortName === name)
}

export function getFacultyBySchool(school: School | "Central"): Faculty[] {
    const staff: Faculty[] = []
    FACULTY.forEach((faculty) => {
        if (faculty.school === school) {
            staff.push(faculty)
        }
    })
    return staff.sort((a, b) => a.name.localeCompare(b.name)).sort((a, b) => {
        const aIsDean = a.title.startsWith("Dean")
        const bIsDean = b.title.startsWith("Dean")

        if (aIsDean && !bIsDean)
            return -1
        else if (bIsDean && !aIsDean)
            return 1
        else return 0
    })
}

export function getTeacherByClass(cls: Class): Faculty | undefined {
    return FACULTY.find((faculty) => faculty.classes.includes(cls))
}