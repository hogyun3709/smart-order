import MyPageApi from '@/api/user/MyPageApi';

describe('내 정보 조회하기 Api 호출에 대한 검증입니다', () => {
  const SUCCESS = 200;

  it('회원 정보를 성공적으로 수신하였다면 status code 200을 반환하는지 확인합니다', async () => {
    const result = await new MyPageApi().getUserInfo();

    expect(result.status).toBe(SUCCESS);
  });
});
