import { Job, Location } from "./Models";
import { BIBLIOPLEX, CAFE, COMMONS, DORMS_COMMON, DORMS_LORE, DORMS_PRIS, DORMS_QUAN, DORMS_SILV, DORMS_WITH, DRAGONSBREATH, FENS, ROSE_STAGE, STADIUM, TAVERN } from "./Locations";

export const LIBRARIAN: Job = new Job(
    "Clerk",
    BIBLIOPLEX
)

export const WAITER: Job = new Job(
    "Waitstaff",
    TAVERN,
)

export const GROUNDS_MAIN: Job = new Job(
    "Grounds Crew",
    COMMONS
)

export const GROUNDS_DRAG: Job = new Job(
    "Grounds Crew",
    DRAGONSBREATH
)

export const GROUNDS_FENS: Job = new Job(
    "Grounds Crew",
    FENS
)

export const LABS: Job = new Job(
    "Lab Assistant",
    "Magic Labs",
)

export const TA_ROVINA: Job = new Job(
    "T.A. for Professor Rovina",
    "Rovina's Classroom"
)

export const RA_COMM: Job = new Job(
    "Resident Assistant",
    DORMS_COMMON,
)

export const RA_LORE: Job = new Job(
    "Resident Assistant",
    DORMS_LORE,
)

export const RA_PRIS: Job = new Job(
    "Resident Assistant",
    DORMS_PRIS,
)

export const RA_QUAN: Job = new Job(
    "Resident Assistant",
    DORMS_QUAN,
)

export const RA_SILV: Job = new Job(
    "Resident Assistant",
    DORMS_SILV,
)

export const RA_WITH: Job = new Job(
    "Resident Assistant",
    DORMS_WITH,
)

export const BARISTA: Job = new Job(
    "Barista",
    CAFE,
)

export const FIELD_CREW: Job = new Job(
    "Field Crew",
    STADIUM,
)

export const STAGEHAND: Job = new Job(
    "Stagehand",
    ROSE_STAGE,
)

export const JOBS: Job[] = [
    LIBRARIAN,
    WAITER,
    GROUNDS_MAIN,
    GROUNDS_DRAG,
    GROUNDS_FENS,
    LABS,
    TA_ROVINA,
    RA_COMM,
    RA_LORE,
    RA_PRIS,
    RA_QUAN,
    RA_SILV,
    RA_WITH,
    BARISTA,
    FIELD_CREW,
    STAGEHAND
].sort((a,b) => a.name.localeCompare(b.name)) as Job[]


export function getJobsAtLocation(loc: Location | String): Job[] {
    const jobsAtLoc: Job[] = []
    JOBS.forEach((job) => {
        if (job.location === loc) {
            jobsAtLoc.push(job)
        }
    })
    return jobsAtLoc.sort((a,b) => a.name.localeCompare(b.name))
} 

export function getJobByName(name: string): Job[] {
    const jobsWithName: Job[] = []
    JOBS.forEach((job) => {
        if (job.name === name) {
            jobsWithName.push(job)
        }
    })
    return jobsWithName.sort((a,b) => a.name.localeCompare(b.name))
}