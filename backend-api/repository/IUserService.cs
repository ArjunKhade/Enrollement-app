using backend_api.Model;

namespace backend_api.repository
{
    public interface IUserService
    {
           
        public Task<List<User>> getAllUsers();
        public Task<IEnumerable<User>> getUserById(int id);
        public Task<IEnumerable<User>> updateUser(User user, int id);
        public Task<IEnumerable<User>> addUser(User user );
        public Task<IEnumerable<User>> deleteUser(int id);


    }
}
