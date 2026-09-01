import { Alert, Container, List, ListItemText, Paper, Typography, Grid, ListItem, Card, CardContent, Box, CardMedia, Drawer, ListItemButton, Toolbar, useMediaQuery } from "@mui/material";
import { getMembersByClub, getStudentsByAdvisor } from "../assets/Students";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { useEffect, useState } from "react";
import { getFacultyByShortName } from "../assets/Faculty";
import { getClubsByFaculty } from "../assets/Clubs";
import { theme } from "../Theme";
import { getArticlesByTag } from "../assets/Articles";

export function FacultyDetails() {

    const { name = "" } = useParams()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Faculty = getFacultyByShortName(name)
    const Clubs = getClubsByFaculty(Faculty!)
    const Students = getStudentsByAdvisor(Faculty!.shortName)
    const [logo, setLogo] = useState<string>()
    const [open, setOpen] = useState(false)


    const articles = getArticlesByTag(Faculty?.shortName ?? "")

    useEffect(() => {
        const fetchImage = async () => {
            const response = await import(`../assets/images/Logo${Faculty?.school}.png`)
            setLogo(response.default)
        }
        fetchImage()
    }, [Faculty])
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {Faculty ?
                    <>
                        <Grid container size={12}>
                            <Grid size={"grow"}>
                                <Grid container sx={{ alignItems: "center" }}>
                                    <Grid size={{ xs: 10, sm: "auto" }}>
                                        <Typography variant="h4" sx={{ flexGrow: 0, flexShrink: 1 }}>
                                            {Faculty?.name} ({Faculty.pronouns})
                                        </Typography>
                                    </Grid>
                                    {
                                        logo ?
                                            <Grid size={{ xs: 2 }} container sx={{ alignContent: "baseline" }}>
                                                <Box
                                                    sx={{
                                                        width: 50,
                                                        height: 50,
                                                        marginTop: 0,
                                                        alignItems: "flex-start"
                                                    }}
                                                    component="img"
                                                    src={logo}
                                                    alt={Faculty.name}
                                                />
                                            </Grid>
                                            : null
                                    }
                                </Grid>
                                <Grid>
                                    <Typography variant="h5">
                                        <Link to={`/campus/${Faculty.school}`}>{Faculty.school} </Link>{Faculty?.title} of {Faculty.dichotomy}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        {
                            Faculty.image ? <Grid>
                                <Card>
                                    <CardMedia
                                        height={300}
                                        component="img"
                                        image={Faculty.image}
                                        alt={Faculty.name}
                                    />
                                </Card>
                            </Grid>
                                : null
                        }

                        { Faculty.appearance && 
                            <Grid size={{xs: 4.7, lg:3.3}}>
                                <List component={Paper}>
                                    <ListItem>
                                        <ListItemText primary={"Height"} secondary={Faculty.appearance?.height} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"Eyes"} secondary={Faculty.appearance?.eyes} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"Hair"} secondary={Faculty.appearance?.hair} />
                                    </ListItem>
                                    {Faculty.appearance?.other &&
                                        <ListItem>
                                            <ListItemText primary={"Other"} secondary={Faculty.appearance?.other?.map((detail, i) =>
                                                <>{detail}{i < Faculty.appearance!.other!.length - 1 ? <>,<br /></> : <></>}</>
                                            )} />
                                        </ListItem>
                                    }
                                </List>
                            </Grid>
                        }

                        <Grid size={12}>
                            <Grid container size={12} spacing={3}>
                                <Grid size={{ xs: 6, lg: 3.3 }}>
                                    <List component={Paper}>
                                        <ListItem>
                                            <ListItemText primary={"Classes"} secondary={Faculty.classes.map((cls, i) => {
                                                return <><Link to={`/class/${cls.shortName}`}>
                                                    {cls.shortName}
                                                </Link>{i < Faculty.classes.length - 1 ? ", " : ""}
                                                </>
                                            })} />
                                        </ListItem>
                                        {
                                            Students.length > 0 &&
                                            <ListItem>
                                                <ListItemText primary={"Advisees"} secondary={Students.map((student, i) => {
                                                    return <><Link to={`/student/${student.shortName}`}>
                                                        {student.shortName}
                                                    </Link>{i < Students.length - 1 ? ", " : ""}
                                                    </>
                                                })
                                                } />
                                            </ListItem>
                                        }
                                        <ListItem>
                                            <ListItemText primary={"Clubs Sponsored"} secondary={Clubs.map((club, i) => {
                                                return <><Link to={`/club/${club.shortName}`}>
                                                    {club.shortName}
                                                </Link>{i < Clubs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, lg: 6 }}>
                                    <List component={Paper}>

                                        {Faculty.connections &&
                                            <ListItem>
                                                <ListItemText primary="Notable Connections" secondary={Faculty.connections.map((connection) => {
                                                    if (typeof connection.name === "string") {
                                                        return <><Link to={getFacultyByShortName(connection.name) ?
                                                            `/faculty/${connection.name}` : `/student/${connection.name}`}>
                                                            {connection.name}
                                                        </Link> — {connection.relation}<br /></>
                                                    } else {
                                                        return <>{connection.name.map((name, i) =>
                                                            <>
                                                                <Link to={getFacultyByShortName(name) ?
                                                                    `/faculty/${connection.name}` : `/student/${connection.name}`}>
                                                                    {name}
                                                                </Link>{i < connection.name.length - 1 ? ", " : ""}
                                                            </>)}
                                                            — {connection.relation}<br /></>
                                                    }
                                                })} />
                                            </ListItem>
                                        }
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ whiteSpace: "pre-line" }}>
                                        {BIOS.get(Faculty.shortName)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                {Clubs.map((club) => {
                                    return <ListItem>
                                        <ListItemText primary={club.name} secondary={getMembersByClub(club).map((member, i) => {
                                            return <><Link to={`/student/${member.shortName}`}>
                                                {member.shortName}
                                            </Link>{i < getMembersByClub(club).length - 1 ? ", " : ""}</>
                                        })} />
                                    </ListItem>
                                })}
                            </Card>
                        </Grid>
                        <Drawer
                            variant={isMobile || articles.length < 1 ? "temporary" : "permanent"}
                            anchor={isMobile ? "left" : "right"}
                            open={open}
                            onClose={() => setOpen(false)}
                            sx={{
                                flexShrink: 0,
                                [`& .MuiDrawer-paper`]: { width: isMobile ? '45%' : '10%', boxSizing: 'border-box' },
                            }}
                        >
                            <Toolbar />
                            <Box sx={{ overflow: 'auto' }}>
                                <List>
                                    {articles.map(article => {
                                        return <ListItemButton component={Link} to={`/articles?article=${article.title}`}>{article.title}</ListItemButton >
                                    })}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                    : <Alert severity="warning">
                        {name} does not work at Strixhaven
                    </Alert>
                }</Grid>
        </Container>
    )
}
