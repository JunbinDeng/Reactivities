import { Link } from 'react-router-dom';
import { Profile } from '../../app/models/profile';
import { Image, Card, Icon } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import FollowButton from './FollowButton';

interface Props {
  profile: Profile;
}

export default observer(function ProfileCard({ profile }: Props) {
  function trancate(str: string | undefined) {
    if (str) {
      return str?.length > 40 ? str?.substring(0, 37) + '...' : str;
    }
  }
  return (
    <Card as={Link} to={`/profiles/${profile.username}`}>
      <Image src={profile.image || '/assets/user.png'} />
      <Card.Content>
        <Card.Header>{profile.displayName}</Card.Header>
        <Card.Description>{trancate(profile.bio)}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        {profile.followersCount} followers
      </Card.Content>
      <FollowButton profile={profile} />
    </Card>
  );
});
