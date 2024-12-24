import { observer } from 'mobx-react-lite';
import { SyntheticEvent, useEffect } from 'react';
import {
  Card,
  CardContent,
  Grid,
  Header,
  Tab,
  TabProps,
  Image,
} from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const panes = [
  {
    menuItem: 'Future Events',
    pane: { key: 'future' },
  },
  {
    menuItem: 'Past Events',
    pane: { key: 'past' },
  },
  {
    menuItem: 'Hosting',
    pane: { key: 'hosting' },
  },
];

export default observer(function ProfileActivities() {
  const { profileStore } = useStore();
  const { loadUserActivities, loadingUserActivities, profile, userActivities } =
    profileStore;

  useEffect(() => {
    loadUserActivities(profile!.username);
  }, [profile, loadUserActivities]);

  const handleTabChange = (_: SyntheticEvent, data: TabProps) => {
    loadUserActivities(
      profile!.username,
      panes[data.activeIndex as number].pane.key
    );
  };

  return (
    <Tab.Pane loading={loadingUserActivities}>
      <Grid>
        <Grid.Column width={16}>
          <Header floated='left' icon='calendar' content={'Activities'} />
        </Grid.Column>
        <Grid.Column width={16}>
          <Tab
            panes={panes}
            menu={{ secondary: true, pointing: true }}
            onTabChange={(e, data) => handleTabChange(e, data)}
          />
          <br />
          <Card.Group itemsPerRow={4}>
            {userActivities.map((activity) => (
              <Card
                as={Link}
                to={`/activities/${activity.id}`}
                key={activity.id}
              >
                <Image
                  src={`/assets/categoryImages/${activity.category}.jpg`}
                  style={{ minHeight: 100, objectFit: 'cover' }}
                />

                <CardContent>
                  <Card.Header textAlign='center'>{activity.title}</Card.Header>
                  <Card.Meta textAlign='center'>
                    <div>{format(new Date(activity.date), 'do LLL')}</div>
                    <div>{format(new Date(activity.date), 'h:mm a')}</div>
                  </Card.Meta>
                </CardContent>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  );
});
