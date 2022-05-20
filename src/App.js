import Container from './components/containers/container';
import Profile from './components/social-profile/profile';
import user from './data/user.json';
import Statistics from './components/statistics/statistics';
import data from './data/data.json';
import FriendList from './components/friendlist/friendList';
import friend from './data/friend.json';
import TransactionHistory from './components/transactions/transactions';
import transactions from './data/transactions.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friend} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
