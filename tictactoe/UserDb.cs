using tictactoe.Models;

namespace tictactoe
{
    public class UserDb
    {
        private readonly DatabaseContext dbConext;

        public UserDb(DatabaseContext dbConext)
        {
            this.dbConext = dbConext;
        }

        public UserDb()
        {

        }

        public void Add(User user)
        {
            dbConext.Users.Add(user);
        }
    }
}
