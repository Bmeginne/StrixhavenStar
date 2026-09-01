import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridPreProcessEditCellProps, useGridApiRef } from '@mui/x-data-grid';
import { getEmployeesByJob, getRegularsByLocation, } from "../assets/Students";
import { Club,  Student } from "../assets/Models";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { LOCATIONS } from "../assets/Locations";
import { getJobsAtLocation } from "../assets/Jobs";
import { getClubsAtLocation } from "../assets/Clubs";
import { theme } from "../Theme";

export function LocationLookup() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        apiRef.current?.autosizeColumns({ includeHeaders: true, includeOutliers: true, expand: true })
    })

    const paginationModel = { page: 0, pageSize: isMobile ? 100 : 10 };
    const apiRef = useGridApiRef()

    const rows = LOCATIONS.map((loc) => {
        return {
            name: {name: loc.name, shortName: loc.shortName},
            campus: loc.campus,
            employees: getJobsAtLocation(loc).flatMap((job) => getEmployeesByJob(job)),
            clubs: getClubsAtLocation(loc),
            regulars: getRegularsByLocation(loc)
        }
    })

    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', minWidth: 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/location/${params.row.name.shortName}`}>
                    {params.row.name.name}</Link>
            },
            sortComparator: (a: {name: string}, b: {name: string}) => a.name.localeCompare(b.name)
        },
        {
            field: 'campus', headerName: 'Campus', minWidth: 100,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/campus/${params.row.campus}`}>
                    {params.row.campus}</Link>
            }
        },
        {
            field: 'employees', headerName: 'Employees', minWidth: isMobile ? 150 : 200,
            valueGetter: (params: Student[]) => {
                return params.flatMap((student: Student) => student.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.employees.map((student: Student, i: number) => {
                    return <><Link to={`/student/${student.shortName}`}>
                        {student.shortName}
                    </Link>{i < params.row.employees.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'regulars', headerName: 'Regulars', minWidth: isMobile ? 200 : 350,
            valueGetter: (params: Student[]) => {
                return params.flatMap((student: Student) => student.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.regulars.map((student: Student, i: number) => {
                    return <><Link to={`/student/${student.shortName}`}>
                        {student.shortName}
                    </Link>{i < params.row.regulars.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'clubs', headerName: 'Clubs',
            valueGetter: (params: Club[]) => {
                return params.flatMap((club: Club) => club.shortName).join(", ")
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
        
    ]
    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                <Grid size={12}>
                    <Typography variant="h4" sx={{flexGrow: 1}}>
                        {"Strixhaven Star"}
                    </Typography>
                </Grid>
                    <Grid size={12}>
                        <Typography variant="h5" sx={{flexGrow: 1}}>
                            {"Locations"}
                        </Typography>
                    </Grid>
                <Grid size={12}>
                    <DataGrid
                        density={isMobile ? "compact" : "standard"}
                        disableRowSelectionOnClick
                        apiRef={apiRef}
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => { return row.name.name }}
                        initialState={{
                            pagination: { paginationModel }, sorting: {
                                sortModel: [{ field: 'campus', sort: 'asc' }],
                            }
                        }}
                        hideFooterPagination={isMobile}
                        pageSizeOptions={isMobile ? [100] : [10]}
                        autosizeOptions={{
                            includeHeaders: true,
                            includeOutliers: true,
                            expand: true,
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
