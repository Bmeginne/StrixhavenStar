import { Alert, Container, List, ListItemText, Paper, Typography, Grid, ListItem, Card, CardMedia, CardContent, Box, Drawer, Toolbar, ListItemButton, useMediaQuery, IconButton } from "@mui/material";
import { getEmployeesByJob, getMembersByClub, getStudentByShortName } from "../assets/Students";
import { Link, useParams } from "react-router-dom";
import { BIOS } from "../assets/Biographies";
import { useEffect, useState } from "react";
import { getArticlesByTag } from "../assets/Articles";
import { theme } from "../Theme";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { getFacultyByShortName } from "../assets/Faculty";
// import { ScheduleGrid } from "./ScheduleGrid";

export function StudentDetails() {

    const { name = "" } = useParams()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const Student = getStudentByShortName(name)
    const [logo, setLogo] = useState<string>()
    const [open, setOpen] = useState(false)

    const articles = getArticlesByTag(Student?.shortName ?? "")

    useEffect(() => {
        const fetchImage = async () => {
            const response = await import(`../assets/images/Logo${Student?.school}.png`)
            setLogo(response.default)
        }
        fetchImage()
    }, [Student])
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {Student ?
                    <>
                        <Grid container size={12} sx={{ alignItems: "flex-start" }}>
                            <Grid size={{ xs: "grow", sm: "auto" }}>
                                <Typography variant="h4">
                                    {Student?.name} ({Student.pronouns})
                                </Typography>
                            </Grid>
                            {
                                logo ?
                                    <Grid size={{ xs: 1.5, sm: "grow" }}>
                                        <Box
                                            sx={{ width: 50, height: 50, marginTop: 0 }}
                                            component="img"
                                            src={logo}
                                            alt={Student.school}
                                        />
                                    </Grid>
                                    : null
                            }
                            {isMobile && articles.length > 0 &&
                                <Grid >
                                    <IconButton size={"large"} onClick={() => { setOpen(true) }} sx={{ padding: "2px" }}>
                                        <NewspaperIcon sx={{ fontSize: "3rem" }} />
                                    </IconButton>
                                </Grid>
                            }
                        </Grid>
                        {
                            Student.image ? <Grid>
                                <Card>
                                    <CardMedia
                                        height={isMobile ? 200 : 300}
                                        component="img"
                                        image={Student.image}
                                        alt={Student.name}
                                    />
                                </Card>
                            </Grid>
                                : null
                        }
                        {/* <ScheduleGrid/> */}
                        { Student.appearance && 
                            <Grid size={{xs: 4.7, lg:3.3}}>
                                <List component={Paper}>
                                    <ListItem>
                                        <ListItemText primary={"Height"} secondary={Student.appearance?.height} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"Eyes"} secondary={Student.appearance?.eyes} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={"Hair"} secondary={Student.appearance?.hair} />
                                    </ListItem>
                                    {Student.appearance?.other &&
                                        <ListItem>
                                            <ListItemText primary={"Other"} secondary={Student.appearance?.other?.map((detail, i) =>
                                                <>{detail}{i < Student.appearance!.other!.length - 1 ? <>,<br /></> : <></>}</>
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
                                            <ListItemText primary={"Academics"} secondary={<>{Student.year} Year <Link to={`/campus/${Student.school}`}>
                                                {Student.school}
                                            </Link></>} />
                                        </ListItem>
                                        {Student.advisors &&
                                            <ListItem>
                                                <ListItemText primary={"Advisors"} secondary={Student.advisors.map((advisor, i) => {
                                                    const adv = getFacultyByShortName(advisor)

                                                    return <>{adv?.dichotomy}: <Link to={`/faculty/${advisor}`}>
                                                        {advisor}
                                                    </Link>{i < Student.advisors!.length - 1 ? <br /> : <></>}</>
                                                })} />
                                            </ListItem>}
                                        <ListItem>
                                            <ListItemText primary={"Employment"} secondary={Student.jobs.map((job, i) => {
                                                return <> {job.name} at {
                                                    typeof job.location === "string"
                                                        ? job.location
                                                        : <Link to={`/location/${job.location.shortName}`}>{job.location.name}</Link>
                                                }{i < Student.jobs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary={"Extracurriculars"} secondary={Student.clubs.map((club, i) => {
                                                return <><Link to={`/club/${club.shortName}`}>
                                                    {club.shortName}
                                                </Link>{i < Student.clubs.length - 1 ? ", " : ""}
                                                </>
                                            })
                                            } />
                                        </ListItem>
                                    </List>
                                </Grid>
                                <Grid size={{ xs: 6, lg: 3.3 }}>
                                    <List component={Paper}>
                                        {Student.freshRoomies ? <ListItem><ListItemText primary="1st Year Roommates" secondary={Student.freshRoomies.map((roomie, i) => {
                                            return <><Link to={`/student/${roomie}`}>
                                                {roomie}
                                            </Link>{i < Student.freshRoomies!.length - 1 ? ", " : ""}</>
                                        })} /></ListItem> : null}

                                        <ListItem>
                                            <ListItemText primary="Current Roommates" secondary={Student.roommates.map((roomie, i) => {
                                                return <><Link to={`/student/${roomie}`}>
                                                    {roomie}
                                                </Link>{i < Student.roommates.length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>

                                        <ListItem>
                                            <ListItemText primary="Frequents" secondary={Student.frequents.map((loc, i) => {
                                                return <><Link to={`/location/${loc.shortName}`}>
                                                    {loc.shortName}
                                                </Link>{i < Student.frequents.length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>

                                    </List>
                                </Grid>
                                <Grid size={{ xs: 12, lg: 5.4 }}>
                                    {Student.connections &&
                                        <Card>
                                            <ListItem>
                                                <ListItemText primary="Notable Connections" secondary={Student.connections.map((connection) => {
                                                    if (typeof connection === "string") {
                                                        return <>{connection}<br /></>
                                                    } else if (typeof connection.name === "string") {
                                                        return <><Link to={getStudentByShortName(connection.name) ?
                                                            `/student/${connection.name}` : `/faculty/${connection.name}`}>
                                                            {connection.name}
                                                        </Link> — {connection.relation}<br /></>
                                                    } else {
                                                        return <>{connection.name.map((name, i) =>
                                                            <>
                                                            <Link to={getStudentByShortName(name) ?
                                                                `/student/${name}` : `/faculty/${name}`}>
                                                                {name}
                                                            </Link>{i < connection.name.length - 1 ? ", " : ""}
                                                                </>)}
                                                         — {connection.relation}<br /></>
                                                    }
                                                })} />
                                            </ListItem>
                                        </Card>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <CardContent>
                                    <Typography sx={{ whiteSpace: "pre-line" }}>
                                        {BIOS.get(Student.shortName)}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid size={12}>
                            <Card>
                                <List component={Paper}>
                                    {Student.clubs.map((club) => {
                                        return <ListItem>
                                            <ListItemText primary={club.name} secondary={getMembersByClub(club, [Student]).map((member, i) => {
                                                return <><Link to={`/student/${member.shortName}`}>
                                                    {member.shortName}
                                                </Link>{i < getMembersByClub(club, [Student]).length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>
                                    })}
                                    {Student.jobs.map((job) => {
                                        return <ListItem>
                                            <ListItemText primary={job.name} secondary={getEmployeesByJob(job, [Student]).map((employee, i) => {
                                                if (employee.shortName !== Student.shortName)
                                                    return <><Link to={`/student/${employee.shortName}`}>
                                                        {employee.shortName}
                                                    </Link>{i < getEmployeesByJob(job, [Student]).length - 1 ? ", " : ""}</>
                                            })} />
                                        </ListItem>
                                    })}

                                </List>
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
                        {name} does not attend Strixhaven
                    </Alert>
                }</Grid>
        </Container>
    )
}
