import SignInApi from '@/api/user/SignInApi';

describe('회원가입 Api 호출에 대한 검증입니다', () => {
	const SUCCESS = 200;

	it('returns succeed status code when sending valid request', async () => {
		const testPayload = {
			username: 'testUsername',
			nickname: 'testNickname',
			password: 'testPassword',
			email: 'test@example.com',
			phone: '01012345678',
		}
		const result = await new SignInApi().createUser(testPayload);

		expect(result.status).toBe(SUCCESS)
	})
})