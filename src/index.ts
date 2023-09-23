import { NotFound } from './pages/NotFound';
import { routes } from './routes/routes';
import './style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = routes[window.location.pathname] || NotFound();
    root.innerHTML = `
    <main>
        ${component}
    </main>
`;
  }
});
