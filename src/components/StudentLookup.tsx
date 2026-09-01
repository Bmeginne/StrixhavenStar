import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Container, Grid, TextField, Typography, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridPreProcessEditCellProps, useGridApiRef } from '@mui/x-data-grid';
import { STUDENTS } from "../assets/Students";
import { Club, Job, School, Student } from "../assets/Models";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CLUBS } from "../assets/Clubs";
import { getJobByName, JOBS } from "../assets/Jobs";
import { theme } from "../Theme";
import { ExpandMore } from "@mui/icons-material";

export function StudentLookup() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        apiRef.current?.autosizeColumns({ includeHeaders: true, includeOutliers: true, expand: true })
    })

    const [name, setName] = useState<string | null>()
    const [clubs, setClub] = useState<Club[]>([])
    const [years, setYear] = useState<("1st" | "2nd" | "3rd" | "4th")[]>([])
    const [schools, setSchool] = useState<School[]>([])
    const [jobs, setJob] = useState<Job[]>([])

    const filteredStudents = STUDENTS.filter((student) => {
        {
            return (clubs.length < 1 || clubs.some((club) => student.clubs.includes(club))) &&
                (years.length < 1 || years.includes(student.year)) &&
                (schools.length < 1 || schools.includes(student.school)) &&
                (jobs.length < 1 || jobs.some((job) => student.jobs.includes(job))) &&
                (!name || student.shortName.toUpperCase().startsWith(name.toUpperCase()))
        }
    })

    const filteredJobs = JOBS.reduce(function (acc: Job[], curr: Job) {
        if (!acc.some((job) => job.name === curr.name))
            acc.push(curr);
        return acc;
    }, []);


    function handleSetJob(jobs: Job[]) {
        jobs.forEach((job) => {
            const sameJobs = getJobByName(job.name)
            if (sameJobs.length > 1) {
                jobs = jobs.filter((a) => a !== job)
                jobs = jobs.concat(sameJobs)
            }
        })
        setJob(jobs)
    }

    const paginationModel = { page: 0, pageSize: isMobile ? 100 : 10 };
    const apiRef = useGridApiRef()
    const columns: GridColDef[] = [
        {
            field: 'shortName', headerName: 'Name', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/student/${params.row.shortName}`}>
                    {params.row.shortName}</Link>
            }
        },
        {
            field: 'school', headerName: 'College', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/campus/${params.row.school}`}>
                    {params.row.school}</Link>
            }
        },
        { field: 'year', headerName: 'Year', minWidth: isMobile ? 50 : 150 },
        {
            field: 'clubs', headerName: 'Clubs', minWidth: isMobile ? 350 : 500,
            valueGetter: (params: Club[]) => {
                return params.flatMap((club) => club.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.clubs.map((club: Club, i: number) => {
                    return <><Link to={`/club/${club.shortName}`}>
                        {club.shortName}
                    </Link>{i < params.row.clubs.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'jobs', headerName: 'Jobs', minWidth: 500,
            valueGetter: (params: Job[]) => {
                return params.flatMap((job) => job.name).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return params.row.jobs.map((job: Job, i: number) => {
                    return <> {job.name} at {
                        typeof job.location === "string"
                            ? job.location
                            : <Link to={`/location/${job.location.shortName}`}>{job.location.name}</Link>
                    }{i < params.row.jobs.length - 1 ? ", " : ""}
                    </>
                })
            }
        },
    ]
    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid size={12}>
                    <Typography variant="h4" sx={{flexGrow: 1}}>
                        {"Strixhaven Star"}
                    </Typography>
                </Grid>
                <Grid container size={12}>
                    <Grid size={12}>
                        <Typography variant="h5" sx={{flexGrow: 1}}>
                            {"Student Search"}
                        </Typography>
                    </Grid>
                    <Accordion
                        defaultExpanded={!isMobile}
                        sx={{ width: "100%" }}
                    >
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <Typography variant="body1">
                                Filters
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container size={12} spacing={3}>
                                <Grid size={{ xs: 6, lg: 2 }}>
                                    <TextField
                                        fullWidth
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                            setName(event.target.value);
                                        }}
                                        label="Name"
                                    />
                                </Grid>


                                <Grid size={{ xs: 6, lg: 2 }}>
                                    <Autocomplete
                                        fullWidth
                                        multiple
                                        options={["Lorehold", "Prismari", "Quandrix", "Silverquill", "Witherbloom"] as School[]}
                                        onChange={(_e, school: School[]) => { setSchool(school) }}
                                        renderInput={(params) => <TextField {...params} label="College" />}
                                    />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 2 }}>
                                    <Autocomplete
                                        fullWidth
                                        multiple
                                        options={["1st", "2nd", "3rd", "4th"]}
                                        // @ts-expect-error string -> literal
                                        onChange={(_e, year: string[]) => { setYear(year) }}
                                        renderInput={(params) => <TextField {...params} label="Year" />}
                                    />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 2 }}>
                                    <Autocomplete
                                        fullWidth
                                        multiple
                                        options={CLUBS}
                                        getOptionLabel={(option) => option.shortName}
                                        onChange={(_e, club: Club[]) => { setClub(club) }}
                                        renderInput={(params) => <TextField {...params} label="Club" />}
                                    />
                                </Grid>
                                <Grid size={{ xs: 6, lg: 2 }}>
                                    <Autocomplete
                                        fullWidth
                                        multiple
                                        options={filteredJobs}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(_e, jobs: Job[]) => { handleSetJob(jobs) }}
                                        renderInput={(params) => <TextField {...params} label="Job" />}
                                    />
                                </Grid>
                            </Grid>
                        </AccordionDetails>
                    </Accordion>


                </Grid>
                <Grid size={12}>
                    <DataGrid
                        density={isMobile ? "compact" : "standard"}
                        disableColumnFilter
                        disableRowSelectionOnClick
                        apiRef={apiRef}
                        rows={filteredStudents}
                        columns={columns}
                        getRowId={(row: Student) => { return row.shortName }}
                        initialState={{
                            pagination: { paginationModel }, sorting: {
                                sortModel: [{ field: 'year', sort: 'desc' }],
                            }
                        }}
                        hideFooterPagination={isMobile}
                        pageSizeOptions={isMobile ? [100] : [10]}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
