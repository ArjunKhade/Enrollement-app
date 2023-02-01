using backend_api.Model;

namespace backend_api.repository
{
    public class UserServiceImpl : IUserService
    {
        public Task<IEnumerable<User>> addUser(User user)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> deleteUser(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<User>> getAllUsers()
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> getUserById(int id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<User>> updateUser(User user, int id)
        {
            throw new NotImplementedException();
        }
    }
}
