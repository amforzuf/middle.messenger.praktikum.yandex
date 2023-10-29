/* eslint-disable no-console */
// import { Profile } from './pages/Profile';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import router from './core/Router';
import AuthController from './controllers/AuthController';
import './style.scss';

enum Routes {
  Index = '/',
  Register = '/signup',
  Profile = '/profile',
}

window.addEventListener('DOMContentLoaded', async () => {
  router.use(Routes.Index, SignIn).use(Routes.Register, SignUp);

  // eslint-disable-next-line prefer-const
  let isProtectedRoute = true;

  // eslint-disable-next-line default-case
  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    router.start();

    if (!isProtectedRoute) {
      router.go(Routes.Profile);
    }
  } catch (e) {
    console.log(e, 'Here');
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.Index);
    }
  }
});
