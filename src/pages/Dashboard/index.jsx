import * as React from "react";
// material
import { Box, Grid, Container, Typography } from "@mui/material";
// components
import Page from "../../components/AdminThemeComponents/Page";
import DashboardVirtualSummit from "../../components/DashboardVirtualSummit";
import Events from "./Events";
import FeedPost from '../../components/FeedPost';
import DashboardRightImage from "./../../assets/images/DashboardRightImage.png";
import DashboardRightJoinNow from "./../../assets/images/DashboardRightJoinNow.png";
// ----------------------------------------------------------------------
const feedPostData = {
  title: "Dami Soyombo",
  subheading: "4 days ago",
  image: '',
  content: 'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
  totalLikes: '34',
  totalShares: '30'
};

export default function Dashboard() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h1">Network After Work</Typography>
          <Typography variant="body1">
            Meet Professional virtually across industries and around the
            country.
          </Typography>
        </Box>
        <Grid container spacing={3} justifyContent={"space-between"}>
          <Grid item xs={12} md={6} lg={8}>
            <DashboardVirtualSummit />
            <Events showPrevArrow={false} />
            <FeedPost post={feedPostData} />
            <FeedPost post={feedPostData} />
            <FeedPost post={feedPostData} />
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            lg={4}
          >
            <img
              src={DashboardRightJoinNow}
              alt="right join now image"
              style={{ marginLeft: "auto", marginBottom: 30 }}
            />
            <img
              src={DashboardRightImage}
              alt="right image"
              style={{ marginLeft: "auto", marginTop: 30 }}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
