import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoginService {
  DUMMY_USERS = [
    {
      id: '0',
      userType: 'admin',
      username: 'admin',
      password: 'admin',
      avatar: 'admin',
    },
    {
      id: '1',
      userType: 'user',
      username: 'u1',
      password: 'u1',
      avatar: 'user-1.jpg',
    },
    {
      id: '2',
      userType: 'user',
      username: 'u2',
      password: 'u2',
      avatar: 'user-2.jpg',
    },
    {
      id: '3',
      userType: 'user',
      username: 'u3',
      password: 'u3',
      avatar: 'user-3.jpg',
    },
  ];

  authenticateUserLogin(un: string, pw: string) {
    const user = this.DUMMY_USERS.find(
      (user) => user.username === un && user.password === pw
    );

    if (user === undefined) {
      //user not in system
      console.log('Login Unsuccessful');
    } else {
      //user found in system
      console.log(
        'Login Successful:\n-username: ' +
          user.username +
          '\n-password: ' +
          user.password +
          '\n-userType: ' +
          user.userType
      );
    }
    return user?.userType;
  }
}
