import { Alert, Box, Card, CardContent, CardMedia, Container, Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { getLocationsByCampus } from "../assets/Locations";
import { getStudentsBySchool } from "../assets/Students";
import { findCampusByName } from "../assets/Campuses";
import { useEffect, useState } from "react";

import Central from "../assets/images/places/CampusCentral.png"
import Lorehold from "../assets/images/places/CampusLorehold.png"
import Prismari from "../assets/images/places/CampusPrismari.png"
import Quandrix from "../assets/images/places/CampusQuandrix.png"
import Silverquill from "../assets/images/places/CampusSilverquill.png"
import Witherbloom from "../assets/images/places/CampusWitherbloom.png"
import { getFacultyBySchool } from "../assets/Faculty";


export function CampusDetails() {

    const { name = "" } = useParams()
    const Campus = findCampusByName(name)
    const Locations = getLocationsByCampus(Campus!.name)

    const [logo, setLogo] = useState<string>()

    const image = (Campus?.name === "Lorehold" ? Lorehold : (
        Campus?.name === "Quandrix" ? Quandrix : (
            Campus?.name === "Central" ? Central : (
                Campus?.name === "Prismari" ? Prismari : (
                    Campus?.name === "Silverquill" ? Silverquill :
                        Campus?.name === "Witherbloom" ? Witherbloom :
                            undefined
                )
            )
        )
    ))

    useEffect(() => {
        const fetchImage = async () => {
            if (Campus?.name !== "Central") {
                const response = await import(`../assets/images/Logo${Campus?.name}.png`)
                setLogo(response.default)
            }
        }
        fetchImage()

    }, [Campus])

    return (

        <Container maxWidth="xl">
            <Grid container spacing={3}>
                {Campus ? <>
                    <Grid size={{ xs: 12, lg: 8 }}>
                        <Grid container size={12} sx={{alignItems: "center"}}>
                            <Grid size={{ xs: 10, md: "auto" }}>
                                <Typography variant="h4" >
                                    {Campus.name}{Campus.subtitle ? `: College of ${Campus.subtitle}` : ""}
                                </Typography>
                            </Grid>
                            {
                                logo && Campus.name !== "Central" ?

                                    <Grid size={{ xs: 2 }}>
                                         <Box
                                            sx={{width: 50, height: 50, marginTop: 0}}
                                            component="img"
                                            src={logo}
                                            alt={Campus.name}
                                        />
                                    </Grid>

                                    : null
                            }
                        </Grid>
                        {
                            image ? <Grid>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={Campus.name}
                                    />
                                </Card>
                            </Grid>
                                : null
                        }
                    </Grid>
                    <Grid size={12}>
                        <Typography variant="body1">
                            {BIOS.get(Campus.name + "1")}
                        </Typography>
                    </Grid>
                    {Campus.name !== "Central" &&
                        <Grid size={{ xs: 12, md: 4 }}>
                            <List component={Paper}>
                                <ListItem>
                                    <ListItemText primary="Colors" secondary={Campus.colors} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Fields of Study" secondary={Campus.study?.join(", ")} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Dichotomy" secondary={Campus.dichotomy} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary={"Faculty"} secondary={getFacultyBySchool(Campus.name).map((prof, i) => {
                                        return <>
                                            <Link to={`/faculty/${prof.shortName}`}>
                                                {prof.shortName}
                                            </Link>, {prof.title} of {prof.dichotomy}{i < getFacultyBySchool(Campus.name).length - 1 ? "; " : ""}
                                        </>
                                    })} />
                                </ListItem>
                            </List>
                        </Grid>
                    }
                    <Grid size={{ xs: 12, md: 8 }}>
                        <List component={Paper}>
                            <ListItem>
                                <ListItemText primary={"Places on Campus"} secondary={Locations.map((loc, i) => {
                                    return <>
                                        <Link to={`/location/${loc.shortName}`}>
                                            {loc.shortName}
                                        </Link>{i < Locations.length - 1 ? ", " : ""}
                                    </>
                                })} />
                            </ListItem>
                            {Campus.name !== "Central" &&
                                <>
                                    <ListItem>
                                        <ListItemText primary={"4th Years"} secondary={getStudentsBySchool(Campus.name, "4th").map((student, i) => {
                                            return <>
                                                <Link to={`/student/${student.shortName}`}>
                                                    {student.shortName}
                                                </Link>{i < getStudentsBySchool(Campus.name, "4th").length - 1 ? ", " : ""}
                                            </>
                                        })} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"3rd Years"} secondary={getStudentsBySchool(Campus.name, "3rd").map((student, i) => {
                                            return <>
                                                <Link to={`/student/${student.shortName}`}>
                                                    {student.shortName}
                                                </Link>{i < getStudentsBySchool(Campus.name, "3rd").length - 1 ? ", " : ""}
                                            </>
                                        })} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"2nd Years"} secondary={getStudentsBySchool(Campus.name, "2nd").map((student, i) => {
                                            return <>
                                                <Link to={`/student/${student.shortName}`}>
                                                    {student.shortName}
                                                </Link>{i < getStudentsBySchool(Campus.name, "2nd").length - 1 ? ", " : ""}
                                            </>
                                        })} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"Prospectives"} secondary={getStudentsBySchool(Campus.name, "1st").map((student, i) => {
                                            return <>
                                                <Link to={`/student/${student.shortName}`}>
                                                    {student.shortName}
                                                </Link>{i < getStudentsBySchool(Campus.name, "1st").length - 1 ? ", " : ""}
                                            </>
                                        })} />
                                    </ListItem>
                                </>}
                        </List>
                    </Grid>
                    {Campus.name !== "Central" &&
                        <Grid size={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ whiteSpace: "pre-line" }}>
                                        {BIOS.get(Campus.name + "2")}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    }
                </>
                    :
                    <Alert severity="warning">
                        {name} is not a college at Strixhaven
                    </Alert>
                }
            </Grid>
        </Container>
    )
}
