import * as React from "react";
// material
import { Container} from "@mui/material";
// components
import Page from "../../components/AdminThemeComponents/Page";
import EventsList from "../../components/EventsList";
// ----------------------------------------------------------------------

export default function UpcomingEvents() {
  return (
    <Page title="Upcoming events">
      <Container maxWidth="xl">
        <EventsList />
      </Container>
    </Page>
  );
}
