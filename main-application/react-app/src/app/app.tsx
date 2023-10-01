// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.less';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <union-component-greeting title="react-app" />
      <test-union-angular title="react-app" />
    </div>
  );
}

export default App;
