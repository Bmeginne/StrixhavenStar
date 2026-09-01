import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridPreProcessEditCellProps, useGridApiRef } from '@mui/x-data-grid';
import { Class, Club } from "../assets/Models";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getClubsByFaculty } from "../assets/Clubs";
import { theme } from "../Theme";
import { FACULTY } from "../assets/Faculty";

export function FacultyLookup() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        apiRef.current?.autosizeColumns({ includeHeaders: true, includeOutliers: true, expand: true })
    })

    const paginationModel = { page: 0, pageSize: isMobile ? 100 : 12 };
    const apiRef = useGridApiRef()

    const rows = FACULTY.map((prof) => {
        return {
            name: { name: prof.name, shortName: prof.shortName },
            dichotomy: prof.title.split(" ").pop(),
            school: prof.school,
            clubs: getClubsByFaculty(prof),
            classes: prof.classes
        }
    })

    const columns: GridColDef[] = [
        {
            field: 'name', headerName: 'Name', minWidth: 250,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/faculty/${params.row.name.shortName}`}>
                    {params.row.name.name}</Link>
            },
            sortComparator: (a: { name: string }, b: { name: string }) => a.name.localeCompare(b.name)
        },
        {
            field: 'school', headerName: 'College', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/campus/${params.row.school}`}>
                    {params.row.school}</Link>

            },
        },
        { field: 'dichotomy', headerName: 'Dichotomy', minWidth: isMobile ? 50 : 150 },
        {
            field: 'classes', headerName: 'Classes', minWidth: isMobile ? 350 : 500,
            valueGetter: (params: Class[]) => {
                return params.flatMap((cls) => cls.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.classes.map((cls: Class, i: number) => {
                    return <><Link to={`/class/${cls.shortName}`}>
                        {cls.shortName}
                    </Link>{i < params.row.clubs.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'clubs', headerName: 'Clubs', minWidth: 350,
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
                                sortModel: [{ field: 'school', sort: 'asc' }],
                            }
                        }}
                        hideFooterPagination={isMobile}
                        pageSizeOptions={isMobile ? [100] : [12]}
                    />
                </Grid>
            </Grid>
        </Container>
    )
}
