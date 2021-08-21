import { Route, Switch } from 'react-router-dom';

import MeetupsPage from './pages/Meetups';
import NewMeetupsPage from  './pages/NewMeetUps';
import FavoriteMeetUpsPage from './pages/FavoriteMeetUps';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return <div>
  <MainNavigation/>
    <Switch>
      <Route path='/' exact>
        <MeetupsPage/>
      </Route>
      <Route path='/new-meetup'>
        <NewMeetupsPage/>
      </Route>
      <Route path='/favorites'>
        <FavoriteMeetUpsPage/>
      </Route>
    </Switch>
  </div>;
}

export default App;
