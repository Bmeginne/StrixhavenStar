import { COMMONS, FENS } from "./Locations";
import { Class, Location } from "./Models";

export const EXAMPLE_CLASS: Class = {
    name: "Example Class",
    shortName: "Some Class",
    location: COMMONS,
    period: "1st"
}

export const EXAMPLE_CLASS2: Class = {
    name: "Example Class",
    shortName: "Club Meet",
    location: FENS,
    period: "M2"
}

export const CLASSES: Class[] = []

export function getClassByShortName(name: string): Class | undefined {
    return CLASSES.find((cls) => cls.shortName === name)
}

export function getClassesAtLocation(loc: Location): Class[] {
    const classesAtLoc: Class[] = []
    CLASSES.forEach((cls) => {
        if (cls.location === loc) {
            classesAtLoc.push(cls)
        }
    })
    return classesAtLoc.sort((a, b) => a.shortName.localeCompare(b.shortName))
}

export function getClassAtLocationDuringPeriod(location: Location, period: string): Class | undefined {
    return CLASSES.find((cls) => cls.location === location && cls.period === period)
}