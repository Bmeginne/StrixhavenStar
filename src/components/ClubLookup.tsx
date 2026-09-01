import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridPreProcessEditCellProps, useGridApiRef } from '@mui/x-data-grid';
import { getMembersByClub, } from "../assets/Students";
import { Location, Student } from "../assets/Models";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CLUBS } from "../assets/Clubs";
import { theme } from "../Theme";

export function ClubLookup() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    
    useEffect(() => {
        apiRef.current?.autosizeColumns({ includeHeaders: true, includeOutliers: true, expand: true })
    })

    const paginationModel = { page: 0, pageSize: isMobile ? 100 : 10 };
    const apiRef = useGridApiRef()

    const rows = CLUBS.map((club) => {
        return {
            name: {name: club.name, shortName: club.shortName},
            location: club.location,
            members: getMembersByClub(club),
            faculty: club.faculty
        }
    })

    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', minWidth: 300,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/club/${params.row.name.shortName}`}>
                    {params.row.name.name}</Link>
            },
            sortComparator: (a: {name: string}, b: {name: string}) => a.name.localeCompare(b.name)
        },
        {
            field: 'location', headerName: 'Location', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{!params.row.location 
                    ? params.row.location
                    : <Link to={`/location/${params.row.location.shortName}`}>
                        {params.row.location.shortName}</Link>
                }</>
            },
            sortComparator: (a: Location, b: Location) => a.name.localeCompare(b.name)
        },
        {
            field: 'faculty', headerName: 'Faculty', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.faculty?.map((faculty: string, i: number) => {
                    return <><Link to={`/faculty/${faculty}`}>
                        {faculty}
                    </Link>{i < params.row.faculty.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'members', headerName: 'Members', minWidth: 500,
            valueGetter: (params: Student[]) => {
                return params.flatMap((student: Student) => student.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.members.map((student: Student, i: number) => {
                    return <><Link to={`/student/${student.shortName}`}>
                        {student.shortName}
                    </Link>{i < params.row.members.length - 1 ? ", " : ""}
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
                        {"Clubs"}
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
                                sortModel: [{ field: 'name', sort: 'asc' }],
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
