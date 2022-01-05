import { GlobalStyle } from './GlobalStyle';

import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from './dataBase/user.json';
import data from './dataBase/data.json';
import friends from './dataBase/friend-list.json';
import transactions from './dataBase/transactions.json';

function App() {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
