import { User, UserAttribute } from '../model/Model';

export class AuthService {
  public async login(user: string, pass: string) {
    if (user === 'user' && pass === '1234') {
      return {
        username: user,
        email: user,
      };
    }
    return null;
  }
  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({
      Name: 'description',
      Value: 'Best user ever!',
    });
    result.push({
      Name: 'job',
      Value: 'Engineer',
    });
    result.push({
      Name: 'age',
      Value: '25',
    });
    result.push({
      Name: 'experience',
      Value: '3 years',
    });
    return result;
  }
}
