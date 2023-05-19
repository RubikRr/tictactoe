using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using tictactoe.Models;

namespace tictactoe.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Main() { return View(); }
        [HttpPost]
        public string Main(string name,int age) 
        {
            var user=new User { Name = name,Age = age};

            //добавление игрока в базу
            return user.ToString();
        }

        public IActionResult Gamers() 
        {
            return View(); 
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}