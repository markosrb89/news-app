import { createBrowserHistory } from 'history';

/**
 * The browser history is exported for programmatic route changes without the need
 * for the {@code withRouter} wrapper.
 * @see {@link https://reacttraining.com/react-router/web/api/withRouter}
 */
const history = createBrowserHistory();

export default history;