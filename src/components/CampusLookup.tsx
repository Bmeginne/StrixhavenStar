import { Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { DataGrid, GridColDef, GridPreProcessEditCellProps, useGridApiRef } from '@mui/x-data-grid';
import { getStudentsBySchool, } from "../assets/Students";
import { Location,  Student } from "../assets/Models";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getLocationsByCampus } from "../assets/Locations";
import { theme } from "../Theme";

export function CampusLookup() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    useEffect(() => {
        apiRef.current?.autosizeColumns({ includeHeaders: true, includeOutliers: true, expand: true })
    })

    const paginationModel = { page: 0, pageSize: isMobile ? 100 : 10 };
    const apiRef = useGridApiRef()

    const rows = [
        {
        "campus": "Central",
        "locations": getLocationsByCampus("Central"),
        "students": getStudentsBySchool("Central")
        },
        {
        "campus": "Lorehold",
        "locations": getLocationsByCampus("Lorehold"),
        "students": getStudentsBySchool("Lorehold")
        },
        {
        "campus": "Prismari",
        "locations": getLocationsByCampus("Prismari"),
        "students": getStudentsBySchool("Prismari")
        },
        {
        "campus": "Quandrix",
        "locations": getLocationsByCampus("Quandrix"),
        "students": getStudentsBySchool("Quandrix")
        },
        {
        "campus": "Silverquill",
        "locations": getLocationsByCampus("Silverquill"),
        "students": getStudentsBySchool("Silverquill")
        },
        {
        "campus": "Witherbloom",
        "locations": getLocationsByCampus("Witherbloom"),
        "students": getStudentsBySchool("Witherbloom")
        },
    ]

    const columns: GridColDef[] = [
        {
            field: 'campus', headerName: 'Campus', minWidth: isMobile ? 100 : 150,
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <Link to={`/campus/${params.row.campus}`}>
                    {params.row.campus}</Link>
            }
        },
        {
            field: 'locations', headerName: 'Locations', minWidth: 500,
            valueGetter: (params: Location[]) => {
                return params.flatMap((loc: Location) => loc.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.locations.map((loc: Location, i: number) => {
                    return <><Link to={`/location/${loc.shortName}`}>
                        {loc.shortName}
                    </Link>{i < params.row.locations.length - 1 ? ", " : ""}
                    </>
                })}
                </>
            }
        },
        {
            field: 'students', headerName: 'Students', minWidth: 500,
            valueGetter: (params: Student[]) => {
                return params.flatMap((student: Student) => student.shortName).join(", ")
            },
            //@ts-expect-error ReactNode and JSX.Element confusion 
            renderCell: (params: GridPreProcessEditCellProps) => {
                return <>{params.row.students.map((student: Student, i: number) => {
                    return <><Link to={`/student/${student.shortName}`}>
                        {student.shortName}
                    </Link>{i < params.row.students.length - 1 ? ", " : ""}
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
                            {"Campuses"}
                        </Typography>
                    </Grid>
                <Grid size={12}>
                    <DataGrid
                        density={isMobile ? "compact" : "standard"}
                        disableRowSelectionOnClick
                        apiRef={apiRef}
                        rows={rows}
                        columns={columns}
                        getRowId={(row) => { return row.campus }}
                        initialState={{
                            pagination: { paginationModel }, sorting: {
                                sortModel: [{ field: 'campus', sort: 'asc' }],
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
