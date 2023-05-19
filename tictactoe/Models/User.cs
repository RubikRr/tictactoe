namespace tictactoe.Models
{
    public class User
    {
        public string Name { get; set; }
        public int Age {get; set;}

        public string ToString()
        {
            return $"Имя:{Name} Возраст:{Age}";
        }
    }
}
